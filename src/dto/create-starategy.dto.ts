import { ApiProperty } from "@nestjs/swagger";

export class CreateStarategyDto {
   @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;


}
