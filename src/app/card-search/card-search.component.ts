import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {
  @Output() onInput = new EventEmitter<string>()
  @Output() onSearch = this.onInput.pipe(debounceTime(400));

  inputSearch(text:string){
   this.onInput.emit(text);
    
  }

}
