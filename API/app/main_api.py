"""
main module to start all the project
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# route
from .controller import routes


def get_application() -> FastAPI:
    tags_metadata = [
        {
            "name": "RoundRobin Service",
            "description": "to simulate round robin algorithm",
        }
    ]

    application = FastAPI(
        title="RoundRobin",
        version="1.0.0",
        description="Resful API",
        openapi_tags=tags_metadata,
    )

    application.include_router(routes, prefix="/roundRobin")

    application.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return application


app = get_application()
