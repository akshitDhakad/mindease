
## Mindease
Mindease is a web application focused on providing user authentication and building a welcoming home page experience. This project leverages modern web technologies to ensure a seamless user experience and robust backend functionality.

# Features
User Authentication
Dynamic Home Page
Secure Environment Variable Management


# Technologies Used
Node.js
Express
MongoDB/Mongoose
JSON Web Tokens (JWT) for Authentication
EJS for Templating
Multer for File Upload
Dotenv for Environment Variable Management


# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following tools installed:

Node.js and npm (Node Package Manager)
MongoDB database access (local or remote)

## Installation

# Clone the repository

## step 1
git clone https://github.com/akshitDhakad/mindease.git
cd mindease

## step 2
Install NPM packages

# Setup Environment Variables

Create a .env file in the root directory of your project. Add the following configurations:

PORT=5000
MINDEASE_KEY=thisisamindeasesecretkey
MONGO_DB_KEY= "add mongodb Atlas connecting string"

Note :Make sure to replace "add mongodb Atlas connecting string" with your actual MongoDB connection string. if u dont have account plz create a free accound for testing on mongodb atlas.

## step 4

# Start the Server

# to run the server  run a command :

npm start


# Usage
Once the server is running, you can access the application by navigating to http://localhost:5000 in your web browser.


# License
This project is licensed under the ISC License.


#### Note : please make sure to install all packages and install mongodb in ur local machine before application running 

# Note : for any help and support  contact akshit dhakad 8871713348

Authors
Akshit Dhakad- Initial work
