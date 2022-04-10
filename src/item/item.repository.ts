import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { Item } from './entities/item.entity';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  async getById(id: number): Promise<Item> {
    const item = await this.findOne(id);
    if (!item) {
      throw new NotFoundException();
    }

    return item;
  }
}
