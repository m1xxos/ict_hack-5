import uuid

from typing import Optional
from fastapi_users import schemas


class UserRead(schemas.BaseUser[uuid.UUID]):
    pass


class UserCreate(schemas.BaseUserCreate):
    name: str
    middlename: Optional[str] = None
    surname: str
    image: str
    phone: str
    verified: bool = False


class UserUpdate(schemas.BaseUserUpdate):
    pass
