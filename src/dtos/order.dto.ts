import { IsString, IsNumber } from 'class-validator';
export class CreateOrderDto {
  @IsNumber()
  public product_builder_id: number;
  @IsNumber()
  public user_id: number;
  @IsNumber()
  public cart_id: number;
  @IsString()
  public status: string;
  @IsString()
  public shipping_address: string;
  @IsNumber()
  public mobile_number: number;
  @IsString()
  public payment_status: string;
}
