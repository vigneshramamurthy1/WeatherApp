import { Component, Input } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: [ './app.component.css' ]
})
export class WeatherComponent  {
  constructor(private weatherService: WeatherService){

  }

  ngOnInit() {
    this.callCities();
  }

  @Input() name: string;
  valueInput1 = '';
  valueInput2 = '';
  valueInput3 = '';
  valueInput4 = '';
  valueInput5 = '';
  valueInput6 = '';
  valueInput7 = '';
  valueInput8 = '';
  valueInput9 = '';
  showOn1 :string = "";
  showOnData1 : boolean = true;
  showOn2 :string = "";
  showOnData2 : boolean = true;
  showOn3 :string = "";
  showOnData3 : boolean = true;
  showOn4 :string = "";
  showOnData4 : boolean = true;
  showOn5 :string = "";
  showOnData5 : boolean = true;
  showOn6 :string = "";
  showOnData6 : boolean = true;
  showOn7 :string = "";
  showOnData7 : boolean = true;
  showOn8 :string = "";
  showOnData8 : boolean = true;
  showOn9 :string = "";
  showOnData9 : boolean = true;
  input1: string = "";
  input2: string = "";
  input3: string = "";
  input4: string = "";
  input5: string = "";
  input6: string = "";
  input7: string = "";
  input8: string = "";
  input9: string = "";
  weatherStatus1 = "";
  weatherStatus2 = "";
  weatherStatus3 = "";
  weatherStatus4 = "";
  weatherStatus5 = "";
  weatherStatus6 = "";
  weatherStatus7 = "";
  weatherStatus8 = "";
  weatherStatus9 = "";
  temp1 = "";
  temp2 = "";
  temp3 = "";
  temp4 = "";
  temp5 = "";
  temp6 = "";
  temp7 = "";
  temp8 = "";
  temp9 = "";
  humudity1 ="";
  humudity2 ="";
  humudity3 ="";
  humudity4 ="";
  humudity5 ="";
  humudity6 ="";
  humudity7 ="";
  humudity8 ="";
  humudity9 ="";
  windSpeed1 ="";
  windSpeed2 ="";
  windSpeed3 ="";
  windSpeed4 ="";
  windSpeed5 ="";
  windSpeed6 ="";
  windSpeed7 ="";
  windSpeed8 ="";
  windSpeed9 ="";
  citi1 ="";
  citi2 ="";
  citi3 ="";
  citi4 ="";
  citi5 ="";
  citi6 ="";
  citi7 ="";
  citi8 ="";
  citi9 ="";

  
    updateInput1(value: string) { 
    this.valueInput1 = value; 
    }
    updateInput2(value: string) { 
    this.valueInput2 = value; 
    }
    updateInput3(value: string) { 
    this.valueInput3 = value; 
    }
    updateInput4(value: string) { 
    this.valueInput4 = value; 
    }
    updateInput5(value: string) { 
    this.valueInput5 = value; 
    }
    updateInput6(value: string) { 
    this.valueInput6 = value; 
    }
    updateInput7(value: string) { 
    this.valueInput7 = value; 
    }
    updateInput8(value: string) { 
    this.valueInput8 = value; 
    }
    updateInput9(value: string) { 
    this.valueInput9 = value; 
    }

    editOn1(value: string){
      this.showOn1 = value;
      this.showOnData1 = false;
    }
     editOn2(value: string){
      this.showOn2 = value;
      this.showOnData2 = false;
    }
     editOn3(value: string){
      this.showOn3 = value;
      this.showOnData3 = false;
    }
     editOn4(value: string){
      this.showOn4 = value;
      this.showOnData4 = false;
    }
     editOn5(value: string){
      this.showOn5 = value;
      this.showOnData5 = false;
    }
     editOn6(value: string){
      this.showOn6 = value;
      this.showOnData6 = false;
    }
     editOn7(value: string){
      this.showOn7 = value;
      this.showOnData7 = false;
    }
     editOn8(value: string){
      this.showOn8 = value;
      this.showOnData8 = false;
    }
     editOn9(value: string){
      this.showOn9 = value;
      this.showOnData9 = false;
    }

updateEdit1(value: string){

}
updateEdit2(value: string){
  
}
updateEdit3(value: string){
  
}
updateEdit4(value: string){
  
}
updateEdit5(value: string){
  
}
updateEdit6(value: string){
  
}
updateEdit7(value: string){
  
}

updateEdit8(value: string){
  
}
updateEdit9(value: string){
  
}

callCities(){
  this.weatherService.getCities().subscribe(data => {
    console.log(data);
    //localStorage.setItem("certona",resultData);
  });
}

}