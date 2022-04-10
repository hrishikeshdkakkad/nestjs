import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { CatalogueService, RootObject } from './catalogue.service';

@Controller('catalogue')
export class CatalogueController {
  constructor(private catalogueService: CatalogueService) {}

  @Get()
  async findAll(): Promise<Observable<AxiosResponse<RootObject, any>>> {
    return this.catalogueService.findAllItems();
  }
}
