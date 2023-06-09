import { RouteConfig } from './routeConfig';
import { RouteConfigToken } from './routeConfig.service';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log('ConfigService');
    console.log(this.configToken);
  }
}
