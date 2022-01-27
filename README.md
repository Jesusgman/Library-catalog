## Bookstore API

This API allows anyone to handle their online bookstore backend, it has all the basic functionalities out of the box, user authentication using JWTs, future functionalities that are planned for this project.

- Ability to create a cart and store items on it.
- Ability for users to upload their own books to the store.

### How to run the application locally

Once you've pulled the github repo to your local machine

1. **Generate a .env file with the following properties**

>LOCAL_CONNECTION=true
>
>LOCAL_DB_CONNECTION=
>
>DB_CONNECTION=
>
>PORT=
>
>PASSPHRASE=
>
>JWT_SECRET=

where the LOCAL_DB_CONNECTION can be used during local testing and DB_CONNECTION to set the alias for the docker mongo-db link.

2. **Generate a cert-key pair for https test**

`openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365`

3. **Make a directory called certs and move the certificates over there.**

Execute the folowing commands

`npm i`

`docker run -p 27017:27017 mongodb` 

Keep in mind that if you're planning to use a different mongoDB port you need to update your .env file with the proper port for *DB_CONNECTION*

`npm run dev #This will run the project using nodemon` 

### How to run the application with docker-compose

Follow the first 3 steps from local running and then execute the following command:

> `docker-compose up`