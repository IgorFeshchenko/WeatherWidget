var wUrl = "http://api.openweathermap.org/data/2.5/weather?q=Minsk,by&APPID=59f1b47ae1fc581851e1bb0af1a3613c"; /// Current Weather
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=59f1b47ae1fc581851e1bb0af1a3613c" // 5 days forecast




var mainWindow = document.createElement('div');
mainWindow.setAttribute('id','mainWindow');
document.body.appendChild(mainWindow);

var showTown = document.createElement('div');
showTown.setAttribute('id','showTown');
mainWindow.appendChild(showTown);
var showTime = document.createElement('div');
showTime.setAttribute('id','showTime');
showTime.textContent="sdds"
mainWindow.appendChild(showTime);



var currentT =document.createElement('div');
currentT.setAttribute('id','currentT');
mainWindow.appendChild(currentT);

var windMain =document.createElement('div');
windMain.setAttribute('id','windMain');
mainWindow.appendChild(windMain);


var ul = document.createElement('ul');
document.body.appendChild(ul);
var li1= document.createElement('li');
ul.appendChild(li1);
li1.setAttribute('id','li1');


var li2= document.createElement('li');
ul.appendChild(li2);

var li3= document.createElement('li');
ul.appendChild(li3);

var li4= document.createElement('li');
ul.appendChild(li4);

var li5= document.createElement('li');
ul.appendChild(li5);

var p = document.getElementById('p');
var div11=document.getElementById('e');






function getWheather(myUrl){
    var imgWind = document.createElement('img');
    imgWind.setAttribute('class','img2');
    imgWind.setAttribute('src','icons/wind.png');
    windMain.appendChild(imgWind);
    
	var req = new XMLHttpRequest();
	req.onload = function(){
    var jsonResponse = req.response;
    var pic = document.createElement('img');
           pic.setAttribute('class','img3');
           pic.setAttribute('src','icons/'+req.response.weather[0].icon+'.png');
           currentT.appendChild(pic);
    currentT.innerHTML+= Math.round(jsonResponse.main.temp - 273 )+" "+ "&"+"deg"+"C";
    showTown.innerHTML=jsonResponse.name +"," +jsonResponse.sys.country ;
    windMain.innerHTML+= jsonResponse.wind.speed +" "+"m/s";

    function getData(){
	var date = new Date();
date.setTime(jsonResponse.dt * 1000);
showTime.textContent=date.toLocaleString();
}
getData();

}
   req.onerror = function() {
		console.log(req.statusText);
	}
    req.open("GET",myUrl,true);
    req.responseType = 'json';
    req.send();


	}
		


getWheather(wUrl);






function getForecast(Myurl2){
	var req = new XMLHttpRequest();
	req.onload = function(){
		console.log("+");
		var jsonResponse = req.response;
		console.log(req.response.list);
        
		
	var date1 = new Date();
date1.setTime(jsonResponse.list[4].dt * 1000);
console.log();
            
		    JSON.stringify(req.response.list[4].weather[0].icon);
           var pic1 = document.createElement('img');
           pic1.setAttribute('class','img1');
           pic1.setAttribute('src','icons/'+req.response.list[4].weather[0].icon+'.png');
			li1.innerHTML+=date1.toLocaleString();
			li1.appendChild(pic1);
			li1.innerHTML+=Math.round(req.response.list[4].main.temp-273)+" "+ "&"+"deg"+"C";



var date2 = new Date();
date2.setTime(jsonResponse.list[12].dt * 1000);

            JSON.stringify(req.response.list[12].weather[0].icon);
           var pic2 = document.createElement('img');
           pic2.setAttribute('class','img1');
           pic2.setAttribute('src','icons/'+req.response.list[12].weather[0].icon+'.png');
           
			li2.innerHTML+=date2.toLocaleString();
			li2.appendChild(pic2);
			li2.innerHTML+=Math.round(req.response.list[12].main.temp-273)+" "+ "&"+"deg"+"C";






var date3 = new Date();
date3.setTime(jsonResponse.list[20].dt * 1000);
            
             JSON.stringify(req.response.list[20].weather[0].icon);
           var pic3 = document.createElement('img');
           pic3.setAttribute('class','img1');
           pic3.setAttribute('src','icons/'+req.response.list[20].weather[0].icon+'.png');
           li3.innerHTML+=date3.toLocaleString();
			li3.appendChild(pic3);
			li3.innerHTML+=Math.round(req.response.list[20].main.temp-273)+" "+ "&"+"deg"+"C";
            





           
            var date4 = new Date();
date4.setTime(jsonResponse.list[28].dt * 1000);
            JSON.stringify(req.response.list[28].weather[0].icon);
           var pic4 = document.createElement('img');
           pic4.setAttribute('class','img1');
           pic4.setAttribute('src','icons/'+req.response.list[28].weather[0].icon+'.png');
           li4.innerHTML+=date4.toLocaleString();
			li4.appendChild(pic4);
			li4.innerHTML+=Math.round(req.response.list[28].main.temp-273)+" "+ "&"+"deg"+"C";
            
            









var date5= new Date();
date5.setTime(jsonResponse.list[36].dt * 1000);
            JSON.stringify(req.response.list[36].weather[0].icon);
           var pic5 = document.createElement('img');
           pic5.setAttribute('class','img1');
           pic5.setAttribute('src','icons/'+req.response.list[36].weather[0].icon+'.png');
            li5.innerHTML+=date4.toLocaleString();
			li5.appendChild(pic5);
			li5.innerHTML+=Math.round(req.response.list[36].main.temp-273)+" "+ "&"+"deg"+"C";
            
          
	
	}
		req.onerror = function(){
		console.log(req.statusText);

	}
	req.open("GET",Myurl2,true);
	req.responseType = 'json';
	req.send();
}
getForecast(forecastUrl);

