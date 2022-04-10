import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { BaseApiResponse } from 'src/shared/dtos/base-api-response.dto';

import { Item } from './entities/item.entity';
import { CreateItemInput } from './item.dto';
import { ItemService } from './item.service';
import { ItemOutout } from './item-output.dto';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  async getAllItems(): Promise<Item[]> {
    return this.itemService.getAllItems();
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async addNewItem(
    @Body() item: CreateItemInput,
  ): Promise<BaseApiResponse<ItemOutout>> {
    const result = await this.itemService.addNewItem(item);
    return { data: result, meta: {} };
  }
}
