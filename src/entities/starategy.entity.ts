import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { SymboleEnum } from "src/enumes/enumes.data";
import { User } from "./user.entity";

@Entity()
export class Starategy extends Base {
    @Column()
    Name: string;
    @Column()   
    Description: string;
    @Column()
    DoTime: string;
    @ManyToOne(() => User, { onDelete: 'SET NULL' })
         UserId: User;
 

    @Column('simple-array') 
    Symbol: SymboleEnum[];
}
