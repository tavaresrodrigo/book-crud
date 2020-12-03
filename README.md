# book-crud

Web application that interacts with a MongoDB database using the MERN stack we have been covering in this module. The application has to implement the 4 CRUD operations (Create/Read/Update/Delete).

## Pulling the code :

1. Clone the project repository.
```bash

$ git clone https://github.com/tavaresrodrigo/book-crud
```

2. Open up command prompt and chnage directory to the location of the project, you must be able to see the .

```bash
$ cd book-crud
```
3. You must be able to see the **react-frontend** and the **nem-backend/**: 


## Running the backend
* 3: In the project folder, Change directory into \nem-backend
* 4: Use command npm install.
* 5: Use command node server.js to run the backend:
    5.1: If you get an error with this, check to see if the file \app\config\db.config.js was cloned. If not you will need to recreate it.
    Code as follows. File=db.config.js, File start:

    module.exports = {
    url: "[databaseuri]"
     };
    File End.
    5.2: create called ".env" in directory react-frontend.
    Code as follows. File=.env, File start:
    PORT=8081
    File End.
* 6: Once the backend is running, open up another command prompt and chnage directory to the location of the project.
## Running the frontend

* 7: In the project folder, Change directory into \react-frontend
* 8: Use command npm install.
* 9: Use command npm start to start the frontend (The app should open on your webbrowser http://localhost:8081/).
    9.1: If you are getting an error, delete the folder \react-frontend\node_modules and the file package-lock.json
    9.2: Rerun the command npm install
    9.3: Rerun the command np start
* 10: To open up the app, on your webbrowser and search http://localhost:8081/.
* 11: To close the app, on each command prombt press ctrl+c and confirm to stop the back/frontend.
