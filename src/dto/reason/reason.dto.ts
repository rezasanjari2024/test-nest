import { ApiProperty } from "@nestjs/swagger";

export class ReasonDto  {
    @ApiProperty()
    id:number;
    @ApiProperty()
    Name:string;

}