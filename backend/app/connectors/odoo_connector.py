import xmlrpc.client
from app.utils.config import ODOO_URL, ODOO_DB, ODOO_USER, ODOO_PASSWORD

class OdooConnector:
    def __init__(self):
        self.url = ODOO_URL
        self.db = ODOO_DB
        self.username = ODOO_USER
        self.password = ODOO_PASSWORD
        self.uid = None
        self.models = None
        self.authenticate()

    def authenticate(self):
        common = xmlrpc.client.ServerProxy(f"{self.url}/xmlrpc/2/common")
        self.uid = common.authenticate(self.db, self.username, self.password, {})
        self.models = xmlrpc.client.ServerProxy(f"{self.url}/xmlrpc/2/object")

    def obtener_clientes(self):
        domain = []
        fields = ["id", "name", "email", "phone", "company_id"]
        clients = self.models.execute_kw(
            self.db, self.uid, self.password,
            "res.partner", "search_read",
            [domain],
            {"fields": fields}
        )
        return clients

    def obtener_leads(self):
        domain = []
        fields = [
            "id",           
            "name",         
            "company_id",   
            "partner_id",   
            "email_from",   
            "phone",        
            "expected_revenue", 
            "probability",  
            "stage_id"      
        ]
        leads = self.models.execute_kw(
            self.db, self.uid, self.password,
            "crm.lead", "search_read",
            [domain],
            {"fields": fields}
        )
        return leads
    def obtener_contacts(self):
        domain = []
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "company_id",
            "activity_ids",      
            "country_id",        
            "company_name",      
            "street",
            "street2",
            "city",
            "state_id",
            "zip",         
            "website",
            "category_id"        
        ]
        contacts = self.models.execute_kw(
            self.db, self.uid, self.password,
            "res.partner", "search_read",
            [domain],
            {"fields": fields}
        )
        return contacts
    def obtener_activities(self):
        domain = []
        fields = [
            "id",
            "activity_type_id",
            "summary",
            "note",
            "date_deadline",
            "user_id",
            "res_id",
            "res_model"
        ]
        activities = self.models.execute_kw(
            self.db, self.uid, self.password,
            "mail.activity", "search_read",
            [domain],
            {"fields": fields}
        )
        return activities