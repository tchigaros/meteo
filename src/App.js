import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/new_Weather";

//app key for apixu : 81b709f9eb39487c9e330501192705
const API_KEY = "ebb254aec4c1b763f1509526830d2c3c";
const API_KEY2 = "81b709f9eb39487c9e330501192705";
const API_KEY3 = "0e78f553451605f46f7ff221c60af7ad";

class App extends React.Component {
  state = {

    city: undefined,
    country: undefined,

    date: undefined,
    date1: undefined,
    date2: undefined,
    date3: undefined,
    date4: undefined,
    date5: undefined,
    date6: undefined,
    date7: undefined,

    description: undefined,
    iconurl:undefined,
    description1: undefined,
    iconurl1:undefined,
    description2: undefined,
    iconurl2:undefined,
    description3: undefined,
    iconurl3:undefined,
    description4: undefined,
    iconurl4:undefined,
    description5: undefined,
    iconurl5:undefined,
    description6: undefined,
    iconurl6:undefined,
    description7: undefined,
    iconurl7:undefined,


    temperature: undefined,


    temperature_max: undefined,
    temperature_min: undefined,
    temperature_max1: undefined,
    temperature_min1: undefined,
    temperature_max2: undefined,
    temperature_min2: undefined,
    temperature_max3: undefined,
    temperature_min3: undefined,
    temperature_max4: undefined,
    temperature_min4: undefined,
    temperature_max5: undefined,
    temperature_min5: undefined,
    temperature_max6: undefined,
    temperature_min6: undefined,
    temperature_max7: undefined,
    temperature_min7: undefined,

    humidity: undefined,
    humidity1: undefined,
    humidity2: undefined,
    humidity3: undefined,
    humidity4: undefined,
    humidity5: undefined,
    humidity6: undefined,
    humidity7: undefined,
    

    wind_speed: undefined,
    wind_speed1: undefined,
    wind_speed2: undefined,
    wind_speed3: undefined,
    wind_speed4: undefined,
    wind_speed5: undefined,
    wind_speed6: undefined,
    wind_speed7: undefined,
 
        
    error: undefined
  }




  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const units = e.target.elements.unity.value;
    const type = e.target.elements.type.value;
    // if (!city){
    //   const api_call = await fetch(`https://geoip-db.com/jsonp`);
    //  const data = await api_call.json();

    //  $.ajax({
    //         url: "https://geoip-db.com/jsonp",
    //         jsonpCallback: "callback",
    //         dataType: "jsonp",
    //         success: function( location ) {
    //             country=$('#country').html(location.country_name);
    //             city=$('#city').html(location.city);
    //         }
    //     });
    // } else {
    //   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/${type}?q=${city},${country}&appid=${API_KEY}&units=${units}&lang=en`);
    //  const data = await api_call.json();
    // };
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/${type}?q=${city},${country}&appid=${API_KEY}&units=${units}&lang=en`);
    const data2 = await api_call.json();

    // const api_call2 = await fetch(`http://api.apixu.com/v1/forecast.json?key=${API_KEY2}&q=${city}&days=7&lang=en`);
    // const data2 = await api_call2.json();


    // const api_call3 = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY3}&query=${city}`);
    // const data3 = await api_call2.json();

