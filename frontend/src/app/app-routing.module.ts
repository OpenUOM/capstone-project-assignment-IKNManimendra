//inbuilt angular module -> router module

import { NgModule } from '@angular/core';//decorator to include imports and exports
import { Routes, RouterModule } from '@angular/router';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { AddNewTeacherComponent } from './components/add-new-teacher/add-new-teacher.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';


const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'student', component: StudentTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'addStudent', component: AddNewStudentComponent },
  { path: 'editStudent', component: EditStudentComponent },
  { path: 'editTeacher', component: EditTeacherComponent },
 // { path: 'deleteTeacher', component: TeacherTableComponent }//
];
console.log("app.routing.module.ts")
@NgModule({
  imports: [RouterModule.forRoot(routes)],//for root method - each route should be called at the root level
  exports: [RouterModule]//so that it could be accessed throughout the app
})
export class AppRoutingModule { }
