import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { GetComponent } from './get/get.component';
import { GameComponent } from './game/game.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'home', component: MyHomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'game', component: GameComponent },
  { path: 'get', component: GetComponent },
  { path: '', redirectTo: "/home", pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [QuestionsComponent,MyHomeComponent,FormsComponent,GameComponent,GetComponent]
