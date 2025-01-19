import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty, IsString } from "class-validator";
import { IsPasswordValid } from "src/helper/decorators/IsPasswordValid.decorator";


export class RigisterDto  {
  
  

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsPasswordValid({ message: 'Password must contain at least one letter, one number, and one word with a minimum length of 6 characters.' })
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    isActive: boolean;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    UserName: string;
}