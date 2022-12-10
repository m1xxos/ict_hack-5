import os
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, func, select
from typing import AsyncGenerator, Optional

from dotenv import load_dotenv
from fastapi import Depends
from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase
from sqlalchemy import Column
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base
from sqlalchemy.orm import sessionmaker


load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
Base: DeclarativeMeta = declarative_base()


class Student(SQLAlchemyBaseUserTableUUID, Base):
    name: str = Column(String(length=50), nullable=False)
    middle_name: str = Column(String(length=50), nullable=True)
    surname: str = Column(String(length=50), nullable=False)
    image: str = Column(String(length=100), nullable=False)
    phone: str = Column(String(length=20), nullable=False)
    verified: bool = Column(Boolean, default=False, nullable=False)


engine = create_async_engine(DATABASE_URL)
async_session_maker = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, Student)
