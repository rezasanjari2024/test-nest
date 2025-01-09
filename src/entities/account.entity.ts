import { Entity, PrimaryGeneratedColumn, Column, Double, ManyToOne } from 'typeorm';
import { Base } from './Base';
import { User } from './user.entity';

@Entity()
export class Account extends Base {
   
    @Column('decimal', { precision: 15, scale: 2 })
    Balance: number;

    @Column()
    Broker: string;
    @ManyToOne(() => User, { onDelete: 'SET NULL' })
         UserId: User;

   
}
