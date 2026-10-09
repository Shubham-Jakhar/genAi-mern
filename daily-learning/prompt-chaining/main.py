import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq
from time import sleep

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

RESUME = """
Shubham Jakhar
✉shubhamjakhar16@gmail.com|♂phone+91 9518201908|♂¶ap-¶arkerChandigarh
/githubGitHub|/linkedinLinkedIn|/codeLeetCode|/gl⌢bePortfolio
EDUCATION
Chandigarh UniversityChandigarh, India
Bachelor of Engineering in Computer Science — CGPA: 7.82/10 2024 – 2028
Krishna Pranami Public SchoolHisar, Haryana
Senior Secondary (PCM) — 12th: 80% — 10th: 62.4% 2021 – 2023
TECHNICAL SKILLS
Programming Languages:JavaScript, C++, Python
F rontend T echnologies:React.js, HTML5, CSS3, Tailwind CSS, EJS, Bootstrap
Backend T echnologies:Node.js, Express.js, RESTful APIs, JWT Authentication
Databases:MongoDB, MySQL, Oracle
Developer T ools:Git, GitHub, VS Code, Vercel
Core Concepts:Data Structures and Algorithms, OOP, Problem Solving, Agile Methodology
PROJECTS
F orever E-commerce W eb ApplicationSep 2025
Tech Stack: MongoDB, Express.js, React.js, Node.js, Tailwind CSS
•Developed a full-stack MERN e-commerce platform with product browsing, cart management, and secure
checkout
•Implemented JWT-based authentication and authorization for secure user sessions
•Built RESTful APIs for product, user, and order management
•Created an admin dashboard for inventory and order tracking
•Designed responsive UI using React.js and Tailwind CSS
CozyNest Room & Apartment Booking PlatformDec 2025
Tech Stack: Node.js, Express.js, MongoDB, EJS, Tailwind CSS
•Developing a full-stack booking platform for rooms and apartments
•Implemented secure role-based authentication for hosts and guests
•Built property listing, booking management, and availability tracking features
•Used server-side rendering (EJS) to improve SEO and initial page load
•Integrated MongoDB for efficient data storage and retrieval
CAREER OBJECTIVE
Motivated Full Stack MERN Developer with hands-on experience building scalable web applications and
strong fundamentals in Data Structures and Algorithms using C++. Seeking a Full-Stack or Software
Development Internship to apply skills in React.js, Node.js, Express.js, and Databases while contributing
to real-world projects in a collaborative environment.
ACHIEVEMENTS & ADDITIONAL INFORMATION
•Practicing Data Structures and Algorithms in C++
•Built and deployed multiple MERN stack projects
•Quick learner with ability to adapt to new technologies
"""
JD = """
Position: MERN Stack Developer
Experience: 0–2 years / Fresher
Employment: Full-time

About the Role:
We are looking for a motivated MERN Stack Developer to design, develop, and maintain scalable web applications using MongoDB, Express.js, React.js, and Node.js. The candidate should have a strong understanding of JavaScript, REST APIs, database management, authentication, and modern frontend development.

Responsibilities:

Develop responsive and scalable web applications using the MERN stack.
Build reusable and maintainable React components.
Develop RESTful APIs using Node.js and Express.js.
Design and manage MongoDB databases, schemas, and queries.
Implement authentication and authorization using JWT.
Integrate third-party APIs and external services.
Write clean, reusable, and well-structured JavaScript/TypeScript code.
Debug, test, and optimize applications for performance.
Collaborate with designers, backend developers, and other team members.
Use Git/GitHub for version control and collaborative development.
Deploy and maintain applications on cloud platforms.

Required Skills:

Strong knowledge of JavaScript (ES6+).
Good understanding of React.js, including hooks and state management.
Experience with Node.js and Express.js.
Good knowledge of MongoDB and database concepts.
Understanding of REST APIs and HTTP methods.
Knowledge of JWT authentication and authorization.
Familiarity with Git and GitHub.
Understanding of HTML5, CSS3, and responsive design.
Basic knowledge of deployment and cloud platforms.
Good problem-solving and communication skills.

Nice to Have:

TypeScript
Redux/Context API
Next.js
Docker
AWS/Vercel
CI/CD
Unit and integration testing
Experience integrating AI/LLM APIs

Education:
B.Tech/B.E. in Computer Science, IT, or a related field.

Example project requirement:
Candidates should ideally have experience building at least one complete full-stack application involving a React frontend, Node/Express backend, MongoDB database, authentication, REST APIs, and deployment.
"""


def ask_llm(system_prompt, user_prompt):
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt},
    ]
    model = "openai/gpt-oss-20b"
    response = client.chat.completions.create(model=model, messages=messages)
    return response.choices[0].message.content


def extract_Resume_skills():
    system_prompt = """
You are a proffessional resume paraser.
your job is to extract the skills from the resume.
skills can be in any section of the resume.
Do not invent any skills yourself.
Return the skills seprated by comma.
"""
    user_prompt = f"""
{RESUME}
"""
    return ask_llm(system_prompt, user_prompt)


def extract_jd_skills():
    system_prompt = """
    You are a proffessional HR assistant.
    your job is to extract the skills from the job description.
    skills can be in any section of the job description.
    Do not invent any skills yourself.
    Return the skills seprated by comma.
    """
    user_prompt = f"""
    {JD}
    """
    return ask_llm(system_prompt, user_prompt)


def compare_skills(resume_skills, jd_skills):
    system_prompt = """
you are a proffessional HR assistant.
you are given two lists of skills, one from a resume and one from a job description.
your job is to compare the both lists and return the skills matched, skills missing , additional skills.
Also calculate the score of the resume based on the skills matched and missing.
For additional only increase the score if they are relevant to the jd.
Return the result in format
FORMAT:
1. skills matched
2. skills missing
3. additional skills
4. score
5. is resume a good fit acc to jd"""
    user_prompt = f"""
Resume skills:{resume_skills}
Job description skills:{jd_skills}
"""
    return ask_llm(system_prompt, user_prompt)


resume_skills = extract_Resume_skills()
sleep(2)
jd_skills = extract_jd_skills()
sleep(2)
print(compare_skills(resume_skills,jd_skills))
