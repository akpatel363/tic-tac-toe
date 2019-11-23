import { Component, ViewChild, ElementRef } from '@angular/core';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  groundMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  turn = true
  status = 0
  @ViewChild('div1',{static:false}) div1:ElementRef;
  @ViewChild('div2',{static:false}) div2:ElementRef;
  @ViewChild('div3',{static:false}) div3:ElementRef;
  @ViewChild('div4',{static:false}) div4:ElementRef;
  @ViewChild('div5',{static:false}) div5:ElementRef;
  @ViewChild('div6',{static:false}) div6:ElementRef;
  @ViewChild('div7',{static:false}) div7:ElementRef;
  @ViewChild('div8',{static:false}) div8:ElementRef;
  @ViewChild('div9',{static:false}) div9:ElementRef;

  constructor(private service: HelperService) { }
  
  ngAfterViewInit(): void {
  }

  changeTurn() {
    this.turn = !this.turn
  }
  reset(){
    this.div1.nativeElement.innerHTML=''
    this.div2.nativeElement.innerHTML=''
    this.div3.nativeElement.innerHTML=''
    this.div4.nativeElement.innerHTML=''
    this.div5.nativeElement.innerHTML=''
    this.div6.nativeElement.innerHTML=''
    this.div7.nativeElement.innerHTML=''
    this.div8.nativeElement.innerHTML=''
    this.div9.nativeElement.innerHTML=''
    this.groundMatrix = [[0,0,0],[0,0,0],[0,0,0]]
    this.status = 0
    this.turn = true
  }
  checkGameStatus() {
    if (this.service.checkWinner(this.groundMatrix, 2)) {
      this.status = 2
    } else if (this.service.checkWinner(this.groundMatrix, 1)) {
      this.status = 1
    } else if (this.service.isTied(this.groundMatrix)) {
      this.status = 3
    }
  }

  boxClicked(ele: HTMLDivElement, row: number, column: number) {
    if (this.groundMatrix[row][column] == 0 && this.status == 0) {
      if (this.turn) {
        ele.innerHTML = 'X'
        this.groundMatrix[row][column] = 1
      } else {
        ele.innerHTML = 'O'
        this.groundMatrix[row][column] = 2
      }
      this.checkGameStatus()
      this.changeTurn()
    }
  }
}
