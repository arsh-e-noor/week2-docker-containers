# 🚀 M2 - Docker Basics & Image Creation

## 📌 Project Overview
This project demonstrates Docker containerization of a Node.js web application. The goal is to build a Docker image, run a container, and serve a web dashboard inside a containerized environment.

---

## 🧱 Application
A simple DevOps Dashboard built using:
- Node.js (Express)
- HTML/CSS/JS frontend
- REST API endpoint for status data

---

## 📂 Project Structure
```
M2-docker-basics/
│
├── app.js
├── package.json
├── Dockerfile
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── screenshots/
```

---

## ⚙️ Docker Workflow

### 1. Build Docker Image
```bash
docker build -t devops-dashboard .
```

### 2. Run Container
```bash
docker run -d -p 3000:3000 --name devops-dashboard-container devops-dashboard
```

### 3. Access Application
```
http://localhost:3000
```

---

## 🧩 Key Concepts Learned

- Docker Images vs Containers
- Writing Dockerfile
- Port Mapping (-p 3000:3000)
- Running Node.js apps in containers
- Container lifecycle (run, stop, start)

---

## 📸 Evidence

Screenshots included:
- Docker build success
- Running container
- Application UI
- Docker logs

---

## 🚀 Outcome

Successfully containerized a Node.js application using Docker and deployed it inside a running container.

---
