

var date = new Date();
dateTime();
setInterval(dateTime(),1000)
function dateTime(){
  var day=  date.getDate();
  var month=date.getMonth();
  var year=date.getFullYear();
  const months = ["January","Febnruary","March","April","May","June","July","August","September","October","November","December"]
  document.querySelector("#date").innerHTML= day+" "+months[month]+" "+year;
  document.querySelector("#time").innerHTML= date.toTimeString();

}

document.getElementById("myButton").addEventListener("click",logWeather);
document.addEventListener("keydown",function(event) {
  if (event.key === "Enter") {
      logWeather();
  }
});
var Weather;
async function logWeather() {
 dateTime();
  var cityName= document.getElementById("city").value;
  var key="b6c69176576944dba55101239233010";
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=`+cityName+"&aqi=no");
    Weather = await response.json();
    
   document.querySelector("#cityDisplay").innerHTML= Weather.location.name+", "+Weather.location.country;
   document.querySelector("#temp").innerHTML= Weather.current.temp_c + "°C ";
   document.querySelector("#condition").innerHTML= "("+Weather.current.condition.text+")";
   document.querySelector("#humidity").innerHTML= Weather.current.humidity+"%";
   document.querySelector("#wind").innerHTML= Weather.current.wind_kph+"Km/hr";
   
   var cityName= document.getElementById("city").value;
  
   var condition =Weather.current.condition.text;
   if(condition.includes("rain")){
   document.querySelector("#imagenow").src= "./images/rain.png"}
   if(condition.includes("drizzle")){
   document.querySelector("#imagenow").src= "./images/drizzle.png"}
   if(condition.includes("snow")||condition.includes("Ice")||condition.includes("ice")){
   document.querySelector("#imagenow").src= "./images/snow.png"}
   if(condition.includes("Clear")||condition.includes("Sunny")){
   document.querySelector("#imagenow").src= "./images/clear.png"}
   if(condition.includes("fog")||condition.includes("Mist")){
   document.querySelector("#imagenow").src= "./images/mist.png"}
   if(condition.includes("Overcast")){
   document.querySelector("#imagenow").src= "./images/clouds.png"}
   if(condition.includes("Blizzard")){
   document.querySelector("#imagenow").src= "./images/rain.png"}
  }