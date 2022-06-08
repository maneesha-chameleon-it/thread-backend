import { IsString, IsNumber } from 'class-validator';
export class CreateStyleDto {
  @IsNumber()
  public fabric_type: string;
  @IsString()
  public height: number;
  @IsString()
  public width: number;
  @IsNumber()
  public price: number;
  
}
