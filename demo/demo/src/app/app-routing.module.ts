import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {EditComponent} from './edit/edit.component';
import {CreateStudentComponent} from './create-student/create-student.component';


const routes: Routes = [
  {path:'create', component: CreateStudentComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', component: StudentListComponent},
  {path: 'list', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
