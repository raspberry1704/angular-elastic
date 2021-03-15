import { Component } from '@angular/core';

// @ts-ignore
import { Client } from 'elasticsearch-browser';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'tennis';

    private client: Client;
    private connection="hello";


    constructor() {
        console.log(environment.webApiURL);
        this.client = new Client({
            host: 'http://elastic:test123@localhost:9200',
            httpAuth: 'elastic:test123',
            log: 'trace'
        });

        this.client.search({
            index: 'insert-players-2021.03.14.08',
                body: {
                    query: {
                        match_all: {}
                    },
                }
            }).then(function (response: any) {
                console.log( response );
            });
    }

    isAvailable(): any {
        this.client.ping({
          requestTimeout: Infinity,
          body: 'hello JavaSampleApproach!'
        });
    }
}
