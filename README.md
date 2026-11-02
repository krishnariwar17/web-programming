# web-programming

Express + MongoDB Atlas (Mongoose) REST API with full CRUD, built with a routes → controllers → models structure.

## Structure
```
config/db.js                  MongoDB connection
models/User.js                Mongoose schema (name, email, age, city + timestamps)
controllers/userController.js CRUD logic
routes/userRoutes.js          /api/users routes
middleware/errorHandler.js    404 + error handling
postman/                      Postman collection export
server.js                     App entry point
```

## Setup
```bash
git clone https://github.com/krishnariwar17/web-programming.git
cd web-programming
npm install
cp .env.example .env     # then put your real Atlas password in MONGODB_URI
npm start                # http://localhost:3000
```

## Endpoints
| Method | URL | Description |
|--------|-----|-------------|
| POST   | /api/users     | Create a user |
| GET    | /api/users     | List all users |
| GET    | /api/users/:id | Get one user |
| PUT    | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

Sample body: `{ "name": "Krishna", "email": "k@example.com", "age": 21, "city": "Rewari" }`

## Testing with Postman
Import `postman/users-crud.postman_collection.json` (or use the "web-programming - Users CRUD API" collection in your workspace), select the **web-programming - Local** environment, and run the collection in order.
