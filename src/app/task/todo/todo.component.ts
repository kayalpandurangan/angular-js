import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
taskList = ["kayal","renu"];
sometask="add";
  constructor() { }

  ngOnInit() {
  }
addtask = function(){
console.log(this.sometask);
this.taskList.push(this.sometask);
console.log(this.taskList);

}
deletetask=function(ct)
{
  this.taskList.splice(ct,1)
}
}