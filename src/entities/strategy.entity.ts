import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { SymboleEnum } from "src/enums/enumes.data";

import { Approval } from "./approval.entity";

@Entity()
export class Strategy extends Base {
    @Column()
    Name: string;

    @Column()   
    Description: string;

    @Column()
    DoTime: string;//زمان انجام معامله

    
    @Column()
    UserId: number;

    @Column('simple-array') 
    Symbol: SymboleEnum[];

     @ManyToMany(() => Approval, (approval) => approval.Strategies)
     @JoinTable()
     Approvals: Approval[];
}
