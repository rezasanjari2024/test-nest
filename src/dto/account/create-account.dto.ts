import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

 
export class CreateAccountDto {

    @ApiProperty()
    Balance: number;

    @ApiProperty()
    Broker: string;

   @ApiProperty()
   @Expose({name: 'Strategy'})
   StrategyId?: number;
   
}


