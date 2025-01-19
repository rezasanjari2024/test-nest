import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { User } from "src/entities/user.entity";
import { SymboleEnum } from "src/enums/enumes.data";
import { GetUserDto } from "../user/get-user.dto";

export class GetStarategyDto {
   
    @ApiProperty()
    @Expose()
    id:number;

    @ApiProperty()
    @Expose()
    Name: string;

    @ApiProperty()  
    @Expose()
    Description: string;

    @ApiProperty()
    @Expose()
    DoTime: string;//زمان انجام معامله
    
    @ApiProperty()
    @Expose()
    @Type(() => GetUserDto) // برای مپ کردن User به DTO مربوطه
    User: GetUserDto;
 
     @ApiProperty({
        description: 'List of symbols',
        enum: SymboleEnum,
        isArray: true, // اگر مقدار یک آرایه از enum است
      })
      @Expose()
    Symbol: SymboleEnum[];
}



