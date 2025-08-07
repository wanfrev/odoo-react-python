from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.crm import router as crm_router
from app.utils.error_handler import add_global_exception_handler


app = FastAPI(title="API Backend CRM")
add_global_exception_handler(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(crm_router)
