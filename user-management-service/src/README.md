# User Management Service (UMS) Starter

This starter provides a scalable foundation for a User Management Service using NestJS + MongoDB. It includes authentication, user profiles, roles/permissions scaffolding, and an audit-ready structure suitable for growth into a bounded context in a microservices architecture.

## Features
- JWT Authentication
- User Management
- Role-Based Access Control (RBAC)
- Profiles Management
- Audit Logging
- TypeScript
- NestJS Framework
- MongoDB with Mongoose

## Setup

1. Install dependencies:
cat > README.md << 'EOF'
# User Management Service (UMS)

A scalable User Management Service built with NestJS and MongoDB, providing authentication, user profiles, role-based access control, and audit logging.

## Features

- **JWT Authentication** - Secure token-based authentication
- **User Management** - Complete CRUD operations for user accounts
- **Role-Based Access Control (RBAC)** - Flexible permission system
- **User Profiles** - Extended user information management
- **Audit Logging** - Track user actions and system events
- **TypeScript** - Type-safe development
- **Docker Support** - Easy deployment with Docker Compose

## Tech Stack

- **Framework**: NestJS 9.x
- **Database**: MongoDB 6.x
- **ODM**: Mongoose
- **Authentication**: JWT with Passport
- **Validation**: class-validator
- **Language**: TypeScript 5.x

## Prerequisites

- Node.js 18.x or higher
- MongoDB 6.x or higher
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd user-management-service
2. Install dependencies
bashnpm install
3. Configure environment variables
bashcp .env.example .env
Edit .env file with your configuration:
MONGO_URI=mongodb://localhost:27017/ums
JWT_SECRET=your-strong-secret-key-here
JWT_EXPIRES_IN=1h
PORT=3000
4. Start MongoDB
bashdocker run -d -p 27017:27017 --name mongodb mongo:6
5. Run the application
Development mode:
bashnpm run start:dev
Production:
bashnpm run build
npm start
Docker Setup
bashdocker-compose up --build
API Endpoints
Authentication

POST /auth/register - Register new user
POST /auth/login - Login user

Users

GET /users/me - Get current user (requires JWT)

Roles

GET /roles - List all roles
POST /roles - Create new role

Profiles

GET /profiles - Get user profile (requires JWT)
POST /profiles - Create profile (requires JWT)

Testing
bash# Register
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123", "locale": "en"}'

# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
License
MIT
