import { IsString, IsNumber } from 'class-validator';
export class CreateStyleDto {
  @IsString()
  public fabric_type: string;
  @IsNumber()
  public height: number;
  @IsNumber()
  public width: number;
  @IsNumber()
  public price: number;
  
}
