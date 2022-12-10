from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import ARRAY
from app.users.db import Base


class Project(Base):
    __tablename__ = "project"

    projectid: int = Column(Integer, primary_key=True, index=True)
    companyid: int = Column(Integer, ForeignKey("company.companyid"), nullable=False)
    title: str = Column(String(length=100), nullable=False)
    description: str = Column(String(length=1000), nullable=False)
    taglist: str = Column(ARRAY(Integer), nullable=False)
    pdf: str = Column(String(length=100), nullable=False)
    verified: bool = Column(Boolean, default=False, nullable=False)
