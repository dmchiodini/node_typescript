import { DataSource } from "typeorm";

export const connectDB = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 9999,
        username: "",
        password: "",
        database: "rentx"    
});