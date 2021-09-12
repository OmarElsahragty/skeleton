# Skeleton

Domain-driven design (DDD) structure and atomic design structure Skeleton.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Docker

1. Run docker compose ➡ `docker-compose up --build -d`
2. Fill `.postgres` file configurations
3. docker migrate database (Remove data if exist) -> `docker exec -it skeleton_backend npm run docker:rest`

### Local (Backend)

1. Install node dependencies ➡ `npm install`
2. Create a new database on PostgreSQL
3. Fill `.env` file configurations
4. Database migration ➡ `npm run migrate`
5. Development run ➡ `npm run dev` || Production run ➡ `npm run start`

### NPM scripts (Backend)

1. `npm run docker` ➡ Docker runtime environment.
2. `npm run start` ➡ Production runtime environment.
3. `npm run dev` ➡ Development runtime environment. (Listening on src for changes)
4. `npm run lint` ➡ Run linter. (Checking for mistakes)
5. `npm run migrate` ➡ Migrate database. (Create tables and seed database)
6. `npm run rest` ➡ Rest database. (Remove the existing data)
7. `npm run docker:rest` ➡ Docker runtime environment database migration. (Remove the existing data)

### Technologies

1. Node.js (Runtime Environment)
2. PostgreSQL (Relational Database)
3. Redis (Cache)
4. ReactJS (Frontend)

### Documentation

1. Postman (collection and environment) are provided in ./docs/Postman folder.
2. Swagger (yaml file) is provided in ./docs/Swagger folder.

For more projects check my github account `https://github.com/OmarElsahragty` or check my portfolio website `https://sahragty.herokuapp.com/`
