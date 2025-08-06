from fastapi import APIRouter
router = APIRouter()

@router.get("/clientes")
def obtener_clientes():
    return {"mensaje": "Aquí irán los datos del CRM desde Odoo"}
