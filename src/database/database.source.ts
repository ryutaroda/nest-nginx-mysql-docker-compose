import {DataSource} from "typeorm";
import {databaseEntities, migrationFilesDir} from "./database.module";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: databaseEntities,
    synchronize: false,
    migrations: [migrationFilesDir],
});