# NodeJS Take Home Assesment Template

This is a lightweight Node.js Express API template with JWT authentication built in. It provides a structured foundation for people who are wants to complete their take home coding assesment with minimal setup ;)

## Features

-   **Express.js Server**: Pre-configured Express server with standard middleware
-   **Authentication**: JWT-based authentication using Passport.js
-   **API Structure**: Organized modular architecture
    -   Controllers
    -   Routes
    -   Middlewares
    -   Services
    -   Models
-   **Docker Support**: Ready for containerization
-   **Testing**: Includes REST client test file for API testing

## Project Structure

```
├── index.js                # Main entry point
├── src/
│   ├── api/                # API components
│   │   ├── controllers/    # Request handlers
│   │   ├── middlewares/    # Express middlewares
│   │   ├── routes/         # API route definitions
│   │   └── utils/          # Utility functions
│   ├── config/             # Configuration files
│   ├── constants/          # Application constants
│   ├── docs/               # API documentation
│   ├── helpers/            # Helper functions
│   ├── models/             # Data models
│   ├── public/             # Static files
│   ├── scripts/            # Utility scripts
│   ├── services/           # Business logic
│   └── validations/        # Input validation
├── test/                   # Test files
├── Dockerfile              # Docker configuration
├── package.json            # Project dependencies
└── test.rest               # REST client test file
```

## Available Endpoints

-   `POST /api/v1/login` - User login
-   `POST /api/v1/register` - User registration
-   `GET /api/v1/critical_data` - Protected endpoint (requires JWT)

## Getting Started

1.  Clone the repository
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Create a `.env` file based on the template provided
4.  Start the server:

    ```bash
    npm start
    ```

## Docker Deployment

Build and run using Docker:

```bash
docker build -t node-api-template .
docker run -p 3000:3000 node-api-template
