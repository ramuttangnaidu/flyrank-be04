# 🚀 FlyRank BE-04 – Containerize Your Stack

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-Orchestration-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Repository Pattern](https://img.shields.io/badge/Architecture-Repository_Pattern-orange?style=for-the-badge)
![REST API](https://img.shields.io/badge/API-REST-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-blueviolet?style=for-the-badge)

## 📌 Overview

This project is part of the FlyRank Backend Engineering Internship (BE-04 Assignment).

The objective of this project is to build a containerized Node.js Express REST API integrated with a PostgreSQL database using Docker and Docker Compose while following the Repository Pattern.



---

## ✨ Features

- Node.js + Express REST API
- PostgreSQL Database Integration
- Docker Containerization
- Docker Compose Orchestration
- Repository Pattern Architecture
- Environment Variable Configuration
- Persistent Database Storage using Docker Volumes
- REST API for User Management
- CRUD-ready Backend Structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Docker
- Docker Compose
- pg (PostgreSQL Driver)
- dotenv

---

## 📁 Project Structure

```
flyrank-be04/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── repositories/
│   └── userRepository.js
│
├── routes/
│   └── userRoutes.js
│
├── sql/
│   └── init.sql
│
├── Dockerfile
├── docker-compose.yml
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ramuttangnaidu/flyrank-be04.git
```

### 2. Navigate into the project

```bash
cd flyrank-be04
```

### 3. Start the application

```bash
docker compose up --build
```

The first build may take a few minutes because Docker downloads the required images.

---

## 🌐 API Base URL

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Home

**GET**

```
/
```

Response

```json
{
  "success": true,
  "message": "FlyRank BE-04 API is Running 🚀"
}
```

---

### Health Check

**GET**

```
/health
```

---

### Get All Users

**GET**

```
/users
```

Example Response

```json
[
  {
    "id": 1,
    "name": "Ram",
    "email": "ram@example.com"
  }
]
```

---

### Create User

**POST**

```
/users
```

Request Body

```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

Example Response

```json
{
  "id": 2,
  "name": "Alice",
  "email": "alice@example.com"
}
```

---

## 🗄 Database

The project uses PostgreSQL running inside a Docker container.

Database initialization is handled automatically through:

```
sql/init.sql
```

This script:

- Creates the `users` table
- Inserts sample user data

---

## 🐳 Docker

### Build and Run

```bash
docker compose up --build
```

### Stop Containers

```bash
docker compose down
```

### Run in Background

```bash
docker compose up -d
```

---

## 🔐 Environment Variables

Create a `.env` file using the following template:

```env
PORT=3000

DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=flyrank
```

---

## 🏗 Architecture

The application follows the Repository Pattern.

```
Client
   │
   ▼
Express Routes
   │
   ▼
Controllers
   │
   ▼
Repositories
   │
   ▼
PostgreSQL Database
```

---

## ✅ Assignment Objectives Completed

- Express REST API
- PostgreSQL Integration
- Docker Containerization
- Docker Compose
- Repository Pattern
- Persistent Storage
- Environment Variables
- CRUD Operations
- Database Initialization Script

---

## 📷 Testing

The API was successfully tested using:

- Web Browser
- Postman

Verified operations:

- GET `/`
- GET `/health`
- GET `/users`
- POST `/users`

---

## 👨‍💻 Author

**Ram Uttang Naidu Nakka**

GitHub:
https://github.com/ramuttangnaidu

---

## 📄 License

This project was developed as part of the **FlyRank Backend Engineering Internship (BE-04 Assignment)** for educational purposes.
