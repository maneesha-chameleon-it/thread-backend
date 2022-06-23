export interface ProductBuilder {
  id: number;
  fabric_id: number;
  user_id: number;
  measuring_for: string;
  type_of_room: string;
  kind_of_room: string;
  window_name: string;
  pole_or_track_status: string;
  width: number;
  height: number;
  panel: string;
  curtain_close: string;
  style: string;
  lining: string;
  pole_and_track: string;
  poleMaterial: string;
  poleDiameter: number;
  polEnd: string;
  polFinish: string;
  trackEnd: string;
  trackFinish: string;
  pooling: string;
  total_price: number;
  image:string
}