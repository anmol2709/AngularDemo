import { Component,OnInit } from '@angular/core';
import {Intern} from './intern'
import {AppService} from "./app.service";

@Component({
  providers:[AppService],
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  styleUrls:['./app/app.component.css']
})
export class AppComponent implements OnInit{
//   test:boolean=true;
//   test1:boolean=false;
// not ="NOT!!!!!!!!"
//   interns:Intern[]=[{
//     name:'Anmol',
//     id:1
//   },
//     {
//       name:'Pankhurie',
//       id:2
//     },
//     {
//       name:'Shubhra',
//       id:3
//     }
//   ];
//   name:string = '';
// hello() {
// this.test=!this.test;
// }
// //   hello1() {
// //     this.test1=!this.test1;
// //   }
//   clickme(param:string){
//   alert(param);
//   }
//
//   intern:Intern=new Intern()
//
//
//   submit(){
//   alert(JSON.stringify(this.intern))
// }


  ngOnInit(){
  this.myIntern=this.service.interns;
}
    myIntern:Intern[];


constructor(private service:AppService){
}
}
