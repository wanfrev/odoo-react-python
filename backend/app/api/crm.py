from fastapi import APIRouter, HTTPException
from typing import List
from app.services.crm_service import listar_clientes
from app.models.crm_models import Cliente

router = APIRouter(prefix="/crm", tags=["CRM"])

@router.get("/clientes", response_model=List[Cliente])
async def get_clientes():
    try:
        return listar_clientes()
    except Exception as e:
        raise HTTPException(status_code=502, detail=str(e))
