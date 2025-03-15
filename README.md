
# STARTING MAP Express TS SERVER

Simple express TS starter to run server-map!

## Table of Contents
```
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technology used](#technology-used)
- [Pattern Project](#pattern-project)
- [Architecture API](#architecture-api)
```

## Features
```
1. API Service in Geospatial Data Management
    a. CRUD for Location: Ability to create, read, update, and delete location data (e.g., points of interest, routes, or areas).
    b. Geospatial Data Storage: Use a database that supports geospatial data, such as PostgreSQL with PostGIS, to store and manage location data.
```

## Intallastion
```
$ npm install
```

## Configuration 
```
no need to configure db because the db for the server-map is already hosted on cloude
```

## How to use?
```
$ npm run dev # run development!
$ npm start # Start the application in production mode
$ npm run build # build typescript project
```


## Technology Used

```
- Node.js: A JavaScript runtime that enables fast, non-blocking server-side application development, ideal for I/O-heavy applications.

- TypeScript: A superset of JavaScript that adds static typing, helping developers catch errors early and improve code quality.

- Express.js: A minimal web framework for Node.js that simplifies handling HTTP requests and routing.

- PostgreSQL: An open-source relational database management system known for its robustness and extensibility, suitable for complex applications.

- Knex.js: A SQL query builder for Node.js that allows flexible interaction with various databases.

- Objection.js: An ORM built on top of Knex.js, providing an intuitive way to work with relational data.
```

## Pattern Project
```
This project follows the Clean Code Repository Pattern, which emphasizes maintaining a clear separation of concerns, enhancing code readability, and promoting maintainability. By organizing code into distinct layers, this pattern facilitates easier testing and collaboration among developers.
```
## Architecture API
```
REST API (Representational State Transfer Application Programming Interface) is an architecture used to build web services that enable communication between clients and servers. REST APIs focus on resources identified by unique URLs and use standard HTTP methods such as GET, POST, PUT, and DELETE to perform operations on those resources. With a stateless principle and data formats like JSON, REST APIs facilitate data exchange and integration between applications.

```

