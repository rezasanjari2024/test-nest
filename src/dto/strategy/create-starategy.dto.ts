import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEnum } from "class-validator";
import { SymboleEnum } from "src/enums/enumes.data";

export class CreateStarategyDto {
   

    @ApiProperty()
    Name: string;

    @ApiProperty()  
    Description: string;

    @ApiProperty()
    DoTime: string;//زمان انجام معامله
    
  
 
     @ApiProperty({
        description: 'List of symbols',
        enum: SymboleEnum,
        isArray: true, // اگر مقدار یک آرایه از enum است
      })
        @IsEnum(SymboleEnum, { each: true }) // اعتبارسنجی هر عنصر از آرایه
    Symbol: SymboleEnum[];
}



