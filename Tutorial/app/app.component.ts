/**
 * Created by chrysismylonas on 18/05/16.
 */

    import {Component} from 'angular2/core';

    import {HTTP_PROVIDERS} from 'angular2/http';
    import 'rxjs/Rx'; //load all features
    import {ProductListComponent} from "./product/product-list.component";
    import {ProductService} from "./product/product.service";


    @Component({
        selector: 'pm-app',
        template: `
        <div>
            <h1>{{ pageTitle }}</h1>
            <pm-products></pm-products>
        </div>`,
        directives: [ProductListComponent],
        providers:[ProductService, HTTP_PROVIDERS]
    })
    export class AppComponent{
        pageTitle: string = "Default Value";

    }


