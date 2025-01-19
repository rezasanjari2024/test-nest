import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { User } from "./user.entity";

//دلایل فیل یک معامله
@Entity('reasons')
export class Reason extends Base {
    @Column()
    Name:string;
    @Column()
    UserId: number;
    
}
