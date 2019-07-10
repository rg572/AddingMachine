import { Component, OnInit } from '@angular/core';
import { Evaluator } from '../../../evaluator';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})


export class TextInputComponent implements OnInit {

  calculator: Evaluator = new Evaluator;
  inputString: string;
  currentValue: number = 0;
  pastActions: string[] = [];
  logString: string = "";

  constructor() {

  }

  ngOnInit() {
  }

  submit() {
    this.currentValue = this.calculator.run(this.inputString, this.currentValue);
    this.pastActions.push(this.inputString + " = " + this.currentValue);
    this.logString = this.pastActions.join("\n");
    this.scrollToBottom();
    this.inputString = "";
  }

  scrollToBottom(): void{
    document.getElementById("outputArea").scrollTop = document.getElementById("outputArea").scrollHeight;
  }

}
