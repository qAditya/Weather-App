const cityName=document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const  city_ans=document.getElementById('city')
const tempStatus=document.getElementById('status');
const temp=document.getElementById('temp')
const body=document.getElementsByTagName('body');
const datahide=document.querySelector('.midlayer')
const getInfo = async(event) =>{
    event.preventDefault();
    let city=cityName.value;
    if(city==="")
    {
        city_ans.innerText="Please give the city which u want to search";
         datahide.classList.add('data_hide');
    }
    else
    {
        try
        {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b6cd807ceb0fc3cc66f1f7a77ed69b5f`;
            const response= await fetch(url);

            const data= await response.json();
            console.log(response);
            console.log(data);
            
            
            temp.innerText =data.main.temp;
           
            city_ans.innerText=data.name + ',' +data.sys.country;
            cityName.value="";
            datahide.classList.remove('data_hide');
            const mood=data.weather[0].main;
            if(mood==="Clear")
            {
                tempStatus.innerHTML= "<i class ='fas fa-sun fa-5x ' style='color : yellow;'></i>"

            }
            else if(mood==="Clouds")
            {
                tempStatus.innerHTML= "<i class ='fas fa-cloud fa-5x ' style='color : white;'></i>"
              
                

            }
            else if(mood=="Rain")
            {
                tempStatus.innerHTML= "<i class ='fas fa-cloud-rain fa-5x ' style='color : white;'></i>"
            }
            else
            {
                tempStatus.innerHTML= "<i class ='fas fa-cloud fa-5x ' style='color : white;'></i>"
            }

        }
        catch
        {
            city_ans.innerText=`Please enter the correct city name`; 
            datahide.classList.add('data_hide');
            cityName.value="";
        }
       
    }
}



submitBtn.addEventListener('click',getInfo);
const curDay=document.getElementById('day');
const date=document.getElementById('date');
const getCurrentDay = () => {
    let day =new Array(7);
    day[0]="Monday";
    day[1]="Tuesday";
    day[2]="Wednesday";
    day[3]="Thursday";
    day[4]="Friday";
    day[5]="Saturday";
    day[6]="Sunday";
    let time=new Date();
    let current=day[time.getDay()];

    return current;
}
curDay.innerText= getCurrentDay();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
date.innerText=today;