import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly users;
    create(CreateUserDto: CreateUserDto): CreateUserDto;
    findAll(): any[];
}
