# W2 - Docker Compose Setup for MERN E-Commerce Application

## Objective

The objective of this task was to containerize a MERN (MongoDB, Express.js, React.js, Node.js) application using Docker Compose and run all services together in a multi-container environment.

---

## Project Overview

This project uses a MERN Stack E-Commerce application and deploys the following services using Docker Compose:

* Frontend (React + Vite)
* Backend (Node.js + Express)
* Database (MongoDB)

Docker Compose allows all containers to be managed and started with a single command.

---

## Project Structure

```text
MERN-E-Commerce-Store/
│
├── backend/
│   └── Dockerfile
│
├── frontend/
│   └── Dockerfile
│
├── docker-compose.yml
├── .env
└── README.md
```

---

## Services Configuration

### Frontend Service

* Framework: React (Vite)
* Port: 5173
* Container Name: frontend

Responsibilities:

* Provides the user interface.
* Sends API requests to the backend.

---

### Backend Service

* Framework: Node.js + Express
* Port: 5000
* Container Name: backend

Responsibilities:

* Handles API requests.
* Processes business logic.
* Communicates with MongoDB.

---

### Database Service

* Database: MongoDB
* Port: 27017
* Container Name: mongodb

Responsibilities:

* Stores application data.
* Provides persistent storage for the backend.

---

## Docker Compose Architecture

```text
Browser
   │
   ▼
Frontend Container
   │
   ▼
Backend Container
   │
   ▼
MongoDB Container
```

All services communicate through Docker's internal network.

---

## Dockerfiles

### Backend Dockerfile

* Uses Node.js Alpine image.
* Installs dependencies.
* Starts Express server on port 5000.

### Frontend Dockerfile

* Uses Node.js Alpine image.
* Installs React dependencies.
* Runs Vite development server.
* Exposes port 5173.

---

## Environment Configuration

MongoDB connection string was updated for Docker networking:

```env
MONGO_URI=mongodb://mongodb:27017/huxnStore
```

Why?

Inside Docker Compose, containers communicate using service names instead of localhost.

The backend connects to MongoDB using the service name:

```text
mongodb
```

instead of:

```text
127.0.0.1
```

---

## Commands Used

### Build Containers

```bash
docker compose build
```

### Start Application

```bash
docker compose up
```

### Start in Detached Mode

```bash
docker compose up -d
```

### View Running Containers

```bash
docker ps
```

### Stop Application

```bash
docker compose down
```

---

## Verification

The following were verified successfully:

* Docker Compose file created.
* Frontend container started successfully.
* Backend container started successfully.
* MongoDB container started successfully.
* Backend connected to MongoDB.
* API endpoints responded correctly.
* All services were visible through Docker.

---

## Screenshots

The following screenshots are included in the repository:

1. Docker Compose Build Output
2. Docker Compose Up Logs
3. Running Containers (`docker ps`)
4. Backend API Response
5. Frontend Application Output

---

## Challenges Faced

### MongoDB Connection Issue

Initially, the backend was configured to connect using:

```env
mongodb://127.0.0.1:27017/huxnStore
```

This does not work inside Docker Compose because each container has its own localhost.

Solution:

```env
mongodb://mongodb:27017/huxnStore
```

where `mongodb` is the Docker Compose service name.

---

## Key Learning Outcomes

Through this task, I learned:

* Docker Compose fundamentals
* Multi-container application deployment
* Container networking
* Service dependency management
* MongoDB container integration
* Frontend and backend containerization
* Environment variable configuration
* Docker-based MERN application deployment

---

## Conclusion

Successfully containerized and deployed a MERN Stack E-Commerce application using Docker Compose. Multiple services (Frontend, Backend, and MongoDB) were configured, connected, and executed within a unified Docker environment, demonstrating practical understanding of multi-container application deployment.
