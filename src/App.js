import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/new_Weather";

//app key for apixu : 81b709f9eb39487c9e330501192705
const API_KEY = "ebb254aec4c1b763f1509526830d2c3c";
const API_KEY2 = "81b709f9eb39487c9e330501192705";
const API_KEY3 = "0e78f553451605f46f7ff221c60af7ad";
const API_KEY4 = "bdef63fe8e024f9b8043b9c4eed80457";//weatherbit

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
    const api_call_ = await fetch(`https://api.openweathermap.org/data/2.5/${type}?q=${city},${country}&appid=${API_KEY}&lang=en`);
    const data3 = await api_call_.json();

    const api_call = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY4}&lang=en&units=${units}`);
    const data2 = await api_call.json();


    // const api_call2 = await fetch(`http://api.apixu.com/v1/forecast.json?key=${API_KEY2}&q=${city}&days=7&lang=en`);
    // const data2 = await api_call2.json();


    // const api_call3 = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY3}&query=${city}`);
    // const data3 = await api_call2.json();

   // use the first data for weather informations
    if (city && country && units==="metric" && type==="weather") {
      this.setState({
          city: data3.name,
          country: data3.sys.country,
          date:"Now",
          temperature: data3.main.temp,
          temperature_min: data3.main.temp_min,
          temperature_max: data3.main.temp_max,
         
          wind_speed:data3.wind.speed + " m/s",
          humidity: data3.main.humidity,
          pressure: data3.main.pressure,
          description: data3.weather[0].description,
          iconurl:data2.data[0].weather.icon,
          error: "",
      });

      
    } 
    else if (city && country && units==="imperial" && type==="weather") {
      this.setState({
          city: data3.name,
          country: data3.sys.country,
          date:"Now",
          temperature: data3.main.temp,
          temperature_min: data3.main.temp_min,
          temperature_max: data3.main.temp_max,
         
          wind_speed:data3.wind.speed + " mph",
          humidity: data3.main.humidity,
          pressure: data3.main.pressure,
          description: data3.weather[0].description,
          iconurl:data2.data[0].weather.icon,
          error: "",
      });

      // use the second data for forecat informations
    }else if(city && country && units==="M" && type==="forecast"){
       this.setState({
        city: data2.city_name,
        country: data2.country_code,

        date1:data2.data[0].valid_date.substring(8,10),
        date2:data2.data[1].valid_date.substring(8,10),
        date3:data2.data[2].valid_date.substring(8,10),
        date4:data2.data[3].valid_date.substring(8,10),
        date5:data2.data[4].valid_date.substring(8,10),
        date6:data2.data[5].valid_date.substring(8,10),
        date7:data2.data[6].valid_date.substring(8,10),
        

        temperature: data2.data[0].temp,


        temperature_max1: data2.data[0].max_temp,
        temperature_min1: data2.data[0].min_temp,
        temperature_max2: data2.data[1].max_temp,
        temperature_min2: data2.data[1].min_temp,
        temperature_max3: data2.data[2].max_temp,
        temperature_min3: data2.data[2].min_temp,
        temperature_max4: data2.data[3].max_temp,
        temperature_min4: data2.data[3].min_temp,
        temperature_max5: data2.data[4].max_temp,
        temperature_min5: data2.data[4].min_temp,
        temperature_max6: data2.data[5].max_temp,
        temperature_min6: data2.data[5].min_temp,
        temperature_max7: data2.data[6].max_temp,
        temperature_min7: data2.data[6].min_temp,

        humidity1: data2.data[0].rh,
        humidity2: data2.data[1].rh,
        humidity3: data2.data[2].rh,
        humidity4: data2.data[3].rh,
        humidity5: data2.data[4].rh,
        humidity6: data2.data[5].rh,
        humidity7: data2.data[6].rh,

      
        wind_speed1:data2.data[0].wind_spd.toPrecision(2) + " m/s",
        wind_speed2:data2.data[1].wind_spd.toPrecision(2) + " m/s",
        wind_speed3:data2.data[2].wind_spd.toPrecision(2) + " m/s",
        wind_speed4:data2.data[3].wind_spd.toPrecision(2) + " m/s",
        wind_speed5:data2.data[4].wind_spd.toPrecision(2) + " m/s",
        wind_speed6:data2.data[5].wind_spd.toPrecision(2) + " m/s",
        wind_speed7:data2.data[6].wind_spd.toPrecision(2) + " m/s",
  

      
        description1: data2.data[0].weather.description,        
        iconurl1:data2.data[0].weather.icon,
        description2: data2.data[1].weather.description,        
        iconurl2:data2.data[1].weather.icon,
        description3: data2.data[2].weather.description,        
        iconurl3:data2.data[2].weather.icon,
        description4: data2.data[3].weather.description,        
        iconurl4:data2.data[3].weather.icon,
        description5: data2.data[4].weather.description,        
        iconurl5:data2.data[4].weather.icon,
        description6: data2.data[5].weather.description,        
        iconurl6:data2.data[5].weather.icon,
        description7: data2.data[6].weather.description,        
        iconurl7:data2.data[6].weather.icon,
       


        error: "",
        });
    }
    else if(city && country && units==="I" && type==="forecast"){
       this.setState({
        city: data2.city_name,
        country: data2.country_code,

        date1:data2.data[0].valid_date.substring(8,10),
        date2:data2.data[1].valid_date.substring(8,10),
        date3:data2.data[2].valid_date.substring(8,10),
        date4:data2.data[3].valid_date.substring(8,10),
        date5:data2.data[4].valid_date.substring(8,10),
        date6:data2.data[5].valid_date.substring(8,10),
        date7:data2.data[6].valid_date.substring(8,10),
        

        temperature: data2.data[0].temp,


        temperature_max1: data2.data[0].max_temp,
        temperature_min1: data2.data[0].min_temp,
        temperature_max2: data2.data[1].max_temp,
        temperature_min2: data2.data[1].min_temp,
        temperature_max3: data2.data[2].max_temp,
        temperature_min3: data2.data[2].min_temp,
        temperature_max4: data2.data[3].max_temp,
        temperature_min4: data2.data[3].min_temp,
        temperature_max5: data2.data[4].max_temp,
        temperature_min5: data2.data[4].min_temp,
        temperature_max6: data2.data[5].max_temp,
        temperature_min6: data2.data[5].min_temp,
        temperature_max7: data2.data[6].max_temp,
        temperature_min7: data2.data[6].min_temp,

        humidity1: data2.data[0].rh,
        humidity2: data2.data[1].rh,
        humidity3: data2.data[2].rh,
        humidity4: data2.data[3].rh,
        humidity5: data2.data[4].rh,
        humidity6: data2.data[5].rh,
        humidity7: data2.data[6].rh,

      
        wind_speed1:data2.data[0].wind_spd.toPrecision(2) + " mph",
        wind_speed2:data2.data[1].wind_spd.toPrecision(2) + " mph",
        wind_speed3:data2.data[2].wind_spd.toPrecision(2) + " mph",
        wind_speed4:data2.data[3].wind_spd.toPrecision(2) + " mph",
        wind_speed5:data2.data[4].wind_spd.toPrecision(2) + " mph",
        wind_speed6:data2.data[5].wind_spd.toPrecision(2) + " mph",
        wind_speed7:data2.data[6].wind_spd.toPrecision(2) + " mph",
  

      
        description1: data2.data[0].weather.description,        
        iconurl1:data2.data[0].weather.icon,
        description2: data2.data[1].weather.description,        
        iconurl2:data2.data[1].weather.icon,
        description3: data2.data[2].weather.description,        
        iconurl3:data2.data[2].weather.icon,
        description4: data2.data[3].weather.description,        
        iconurl4:data2.data[3].weather.icon,
        description5: data2.data[4].weather.description,        
        iconurl5:data2.data[4].weather.icon,
        description6: data2.data[5].weather.description,        
        iconurl6:data2.data[5].weather.icon,
        description7: data2.data[6].weather.description,        
        iconurl7:data2.data[6].weather.icon,
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
