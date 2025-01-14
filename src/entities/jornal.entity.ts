import { Column, Double, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { SymboleEnum } from "src/enumes/enumes.data";
import { Starategy } from "./starategy.entity";
import { User } from "./user.entity";
import { Reason } from "./Reason.entity";
import { Feelings } from "./feeling.entity";

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
 // دلایل ورود
 @ManyToMany(() => Reason)
 @JoinTable({
   name: 'journalEntryReasons', // جدول پیوندی برای دلایل ورود
   joinColumn: { name: 'journal_id', referencedColumnName: 'id' },
   inverseJoinColumn: { name: 'reason_id', referencedColumnName: 'id' },
 })
 entryReasons: Reason[];

 // دلایل شکست
 @ManyToMany(() => Reason)
 @JoinTable({
   name: 'JournalFailureReasons', // جدول پیوندی برای دلایل شکست
   joinColumn: { name: 'journalId', referencedColumnName: 'id' },
   inverseJoinColumn: { name: 'reasonId', referencedColumnName: 'id' },
 })
 failureReasons: Reason[];

 @ManyToMany(() => Reason)
 @JoinTable({
   name: 'JournalFeelings',
   joinColumn: { name: 'journalId', referencedColumnName: 'id' },
   inverseJoinColumn: { name: 'feelingId', referencedColumnName: 'id' },
 })
 feelings: Feelings[];


}
