import uuid

from typing import Optional
from fastapi_users import schemas


class UserRead(schemas.BaseUser[uuid.UUID]):
    pass


class UserCreate(schemas.BaseUserCreate):
    name: str
    middlename: Optional[str] = None
    surname: str
    phone: str


class UserUpdate(schemas.BaseUserUpdate):
    pass
