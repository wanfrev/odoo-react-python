from fastapi import APIRouter, HTTPException
from typing import List
from app.services.crm_service import get_clients, get_leads, get_contacts, get_activities
from app.models.crm_models import Client, Lead, Activity

router = APIRouter(prefix="/crm", tags=["CRM"])

@router.get("/clients", response_model=List[Client])
async def clients():
    try:
        return get_clients()
    except Exception as e:
        raise HTTPException(status_code=502, detail=str(e))

@router.get("/leads", response_model=List[Lead])
async def leads():
    try:
        return get_leads()
    except Exception as e:
        raise HTTPException(status_code=502, detail=str(e))

@router.get("/contacts", response_model=List[Client])
async def contacts():
    try:
        return get_contacts()
    except Exception as e:
        raise HTTPException(status_code=502, detail=str(e))
    
@router.get("/activities", response_model=List[Activity])
async def activities():
    try:
        return get_activities()
    except Exception as e:
        raise HTTPException(status_code=502, detail=str(e))