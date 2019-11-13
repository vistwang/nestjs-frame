import { Injectable } from '@nestjs/common';

import { UserInfoInterface } from './users.interface';

@Injectable()
export class UsersService {
    private readonly users: UserInfoInterface[] = [
        {
            id: 1,
            name: '小明',
            age: 18,
        },
        {
            id: 2,
            name: '小花',
            age: 18,
        },
        {
            id: 3,
            name: '小王',
            age: 18,
        },
    ];

    create(cat: UserInfoInterface) {
        this.users.push(cat);
    }

    findAll(): UserInfoInterface[] {
        return this.users;
    }
}
