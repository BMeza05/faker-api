const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

class User{
    constructor(){
        this.id = faker.id
        this.firstName = faker.firstName.findName();
        this.lastName = faker.lastName.findName();
        this.phoneNumber = faker.internet.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.password

    }
}

class Company{
    constructor(){
        this.id = faker.id
        this.name = faker.name
        this.address = faker.address
        this.street = faker.street
        this.city = faker.city
        this.state = faker.state
        this.zipCode = faker.zipCode
        this.country = faker.country
        

    }
}



    app.use( express.json() );
    app.use( express.urlencoded({ extended: true }) );


    app.get("/api", (req, res) => {
    res.json({ message: "I like apples n baynay nays" });
    });

    app.post("http://localhost:8000/api/users/new", (req, res) => {
        // req.body will contain the form data from Postman or from React
        console.log(req.body);
        // we can push it into the users array for now...
        // later on this will be inserted into a database
        users.push(req.body);
        // we always need to respond with something
        res.json( { status: "ok" } );
    });

    app.post("http://localhost:8000/api/company/new", (req, res) => {
        // req.body will contain the form data from Postman or from React
        console.log(req.body);
        // we can push it into the users array for now...
    // later on this will be inserted into a database
        company.push(req.body);
        // we always need to respond with something
        res.json( { status: "ok" } );
    });


    app.post("http://localhost:8000/api/user/company", (req, res) => {
            // req.body will contain the form data from Postman or from React
            console.log(req.body);
            // we can push it into the users array for now...
            // later on this will be inserted into a database
            users.push(req.body);
            company.push(req.body);
            // we always need to respond with something
            res.json( { status: "ok" } );
        });
        

    app.listen( port, () => console.log(`Listening on port: ${port}`) );