# CRUD-API-MongoDB-using-ExpressJS

This project demonstrates how to implement CRUD (Create, Read, Update, Delete) operations in MongoDB using ExpressJS, following the MVC (Model-View-Controller) design pattern. Additionally, it includes a front-end built with ReactJS to interact with the API.

## Prerequisites

- **Node.js**: Installed on your system
- **MongoDB**: Installed and running locally or with access to a cloud database
- **MongoDB Connection URI**: Required for database connection

## Technologies Used

### Front-End

- **ReactJS**: For building the user interface
- **CSS**: Styling the UI components

### Back-End

- **ExpressJS**: Server framework
- **Mongoose**: MongoDB object modeling

## Features

- **Create**: Add new data
- **Read**: Retrieve data
- **Update**: Modify data
- **Delete**: Remove data

## Folder Structure

### Front-End Structure
```
frontend/
├── public/                # Static files
├── src/                   # React application source code
│   ├── App.jsx            # Main React component
│   ├── App.css            # Global styles
│   ├── CreateUser.jsx     # Component to create a new user
│   ├── Main.jsx           # Main component to display all users
│   ├── UpdateUser.jsx     # Component to update a user
│   ├── User.jsx           # User component
├── index.html             # Root HTML file
├── package.json           # Dependencies and scripts
├── package-lock.json      # Auto-generated lock file
```

#### **Front-End Components**
- **App.jsx**: The main application component, which renders other components.
- **App.css**: Styles for the application.
- **CreateUser.jsx**: Handles the form for adding a new user.
- **Main.jsx**: Displays all users fetched from the API.
- **UpdateUser.jsx**: Provides functionality to update an existing user.
- **User.jsx**: Represents individual user entries.

### Back-End (MVC Pattern)
```
project-root/
├── controllers/    # Handles business logic for routes
├── models/         # Contains Mongoose schemas and models
├── routes/         # Defines application routes
├── config/         # Configuration files (e.g., database connection)
├── app.js          # Main application file
└── package.json    # Dependencies and scripts
```

#### **Controllers**
Controllers are responsible for handling incoming requests, interacting with models, and sending appropriate responses to the client. Each controller file corresponds to a specific resource.

#### **Models**
Models define the schema for the data and interact with the database using Mongoose. They serve as the foundation for database operations.

#### **Routes**
Routes define the endpoints for CRUD operations and map them to their respective controller functions.

## Summary
This project demonstrates building a full-stack CRUD application using ExpressJS, MongoDB, and ReactJS. The front-end provides a user-friendly interface to interact with the API, while the back-end is structured using the MVC design pattern for scalability and maintainability. Separating concerns across models, controllers, and routes makes the codebase modular and easier to extend or modify.

