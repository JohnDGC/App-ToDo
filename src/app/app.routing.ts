import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./ui/notfound/notfound.component";

const appRoutes: Routes = [
  // { path: 'Home', loadChildren: () => import('./ui/createtask/createtask.module').then(m => m.CreateTaskModule) },
  { path: '', loadChildren: () => import('./ui/readtask/readtask.module').then(m => m.ReadTaskModule) },
  { path: '**', component: NotFoundComponent }
]

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
