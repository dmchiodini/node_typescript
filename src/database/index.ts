import { DataSource } from "typeorm";
const connectDB = new DataSource({
        type: "postgres",
        host: "database",
        port: 5432,
        username: "user",
        password: "pass",
        database: "user_db"    
});

connectDB.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })