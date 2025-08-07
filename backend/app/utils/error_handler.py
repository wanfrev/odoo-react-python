from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi import status
import logging


def add_global_exception_handler(app):
    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):
        logging.error(f"Unhandled error: {exc}")
        return JSONResponse(
            status_code=status.HTTP_502_BAD_GATEWAY,
            content={"detail": "Internal server error. Please try again later."}
        )
