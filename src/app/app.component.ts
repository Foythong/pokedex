import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Cards } from './Cards';


const COLORS = {
  Psychic: '#f8a5c2',
  Fighting: '#f0932b',
  Fairy: '#c44569',
  Normal: '#f6e58d',
  Grass: '#badc58',
  Metal: '#95afc0',
  Water: '#3dc1d3',
  Lightning: '#f9ca24',
  Darkness: '#574b90',
  Colorless: '#FFF',
  Fire: '#eb4d4b',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(private rs: RestService) { }


  cards: Cards[] = [];

  filterCards : Cards[] = this.cards;
  ngOnInit(): void {
    this.rs.getCards().subscribe
      (
        (response) => {
          this.cards  = response;
        },
        (error) => {
          console.log("Error Occured : " + error);
        }
      )  
  }

  searchCard(text:string){
    // console.log("d",text);  
    this.filterCards  = this.cards.filter(key=>{
      const name = key.name.toLowerCase();
      const searchName = text.toLowerCase();
      return name.indexOf(searchName) !== -1;
    })    
  }

}
