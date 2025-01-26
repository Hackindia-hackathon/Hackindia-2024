import random
import string
import time
import logging
from fastapi import HTTPException
from ..utils.azure_communication import send_otp_email

logger = logging.getLogger(__name__)

otp_store = {}

def generate_otp(email: str):
    otp = ''.join(random.choice(string.digits) for _ in range(6))
    expiry_time = time.time() + 600  # OTP valid for 10 minutes
    otp_store[email] = {'otp': otp, 'expiry': expiry_time}
    send_otp_email(email, otp)
    return otp

def verify_otp(email: str, otp: str):
    try:
        stored_otp_info = otp_store.get(email)
        if not stored_otp_info:
            raise HTTPException(status_code=404, detail="OTP not found")

        if stored_otp_info['expiry'] < time.time():
            del otp_store[email]
            raise HTTPException(status_code=400, detail="OTP has expired")

        if stored_otp_info['otp'] == otp:
            del otp_store[email]
            return True

        raise HTTPException(status_code=400, detail="Invalid OTP")
    except Exception as e:
        logger.error(f"Error verifying OTP: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
