from app.connectors.odoo_connector import OdooConnector
from app.models.crm_models import Client, Lead, Activity
from app.utils.odoo_normalizer import normalize_odoo_client, normalize_odoo_activity, normalize_odoo_lead

connector = OdooConnector()

def get_clients() -> list[Client]:
    data = connector.obtener_clientes()
    return [Client(**normalize_odoo_client(item)) for item in data]

def get_contacts() -> list[Client]:
    data = connector.obtener_contacts()
    return [Client(**normalize_odoo_client(item)) for item in data]

def get_leads() -> list[Lead]:
    data = connector.obtener_leads()
    return [Lead(**normalize_odoo_lead(item)) for item in data]

def get_activities() -> list[Activity]:
    data = connector.obtener_activities()
    return [Activity(**normalize_odoo_activity(item)) for item in data]