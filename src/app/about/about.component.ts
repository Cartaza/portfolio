import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mostrarHtml:boolean = false;
  mostrarCss:boolean = false;
  mostrarJS:boolean = false;
  mostrarAngular:boolean = false;
  mostrarBootstrap:boolean = false;
  mostrarJava:boolean = false;
  mostrarTS:boolean = false;
  mostrarGit:boolean = false;
  mostrarJquery:boolean = false;
  mostrarMysql:boolean = false;
  ocultar:boolean = true;
  html:string = "Html";
  css:string = "Css";
  js:string = "JavaScript";
  bs:string = "Bootstrap";
  angular:string = "Angular";
  java:string = "Java";
  mysql:string = "Mysql";
  git:string = "Git";
  jquery:string = "jQuery";
  ts:string = "TypeScript";


  constructor() { }

  ngOnInit(): void {

}



}
