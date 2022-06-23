import { IsString, IsEmail, IsNumber } from 'class-validator';
export class CreateProductBuilderDto {
  @IsNumber()
  public fabric_id: number;
  @IsNumber()
  public user_id: number;
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
  public curtain_close: string;
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
  public image: string;

}
export class CreateProductBuilderFeaturePoleDto {
  @IsNumber()
  public fabric_id: number;
  @IsNumber()
  public user_id: number;
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
  public curtain_close;
  @IsString()
  public style: string;
  @IsString()
  public lining: string;
  @IsString()
  public pole_and_track: string;
  @IsString()
  public poleMaterial: string;
  @IsNumber()
  public poleDiameter: number;
  @IsString()
  public polEnd: string;
  @IsString()
  public polFinish: string;
  @IsString()
  public pooling: string;
  @IsNumber()
  public total_price: number;
  @IsString()
  public image: string;

}
export class CreateProductBuilderFeatureTrackDto {
  @IsNumber()
  public fabric_id: number;
  @IsNumber()
  public user_id: number;
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
  public curtain_close;
  @IsString()
  public style: string;
  @IsString()
  public lining: string;
  @IsString()
  public pole_and_track: string;
  @IsString()
  public trackEnd: string;
  @IsString()
  public trackFinish: string;
  @IsString()
  public pooling: string;
  @IsNumber()
  public total_price: number;
  @IsString()
  public image: string;

}
