import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from "../product/entities/product.entity";
import {User} from "../users/entities/user.entity";

export const databaseEntities = [User];
export const migrationFilesDir = './migrations/*.ts';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [
                ConfigModule.forRoot({
                    envFilePath: ['.env'],
                }),
            ],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('DATABASE_HOST'),
                port: configService.get('DATABASE_PORT'),
                database: configService.get('DATABASE_NAME'),
                username: configService.get('DATABASE_USER'),
                password: configService.get('DATABASE_PASSWORD'),
                entities: databaseEntities,
                synchronize: false,
                migrations: [migrationFilesDir],
            }),
        }),
    ],
})
export class DatabaseModule {}
