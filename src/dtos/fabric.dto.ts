import { IsString, IsNumber } from 'class-validator';
export class CreateFabricDto {
  @IsNumber()
  public product_builder_id: number;
  @IsString()
  public name: string;
  @IsString()
  public color: string;
  @IsNumber()
  public price: number;
  @IsString()
  public category: string;
  @IsString()
  public milled_country_name: string;
  @IsString()
  public composition: string;
  @IsString()
  public cleaning: string;
  @IsNumber()
  public small_curtains: number;
  @IsNumber()
  public medium_curtains: number;
  @IsNumber()
  public large_curtains: number;
  @IsString()
  public fabric_type: string;
  
}
