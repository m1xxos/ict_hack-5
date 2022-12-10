from typing import Optional

from beanie import PydanticObjectId
from fastapi_users import schemas


class UserRead(schemas.BaseUser[PydanticObjectId]):
    pass


class UserCreate(schemas.BaseUserCreate):
    name: str
    surname: str
    middle_name: str
    phone: str


class UserUpdate(schemas.BaseUserUpdate):
    interest_list: list[str] = []
    tag_list: list[str] = []
    name: str
    surname: str
    middle_name: Optional[str] = None
    image: Optional[str] = None
    phone: Optional[str]
    education: str
    project_list: list[str] = []
    cv: Optional[str] = None
    skills: list[str] = []
