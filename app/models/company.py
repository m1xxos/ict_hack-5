from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import ARRAY
from app.users.db import Base


class Company(Base):
    __tablename__ = "company"

    companyid: int = Column(Integer, primary_key=True, index=True)
    title: str = Column(String(length=100), nullable=False)
    description: str = Column(String(length=1000), nullable=False)
    name: str = Column(String(length=100), nullable=False)
    verified: bool = Column(Boolean, default=False, nullable=False)