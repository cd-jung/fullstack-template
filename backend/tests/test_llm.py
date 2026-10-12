import pytest

from core import llm


def test_down_mode_blocks_every_call(settings):
    settings.LLM_MODE = "down"
    for call in (lambda: llm.generate("x"), lambda: llm.embed(["x"]), lambda: llm.vector_query([0.1], 1)):
        with pytest.raises(llm.LLMUnavailableError):
            call()


def test_real_mode_without_workers_runtime_is_unavailable(settings):
    settings.LLM_MODE = "real"
    with pytest.raises((llm.LLMUnavailableError, ImportError)):
        llm.generate("x")


def test_error_codes_and_statuses():
    assert (llm.LLMUnavailableError.code, llm.LLMUnavailableError.status) == ("llm_unavailable", 503)
    assert (llm.LLMTimeoutError.code, llm.LLMTimeoutError.status) == ("llm_timeout", 504)
