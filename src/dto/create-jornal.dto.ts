import { ApiProperty } from '@nestjs/swagger';

    export class CreateJornalDto {
   @ApiProperty()
      symboleId:  number;
  
        @ApiProperty()
      StrategyId: number;
  

       UserId: number;
  
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
    }

