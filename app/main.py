import os
import boto3
from tempfile import NamedTemporaryFile

from beanie import init_beanie
from fastapi import Depends, FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from loguru import logger
from botocore.exceptions import ClientError

from app.users.db import User, db
from app.users.schemas import UserCreate, UserRead, UserUpdate
from app.users.users import auth_backend, current_active_user, fastapi_users
from app.database import *
from app.models import *
from dotenv import load_dotenv


load_dotenv()

DEFAULT_LIMIT = 10
DEFAULT_SKIP = 0
UPLOAD = True

tags = db.tags

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://api.ictkek.ga", "https://ictkek.ga"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)


@app.get("/authenticated-route")
async def authenticated_route(user: User = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}


@app.get("/tags")
async def get_tags(limit: int = DEFAULT_LIMIT, skip: int = DEFAULT_SKIP):
    return await fetch_all(limit, skip, tags, Tag)


@app.get("/tags/{tag_id}")
async def get_tag(tag_id: str):
    return await fetch_one(tag_id, tags, Tag)


@app.post("/tags")
async def create_tag(tag: Tag):
    return await create_one(dict(tag), tags)


@app.post("/")
async def upload(file: UploadFile = File(...)):
    if UPLOAD:
        # Upload the file
        s3_client = boto3.client("s3", endpoint_url="http://localstack:4566")
        try:
            s3_client.upload_fileobj(file.file, "local", "myfile.txt")
        except ClientError as e:
            logger.error(e)
    contents = await file.read()
    return {"message": "Success!"}

@app.on_event("startup")
async def on_startup():
    await init_beanie(
        database=db,
        document_models=[
            User,
        ],
    )
