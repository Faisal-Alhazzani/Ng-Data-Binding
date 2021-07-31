import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: 'The great server', content: "Test Content", type: "server"}];
  evenNumber : number;
  oddNumber : number;
  evenNumbers:number[]= [];
  oddNumbers:number[]= [];
  
  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  onStartGame(num: number) {
    console.log(num)
    if (num %2 == 0){
        this.evenNumbers.push(num);
    }
    else {
      this.oddNumbers.push(num);
    }
  }
}