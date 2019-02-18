"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CollegeComponent = (function () {
    function CollegeComponent() {
        this.clgName = "piet";
        this.clgid = 5456;
        this.imagename = "stt.jpeg";
        this.fieldname = "capgemini";
        this.status = true;
    }
    CollegeComponent.prototype.getAllstatus = function () {
        alert("welcome");
        console.log("welcome");
        this.status = false;
    };
    return CollegeComponent;
}());
CollegeComponent = __decorate([
    core_1.Component({
        selector: 'c-app',
        templateUrl: './app.clg.html',
        styles: ["img{border-style:solid;border-color:pink;border-width:10px;float:right; width:500px;height:500px}"]
    })
], CollegeComponent);
exports.CollegeComponent = CollegeComponent;
