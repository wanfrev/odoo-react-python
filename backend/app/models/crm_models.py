from pydantic import BaseModel, EmailStr
from typing import Optional

class Cliente(BaseModel):
    id: int
    name: str
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    company_id: Optional[list] = None
