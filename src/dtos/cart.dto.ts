import { IsNumber } from 'class-validator';
export class CreateCartDto {
  @IsNumber()
  public product_builder_id: number;
  @IsNumber()
  public user_id: number;
  @IsNumber()
  public count: number;
  
}
