import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResidueEntity } from './residue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResidueService {
  constructor(
    @InjectRepository(ResidueEntity)
    private residueRepository: Repository<ResidueEntity>,
  ) {}

  get() {
    return this.residueRepository.find();
  }
}
