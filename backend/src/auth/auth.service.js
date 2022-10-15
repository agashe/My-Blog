import { Injectable, Dependencies } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
@Dependencies(UsersService, JwtService)
export class AuthService {
  constructor(usersService, jwtService) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }

  async validateUser(username, pass) {
    const user = await this.usersService.find();

    if (pass == user.password) {
      return user;
    }

    return null;
  }

  async login(user) {
    const payload = { username: user.name, sub: user._id };
    return {
      id: user._id,
      access_token: this.jwtService.sign(payload),
    };
  }
}
