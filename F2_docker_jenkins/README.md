# F2 - Docker + Jenkins CI/CD Pipeline

## 📌 Objective
This project demonstrates a CI/CD pipeline using Jenkins and Docker to automate the build and deployment of a Node.js application.

---

## ⚙️ Tools & Technologies
- Jenkins (CI/CD Server)
- Docker (Containerization)
- GitHub (Source Code)
- Docker Hub (Image Registry)
- Node.js Application

---

## 📁 Project Structure
week2-docker-containers/
│
├── F2/
│   
│       ├── app.js
│       ├── package.json
│       ├── Dockerfile
│
├── Jenkinsfile
└── README.md

---

## 🚀 Pipeline Workflow

1. Jenkins pulls code from GitHub
2. Builds Docker image using Dockerfile
3. Logs into Docker Hub using credentials
4. Pushes image to Docker Hub

---

## 🧾 Jenkins Pipeline Stages

- Checkout Code
- Build Docker Image
- Docker Hub Login
- Push Image to Docker Hub

---

## 🐳 Docker Image

- Image Name: arshen00r/notes-app
- Tag: v1

---

## 📦 Result

Successfully automated CI/CD pipeline using Jenkins and Docker.

---

## 📌 Outcome

- Automated build process
- Docker containerization
- Continuous integration pipeline