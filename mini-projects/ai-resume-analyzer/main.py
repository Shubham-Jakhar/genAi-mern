import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq
from pypdf import PdfReader
from docx import Document
from pydantic import BaseModel
import json

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


class JobDescription(BaseModel):
    role: str
    required_skills: list[str]
    preffered_skills: list[str]
    cgpa: float | None
    educational_req: list[str]
    experience: float | None


job_description_schema = JobDescription.model_json_schema()

job_description = """Description
Amazon Advertising drives billions of ad impressions and millions of clicks daily, powering discovery and sales for advertisers across Amazon's Retail and Marketplace businesses. The Ads Marketing Decision Science team sits at the intersection of data science and marketing strategy. We build intelligent, data-driven systems that analyze advertiser behavior at large scale to deliver the right guidance to the right advertiser at the right time. Our work spans behavioral modeling, content intelligence, automated decision systems, and GenAI applications, enabling personalized marketing experiences that help advertisers make smarter advertising decisions and grow their business on Amazon.

We are looking for a Data Scientist who brings strong fundamentals in machine learning, causal inference, and statistical modeling to solve real advertiser problems. You will build predictive models, design experiments, develop segmentation frameworks, and leverage GenAI capabilities where applicable, taking solutions end-to-end from proof-of-concept to production at scale. You will partner closely with scientists, engineers, and product managers on a daily basis to prototype rapidly, ensure data integrity in production systems, and deliver measurable advertiser impact. If you are passionate about solving real-world problems with next level science, come join us as we innovate and make history.


Key job responsibilities
• Define and execute data science solutions end-to-end, from problem framing through production deployment.
• Build machine learning models (classification, regression, clustering, ranking) for advertiser segmentation, propensity modeling, and recommendations.
• Apply causal inference and experimentation methods (A/B testing, difference-in-differences, propensity score matching) to measure the impact of marketing interventions.
• Analyze large-scale advertiser behavioral data to identify trends, surface growth opportunities, and support optimal decision making.
• Collaborate with colleagues across science and engineering disciplines for fast turnaround proof-of-concept prototyping at scale.
• Establish and drive data hygiene best practices to ensure coherence and integrity of data feeding into production ML/AI solutions.
• Leverage GenAI and LLM capabilities to enhance science products where applicable


A day in the life
You will solve real-world problems by analyzing large volumes of advertiser data, building predictive models, designing experiments, and measuring business impact. You will prototype rapidly, validate ideas with data, and partner with engineers to productize and scale successful solutions. You will collaborate daily with scientists, engineers, and product managers across the advertising organization, working in a cross-functional, fast-paced environment where data drives decisions and helps advertisers grow.

About the team
We are a team of Applied Scientists, Research Scientists, Data Scientists, and Business Intelligence Engineers with deep expertise in ML, NLP, Gen-AI, RL, and causal inference, from a diverse range of backgrounds. We partner closely with strong engineers, product managers, and sales leaders who bring ads-industry depth and experience building scalable modeling and software solutions.

Basic Qualifications
- 1+ years of data querying languages (e.g. SQL), scripting languages (e.g. Python) or statistical/mathematical software (e.g. R, SAS, Matlab, etc.) experience
- 2+ years of data/research scientist, statistician or quantitative analyst in an internet-based company with complex and big data sources experience
- Bachelor's degree

Preferred Qualifications
- Knowledge of statistical packages and business intelligence tools such as SPSS, SAS, S-PLUS, or R
- Experience with clustered data processing (e.g., Hadoop, Spark, Map-reduce, and Hive)

Amazon is an equal opportunity employer and does not discriminate on the basis of protected veteran status, disability, or other legally protected status.

Our inclusive culture empowers Amazonians to deliver the best results for our customers. If you have a disability and need a workplace accommodation or adjustment during the application and hiring process, including support for the interview or onboarding process, please visit https://amazon.jobs/content/en/how-we-hire/accommodations for more information. If the country/region you’re applying in isn’t listed, please contact your Recruiting Partner.


The base salary range for this position is listed below. Your Amazon package will include sign-on payments and restricted stock units (RSUs). Final compensation will be determined based on factors including experience, qualifications, and location. Amazon also offers comprehensive benefits including health insurance (medical, dental, vision, prescription, Basic Life & AD&D insurance and option for Supplemental life plans, EAP, Mental Health Support, Medical Advice Line, Flexible Spending Accounts, Adoption and Surrogacy Reimbursement coverage), 401(k) matching, paid time off, and parental leave. Learn more about our benefits at https://amazon.jobs/en/benefits.

"""

