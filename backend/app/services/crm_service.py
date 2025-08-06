

from app.connectors.odoo_connector import OdooConnector
from app.models.crm_models import Client, Lead

connector = OdooConnector()



def get_clients() -> list[Client]:
    data = connector.obtener_clientes()
    normalized = []
    for item in data:
        # Normalize all fields that can be False but should be a string or list
        for field in ["phone", "email", "name"]:
            if item.get(field) is False:
                item[field] = None
        if item.get("company_id") is False:
            item["company_id"] = []
        normalized.append(Client(**item))
    return normalized



def get_contacts() -> list[Client]:
    data = connector.obtener_contacts()
    normalized = []
    for item in data:
        for field in ["phone", "email", "name"]:
            if item.get(field) is False:
                item[field] = None
        if item.get("company_id") is False:
            item["company_id"] = []
        normalized.append(Client(**item))
    return normalized

def get_leads() -> list[Lead]:
    data = connector.obtener_leads()
    leads = [Lead(**item) for item in data]
    return leads
