import { IsString, IsNumber } from 'class-validator';
export class CreatePaymentDto {
  @IsString()
  public invoice: string;
  @IsNumber()
  public amount: number;
  @IsNumber()
  public order_id: number;
  @IsNumber()
  public transaction_id: number;
  @IsNumber()
  public shipping_address: string;
  @IsString()
  public transaction_status: string;
}
