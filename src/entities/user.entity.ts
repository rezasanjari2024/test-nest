import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Base } from './Base';

@Entity()
export class User extends Base {
  

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    UserName: string;

    @Column({ type: 'varbinary',length:'MAX',nullable:true })
    Profile: Buffer;  // برای ذخیره تصویر به صورت باینری

}