# Auth-api-mb

Auth-api-mb
Deployment Test
Authors: Brandon Pitts & Mary Kariuki
tests report
Setup
**.env** requirements
- PORT - 3001

Running the app locally


- Clone the repository to your local machine
- run the following commands in your terminal -

  npm install
  npm run db:config
  npm run db:create
  touch .env
- Add the following lines to the newly created .env file.

PORT=<port number>
SECRET=<AStringToBeKeptSecret>
Run the following command -

  npm start

 You should be able to access the app in your browser by navigating to http://localhost:PORT/, with PORT being the port number that you put in the .env. file.

When run locally, the server creates a memory file in the project's root directory that contains data for a sqlite3 database. If you would like to clear out the database, you can simply delete this file and it will be freshly created the next time the server is started using npm start.

- npm start
- Endpoint:
  - /signup
  - /signin
  - /users
  - /animals
  -/cestaceans
Tests
- Unit Tests: npm run test
- Lint Tests: npm run lint



UML
UML

Links
Latest PR on GitHub:
Heroku link:
