# Odoo CRM FastAPI with Python

This backend connects to an Odoo instance via XML-RPC and exposes REST endpoints for contacts, clients, and leads, ready to be consumed by a React frontend or any other client.

## Features
- Connects to Odoo using XML-RPC
- Exposes `/crm/clients`, `/crm/contacts`, `/crm/leads` endpoints
- Data normalization for robust API responses
- Pydantic models for data validation
- CORS enabled for frontend integration

## Requirements
- Python 3.10+
- Access to an Odoo instance (with API credentials)

## Installation

1. **Clone the repository**

2. **Create and activate a virtual environment**
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   Create a `.env` file in the backend root with:
   ```env
   ODOO_URL=https://your-odoo-server.com
   ODOO_DB=your_db_name
   ODOO_USER=your_user
   ODOO_PASSWORD=your_password
   ```

## Running the Backend

From the backend root directory, run:
```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

## API Endpoints

- `GET /crm/clients`   → List all clients (Odoo customers)
- `GET /crm/contacts`  → List all contacts (Odoo partners)
- `GET /crm/leads`     → List all leads (Odoo opportunities)

You can test the API with [Postman](https://www.postman.com/) or visit the automatic docs at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Notes
- Make sure your Odoo instance is accessible from the backend server.
- The backend normalizes data to avoid validation errors (e.g., converts `False` to `None` or `[]` as needed).
- For production, adjust CORS and security settings as required.

---

Feel free to contribute or open issues for improvements!
