import { Module } from '@nestjs/common';

import { ResidueService } from './residue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidueEntity } from './residue.entity';
import { ResidueController } from './residue.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResidueEntity])],
  providers: [ResidueService],
  controllers: [ResidueController],
})
export class ResidueModule {}
