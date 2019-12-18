import { Base } from './base';

export abstract class BasePipe extends Base {
    constructor() {
        super(BasePipe.name);
    }
}
