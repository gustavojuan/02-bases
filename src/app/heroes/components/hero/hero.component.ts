import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;


  //Getters metodos que aparentan ser propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero ():void
  {
    //cambia el nombre de heroe a spiderman
    this.name = 'Spiderman';
  }

  changeAge():void {
    // cambia a no 45 de edad
    this.age=17;
  }


  resetForm():void {

    this.name = 'ironman';
    this.age = 45;


    /*si nos saltamos el ciclo podemos liarla*/
    // document.querySelectorAll('h1').forEach((element)=>{
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }

}
