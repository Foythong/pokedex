import { Cards } from './../Cards';
import { Component } from '@angular/core';
import * as global from '../global';


@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent {

  cardsStore:Cards[] = global.cardsGlobal;

  // test(){
  //   console.log("cardsStore",this.cardsStore);
  // }

  delCard(index:number){
    global.cardsGlobal.splice(index,1);
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

    result = result ? Math.round(result)  : 0;
    let html = '';

    for (let i = 0; i < result; i++) {
      html = html + ` <img src="../../assets/cute.png" width="30px;">`;
    }
    return html;
  }

  getDamage(damage:any){
    let totalDamage = 0;
    for (let i = 0; i < damage.length; i++) {
      const d1 = parseInt(damage[i]);
      totalDamage = totalDamage + d1;
    }
    return totalDamage? totalDamage:0;
  }

  getHp(hp:any){
    if(hp === null){
      return 0;

    }
    return (hp*150)/100;
  }






}
