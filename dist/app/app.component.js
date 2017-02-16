"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require("./app.service");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
    }
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
    AppComponent.prototype.ngOnInit = function () {
        this.myIntern = this.service.interns;
    };
    AppComponent = __decorate([
        core_1.Component({
            providers: [app_service_1.AppService],
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map