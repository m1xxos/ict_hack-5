from typing import Any, List, Optional

from pydantic import BaseModel, Field


class Tags(BaseModel):
    title: str
    verified: bool = False


class Startup(BaseModel):
    title: str
    student_id: str
    description: str
    tags: List[Tags] = []
    pdf: Optional[str] = None
    verified: bool = False


class Project(BaseModel):
    company_id: str
    title: str
    description: str
    tag_list: List[Tags] = []
    pdf: Optional[str] = None
    verified: bool = False
    