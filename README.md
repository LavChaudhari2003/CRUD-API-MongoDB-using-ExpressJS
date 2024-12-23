# CRUD-API-MongoDB-using-ExpressJS

This project demonstrates how to implement CRUD (Create, Read, Update, Delete) operations in MongoDB using ExpressJS, following the MVC (Model-View-Controller) design pattern.

## Prerequisites

- **Node.js**: Installed on your system
- **MongoDB**: Installed and running locally or with access to a cloud database
- **MongoDB Connection URI**: Required for database connection

## Technologies Used

- **ExpressJS**: Server framework
- **Mongoose**: MongoDB object modeling

## Features

- **Create**: Add new data
- **Read**: Retrieve data
- **Update**: Modify data
- **Delete**: Remove data

## Folder Structure (MVC Pattern)

```
project-root/
├── controllers/    # Handles business logic for routes
├── models/         # Contains Mongoose schemas and models
├── routes/         # Defines application routes
├── config/         # Configuration files (e.g., database connection)
├── app.js          # Main application file
└── package.json    # Dependencies and scripts
```

### **Controllers**
Controllers are responsible for handling incoming requests, interacting with models, and sending appropriate responses to the client. Each controller file corresponds to a specific resource.

### **Models**
Models define the schema for the data and interact with the database using Mongoose. They serve as the foundation for database operations.

### **Routes**
Routes define the endpoints for CRUD operations and map them to their respective controller functions.

## Summary

This project demonstrates how to build a RESTful API using ExpressJS and MongoDB, structured using the MVC design pattern for scalability and maintainability. Separating concerns across models, controllers, and routes makes the codebase modular and easier to extend or modify.

