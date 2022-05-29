import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsNotEmpty({ message: 'Name é um campo obrigatório.' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'E-mail é um campo obrigatório.' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é um campo obrigatório.' })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca.',
  })
  password: string;
}
