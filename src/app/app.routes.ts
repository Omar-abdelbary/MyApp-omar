import { NotFoundComponent } from './not-found/not-found.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path : "" , redirectTo: 'home', pathMatch: "full"  , title : "home"},
  {path : "home" , component : HomeComponent , title : "home"},
  {path : "about" , component : AboutComponent , title : "about"},
  {path : "allprojects" , component : AllprojectsComponent , title : "allprojects"},
  {path : "**" , component : NotFoundComponent , title : "notfound"}

];
