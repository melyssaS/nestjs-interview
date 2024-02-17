import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private readonly jwtService: JwtService,) { }


    async signIn(loginDto: LoginDto) {
        const { email, password } = loginDto;

        const user = await this.userService.findOneByEmail(email);
        if (!user) throw new UnauthorizedException('email is invalid')

        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) throw new UnauthorizedException('password is invalid');

        const payload = {
            id: user.id,
            companyName: user.companyName,
            role: user.role,

        };
        const token = await this.jwtService.signAsync(payload);

        return { token };

    }


    async signUp(createUserDto: CreateUserDto) {

        const { email, password } = createUserDto;
        const user = await this.userService.findOneByEmail(email);

        if (user) throw new BadRequestException('User already exists');

        const newUser = await this.userService.create({
            ...createUserDto,
            password: await hash(password, 10),
        });

        return { ...newUser };
    }

}
