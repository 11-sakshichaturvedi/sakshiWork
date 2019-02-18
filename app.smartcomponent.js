"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SmartComponent = (function () {
    function SmartComponent() {
        this.myalldata = [];
        this.data = {};
    }
    SmartComponent.prototype.add = function () {
        //alert(this.name);
        //alert("student is added");
        this.data = { 'type': this.mobileType };
        this.myalldata.push(this.data);
        console.log(this.myalldata);
        this.mobileType = "";
    };
    return SmartComponent;
}());
SmartComponent = __decorate([
    core_1.Component({
        selector: 'sm-app',
        template: './app.smart.html'
    })
], SmartComponent);
exports.SmartComponent = SmartComponent;
