import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
import { Events } from './events/events';
import { Functions } from './functions/functions';
import { Looping } from './looping/looping';
import { Signalss } from './signalss/signalss';
import { ComputedSignal } from './computed-signal/computed-signal';
import { Effects } from './effects/effects';
import { Chaild } from './chaild/chaild';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';
import { TwoWayDataBinding } from './two-way-data-binding/two-way-data-binding';
import { ToDoApp } from './to-do-app/to-do-app';
// import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  // NgFor, NgIf,
  imports: [ToDoApp,TwoWayDataBinding,Login, SigninComponent,Chaild,PipeShortNamePipe,ConvertPipe, Events,Functions,Looping,Signalss,ComputedSignal,Effects,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myProjrct')
fullName='vayala madhu';
usd=10;
ToInt=85;
titles ='LoopingKaa';

  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;

  winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
    [0, 4, 8], [2, 4, 6]           // diagonals
  ];

  makeMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

  }

  checkWinner() {
    for (let combo of this.winningCombinations) {
      const [a, b, c] = combo;

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.board[a];
        return;
      }
    }

    if (!this.board.includes('')) {
      this.winner = 'Draw';
    }
  }

  resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }

count=0;
  handleClick() {
    const greet = 'hi';
    console.log('sunction clicked'+this.count)
    this.helloWorld();
  }
  helloWorld(){
    console.log('hellow World')
  }
  name:any;
  handleChaildData(data:any){
    alert(data);
    this.name=data;
  }
}