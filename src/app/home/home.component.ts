import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('users',[
      transition('* => *',[

        query(':enter',style({opacity:0}),{optional: true}),

        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 0,transform: 'translateY(-75%)',offset: 0}),
            style({opacity: .5,transform: 'translateY(35px)',offset: .3}),
            style({opacity: 1,transform: 'translateY(0)',offset: 1}),
          ]))]),{optional: true}),

          query(':leave',stagger('300ms',[
            animate('.6s ease-in',keyframes([
              style({opacity: 1,transform: 'translateY(0)',offset: 0}),
              style({opacity: .5,transform: 'translateY(35px)',offset: .3}),
              style({opacity: 0,transform: 'translateY(-75%)',offset: 1}),
            ]))]),{optional: true})
      ])
     ])
  ]
})
export class HomeComponent implements OnInit {

  count: number;
  btnText:string ='Submit';
  goal: string='';
  
  users=[];
  constructor() { }

  ngOnInit() {
    this.count=this.users.length;
  }
  add(){
    if (this.goal.length > 1) {
      this.users.push(this.goal);
      this.goal='';
      this.count=this.users.length; 
    }
    
  }
  remove(i){
    this.users.splice(i,1);
    this.count=this.users.length;

  }

}
