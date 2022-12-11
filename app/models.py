from typing import Any, List, Optional

from pydantic import BaseModel, Field


class Tag(BaseModel):
    title: str
    verified: bool = False


class Startup(BaseModel):
    title: str
    student_id: str
    description: str
    tag_list: List[Tag] = []
    pdf: Optional[str] = None
    verified: bool = False


class Project(BaseModel):
    company_id: str
    title: str
    description: str
    tag_list: List[Tag] = []
    pdf: Optional[str] = None
    verified: bool = False
    