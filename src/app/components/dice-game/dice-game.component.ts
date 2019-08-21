import {Component, OnInit} from '@angular/core';
import {RollService} from "../../roll.service";


function aggregate(arr) {
  return arr.reduce((total, currentVal) => total + currentVal, 0);
}

@Component({
  selector: 'app-dice-game',
  templateUrl: './dice-game.component.html',
  styleUrls: ['./dice-game.component.css']
})
export class DiceGameComponent implements OnInit {

  gameStarted = false;
  playerDiceList: Array<number> = [];
  opponentDiceList: Array<number> = [];

  constructor(private service: RollService) {
  }

  ngOnInit() {
  }

  isGameStarted(): boolean {
    return this.gameStarted;
  }

  quitGame() {
    this.gameStarted = false;
    this.opponentDiceList = [];
    this.playerDiceList = [];
  }

  startGame() {
    this.gameStarted = true;
    this.service.roll().subscribe(num => {
      this.opponentDiceList = [num];
    });
  }

  playerRoll() {
    this.service.roll().subscribe(num => {
      this.playerDiceList.push(num);
    });
  }

  isGameLost(): boolean {
    if (!this.playerDiceList.length) {
      return false;
    }
    const playerCount = aggregate(this.playerDiceList);
    const opponentCount = aggregate(this.opponentDiceList);

    if (this.opponentDiceList.length === 2 && opponentCount >= playerCount) {
      return true;
    }

    return playerCount > 12;
  }


  opponentRoll() {
    this.service.roll().subscribe(num => {
      this.opponentDiceList.push(num);
    });
  }
}
