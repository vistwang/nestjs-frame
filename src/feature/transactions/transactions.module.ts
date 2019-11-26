import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TransactionsSchema } from './block.schema';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  controllers: [TransactionsController],
  imports: [
    MongooseModule.forFeature([{ name: 'Transactions', schema: TransactionsSchema}]),
],
  providers: [TransactionsService],
})
export class TransactionsModule {}
