#! /usr/bin/env node
//如果node不在根目录
//which node 找到node所在路径 
//#!/node路径/bin/env node
var axios = require("axios");
//console.log(process.argv);
var data={}
if(process.argv[2]){
	data.params={
		city:process.argv[2]
	}
}
axios.get('http://api.jirengu.com/weather.php',data)
	.then(function  (res) {
		var weatherinfo = res.data.results[0];
		console.log("currentCity:"+weatherinfo.currentCity);
		console.log("pm25:"+weatherinfo.index[0]['des']);
		console.log("date:"+weatherinfo.weather_data[0]['date']);
		console.log("temperature:"+weatherinfo.weather_data[0]['temperature']);
		console.log("weather:"+weatherinfo.weather_data[0]['weather']);
	})
	.catch(function(error){
			console.log(error);
		})