# TH2 - Docker Hub & AWS ECR

## Objective

The objective of this task was to learn how container images are stored and distributed using container registries. In this task, a Docker image was pushed to both Docker Hub and Amazon Elastic Container Registry (ECR).

---

## Technologies Used

* Docker
* Docker Hub
* AWS ECR
* AWS CLI

---

## Steps Performed

### 1. Docker Image Creation

A Docker image for the MERN E-Commerce application frontend was built and verified locally.

```bash
docker images
```

---

### 2. Docker Hub Authentication

Logged into Docker Hub using Docker CLI.

```bash
docker login
```

---

### 3. Image Tagging

The local image was tagged using the Docker Hub repository name.

```bash
docker tag mern-e-commerce-store-frontend:latest arshen00r/mern-ecommerce-frontend:v1
```

---

### 4. Push Image to Docker Hub

The tagged image was pushed successfully to Docker Hub.

```bash
docker push arshen00r/mern-ecommerce-frontend:v1
```

---

### 5. AWS ECR Repository Creation

An Amazon Elastic Container Registry repository was created using AWS CLI.

```bash
aws ecr create-repository --repository-name mern-ecommerce-frontend --region us-east-1
```

---

### 6. ECR Authentication

Docker was authenticated against AWS ECR.

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
```

---

### 7. Image Tagging for ECR

The image was tagged using the ECR repository URI.

```bash
docker tag arshen00r/mern-ecommerce-frontend:v1 <ecr-uri>/mern-ecommerce-frontend:v1
```

---

### 8. Push Image to AWS ECR

The image was successfully pushed to Amazon ECR.

```bash
docker push <ecr-uri>/mern-ecommerce-frontend:v1
```

---

## Deliverables

* Docker Hub Image Repository
* AWS ECR Repository
* Docker Push Logs
* AWS ECR Push Logs
* Screenshots

---

## Learning Outcomes

Through this task, I learned:

* Docker image tagging
* Docker Hub image publishing
* AWS ECR repository management
* Docker authentication with ECR
* Container image distribution
* Registry-based image storage
* AWS CLI integration with Docker

---

## Conclusion

Successfully pushed Docker images to both Docker Hub and AWS ECR. This task provided hands-on experience with container registries and image distribution workflows commonly used in DevOps and cloud-native environments.
