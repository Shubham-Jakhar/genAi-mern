import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client  = Groq(api_key = os.getenv("GROQ_API_KEY"))

prompt1 = "Hi groq!"
prompt2 = "What is the weather like today?"
prompt3 = "explain react hooks in detail with examples and code"

prompts = [prompt1, prompt2, prompt3]
for prompt in prompts: 
    model = "openai/gpt-oss-20b"
    messages={
    "role":"user",
    "content":prompt
    }
    response = client.chat.completions.create(model=model, messages=[messages], max_tokens=200)
    usage = response.usage
    print(f"Prompt: {prompt} --> input tokens: {usage.prompt_tokens} output tokens: {usage.completion_tokens} total tokens: {usage.total_tokens} finish reason: {response.choices[0].finish_reason}")