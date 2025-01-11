import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { User } from "src/entities/user.entity";
import { GetUserDto } from "../user/get-user.dto";

 
export class GetAccountDto {

    @Expose()
    Balance: number;

    @Expose()
    Broker: string;

   @Expose()
   @Type(() => GetUserDto)
    UserId: GetUserDto;
}


