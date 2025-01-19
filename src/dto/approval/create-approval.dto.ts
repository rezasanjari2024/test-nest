import { ApiProperty } from "@nestjs/swagger";

export class CreateApprovalDto   {

   
    @ApiProperty()
     Title:string;

    @ApiProperty()
    Strategies?: number[];

   
}