import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRE_MINUTES: int = 30
    AZURE_COMMUNICATION_CONNECTION_STRING: str

    class Config:
        env_file = ".env"

settings = Settings()
