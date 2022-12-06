import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({
        name: 'id',
        unsigned: true,
        type: 'smallint',
        comment: 'ID',
    })
    readonly id: number;

    @Column('varchar', {comment: 'ユーザー名'})
    username: string;

    @Column('varchar', {name: 'hashed_password', comment: 'パスワードハッシュ'})
    hashedPassword: string;

    @CreateDateColumn({
        name: "created_at",
        comment: '作成時刻',
    })
    readonly createdAt?: Timestamp;

    @UpdateDateColumn({
        name: 'updated_at',
        comment: '更新時刻',
    })
    readonly updatedAt?: Timestamp;
}
