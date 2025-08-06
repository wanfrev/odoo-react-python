from app.connectors.odoo_connector import OdooConnector
from app.models.crm_models import Cliente

connector = OdooConnector()

def listar_clientes() -> list[Cliente]:
    datos = connector.obtener_clientes()
    clientes = [Cliente(**item) for item in datos]
    return clientes
