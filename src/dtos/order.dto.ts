import { IsString, IsNumber } from 'class-validator';
export class CreateOrderDto {
  @IsString()
  public status: string;
  @IsString()
  public shipping_address: string;
  @IsNumber()
  public mobile_number: number;
  @IsString()
  public payment_status: string;
}
