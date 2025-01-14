import { Column, Entity } from "typeorm";
import { Base } from "./Base";

@Entity('reasons')
export class Reason extends Base {
    @Column()
    Name:string;
}