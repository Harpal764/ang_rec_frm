import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  mockData: any = [];

  show: boolean = false;
  value: string | undefined;
  id!: number;

  constructor() {}

  remove(id:any) {
    this.mockData = this.mockData.filter((item: any) => {
      if (item.id !== id) {
        return item;
      }
    });
  }

  create(item: any) {
    this.mockData.push({
      id: Date.now(),
      title: item,
      done: false,
      date: new Date()
    });
  }

  update(title: any) {
    this.mockData.map((item: { [x: string]: any; id: number; }) => {
      if (item.id === this.id) {
        item['title'] = title;
      }
    });

    this.show = false;
  }

  edit(id: number, title: string | undefined) {
    this.show = true;
    this.value = title;
    this.id = id;
  }

  // setTaskComplete(id: any) {
  //   this.mockData.map((item: { [x: string]: boolean; id: any; }) => {
  //     if (item.id === id) {
  //       item['done'] = true;
  //     }
  //   });
  // }

  ngOnInit() {
  }

}
