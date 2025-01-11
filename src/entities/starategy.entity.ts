import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { SymboleEnum } from "src/enumes/enumes.data";
import { User } from "./user.entity";
import { Expose } from "class-transformer";

@Entity()
export class Starategy extends Base {
    @Column()
    Name: string;
    @Column()   
    Description: string;
    @Column()
    DoTime: string;//زمان انجام معامله
    @Expose({name: 'UserId'})
    @ManyToOne(() => User, { onDelete: 'SET NULL' })
         User: User;
 

    @Column('simple-array') 
    Symbol: SymboleEnum[];
}
