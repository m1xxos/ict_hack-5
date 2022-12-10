from sqlalchemy import Column, Integer, String
from app.users.db import Base


class Project(Base):
    __tablename__ = "project"

    id: int = Column(Integer, primary_key=True, index=True)
    title: str = Column(String(length=100), nullable=False)
    description: str = Column(String(length=1000), nullable=False)
    tag_list: str = Column(String(length=1000), nullable=False)