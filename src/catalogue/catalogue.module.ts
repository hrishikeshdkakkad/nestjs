import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CatalogueController } from './catalogue.controller';
import { CatalogueService } from './catalogue.service';

@Module({
  imports: [HttpModule],
  providers: [CatalogueService, ConfigService],
  controllers: [CatalogueController],
})
export class CatalogueModule {}
