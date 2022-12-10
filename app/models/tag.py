from sqlalchemy import Column, Integer, String, Boolean
from app.users.db import Base


class Tag(Base):
    tagid: int = Column(Integer, primary_key=True, index=True)
    title: str = Column(String(length=100), nullable=False)
    verified: bool = Column(Boolean, default=False, nullable=False)
