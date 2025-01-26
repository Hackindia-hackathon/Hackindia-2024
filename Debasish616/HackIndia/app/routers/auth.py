from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer
from .. import schemas, models, database, dependencies
from ..auth.jwt_handler import create_access_token
from ..auth.otp_handler import generate_otp, verify_otp

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.post("/send-otp", summary="Enter Email and Send OTP", description="Enter email and send an OTP.", tags=["Auth"])
def send_otp(user: schemas.UserEmail, db: Session = Depends(database.get_db)):
    generate_otp(user.email)
    return {"message": "OTP sent"}

@router.post("/verify-otp", summary="Verify OTP and Get Token", description="Verifies the OTP and returns a JWT token.", response_model=schemas.Token, tags=["Auth"])
def verify_user_otp(user_verify: schemas.UserVerify, db: Session = Depends(database.get_db)):
    if verify_otp(user_verify.email, user_verify.otp):
        db_user = db.query(models.User).filter(models.User.email == user_verify.email).first()
        if db_user:
            token = create_access_token(data={"sub": db_user.email})
            return {"access_token": token, "token_type": "bearer"}
        else:
            raise HTTPException(status_code=422, detail="User does not exist")
    raise HTTPException(status_code=400, detail="Invalid OTP")

@router.get("/check-user", summary="Check User", description="Checks if the user exists.", tags=["Auth"], dependencies=[Depends(dependencies.get_current_user)])
def check_user(current_user: models.User = Depends(dependencies.get_current_user)):
    return {"message": "User exists"}

@router.get("/kyc-verify", summary="KYC Verify", description="Verifies the KYC status of the user.", tags=["Auth"], dependencies=[Depends(dependencies.get_current_user)])
def kyc_verify(current_user: models.User = Depends(dependencies.get_current_user)):
    if current_user.kyc_verified:
        return {"message": "KYC verified"}
    else:
        raise HTTPException(status_code=400, detail="KYC not verified")

@router.post("/create-account", summary="Create Account", description="Create a new user account.", tags=["Auth"])
def create_account(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="User already exists")
    new_user = models.User(
        email=user.email,
        full_name=user.full_name,
        date_of_birth=user.date_of_birth,
        kyc_verified=False
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User created successfully"}

@router.post("/login", summary="Login", description="Login with email and OTP, returns JWT token and session ID.", response_model=schemas.Token, tags=["Auth"])
def login(user: schemas.UserLogin, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if not db_user:
        raise HTTPException(status_code=422, detail="User does not exist")
    if verify_otp(user.email, user.otp):
        token = create_access_token(data={"sub": db_user.email})
        return {"access_token": token, "token_type": "bearer"}
    raise HTTPException(status_code=400, detail="Invalid OTP")
