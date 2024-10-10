import { Controller, Get } from '@nestjs/common';

import { ResidueService } from './residue.service';

@Controller('residue')
export class ResidueController {
  constructor(private residueService: ResidueService) {}

  @Get()
  get() {
    return this.residueService.get();
  }
}
