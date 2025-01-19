import { Expose } from "class-transformer";
import { GetStarategyDto } from "../strategy/get-strategy.dto";

export class GetApprovalDto{
     
         Title:string;
       
        Strategies?: GetStarategyDto[];

        UserId:number;
}