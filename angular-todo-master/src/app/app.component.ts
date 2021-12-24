import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  // taskList:any[]=[];

  // addTask(item:any){
    
  //   this.taskList.push({id:this.taskList.length , name:item})
  //   localStorage.setItem("id",JSON.stringify(this.taskList))
    // console.log(this.taskList)
  // }

  // removeTask(id:number){
  //   this.taskList=this.taskList.filter(item=>item.id!==id)
  //   // console.log(id)
  // }
}
