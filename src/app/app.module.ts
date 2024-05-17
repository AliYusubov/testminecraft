import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module (1)';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetComponent } from './get/get.component';
import { GameComponent } from './game/game.component';
import { QuestionsComponent } from './questions/questions.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    RoutingComponents,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
