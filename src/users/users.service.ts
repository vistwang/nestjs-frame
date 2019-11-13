import { Injectable } from '@nestjs/common';

import { UserArray } from './users.interface';

@Injectable()
export class UsersService {
    private readonly users: UserArray[] = [
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

    create(cat: UserArray) {
        this.users.push(cat);
    }

    findAll(): UserArray[] {
        return this.users;
    }
}
