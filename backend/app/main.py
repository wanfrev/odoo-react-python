from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.crm import router as crm_router

app = FastAPI(title="API Backend CRM")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(crm_router)
