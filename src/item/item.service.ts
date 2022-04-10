import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ArticleOutput } from 'src/article/dtos/article-output.dto';

import { CreateItemInput } from './item.dto';
import { Item } from './item.entity';
import { ItemRepository } from './item.repository';
import { ItemOutout } from './item-output.dto';

@Injectable()
export class ItemService {
  constructor(private repository: ItemRepository) {}
  async getAllItems(): Promise<Item[]> {
    return this.repository.find();
  }

  async addNewItem(item: CreateItemInput): Promise<ItemOutout> {
    const itemUnit = plainToClass(Item, item);
    const savedItem = this.repository.save(itemUnit);
    return plainToClass(ItemOutout, savedItem, {
      excludeExtraneousValues: true,
    });
  }
}
