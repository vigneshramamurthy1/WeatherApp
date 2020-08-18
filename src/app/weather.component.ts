import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: [ './app.component.css' ]
})
export class WeatherComponent  implements OnInit{
  data : any = [];
  ApiKey = "fb82e02617662394f4f32428ea3c45db";
  constructor(private weatherService: WeatherService){

  }

  ngOnInit() {
    this.data = this.weatherService.getCities();
    console.log(this.data);
    localStorage.setItem("citi",this.data);
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
  temp1 = 0;
  temp2 = 0;
  temp3 = 0;
  temp4 = 0;
  temp5 = 0;
  temp6 = 0;
  temp7 = ;
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
  showError1 ="";
  showError2 ="";
  showError3 ="";
  showError4 ="";
  showError5 ="";
  showError6 ="";
  showError7 ="";
  showError8 ="";
  showError9 ="";
  
    updateInput1(value: string) { 
    this.valueInput1 = value; 
    alert(this.valueInput1)
    var data = this.data.filter(f=> f["name"] === this.valueInput1);
    console.log(data)
    if(data && data[0] ){
	this.showError1 ="";
	}
	else{
    this.showError1 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput2(value: string) { 
    this.valueInput2 = value; 
    var data = this.data.filter(f=> f["name"] === this.valueInput2);
    console.log(data)
    if(data && data[0] ){
		this.showError2 ="";
    }
    else{
    this.showError2 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput3(value: string) { 
    this.valueInput3 = value; 
    var data =  this.data.filter(f=> f["name"] === this.valueInput3);
    if(data && data[0] ){
		this.showError3 ="";
	}
    else{
    this.showError3 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput4(value: string) { 
    this.valueInput4 = value; 
    var data =  this.data.filter(f=> f["name"] === this.valueInput4);
    if(data && data[0] ){
		this.showError4 ="";
	}
    else{
    this.showError4 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput5(value: string) { 
    this.valueInput5 = value; 
    var data = this.data.filter(f=> f["name"] === this.valueInput5);
    if(data && data[0] ){
		this.showError5 ="";
	}
    else{
    this.showError5 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput6(value: string) { 
    this.valueInput6 = value; 
    var data = this.data.filter(f=> f["name"] === this.valueInput6);
    if(data && data[0] ){
		this.showError6 ="";
	}
    else{
    this.showError6 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput7(value: string) { 
    this.valueInput7 = value; 
    var data = this.data.filter(f=> f["name"] === this.valueInput7);
    if(data && data[0]){
		this.showError7 ="";
	}
    else{
    this.showError7 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput8(value: string) { 
    this.valueInput8 = value; 
    var data =  this.data.filter(f=> f["name"] === this.valueInput8);
    if(data && data[0] ){
		this.showError8 ="";
	}
    else{
    this.showError8 = "City is not Available Or Wrong City Name";
    }
    }
    updateInput9(value: string) { 
    this.valueInput9 = value; 
    var data =  this.data.filter(f=> f["name"] === this.valueInput9);
    if(data && data[0] ){
		this.showError9 ="";
	}
    else{
    this.showError9 = "City is not Available Or Wrong City Name";
    }
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


    getOpenWetherApi(obj, event){
		let id = obj.id;
		this.weatherService.getWeather(obj, this.ApiKey).subscribe(data =>{
		var obj = data;
		if(event ==1){
		this.citi1 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp1 = temp - 273.15;
		this.weatherStatus1 = obj["weather"]["description"];
		this.humudity1 = obj["main"]["humidity"];
		this.windSpeed1 = obj["wind"]["speed"];
	    }
		if(event == 2){
		this.citi2 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp2 = temp - 273.15;
		this.weatherStatus2 = obj["weather"]["description"];
		this.humudity2 = obj["main"]["humidity"];
		this.windSpeed2 = obj["wind"]["speed"];
	    } 
		if(event == 3){
		this.citi3 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp3 = temp - 273.15;
		this.weatherStatus3 = obj["weather"]["description"];
		this.humudity3 = obj["main"]["humidity"];
		this.windSpeed3 = obj["wind"]["speed"];
	    } 
		if(event == 4){
		this.citi4 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp4 = temp - 273.15;
		this.weatherStatus4 = obj["weather"]["description"];
		this.humudity4 = obj["main"]["humidity"];
		this.windSpeed4 = obj["wind"]["speed"];
	    }
		if(event == 5){
		this.citi5 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp5 = temp - 273.15;
		this.weatherStatus5 = obj["weather"]["description"];
		this.humudity5 = obj["main"]["humidity"];
		this.windSpeed5 = obj["wind"]["speed"];
	    }
		if(event == 6){
		this.citi6 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp6 = temp - 273.15;
		this.weatherStatus6 = obj["weather"]["description"];
		this.humudity6 = obj["main"]["humidity"];
		this.windSpeed6 = obj["wind"]["speed"];
	    }
		if(event == 7){
		this.citi7 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp7 = temp - 273.15;
		this.weatherStatus7 = obj["weather"]["description"];
		this.humudity7 = obj["main"]["humidity"];
		this.windSpeed7 = obj["wind"]["speed"];
	    }
		if(event == 8){
		this.citi8 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp8 = temp - 273.15;
		this.weatherStatus8 = obj["weather"]["description"];
		this.humudity8 = obj["main"]["humidity"];
		this.windSpeed8 = obj["wind"]["speed"];
	    }
		if(event == 9){
		this.citi9 = obj["name"];
		var temp = obj["main"]["temp"];
		this.temp9 = temp - 273.15;
		this.weatherStatus9 = obj["weather"]["description"];
		this.humudity9 = obj["main"]["humidity"];
		this.windSpeed9 = obj["wind"]["speed"];
	    }
		});
    }



}