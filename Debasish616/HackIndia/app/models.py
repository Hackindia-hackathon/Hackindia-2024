from sqlalchemy import Column, String, Boolean, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    email = Column(String, primary_key=True, index=True)
    full_name = Column(String)
    date_of_birth = Column(Date)
    kyc_verified = Column(Boolean, default=False)
