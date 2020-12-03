# book-crud

Web application that interacts with a MongoDB database using the MERN stack we have been covering in this module. The application implements the 4 CRUD operations (Create/Read/Update/Delete).

## Pulling the code :

* Clone the project repository.
```bash

$ git clone https://github.com/tavaresrodrigo/book-crud
```

* Open up command prompt and chnage directory to the location of the project, you must be able to see the .

```bash
$ cd book-crud
```

* You must be able to see the **react-frontend** and the **nem-backend/**, it measn you have successfully pulled the code and you should not proceed to build it. 


## Running the backend
* In the project folder, Change directory into \nem-backend and run **npm install** to install the npm packages and **node server.js** to start the backend.

```bash
$ npm install 
$ node server.js
```

* If the backend does not start, check to see if the file \app\config\db.config.js was cloned. If not you will need to recreate it.
    Code as follows. File=db.config.js, File start:
```
    module.exports = {
    url: "[databaseuri]"
     };
```

* Yo can check to see if the backend is running accessing the url **http://localhost:8080/**

```bash
$ curl http://localhost:8080/
```

## Running the frontend

* In the project folder, Change directory into \react-frontend
* Use command npm install.
* Use command npm start to start the frontend (The app should open on your webbrowser http://localhost:8081/).
    *  If you are getting an error, delete the folder \react-frontend\node_modules and the file package-lock.json
    *  Rerun the command npm install
    *  Rerun the command np start
* To open up the app, on your webbrowser and search http://localhost:8081/.
* To close the app, on each command prombt press ctrl+c and confirm to stop the back/frontend.
