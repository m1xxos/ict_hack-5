import os
from typing import Optional

import certifi as certifi
import motor.motor_asyncio
from beanie import PydanticObjectId
from dotenv import load_dotenv
from fastapi_users.db import BeanieBaseUser, BeanieUserDatabase

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
client = motor.motor_asyncio.AsyncIOMotorClient(
    DATABASE_URL, uuidRepresentation="standard", tlsCAFile=certifi.where()
)
db = client["ict"]


class User(BeanieBaseUser[PydanticObjectId]):
    interests: Optional[str] = None
    tag_list: list[str] = []
    name: str
    surname: str
    middlename: Optional[str] = None
    image: Optional[str] = None
    phone: Optional[str]
    education: Optional[str] = None
    project_list: list[str] = []
    cv: Optional[str] = None
    skills: list[str] = []


async def get_user_db():
    yield BeanieUserDatabase(User)
