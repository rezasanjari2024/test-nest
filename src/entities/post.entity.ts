import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { Base } from "./Base"

@Entity()
export class Post extends Base
  {

    @Column()
    title: string

    @Column()
    text: string
}