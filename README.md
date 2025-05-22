# Task Manager

<br>

## Overview

The **Task Manager** is a simple and intuitive web application designed for managing daily tasks efficiently. It allows users to create tasks with a detailed description, assign a responsible person, set a priority level, and take actions such as editing or deleting tasks. Users can also mark tasks as completed and filter them based on priority or status, making it easier to stay organized and focused. With a clean interface and responsive design, the app ensures seamless usability across devices, helping individuals and teams boost their productivity.

## Features

- **Add New Tasks with Details**  
  Include Description, Responsible person, and Priority (Low, Medium, High).

- **View Tasks in Table Format**  
  Organized display for easy task management.

- **Filter Tasks**  
  Sort tasks by priority or completion status.

- **Edit or Delete Tasks**  
  Modify or remove existing tasks effortlessly.

- **Mark Tasks as Completed**  
  Track progress by marking finished tasks.

- **Responsive Design**  
  Optimized for seamless use on both mobile and desktop devices.
  

## Technologies Used

This project is built using the following technologies:

### Frontend:
- **React** – For building the user interface.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **JavaScript** – Core programming language for frontend logic.

### Backend:
- **Node.js** – Runtime environment for executing JavaScript on the server.
- **Express.js** – Minimal and flexible Node.js web framework.
- **MongoDB** – NoSQL database for storing tasks and user data.

### Development Tools:
- **dotenv** – For managing environment variables securely.
- **nodemon** – Automatically restarts the server during development.
- **concurrently** – Runs frontend and backend servers simultaneously during development

---

## Project Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/ce707564-1483-4fcb-8a2a-459285b85c0b" alt="Screenshot 1" width="45%" />
  <img src="https://github.com/user-attachments/assets/6cee0bd0-6d2d-46f2-9bd4-38e0e5e59384" alt="Screenshot 2" width="45%" />
</p>


## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js & npm](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/cloud/atlas) (local or cloud)
  
  Clone this repository

    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```
    
## Backend Setup
1. Navigate to the backend folder:

    ```bash
    cd backend
    ```

2. Install backend dependencies:
    
    ```bash
    npm install
    ```

3. Create a .env file in backend/ directory and add the following:
   
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```
    Replace your_mongodb_connection_string with your actual MongoDB URI.


5. (Optional) Install nodemon for development:
   
    ```bash
    npm install --save-dev nodemon
    ```

6. Add or check this in backend/package.json to enable npm start:
   
    ```bash
    "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
    }
    ```

7. Start the backend server:
   
     ```bash
     npm start
     ```
    or
   
    ```bash
    npm run server
    ```
   The backend will run on: http://localhost:5000

## Frontend Setup

1. Navigate to the frontend folder:
    
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
   
    ```bash
    npm install
    ```

3. Start the frontend app:
   
    ```bash
    npm run dev
    ```
   
   The frontend will run on: http://localhost:5173/

   Note: Make sure your backend (http://localhost:5000) is running before starting the frontend to avoid API errors.

## Running Frontend & Backend Together
To run both servers concurrently during development:

1. Install concurrently for development:

    ```bash
    npm install concurrently --save-dev
    ```

3. From the project root, add this script to your package.json:

    ```bash
    "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"npm start --prefix frontend\""
    }
    ```
4. Start both with:

    ```bash
    npm run dev
    ```
