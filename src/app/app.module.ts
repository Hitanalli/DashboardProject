import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    TopCardsComponent,
    NewUsersComponent,
    RecentOrdersComponent,
    LineChartComponent,
    PieChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