   // use the first data for weather informations
    if (city && country && units==="metric" && type==="weather") {
      this.setState({
          city: data2.name,
          country: data2.sys.country,
          date:"Now",
          temperature: data2.main.temp,
          temperature_min: data2.main.temp,
          temperature_max: data2.main.temp,
         
          wind_speed:data2.wind.speed,
          humidity: data2.main.humidity,
          pressure: data2.main.pressure,
          description: data2.weather[0].description,
          iconurl:data2.weather[0].icon,
          error: "",
      });

      
    } 
    else if (city && country && units==="imperial" && type==="weather") {
      this.setState({
           city: data2.name,
          country: data2.sys.country,
          date:"Now",
          temperature: data2.main.temp,
          temperature_min: data2.main.temp_min,
          temperature_max: data2.main.temp_max,
         
          wind_speed:data2.wind.speed,
          humidity: data2.main.humidity,
          pressure: data2.main.pressure,
          description: data2.weather[0].description,
          iconurl:data2.weather[0].icon,
          error: "",
      });

      // use the second data for forecat informations
    }else if(city && country && units==="metric" && type==="forecast"){
       this.setState({
        city: data2.location.name,
        country: data2.location.country,

        date1:data2.forecast.forecastday[0].date.substring(5),
        date2:data2.forecast.forecastday[1].date.substring(5),
        date3:data2.forecast.forecastday[2].date.substring(5),
        date4:data2.forecast.forecastday[3].date.substring(5),
        date5:data2.forecast.forecastday[4].date.substring(5),
        date6:data2.forecast.forecastday[5].date.substring(5),
        date7:data2.forecast.forecastday[6].date.substring(5),
        

        temperature: data2.current.temp_c,


        temperature_max1: data2.forecast.forecastday[0].day.maxtemp_c,
        temperature_min1: data2.forecast.forecastday[0].day.mintemp_c,
        temperature_max2: data2.forecast.forecastday[1].day.maxtemp_c,
        temperature_min2: data2.forecast.forecastday[1].day.mintemp_c,
        temperature_max3: data2.forecast.forecastday[2].day.maxtemp_c,
        temperature_min3: data2.forecast.forecastday[2].day.mintemp_c,
        temperature_max4: data2.forecast.forecastday[3].day.maxtemp_c,
        temperature_min4: data2.forecast.forecastday[3].day.mintemp_c,
        temperature_max5: data2.forecast.forecastday[4].day.maxtemp_c,
        temperature_min5: data2.forecast.forecastday[4].day.mintemp_c,
        temperature_max6: data2.forecast.forecastday[5].day.maxtemp_c,
        temperature_min6: data2.forecast.forecastday[5].day.mintemp_c,
        temperature_max7: data2.forecast.forecastday[6].day.maxtemp_c,
        temperature_min7: data2.forecast.forecastday[6].day.mintemp_c,

        humidity1: data2.forecast.forecastday[0].day.avghumidity,
        humidity2: data2.forecast.forecastday[1].day.avghumidity,
        humidity3: data2.forecast.forecastday[2].day.avghumidity,
        humidity4: data2.forecast.forecastday[3].day.avghumidity,
        humidity5: data2.forecast.forecastday[4].day.avghumidity,
        humidity6: data2.forecast.forecastday[5].day.avghumidity,
        humidity7: data2.forecast.forecastday[6].day.avghumidity,

      
        wind_speed1:data2.forecast.forecastday[0].day.maxwind_kph,
        wind_speed2:data2.forecast.forecastday[1].day.maxwind_kph,
        wind_speed3:data2.forecast.forecastday[2].day.maxwind_kph,
        wind_speed4:data2.forecast.forecastday[3].day.maxwind_kph,
        wind_speed5:data2.forecast.forecastday[4].day.maxwind_kph,
        wind_speed6:data2.forecast.forecastday[5].day.maxwind_kph,
        wind_speed7:data2.forecast.forecastday[6].day.maxwind_kph,
  

      
        description1: data2.forecast.forecastday[0].day.condition.text,        
        iconurl1:data2.forecast.forecastday[0].day.condition.icon,
        description2: data2.forecast.forecastday[1].day.condition.text,        
        iconurl2:data2.forecast.forecastday[1].day.condition.icon,
        description3: data2.forecast.forecastday[2].day.condition.text,        
        iconurl3:data2.forecast.forecastday[2].day.condition.icon,
        description4: data2.forecast.forecastday[3].day.condition.text,        
        iconurl4:data2.forecast.forecastday[3].day.condition.icon,
        description5: data2.forecast.forecastday[4].day.condition.text,        
        iconurl5:data2.forecast.forecastday[4].day.condition.icon,
        description6: data2.forecast.forecastday[5].day.condition.text,        
        iconurl6:data2.forecast.forecastday[5].day.condition.icon,
        description7: data2.forecast.forecastday[6].day.condition.text,        
        iconurl7:data2.forecast.forecastday[6].day.condition.icon,
       


        error: "",
        });
    }
    else if(city && country && units==="imperial" && type==="forecast"){
       this.setState({
        city: data2.location.name,
        country: data2.location.country,

        date1:data2.forecast.forecastday[0].date.substring(5),
        date2:data2.forecast.forecastday[1].date.substring(5),
        date3:data2.forecast.forecastday[2].date.substring(5),
        date4:data2.forecast.forecastday[3].date.substring(5),
        date5:data2.forecast.forecastday[4].date.substring(5),
        date6:data2.forecast.forecastday[5].date.substring(5),
        date7:data2.forecast.forecastday[6].date.substring(5),
        
        temperature: data2.current.temp_f,

        temperature_max1: data2.forecast.forecastday[0].day.maxtemp_f,
        temperature_min1: data2.forecast.forecastday[0].day.mintemp_f,
        temperature_max2: data2.forecast.forecastday[1].day.maxtemp_f,
        temperature_min2: data2.forecast.forecastday[1].day.mintemp_f,
        temperature_max3: data2.forecast.forecastday[2].day.maxtemp_f,
        temperature_min3: data2.forecast.forecastday[2].day.mintemp_f,
        temperature_max4: data2.forecast.forecastday[3].day.maxtemp_f,
        temperature_min4: data2.forecast.forecastday[3].day.mintemp_f,
        temperature_max5: data2.forecast.forecastday[4].day.maxtemp_f,
        temperature_min5: data2.forecast.forecastday[4].day.mintemp_f,
        temperature_max6: data2.forecast.forecastday[5].day.maxtemp_f,
        temperature_min6: data2.forecast.forecastday[5].day.mintemp_f,
        temperature_max7: data2.forecast.forecastday[6].day.maxtemp_f,
        temperature_min7: data2.forecast.forecastday[6].day.mintemp_f,
      

        humidity1: data2.forecast.forecastday[0].day.avghumidity,
        humidity2: data2.forecast.forecastday[1].day.avghumidity,
        humidity3: data2.forecast.forecastday[2].day.avghumidity,
        humidity4: data2.forecast.forecastday[3].day.avghumidity,
        humidity5: data2.forecast.forecastday[4].day.avghumidity,
        humidity6: data2.forecast.forecastday[5].day.avghumidity,
        humidity7: data2.forecast.forecastday[6].day.avghumidity,

      
        wind_speed1:data2.forecast.forecastday[0].day.maxwind_kph,
        wind_speed2:data2.forecast.forecastday[1].day.maxwind_kph,
        wind_speed3:data2.forecast.forecastday[2].day.maxwind_kph,
        wind_speed4:data2.forecast.forecastday[3].day.maxwind_kph,
        wind_speed5:data2.forecast.forecastday[4].day.maxwind_kph,
        wind_speed6:data2.forecast.forecastday[5].day.maxwind_kph,
        wind_speed7:data2.forecast.forecastday[6].day.maxwind_kph,
  
       
    

        
        description1: data2.forecast.forecastday[0].day.condition.text,        
        iconurl1:data2.forecast.forecastday[0].day.condition.icon,
        description2: data2.forecast.forecastday[1].day.condition.text,        
        iconurl2:data2.forecast.forecastday[1].day.condition.icon,
        description3: data2.forecast.forecastday[2].day.condition.text,        
        iconurl3:data2.forecast.forecastday[2].day.condition.icon,
        description4: data2.forecast.forecastday[3].day.condition.text,        
        iconurl4:data2.forecast.forecastday[3].day.condition.icon,
        description5: data2.forecast.forecastday[4].day.condition.text,        
        iconurl5:data2.forecast.forecastday[4].day.condition.icon,
        description6: data2.forecast.forecastday[5].day.condition.text,        
        iconurl6:data2.forecast.forecastday[5].day.condition.icon,
        description7: data2.forecast.forecastday[6].day.condition.text,        
        iconurl7:data2.forecast.forecastday[6].day.condition.icon,
        error: "",
        });
    }
     else {
      this.setState({
        city: undefined,
        country: undefined,
        date: undefined,
        date1: undefined,
        date2: undefined,
        date3: undefined,
        date4: undefined,
        date5: undefined,
        date6: undefined,
        date7: undefined,

        description: undefined,
        iconurl:undefined,
        description1: undefined,
        iconurl1:undefined,
        description2: undefined,
        iconurl2:undefined,
        description3: undefined,
        iconurl3:undefined,
        description4: undefined,
        iconurl4:undefined,
        description5: undefined,
        iconurl5:undefined,
        description6: undefined,
        iconurl6:undefined,
        description7: undefined,
        iconurl7:undefined,

        temperature: undefined,

        temperature_max: undefined,
        temperature_min: undefined,
        temperature_max1: undefined,
        temperature_min1: undefined,
        temperature_max2: undefined,
        temperature_min2: undefined,
        temperature_max3: undefined,
        temperature_min3: undefined,
        temperature_max4: undefined,
        temperature_min4: undefined,
        temperature_max5: undefined,
        temperature_min5: undefined,
        temperature_max6: undefined,
        temperature_min6: undefined,
        temperature_max7: undefined,
        temperature_min7: undefined,

      
        humidity: undefined,
        humidity1: undefined,
        humidity2: undefined,
        humidity3: undefined,
        humidity4: undefined,
        humidity5: undefined,
        humidity6: undefined,
        humidity7: undefined,
        

        wind_speed: undefined,
        wind_speed1: undefined,
        wind_speed2: undefined,
        wind_speed3: undefined,
        wind_speed4: undefined,
        wind_speed5: undefined,
        wind_speed6: undefined,
        wind_speed7: undefined,


       

        error: "Please enter the values."
      });
    }
  }
  render() {

   
    return (
     
      <div>
        <div className="wrapper">
          
                <div className="title-container">
                  <Titles />
                </div>
                <div className=" form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    city={this.state.city}
                    country={this.state.country}
                   
                    date={this.state.date}
                    date1={this.state.date1}
                    date2={this.state.date2}
                    date3={this.state.date3}
                    date4={this.state.date4}
                    date5={this.state.date5}
                    date6={this.state.date6}
                    date7={this.state.date7}
                 

                    temperature={this.state.temperature}


                    temperature_max={this.state.temperature_max}
                    temperature_min={this.state.temperature_min} 
                    temperature_max1={this.state.temperature_max1}
                    temperature_min1={this.state.temperature_min1} 
                    temperature_max2={this.state.temperature_max2}
                    temperature_min2={this.state.temperature_min2} 
                    temperature_max3={this.state.temperature_max3}
                    temperature_min3={this.state.temperature_min3} 
                    temperature_max4={this.state.temperature_max4}
                    temperature_min4={this.state.temperature_min4} 
                    temperature_max5={this.state.temperature_max5}
                    temperature_min5={this.state.temperature_min5} 
                    temperature_max6={this.state.temperature_max6}
                    temperature_min6={this.state.temperature_min6} 
                    temperature_max7={this.state.temperature_max7}
                    temperature_min7={this.state.temperature_min7} 
    
                    humidity={this.state.humidity}
                    humidity1={this.state.humidity1}
                    humidity2={this.state.humidity2}
                    humidity3={this.state.humidity3}
                    humidity4={this.state.humidity4}
                    humidity5={this.state.humidity5}
                    humidity6={this.state.humidity6}
                    humidity7={this.state.humidity7}
          

                    wind_speed={this.state.wind_speed}
                    wind_speed1={this.state.wind_speed1}
                    wind_speed2={this.state.wind_speed2}
                    wind_speed3={this.state.wind_speed3}
                    wind_speed4={this.state.wind_speed4}
                    wind_speed5={this.state.wind_speed5}
                    wind_speed6={this.state.wind_speed6}
                    wind_speed7={this.state.wind_speed7}
                    

                    description={this.state.description}
                    iconurl={this.state.iconurl}
                    description1={this.state.description1}
                    iconurl1={this.state.iconurl1}
                    description2={this.state.description2}
                    iconurl2={this.state.iconurl2}
                    description3={this.state.description3}
                    iconurl3={this.state.iconurl3}
                    description4={this.state.description4}
                    iconurl4={this.state.iconurl4}
                    description5={this.state.description5}
                    iconurl5={this.state.iconurl5}
                    description6={this.state.description6}
                    iconurl6={this.state.iconurl6}
                    description7={this.state.description7}
                    iconurl7={this.state.iconurl7}


                    error={this.state.error}
       

                  />
      
                </div>
       
        </div>
      </div>
    );
  }
};

export default App;
