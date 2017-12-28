import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
  isDesktop = true;
  constructor() {
    if (window.innerWidth > 600)
      this.isDesktop = true;
    else
      this.isDesktop = false;
  }

}
