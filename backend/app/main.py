from fastapi import FastAPI
from app.api.crm import router as crm_router

app = FastAPI(title="API Backend CRM")

app.include_router(crm_router)
