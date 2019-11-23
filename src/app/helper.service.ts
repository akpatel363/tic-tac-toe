import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() { }
  checkWinner(gMatrix,player){
    for(var i=0;i<3;++i){
      if(gMatrix[i][0]==player&&gMatrix[i][1]==player&&gMatrix[i][2]==player){
        return true
      }
    }
    for(var i=0;i<3;++i){
      if(gMatrix[0][i]==player&&gMatrix[1][i]==player&&gMatrix[2][i]==player){
        return true
      }
    }
    if(gMatrix[0][0]==player&&gMatrix[1][1]==player&&gMatrix[2][2]==player){
      return true
    }
    if(gMatrix[0][2]==player&&gMatrix[1][1]==player&&gMatrix[2][0]==player){
      return true
    }
    return false
  }
  isTied(gMatrix){
    for(var i=0;i<3;++i){
      for(var j=0;j<3;++j){
        if(gMatrix[i][j]==0){
          return false
        }
      }
    }
    return true
  }
}
