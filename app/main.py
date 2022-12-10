from beanie import init_beanie
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.users.db import User, db
from app.users.schemas import UserCreate, UserRead, UserUpdate
from app.users.users import auth_backend, current_active_user, fastapi_users
from app.database import *
from app.models import *
from dotenv import load_dotenv


load_dotenv()

DEFAULT_LIMIT = 10
DEFAULT_SKIP = 0

tags = db.tags

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://api.icthack.ga"],
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
    return await fetch_all(limit, skip, tags, Tags)


@app.get("/tags/{tag_id}")
async def get_tag(tag_id: str):
    return await fetch_one(tag_id, tags, Tags)


@app.post("/tags")
async def create_tag(tag: Tags):
    return await create_one(dict(tag), tags)


@app.on_event("startup")
async def on_startup():
    await init_beanie(
        database=db,
        document_models=[
            User,
        ],
    )
