import { IsString, IsEmail, IsNumber } from 'class-validator';
export class CreateProductBuilderDto {
  @IsNumber()
  public fabric_id: number;
  @IsString()
  public measuring_for: string;
  @IsString()
  public type_of_room: string;
  @IsString()
  public kind_of_room: string;
  @IsString()
  public window_name: string;
  @IsString()
  public pole_or_track_status: string;
  @IsNumber()
  public width: number;
  @IsNumber()
  public height: number;
  @IsString()
  public panel: string;
  @IsString()
  public style: string;
  @IsString()
  public lining: string;
  @IsString()
  public pole_and_track: string;
  @IsString()
  public pooling: string;
  @IsNumber()
  public total_price: number;
  @IsString()
  public product_type: string;

}
