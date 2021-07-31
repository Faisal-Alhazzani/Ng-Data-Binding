import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  lastNumber= 1; 
  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() GameStarted= new EventEmitter<number>();

  onStartGame(){
    this.interval = setInterval(()=> {
      this.GameStarted.emit(this.lastNumber)
      this.lastNumber++;
    },1000);
  }
  onStopGame(){
    clearInterval(this.interval)
  }
}
