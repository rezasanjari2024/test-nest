import { Column, Double, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { SymboleEnum } from "src/enums/enumes.data";

import { Reason } from "./Reason.entity";
import { Feeling } from "./feeling.entity";
import { Approval } from "./approval.entity";
import { Account } from "./account.entity";
import { Expose } from "class-transformer";
import { FeelingEnum } from "src/enums/feeing.enum";

@Entity()
export class Jornal extends Base {

   @Column()
    SymboleId:  SymboleEnum;

    @Column()
    UserId:  number;

    @Expose({name:"AccountId"})
    @ManyToOne(() => Account, { onDelete: 'SET NULL' })
    Account: Account;
    


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

        @Column({ type: 'nvarchar', length: 'max' ,nullable:true})
        profileImage: string; // داده‌های Base64 تصویر

        @Column()
        Descriotion: string;

        // دلایل ورود
        @ManyToMany(() => Approval)
        @JoinTable({
          name: 'journalApproval', // جدول پیوندی برای دلایل ورود
          joinColumn: { name: 'journal_id', referencedColumnName: 'id' },
          inverseJoinColumn: { name: 'approval_id', referencedColumnName: 'id' },
 })
 Approvals: Approval[];

 // دلایل شکست
 @ManyToMany(() => Reason)
 @JoinTable({
   name: 'JournalFailureReasons', // جدول پیوندی برای دلایل شکست
   joinColumn: { name: 'journalId', referencedColumnName: 'id' },
   inverseJoinColumn: { name: 'reasonId', referencedColumnName: 'id' },
 })
 Reasons: Reason[];
//احساسات هنگام معامله

@Column('simple-array') 
 feelings: FeelingEnum[];


}
