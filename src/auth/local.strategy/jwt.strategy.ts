import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ignoreElements } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreElements: false,
      secretOrKey: 'reza-sanajir.trader.123456789', // کلید امن
    });
  }

  async validate(payload: any) {
    console.log("jwt startegy");

    
    return { userId: payload.sub, username: payload.userName };
  }
}
