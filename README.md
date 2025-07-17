# Supabase MongoDB Demo

This project demonstrates a Node.js application that uses both Supabase and MongoDB databases with a clean Data Access Layer (DAL) architecture.

# Supabase MongoDB Demo

This project demonstrates a Node.js application that uses both Supabase and MongoDB databases with a clean layered architecture following separation of concerns principles.

## Architecture

The application follows a 4-layer architecture pattern:

### 1. Routes Layer (`routes/`)
Handles HTTP routing and delegates to controllers.

### 2. Controllers Layer (`controllers/`)
Handles HTTP requests/responses, input validation, and calls appropriate service methods.

### 3. Services Layer (`services/`)
Contains business logic, orchestrates operations, and calls DAL methods.

### 4. Data Access Layer (DAL) (`dal/`)
**All database operations are handled here**. This layer provides a clean abstraction between your business logic and the underlying database implementations.

#### Why Use This Layered Architecture?

- **Separation of Concerns**: Each layer has a single responsibility
- **Database Agnostic**: Easy to switch between different database providers
- **Business Logic Isolation**: Business rules are centralized in the services layer
- **Testability**: Each layer can be tested independently
- **Maintainability**: Changes are isolated to specific layers

### Project Structure

```
├── app.js                    # Main application entry point
├── index.js                 # Server startup
├── package.json             # Dependencies and scripts
├── controllers/             # HTTP request/response handling
│   └── riddleController.js  # Riddle HTTP operations
├── services/                # Business logic layer
│   └── riddleService.js     # Riddle business operations
├── dal/                     # Data Access Layer
│   └── riddleDal.js         # Riddle data operations
├── lib/                     # Database clients and utilities
│   ├── mongoClient.js       # MongoDB connection setup
│   ├── sequelize.js         # Sequelize ORM setup
│   └── supabaseClient.js    # Supabase client setup
├── models/                  # Data models
│   └── Riddle.js            # Riddle model definition
└── routes/                  # API routes
    ├── riddleRoutes.js      # Riddle-specific routes
    └── router.js            # Main router setup
```

### Request Flow

1. **Client Request** → **Routes** (`routes/`)
2. **Routes** → **Controllers** (`controllers/`)
3. **Controllers** → **Services** (`services/`)
4. **Services** → **DAL** (`dal/`) → **Database**
5. **Response flows back through the same layers**

### Layer Responsibilities

#### Routes Layer
- Define API endpoints
- Route requests to appropriate controllers

#### Controllers Layer
- Handle HTTP requests and responses
- Input validation and sanitization
- Status code management
- Error handling and formatting

#### Services Layer
- Business logic and rules
- Data validation and transformation
- Orchestrate multiple DAL operations
- Transaction management

#### DAL Layer
- **All database access happens here**
- CRUD operations
- Database-specific query logic
- Connection management

### Example Request Flow

```javascript
// 1. Route (routes/riddleRoutes.js)
router.get('/', riddleController.getAllRiddles);

// 2. Controller (controllers/riddleController.js)
export const getAllRiddles = async (req, res) => {
  const result = await riddleService.getAllRiddles();
  res.status(200).json(result);
};

// 3. Service (services/riddleService.js)
export const getAllRiddles = async () => {
  const riddles = await riddleDal.getRiddles();
  // Apply business logic here
  return { success: true, data: riddles };
};

// 4. DAL (dal/riddleDal.js)
export const getRiddles = async () => {
  return await Riddle.findAll(); // Database operation
};
```

## API Endpoints

- `GET /api/riddles` - Get all riddles
- `POST /api/riddles` - Create a new riddle
- `GET /api/riddles/:id` - Get a specific riddle
- `PUT /api/riddles/:id` - Update a riddle
- `DELETE /api/riddles/:id` - Delete a riddle

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables for database connections

3. Start the application:
   ```bash
   npm start
   ```

## Database Providers

This project is configured to work with:
- **MongoDB** - NoSQL document database
- **Supabase** - PostgreSQL-based backend service

The layered architecture abstracts these implementations, allowing you to switch between providers or use multiple databases simultaneously.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables for database connections

3. Start the application:
   ```bash
   npm start
   ```

## Database Providers

This project is configured to work with:
- **MongoDB** - NoSQL document database
- **Supabase** - PostgreSQL-based backend service

The DAL layer abstracts these implementations, allowing you to switch between providers or use multiple databases simultaneously.
