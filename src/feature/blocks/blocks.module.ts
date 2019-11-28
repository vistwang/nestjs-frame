import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlockSchema } from './block.schema';
import { BlocksController } from './blocks.controller';
import { BlocksService } from './blocks.service';

@Module({
    controllers: [
        BlocksController,
    ],
    imports: [
        MongooseModule.forFeature([{ name: 'Blocks', schema: BlockSchema}]), // collection: 'Blocks'
    ],
    providers: [BlocksService],
})
export class BlocksModule {}
