import os
from pathlib import Path
from groq import Groq
from dotenv import load_dotenv
from pydantic import BaseModel

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


class Ticket(BaseModel):
    name: str
    email: str
    number: int
    issue: str


schema = Ticket.model_json_schema()


prompt = """Hi i am shubham jakhar, i am not able to login into my microsoft account, 
please help me, contact me on 1234567890 and shubhamjakhar@gmail.com"""

model = "openai/gpt-oss-20b"
messages = [
    {
        "role": "system",
        "content": f"""Extraxt the personal information based on ticket raised by user
        following this schema.Response should be strictly in json format {schema} """,
    },
    {"role": "user", "content": prompt},
]
response_format = {"type": "json_object"}

response = client.chat.completions.create(
    model=model, messages=messages, response_format=response_format
)


# read json format

import json

raw_json = response.choices[0].message.content
data = json.loads(raw_json)
ticket = Ticket(**data)

print(f"Name: {ticket.name}")
print(f"Email: {ticket.email}")
print(f"Number: {ticket.number}")
print(f"Issue: {ticket.issue}")
