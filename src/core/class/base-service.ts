import { Base } from './base';

export abstract class BaseService extends Base {
    constructor() {
        super(BaseService.name);
    }
}
