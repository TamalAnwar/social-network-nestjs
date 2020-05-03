import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  userID: string;
  @ApiProperty({
    description: "The user's name",
  })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({
    description: 'The username',
  })
  @IsNotEmpty()
  @IsString()
  username: string;
  bio: string;
}
