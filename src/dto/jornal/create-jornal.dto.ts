import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsArray, IsEnum } from 'class-validator';
import { SymboleEnum } from 'src/enums/enumes.data';
import { FeelingEnum } from 'src/enums/feeing.enum';

    export class CreateJornalDto {
   @ApiProperty()
      SymboleId:  SymboleEnum;

      @ApiProperty()
   UserId: number;

    @Expose({name:"Account"})
        @ApiProperty()
        AccountId: number;
  
      @ApiProperty()
      ReasonsForEntry: string
  
      @ApiProperty()
      ResultAfterTp: string
  
  
      @ApiProperty()//rsik Free
      ResultAfterRf: string  
  
        @ApiProperty()
        PercentageResult: number
  
          @ApiProperty()
          DollerResult: number
          
          @ApiProperty()
          profileImage: string; // داده‌های Base64 تصویر
  
          @ApiProperty()
          Descriotion: string;

          @ApiProperty()
           Approvals: number[];

           @ApiProperty()
            Reasons:number[];

            @ApiProperty()
            @IsArray()
            @IsEnum(FeelingEnum, { each: true }) // اعتبارسنجی هر عنصر از آرایه
            feelings: FeelingEnum[];
        }

