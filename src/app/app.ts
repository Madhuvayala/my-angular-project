import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  // NgFor, NgIf,
  imports: [Login,SigninComponent,Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myProjrct')









 board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;

  winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8],  // rows
    [0,3,6],[1,4,7],[2,5,8],  // columns
    [0,4,8],[2,4,6]           // diagonals
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

}
