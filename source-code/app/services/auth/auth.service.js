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
//AOT
// import {database, auth} from 'firebase';
// import {FB} from "../../app.module";
//AOT todo
// JIT
var app_1 = require('firebase/app');
require('firebase/auth');
// JIT
var AuthService = (function () {
    function AuthService() {
        //JIT
        this.auth = app_1.default.auth();
        // JIT
        //AOT
        // this.auth = FB.auth();
        //AOT todo
    }
    AuthService.prototype.signIn = function (email, pass) {
        return this.auth.createUserWithEmailAndPassword(email, pass);
    };
    AuthService.prototype.logIn = function (email, pass) {
        return this.auth.signInWithEmailAndPassword(email, pass);
    };
    AuthService.prototype.logOut = function () {
        return this.auth.signOut();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map