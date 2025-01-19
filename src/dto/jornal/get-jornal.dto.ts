import { SymboleEnum } from "src/enums/enumes.data";
import { GetAccountDto } from "../account/get-account.dto";
import { GetApprovalDto } from "../approval/get-approval.dto";
import { FeelingEnum } from "src/enums/feeing.enum";
import { ReasonDto } from "../reason/reason.dto";

  export class GetJornalDto {
  
    id:number
    
      Symbole:  SymboleEnum;
  
      UserId: number;

    
        Account: GetAccountDto;

      ReasonsForEntry: string
  
     
      ResultAfterTp: string
  
  
     
      ResultAfterRf: string  
  
     
        PercentageResult: number
  

          DollerResult: number
          

          profileImage: string; // داده‌های Base64 تصویر
  
     
          Descriotion: string;

       
         
                   Approvals: GetApprovalDto[];
        
                  
                    Reasons:ReasonDto[];
        
                    feelings: FeelingEnum[];
        }
