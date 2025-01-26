from pydantic import BaseModel, EmailStr
from datetime import date

class UserEmail(BaseModel):
    email: EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    full_name: str
    date_of_birth: date

class UserVerify(BaseModel):
    email: EmailStr
    otp: str

class UserCheck(BaseModel):
    email: EmailStr

class UserLogin(BaseModel):
    email: EmailStr
    otp: str

class Token(BaseModel):
    access_token: str
    token_type: str
