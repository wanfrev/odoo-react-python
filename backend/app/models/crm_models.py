from pydantic import BaseModel, EmailStr
from typing import Optional



class Client(BaseModel):
    id: int
    name: str
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    company_id: Optional[list] = None

class Lead(BaseModel):
    id: int
    name: str
    probability: Optional[float] = None
    stage_id: Optional[list] = None
