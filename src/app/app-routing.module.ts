import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
{path:"",pathMatch:"full",component:RegisterComponent},
{path:"display",component:DisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
