import os 
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
my_api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key = my_api_key)
model = "openai/gpt-oss-20b"
message_system ={
    "role": "system",
    "content":"you are a designer, who suggests name for any thing"
}
message={
    "role": "user",
    "content": "i am opening a new restaurant, just suggest me 3 names for it"
}

messages = [message_system,message]

response  = client.chat.completions.create(model=model, messages=messages, temperature=0);
print(response.choices[0].message.content)

