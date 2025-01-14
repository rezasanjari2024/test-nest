import { Column, Entity } from "typeorm";
import { Base } from "./Base";

@Entity("feelings")
export class Feelings extends Base{
    @Column()
    Title:string;
}