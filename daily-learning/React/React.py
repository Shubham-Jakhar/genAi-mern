import os
from groq import Groq
from dotenv import load_dotenv
from pydantic import BaseModel
from time import sleep
from pathlib import Path
import re

load_dotenv();

client = Groq(api_key=os.getenv("GROQ_API_KEY"));

def get_product_price(product):
    if(product == "Iphone 17"):
        return 60000
    elif(product == "Iphone 18"):
        return 90000
    else:
        return 0

def calculate(expression):
    return eval(expression)

tools = {
    "get_product_price":get_product_price,
    "calculate":calculate
}


system_prompt ="""
You are shooping assistant.
You have these tools:
get_product_price(product)
calculate(expression)

IMPORTANT: you should call tools like this:
Action: get_product_price("Iphone 17")
Action: calculate("2+2")

Not like this:
get_product_price(product="Iphone 17")

Follow these rules:
1. decide what you need to do.
2. call one tool at a time.
3. After writing an action, STOP immediatly.
4. Never guess or invent observation.
5. wait until you receive an observation.
6. now decide what to do next.

FORMAT:
Thought: what you need to do
Action: tool_name(argument)

WHEN FINISHED:
Final Answer:your answer
"""

def run_agent(question):
    messages=[
    {
        "role":"system",
        "content":system_prompt
    },
    {
        "role":"user",
        "content":question
    }
]
    for step in range(5):
        print(f"step {step+1}:")
        response  = client.chat.completions.create(
                model="qwen/qwen3.8-27b",
                messages=messages,
            )
        answer = response.choices[0].message.content
        print(answer)
        if "Final Answer:" in answer:
            break

        match = re.search(r"Action:\s*(\w+)\((.*?)\)", answer)
        if match:
            tool_name = match.group(1)
            tool_input = match.group(2)
            tool_input = tool_input.strip()
            tool_input = tool_input.strip('"')
            if tool_name in tools:
                tool = tools[tool_name]
                observation = tool(tool_input)
            else:
                observation = "Tool not found"

            print("Observation:",observation)
            print("\n")
        
        messages.append({"role":"assistant","content":answer})
        messages.append({"role":"user","content":"Observation:"+str(observation)})
        sleep(3)

prompt = "i want to buy Iphone 17 and i have 80000, how much i have left"
run_agent(prompt)

