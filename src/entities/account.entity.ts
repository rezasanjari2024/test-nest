import { Entity, PrimaryGeneratedColumn, Column, Double, ManyToOne } from 'typeorm';
import { Base } from './Base';
import { User } from './user.entity';
import { Strategy } from './strategy.entity';
import { Expose } from 'class-transformer';

@Entity()
export class Account extends Base {
   
    @Column('decimal', { precision: 15, scale: 2 })
    Balance: number;

    @Column()
    Broker: string;

    @Expose({name:'StrategyId'})
     @ManyToOne(() => Strategy, { onDelete: 'SET NULL' })
     Strategy: Strategy;

     @Column()
     UserId:number;

   
}
