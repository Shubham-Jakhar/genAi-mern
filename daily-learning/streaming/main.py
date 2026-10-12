import os
from pathlib import Path
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"));
model= "openai/gpt-oss-20b";
messages=[
    {
        "role":"user",
        "content":"Explain how internet works in very details and also using computer networks but first research about it deeply you can take extra but i want perfect output"
    }
]
stream = client.chat.completions.create(model=model,messages=messages,stream=True);
 
for chunk in stream:
    data = chunk.choices[0].delta.content
    if data:
        print(data,end="",flush=True)