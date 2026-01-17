// Load environment variables from .env when running via Node
require('dotenv').config();

function test(){
    var x=1
    x=2
    console.log(x)
}
test()


const x=1
y=2
 console.log(x)


function sum(a=13,b=14){
    console.log(a+b)
}
 sum()



const suma=(num1,num2)=> {
    return num1+num2
}
console.log(suma(1,2));



const kec={
name:'gautam',
class:12,
rollno:33

}
console.log(kec.name)
console.log(kec.class)

for(var i=0;i<=3;i++){
    console.log(i)
}

for(var i=0;i<=3;i++){
    setTimeout(()=>console.log(i),1000) //same memory space so it will replace the previous o/p and give the final o/p
}


for(let i=0;i<=3;i++){
    setTimeout(()=>console.log(i),1000) //different memory space so different o/p
}


arr=[1,10,20,30,40]
for(let i=0;i<=5;i++){
    setTimeout(()=>console.log(arr[i]),1000)
}
arr.map((i)=>console.log(i)) //use map with argurement instead of for loop

 const arr2= arr.filter((i)=>i<20)
console.log(arr2)

console.log(...arr)

arr3=[...arr,...arr2] //... will split array and , will combine them
console.log(arr3)









const getWeatherData = async () => {
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        throw new Error('Missing WEATHER_API_KEY in environment');
    }
    const city = 'Kathmandu';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

    try {
        const response = await fetch(url);
        
        // Check if the response is okay, if not, throw an error
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const arr = data.forecast.forecastday;

        // 1. FILTER: Get days with max temp < 25
        const coldDays = arr.filter((day) => day.day.maxtemp_c < 25);
        console.log("--- Filtered Data (Cold Days) ---", coldDays);

        // 2. MAP: Simplify data to Date & Condition
        const simpleList = arr.map((day) => {
            return `Date: ${day.date} | Condition: ${day.day.condition.text}`;
        });
        console.log("--- Mapped Data ---", simpleList);

    } catch (error) {
        console.error("Error fetching weather data:", error);
        console.log("Did you set WEATHER_API_KEY in your environment or .env file?");
    }
};

getWeatherData();