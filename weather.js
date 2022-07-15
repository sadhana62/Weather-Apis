var btn = document.getElementById("sub");
var headingFinal = document.getElementById("heading");
var description = document.getElementById("desc");
var temperature = document.getElementById("temp");
var windInfo = document.getElementById("wind");

function conversion(val)
{
    return (val-273).toFixed(2);
}

apik = "3045dd712ffe6e702e3245525ac7fa38";

btn.addEventListener('click',function()
{
    var inp = document.getElementById("userInput").value;
    const request = new XMLHttpRequest();
    request.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+inp+'&appid='+apik,true);
   
    request.onreadystatechange = function ()
    {
         console.log(this.readyState);
         console.log(this.status);
    };
    request.send();
    request.onload = function()
    {
        const data = JSON.parse(this.responseText);
        console.log(data);
        headingFinal.innerHTML = `Weather of ${inp} `;
        description.innerHTML =`Description : ${data['weather'][0]['description']}`;
        temperature.innerHTML = `Temperature : ${conversion(data['main']['temp'])}`;
        windInfo.innerHTML =`Wind Info : ${data['wind']['speed']} Km/h`;
    }
  


    

})