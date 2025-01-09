import { Column, Double, Entity, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { SymboleEnum } from "src/enumes/enumes.data";
import { Starategy } from "./starategy.entity";
import { User } from "./user.entity";

@Entity()
export class Jornal extends Base {

   @Column()
    symboleId:  SymboleEnum;

    @ManyToOne(() => Starategy, { onDelete: 'SET NULL' })
    StrategyId: Starategy;

    @ManyToOne(() => User, { onDelete: 'SET NULL' })
     UserId: User;

    @Column()
    ReasonsForEntry: string

    @Column()
    ResultAfterTp: string


    @Column()//rsik Free
    ResultAfterRf: string  

      @Column('float')
      PercentageResult: number

        @Column('float')
        DollerResult: number

        @Column('float')
        Fee: number

        @Column({ type: 'nvarchar', length: 'max' })
        profileImage: string; // داده‌های Base64 تصویر

        @Column()
        Descriotion: string;


}
