import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { BottomComponent } from './componentes/bottom/bottom.component';
import { TaskComponent } from './componentes/task/task.component';
import { TaskItemComponent } from './componentes/task-item/task-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomComponent,
    TaskComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
