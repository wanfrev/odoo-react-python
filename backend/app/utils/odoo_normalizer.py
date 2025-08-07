def normalize_odoo_lead(data: dict) -> dict:
    string_fields = ["name", "email_from", "phone"]
    for field in string_fields:
        if data.get(field) is False:
            data[field] = None
    list_fields = ["company_id", "partner_id", "stage_id"]
    for field in list_fields:
        if data.get(field) is False:
            data[field] = []
    return data
def normalize_odoo_activity(data: dict) -> dict:
    string_fields = ["summary", "note", "date_deadline", "res_model"]
    for field in string_fields:
        if data.get(field) is False:
            data[field] = None
    list_fields = ["activity_type_id", "user_id"]
    for field in list_fields:
        if data.get(field) is False:
            data[field] = []
    return data

def normalize_odoo_client(data: dict) -> dict:
    string_fields = [
        "phone", "email", "name", "company_name", "street", "street2", "city", "website", "zip"
    ]
    for field in string_fields:
        if data.get(field) is False:
            data[field] = None
    list_fields = [
        "company_id", "activity_ids", "country_id", "state_id", "category_id"
    ]
    for field in list_fields:
        if data.get(field) is False:
            data[field] = []
    return data
