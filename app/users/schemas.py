from typing import Optional, Any

from beanie import PydanticObjectId
from fastapi_users import schemas


class UserRead(schemas.BaseUser[PydanticObjectId]):
    interest_list: list[str]
    tag_list: list[str]
    name: str
    surname: str
    middle_name: Any
    image: Any
    phone: str
    education: Any
    project_list: list[str]
    cv: Any
    skills: list[str]


class UserCreate(schemas.BaseUserCreate):
    name: str
    surname: str
    middlename: Optional[str]
    phone: str


class UserUpdate(schemas.BaseUserUpdate):
    interest_list: Optional[list[str]]
    tag_list: Optional[list[str]]
    name: Optional[str]
    surname: Optional[str]
    middle_name: Optional[str]
    image: Optional[str]
    phone: Optional[str]
    education: Optional[str]
    project_list: Optional[list[str]]
    cv: Optional[str]
    skills: Optional[list[str]]
