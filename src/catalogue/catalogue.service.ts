import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

export interface RootObject {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

@Injectable()
export class CatalogueService {
  constructor(
    private httpService: HttpService,
    private config: ConfigService,
  ) {}

  findAllItems(): Observable<AxiosResponse<RootObject>> {
    const service2Endpoint = this.config.get<string>('SERVICE_ENDPOINT');

    console.log('In here');

    console.log(service2Endpoint);

    return this.httpService
      .get(`${service2Endpoint}/api/v1/catalogue`)
      .pipe(map((response) => response.data));
  }
}
