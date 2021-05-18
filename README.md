# [Trivia](https://silken-avatar-312712.ey.r.appspot.com)

## Setup & Instructions
1. Clone the [Trivia repository](https://github.com/DGorgula/trivia)
### Setup Server + Database:
2. Create a new MySQL db scheme using mysql or any of mysql client programs
 - ex. MySQL Workbench. can be done both on an existing connection and a new one.
3. Navigate to server folder. (from the clone's root folder run 'cd server').
4. Create in the <b>server folder</b> a .env file based on the .env.md file pattern, using your MySQL connection and created scheme:

  ```javascript
  DB_USERNAME='<DB_USERNAME>' // The user of the connection - default is 'root'.
  PASS='<DB_PASSWORD>' //The password of the connection.
  HOST='<DB_HOST>' //The host of the connection - default is 'localhost' or '127.0.0.1'.
  DB_DEV='<DEV_DB_NAME>' //The name of the created db scheme.
  ACCESS_SECRET='<ACCESS_SECRET>' //The base for the JWT Access Token encryption. Should not be empty.
  REFRESH_SECRET='<REFRESH_SECRET>' //The base for the JWT Refresh Token encryption. Should not be empty.
  ```
   - Make sure the .env file does not contain comments!
   - Make sure the .env file is included in the .gitignore (should already be).
5. Install server dependencies. (run `npm install`).
6. Install sequelize-cli (run `npm install sequelize-cli --save-dev`).
7. Create all migrations (run `npx sequelize db:migrate`). 
8. Seed db (run `npx sequelize db:seed:all`).

### Setup Client:
9. Navigate to client folder. (from the clone's server folder run `cd ../client`).
10. Install client dependencies. (run `npm install`).
11. Navigate back to the server folder. (run `cd ../server`).
12. Run the local server (run `npm run dev`).
13. In your brouser go to [http://localhost:3005/](http://localhost:3005).

