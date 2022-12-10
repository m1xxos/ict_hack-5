from sqlalchemy import Column, Integer
from app.users.db import Base


class StudentProject(Base):
    __tablename__ = "student_project"

    id: int = Column(Integer, primary_key=True, index=True)
