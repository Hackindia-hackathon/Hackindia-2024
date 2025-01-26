from azure.communication.email import EmailClient
from ..config import settings

email_client = EmailClient.from_connection_string(settings.AZURE_COMMUNICATION_CONNECTION_STRING)

def send_otp_email(email: str, otp: str):
    
    
    message = {
            "senderAddress": "DoNotReply@acadmyc.com",
            "recipients": {
                "to": [{"address": email}],
            },
            "content": {
                "subject": "Your OTP Code",
                "plainText": f"Your OTP code is {otp}. It is valid for 10 minutes.",
            }
     }
    poller = email_client.begin_send(message)
    poller.result()
