import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Base } from "./Base";
import { Strategy } from "./strategy.entity";


@Entity("Approvals")
export class Approval extends Base {

    @Column()
     Title:string;

    @ManyToMany(() => Strategy, (strategy) => strategy.Approvals)
    @JoinTable()
    Strategies: Strategy[];
    

    @Column()
    UserId:number
}