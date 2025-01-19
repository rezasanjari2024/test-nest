import { Column, Entity } from "typeorm";
import { Base } from "./Base";

@Entity("feelings")
export class Feeling extends Base{
    @Column()
    Title:string;

    
}