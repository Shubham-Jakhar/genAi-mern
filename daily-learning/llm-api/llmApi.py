import os 
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
my_api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key = my_api_key)
model = "openai/gpt-oss-20b"
role = "user"
prompt = "Hi! This is my first LLM API call. Can you describe how llm api works?"
messages = [{"role": role, "content": prompt}]

response  = client.chat.completions.create(model=model, messages=messages);
print(response.choices[0].message.content)

