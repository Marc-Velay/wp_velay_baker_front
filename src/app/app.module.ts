import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ItemsComponent }      from './items/items.component';
import { ItemDetailComponent }      from './item-detail/item-detail.component';
import { MessagesComponent }    from './messages/messages.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './auth.guard';

import { HistoricalDisplayComponent } from './historical-display/historical-display.component';

import { GraphDataService }          from './graphData.service';
import { ItemService }          from './items.service';
import { MessageService }       from './message.service';
import { AlertService }          from './alert.service';
import { AuthenticationService }          from './authentication.service';
import { UserService }          from './user.service';
import { PortfolioService }          from './portfolio.service';

import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

//import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),*/


  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    ItemDetailComponent,
    MessagesComponent,
    HistoricalDisplayComponent,
    jqxChartComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PortfolioComponent
  ],
  providers: [
        MessageService,
        GraphDataService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ItemService,
        PortfolioService,
        // providers used to create fake backend
        /*fakeBackendProvider,
        MockBackend,
        BaseRequestOptions*/
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
