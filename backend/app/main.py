from fastapi import FastAPI
from app.api import crm

app = FastAPI()

app.include_router(crm.router, prefix="/api", tags=["CRM"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
