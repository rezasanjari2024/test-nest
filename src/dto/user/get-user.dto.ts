import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";


export class GetUserDto  {
  
    @Expose()
    id?: number;
    @Expose()
    name: string;

    @Expose()
    email: string;

    @Exclude()
    password: string;

    @Expose()
    isActive: boolean;
    
    @Expose()
    UserName: string;
}