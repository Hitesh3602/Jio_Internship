
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/myfirstdb";

async function main(){
    const client = new MongoClient(url,

    )

    await client.connect();

    console.log("It's done !!")
}

main()