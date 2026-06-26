# DevOps Docker AWS Project

## Project Overview
This project demonstrates a basic DevOps workflow where a Node.js application is containerized using Docker and deployed on AWS EC2.

## Technologies Used
- Node.js
- Docker
- GitHub
- Docker Hub
- AWS EC2

## Architecture
Local Machine → GitHub → Docker Image → Docker Hub → AWS EC2 → Running Container → Live Application

## Steps to Run Locally

1. Clone repository
git clone https://github.com/your-username/devops-project.git

2. Build Docker image
docker build -t devops-project .

3. Run container
docker run -d -p 3000:3000 devops-project

## Docker Hub Image
docker pull omkarsakhare07/devops-project

## Deployment on AWS EC2
1. Launch EC2 instance
2. Install Docker
3. Pull image from Docker Hub
4. Run container

sudo docker pull omkarsakhare07/devops-project
sudo docker run -d -p 80:3000 omkarsakhare07/devops-project

## Live Application
http://<EC2_pub_ip>

