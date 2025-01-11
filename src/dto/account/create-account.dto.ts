import { ApiBody, ApiProperty } from "@nestjs/swagger";

 
export class CreateAccountDto {

    @ApiProperty()
    Balance: number;

    @ApiProperty()
    Broker: string;

   @ApiProperty()
    UserId: number;
}


