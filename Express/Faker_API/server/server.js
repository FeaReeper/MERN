
const { faker } = require('@faker-js/faker');
const express = require('express')
const app = express()

const port = '8000'

app.use(express.json())
app.use( express.urlencoded({extended:true}) )



const createUser = () => {
    const newUser = {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    };
    return newUser;
};
    
const newOneUser = createUser();
console.log(newOneUser);


const createCompany = () => {
    const newCompany = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
};
    
const newOneCompany = createCompany();
console.log(newOneCompany);


app.get('/api/users/new', (req, res) => {
    res.json(newOneUser)
})

app.get('/api/company/new', (req, res) => {
    res.json(newOneCompany)
})

app.get('/api/user/company', (req, res) => {
    const combinedObjects = {
        user: newOneUser,
        company: newOneCompany
    }
    res.json(combinedObjects)
})




app.listen( port, () => console.log(`Listening on port: ${port}`) )
