# Monday CRM Clone - A JAMStack + Github Page + Astra DB

# Overviews

This is an example React Monday CRM Clone application using a DataStax Astra DB free tier database.

# Tech Stack
### 1. API Endpoint

NodeJS REST API using express
HTTP GET POST PUT DELETE Requests
POST: `/api/v1/tickets`
GET: `/api/v1/tickets`, `/api/v1/tickets/:id`
DELETE `/api/v1/tickets/:id`
PUT `/api/v1/tickets/:id`

### 2. Frontend Stack

[x] React + NodeJS + useContext Hook + [ReactRouter v6](https://reactrouter.com/docs/en/v6/upgrading/v5)
[x] Handle Form Validation
[x] Handle Case Not validated after form loaded the first time

### 3. Database Stack

DataStax Astra monday clone app that leverages the AstraDB REST API to manage a character database.

- To follow along signup here [astra.datastax/](https://astra.datastax.com/register/U2FsdGVkX1s1L2a3S4huogp2CPG43W5J7Hqq5JeT42hTz5shY3mrB3ySbFGPRyKAeZnjIiY6yPwK5gCV2HWhKXDBp1L2u3S8i0rQe1Q2u3A4le1Q2u3A4l)

- GET TOKEN KEY Astra DB to update file `development.env`

` 
    CLIENT_ID=<YOUR API key>
    CLIENT_SECRET=<YOUR API key>
    TOKEN=<YOUR API key>
    ADMIN_USER_TOKEN=<YOUR API key>
    BASE_API=<YOUR API key> // using for astra restAPI
`

### 4. Environment

Express API: Replace `.env.example` to `development.env` for developement environment or `production.env` for production environment.

React App: Replace `.env.development.example` to `.env.development`, `.env.test`, `.env.production` Environment-specific settings. 
Read more [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

# ------------------------------------------------------------------------------------------------------------------------
### 5. Demo

- React App:
- Server API: 

### 6. Script NPM

- Start server API `npm run server:dev` for development
- Start React App `npm start` for development

### Upgrade to React18

https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
