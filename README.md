
# [Trivia](https://silken-avatar-312712.ey.r.appspot.com)

## Setup & Instructions
1. Clone the [Trivia repository](https://github.com/DGorgula/trivia)
### Setup Database:
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

### Setup Client + Server + Migrate & Seed Database
5. Install server + client dependencies + load all migrations and seeds: `npm run setup`

6. In your browser go to [http://localhost:3005/](http://localhost:3005).

