import json

import pytest
from django.core.management import call_command

from core.i18n import normalize, pick, request_lang
from logs.catalog import LOG_CATALOG
from nlsearch.compiler import describe_filter
from rag import service
from rag.models import GuideChunk

pytestmark = pytest.mark.django_db
ERRORS_LAST_HOUR = LOG_CATALOG.examples[0]["expected_filter"]


def test_language_helpers(rf):
    assert normalize("ko-KR") == "ko" and normalize("de") == "en" and normalize(None) == "en"
    assert pick({"en": "a", "ko": "b"}, "ko") == "b" and pick({"en": "a"}, "fr") == "a" and pick("x", "ko") == "x"
    assert request_lang(rf.get("/", {"lang": "fr"})) == "fr"
    assert request_lang(rf.post("/", json.dumps({"lang": "es"}), content_type="application/json")) == "es"
    assert request_lang(rf.post("/", "{bad", content_type="application/json")) == "en"


@pytest.mark.parametrize(
    "lang, text",
    [
        ("en", "(level is ERROR AND in the last N minutes(minutes=60))"),
        ("es", "(nivel es ERROR Y en los últimos N minutos(minutes=60))"),
        ("fr", "(niveau est ERROR ET dans les N dernières minutes(minutes=60))"),
        ("ko", "(수준: ERROR 그리고 최근 N분 이내(minutes=60))"),
    ],
)
def test_interpreted_as_in_every_language(lang, text):
    assert describe_filter(LOG_CATALOG, ERRORS_LAST_HOUR, lang) == text


def test_translated_chip_questions_work_with_the_stub(client):
    for lang in ("en", "es", "fr", "ko"):
        chips = client.get("/api/logs/nl-search/examples", {"lang": lang}).json()["examples"]
        assert len(chips) == 3
        response = client.post(
            "/api/logs/nl-search/translate", {"question": chips[0], "lang": lang}, content_type="application/json"
        )
        assert response.status_code == 200 and response.json()["filter"] == ERRORS_LAST_HOUR


def test_guide_is_indexed_per_language_with_identical_pages():
    call_command("index_guide", verbosity=0)
    pages = {
        lang: set(GuideChunk.objects.filter(lang=lang).values_list("page", flat=True))
        for lang in ("en", "es", "fr", "ko")
    }
    assert pages["en"] and all(p == pages["en"] for p in pages.values())


def test_help_retrieves_and_refuses_in_the_ui_language():
    call_command("index_guide", verbosity=0)
    korean = service.answer("자연어로 로그를 검색하려면 어떻게 하나요?", lang="ko")
    assert korean["has_sufficient_context"] and korean["sources"][0]["url"].startswith("/guide/03-logs-and-monitoring")
    assert service.answer("오늘 서울 날씨 알려줘", lang="ko")["answer"] == service.NO_CONTEXT_ANSWERS["ko"]
    assert service.answer("What is the weather?", lang="fr")["answer"] == service.NO_CONTEXT_ANSWERS["fr"]


def test_language_rule_follows_script_then_ui_language():
    assert "Korean" in service.language_rule("가격?", "en")
    assert "French" in service.language_rule("How do I filter?", "fr")
    assert "same language" in service.language_rule("How do I filter?", "en")
