# Node Express Mongo Example

## Installation of Mongo DB

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/

Direct Download link : https://www.mongodb.com/try/download/community?tck=docs_server

# Create DB as

pdacmongo

# create collection as

items
employee

## Running the application

1. Clone the repo
2. Install dependencies: `npm install`
3. Start your mongoDB instance. This repo works on an instance running on `localhost:27017`
4. Start the application: `node index.js`

## Postman API Hit

#Items

1. Go to postman
2. Select Type as "POST"
3. Add Request URL as - http://localhost:5050/item
4. Select BODY >> Raw >> JSON (application/json)
5. Add below to Body
   {
   "name": "Gold",
   "quantity": 15
   }

#employee

1. Go to postman
2. Select Type as "POST"
3. Add Request URL as - http://localhost:5050/employee
4. Select BODY >> Raw >> JSON (application/json)
5. Add below to Body
   {
   "name": "Rajendra Gupta",
   "empid": "986444",
   "location": "Mumbai"
   }
