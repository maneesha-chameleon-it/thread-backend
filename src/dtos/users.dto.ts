import { IsString, IsEmail, IsNumber } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
export class CreateUserDto {
  @IsEmail()
  public email: string;
  @IsString()
  public password: string;
  @IsString()
  public name: string;
  @IsString()
  public role: string;
  @IsNumber()
  public phoneNumber: number;
  @IsString()
  public address: string;
  @IsString()
  public emailStatus: string;

}
