import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { SymboleEnum } from "src/enumes/enumes.data";

export class CreateStarategyDto {
   
    @ApiProperty()
    id:number;

    @ApiProperty()
    Name: string;

    @ApiProperty()  
    Description: string;

    @ApiProperty()
    DoTime: string;//زمان انجام معامله
    
    @ApiProperty()
    @Expose({name: 'User'})
     UserId: number;
 
     @ApiProperty({
        description: 'List of symbols',
        enum: SymboleEnum,
        isArray: true, // اگر مقدار یک آرایه از enum است
      })
    Symbol: SymboleEnum[];
}



