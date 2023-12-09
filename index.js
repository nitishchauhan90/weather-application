const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey="63f4b62f23768080a1f6f3d869750c43"
const input=document.getElementById("search--bar")
const btn=document.getElementById("search--icon")
const img=document.getElementById("weather--img")
async function checkweather(city){
    const response= await fetch(apiurl+city+`&appid=${apikey}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block"
    }
    else{
        document.querySelector(".error").style.display="none"
    }
    
    let data = await response.json()
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"°C"
    document.querySelector("#city").innerHTML=data.name
    document.querySelector("#humidity").innerHTML=data.main.humidity+"%"
    document.querySelector("#wind").innerHTML=data.wind.speed+"km/h"
    
    if(data.weather[0].main=="Clouds"||data.weather[0].main=="Smoke"){
        img.src="./images/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        img.src="./images/rain.png"
    }
    else if(data.weather[0].main=="snow"){
        img.src="./images/snow.png"
    }
    else if(data.weather[0].main=="Haze"){
        img.src="./images/mist.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        img.src="./images/drizzle.png"
    }

    document.getElementById("last").style.display="flex"
    document.getElementById("city").style.display="block"
    document.getElementById("temp").style.display="block"
    document.getElementById("weather--img").style.display="block"
}

btn.addEventListener("click",()=>{
    checkweather(input.value)
}) 