import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetFlightInfoService {
  options = {
    "method": "GET",
    "hostname": "api.schiphol.nl",
    "port": null,
    "path": "/public-flights/flights?app_id=b546f58d&app_key=832430e3a6f2a599bf08ca0d8e59202f",
    "headers": {
      "resourceversion": "v3"
    }
  };

  constructor(public http:Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('resourceversion', 'v3')
  }

  getInfo() {
    const headers = new Headers(),
          url = 'https://' + this.options.hostname + this.options.path;

    this.createAuthorizationHeader(headers);

    return this.http.get(url, {
      headers: headers
    }).map(res => res.json());
  }
}