system_prompt = f"""
You are a expert Hr assistant.
your role is to analyze the job description and extract structered information from it.
return only valid JSON schema matching the following schema:
{job_description_schema}

IMPORTANT:
Do not return schema itself, return only json object matching the schema.
If no experience mentioned return NULL
if information for a list missing return empty list
Do not invent information.
"""

user_prompt = f"""
Analyze the following job description and extract the required informtion in structered format 
{job_description}
"""
message_system = {"role": "system", "content": system_prompt}
message_user = {"role": "user", "content": user_prompt}
response_format = {"type": "json_object"}
messages = [message_system, message_user]
response = client.chat.completions.create(
    model="openai/gpt-oss-20b", messages=messages, response_format=response_format
)
data = json.loads(response.choices[0].message.content)
jobD = JobDescription(**data)
# print(formated_jobD)


class MatchResult(BaseModel):
    score: int
    detailes: dict


result_schema = MatchResult.model_json_schema()


class Experience(BaseModel):
    company_name: str | None
    role: str | None
    duration: str | None
    description: str | None
    skills_used: list[str] = []


experience_schema = Experience.model_json_schema()


class Resume(BaseModel):
    name: str | None
    email: str | None
    phone: str | None
    total_experience_years: float | None
    skills: list[str] = []
    experience: list[Experience] = []
    project: list[str] = []
    certification: list[str] = []


resume_schema = Resume.model_json_schema()


def extract_text(file_path):
    if file_path.endswith(".pdf"):
        reader = PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        return text
    elif file_path.endswith(".docx"):
        doc = Document(file_path)
        text = ""
        for para in doc.paragraphs:
            text += para.text + "\n"
        return text
    else:
        print("Unsupported file format. Please provide a PDF or DOCX file.")


def parse_resume():
    file_path = "Resume.pdf"
    resume_text = extract_text(file_path)
    model = "openai/gpt-oss-20b"
    messages = [
        {
            "role": "system",
            "content": f"""
you are a resume parser, you will be given a resume and you need to etract 
the information from it and return in json format matching the following schema {resume_schema}
Extract information from resume based on meaning,
not based on headings.
Different resume may have different headings.
For example:
-Experience
-work Experience
-professional experience
These all may contain experience.
Skills may be mentioned in experince, skills section, projects or internship.
Return only valid json schema matching the schema
{resume_schema}
""",
        },
        {"role": "user", "content": f"""Resume:{resume_text}"""},
    ]
    response_format = {"type": "json_object"}
    response = client.chat.completions.create(
        model=model, messages=messages, response_format=response_format
    )
    data = json.loads(response.choices[0].message.content)
    parased_resume = Resume(**data)
    return parased_resume


def final_score(resume_text, JobD):
    model = "openai/gpt-oss-20b"
    messages = [
        {
            "role": "user",
            "content": f"""
You are a HR recruiter.

Analyze the resume against the Job description.
JOB DESCRIPTION:{JobD.model_dump_json(indent=2)}

Give:
1. Candidate name
2. candidate email
3. A score out of 100
4. Matching skills
5. Missing skills
6. Whether the candidate is:
   - Bad Fit
   - Good Fit
   - Best Fit

RESUME:{resume_text.model_dump_json(indent=2)}

Response should be strictly in json format schema {result_schema}
""",
        }
    ]
    response = client.chat.completions.create(
        model=model, messages=messages, response_format=response_format
    )
    data = json.loads(response.choices[0].message.content)
    match_result = MatchResult(**data)
    return match_result.model_dump_json(indent=2)


resume_text = parse_resume()
result = final_score(resume_text, jobD)
print(result)
