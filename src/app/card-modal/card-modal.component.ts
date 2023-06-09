import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Cards } from './../Cards';
import * as global from '../global';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],


})


export class CardModalComponent implements OnInit {


  cards: Cards[] = [];
  filterCards: Cards[] = this.cards;




  constructor(private http: HttpClient) {



  }



  public ngOnInit(): void {
    const url: string = "http://localhost:3030/api/cards";
    this.http.get<[]>(url).subscribe((response) => {
      this.cards = Object.values(response)[0];
      console.log("data", response);
      console.log(this.cards[0].hp);
      console.log(this.cards[3].hp);
    },
      (error) => {
        console.log("Error : " + error);
      }
    )
  }

  searchCard(text: string) {
    this.filterCards = this.cards.filter(key => {
      const name = key.name.toLowerCase();
      const type = key.type.toLowerCase();
      const searchName = text.toLowerCase();
      const searchType = text.toLowerCase();
      return name.indexOf(searchName) !== -1 || type.indexOf(searchType) !== -1;
    })
  }

  addCard(card: any) {

    global.cardsGlobal.push(card);
    console.log(global.cardsGlobal);
  }


  getDamageArr(value: any) {
    let arr: any = [];
    if (value == null) {
      return [];
    }
    for (let i = 0; i < value.length; i++) {
      arr.push(value[i]['damage']);
    }
    return arr;
  }
  getEmotion(hp: any, damage: any, weakness: any) {

    if (weakness == null) {
      weakness = 0;
    }
    if (hp == null) {
      hp = 0;
    }

    const dataHp = parseInt(hp);

    let totalDamage = 0;
    for (let i = 0; i < damage.length; i++) {
      const d1 = parseInt(damage[i]);
      totalDamage = totalDamage + d1;
    }
    let result: number = ((dataHp / 10) + (totalDamage / 10) + 10 - (weakness)) / 5;

    result = result ? Math.round(result) : 0;
    let html = '';

    for (let i = 0; i < result; i++) {
      html = html + ` <img src="../../assets/cute.png" width="30px;">`;
    }
    return html;
  }

  getDamage(damage: any) {
    let totalDamage = 0;
    for (let i = 0; i < damage.length; i++) {
      const d1 = parseInt(damage[i]);
      totalDamage = totalDamage + d1;
    }
    return totalDamage ? totalDamage : 0;
  }

  getHp(hp: any) {

    if (hp === null) {
      return 0;
    }
    return (hp * 300) / 100;
  }



}
