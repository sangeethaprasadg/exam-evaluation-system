# Exam Evaluation System

## Overview

Exam Evaluation System is a backend application built using Node.js, Express.js, MongoDB, and Mongoose.

## Features

* Create student records
* MongoDB database integration
* REST API architecture
* MVC folder structure
* Environment variable configuration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon

## Project Structure

backend/
├── config/
├── controllers/
├── models/
├── routes/
├── server.js

## API Endpoint

### Create Student

POST /students

Request Body:

{
"studentName": "Rahul",
"phoneNumber": "9876543210",
"mentorName": "Sangeetha",
"sessionMode": "Online"
}

## Author

Sangeetha Prasad
