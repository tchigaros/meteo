import React from "react";

const Weather = props => (
	
	<div className="weather__info">
	{ 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	 
	{	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country } : <span className="main_temperature" >{props.temperature} </span> </span> 
	 	</p> 
	 }
	 <table>
  <th className="date_weather__info">
    
    <tr>Date</tr>
    {
     props.date && <tr className="weather__key" >{ props.date }</tr>
    }

    {
     props.date1 && <tr className="weather__key" >{ props.date1 }</tr>
    }
    {
     props.date2 && <tr className="weather__key" >{ props.date2 }</tr>
    }
    {
     props.date3 && <tr className="weather__key" >{ props.date3 }</tr>
    }
    {
     props.date4 && <tr className="weather__key" >{ props.date4 }</tr>
    }
    {
     props.date5 && <tr className="weather__key" >{ props.date5 }</tr>
    }
    {
     props.date6 && <tr className="weather__key" >{ props.date6 }</tr>
    }
    {
     props.date7 && <tr className="weather__key" >{ props.date7 }</tr>
    }
  </th>

   <th className="description_weather__info">
 	<tr>Conditions</tr>
    {
     props.description && <tr className="weather__key" >{ props.description } <img src={props.iconurl} className="icondescription"></img></tr>
    }
    {
     props.description1 && <tr className="weather__key" >{ props.description1 } <img src={props.iconurl1} className="icondescription"></img></tr>
    }
    {
     props.description2 && <tr className="weather__key" >{ props.description2 } <img src={props.iconurl2} className="icondescription"></img></tr>
    }
    {
     props.description3 && <tr className="weather__key" >{ props.description3 } <img src={props.iconurl3} className="icondescription"></img></tr>
    }
    {
     props.description4 && <tr className="weather__key" >{ props.description4 } <img src={props.iconurl4} className="icondescription"></img></tr>
    }
    {
     props.description5 && <tr className="weather__key" >{ props.description5 } <img src={props.iconurl5} className="icondescription"></img></tr>
    }
    {
     props.description6 && <tr className="weather__key" >{ props.description6 } <img src={props.iconurl6} className="icondescription"></img></tr>
    }
    {
     props.description7 && <tr className="weather__key" >{ props.description7 } <img src={props.iconurl7} className="icondescription"></img></tr>
    }
  
  </th>

  <th className="head_weather__info">
    
    <tr>Temperature_min</tr>
    {
     props.temperature && <tr className="weather__key" >{ props.temperature }</tr>
    }
    {
     props.temperature_min1 && <tr className="weather__key" >{ props.temperature_min1 }</tr>
    }
    {
     props.temperature_min2 && <tr className="weather__key" >{ props.temperature_min2 }</tr>
    }
    {
     props.temperature_min3 && <tr className="weather__key" >{ props.temperature_min3 }</tr>
    }
    {
     props.temperature_min4 && <tr className="weather__key" >{ props.temperature_min4 }</tr>
    }
    {
     props.temperature_min5 && <tr className="weather__key" >{ props.temperature_min5 }</tr>
    }
    {
     props.temperature_min6 && <tr className="weather__key" >{ props.temperature_min6 }</tr>
    }
    {
     props.temperature_min7 && <tr className="weather__key" >{ props.temperature_min7 }</tr>
    }
   
  </th>
  <th className="head_weather__info">
   
    <tr>Temperature_max</tr>
    {
     props.temperature && <tr className="weather__key" >{ props.temperature }</tr>
    }
    {
     props.temperature_max1 && <tr className="weather__key" >{ props.temperature_max1 }</tr>
    }
   {
     props.temperature_max2 && <tr className="weather__key" >{ props.temperature_max2 }</tr>
    }
    {
     props.temperature_max3 && <tr className="weather__key" >{ props.temperature_max3 }</tr>
    }
    {
     props.temperature_max4 && <tr className="weather__key" >{ props.temperature_max4 }</tr>
    }
    {
     props.temperature_max5 && <tr className="weather__key" >{ props.temperature_max5 }</tr>
    }
    {
     props.temperature_max6 && <tr className="weather__key" >{ props.temperature_max6 }</tr>
    }
    {
     props.temperature_max7 && <tr className="weather__key" >{ props.temperature_max7 }</tr>
    }
  </th>
  
  <th className="head_weather__info">
 	<tr>Humidity</tr>
    {
     props.humidity && <tr className="weather__key" >{ props.humidity } </tr>
    }
    {
     props.humidity1 && <tr className="weather__key" >{ props.humidity1 } </tr>
    }
    {
     props.humidity2 && <tr className="weather__key" >{ props.humidity2 } </tr>
    }
    {
     props.humidity3 && <tr className="weather__key" >{ props.humidity3 } </tr>
    }
    {
     props.humidity4 && <tr className="weather__key" >{ props.humidity4 } </tr>
    }
    {
     props.humidity5 && <tr className="weather__key" >{ props.humidity5 } </tr>
    }
    {
     props.humidity6 && <tr className="weather__key" >{ props.humidity6 } </tr>
    }
    {
     props.humidity7 && <tr className="weather__key" >{ props.humidity7 } </tr>
    }

  
  </th>

  <th className="head_weather__info">
    
    <tr>Wind Speed</tr>
    {
     props.wind_speed && <tr className="weather__key" >{ props.wind_speed }</tr>
    }
    {
     props.wind_speed1 && <tr className="weather__key" >{ props.wind_speed1 }</tr>
    }
    {
     props.wind_speed2 && <tr className="weather__key" >{ props.wind_speed2 }</tr>
    }
    {
     props.wind_speed3 && <tr className="weather__key" >{ props.wind_speed3 }</tr>
    }
    {
     props.wind_speed4 && <tr className="weather__key" >{ props.wind_speed4 }</tr>
    }
    {
     props.wind_speed5 && <tr className="weather__key" >{ props.wind_speed5 }</tr>
    }
    {
     props.wind_speed6 && <tr className="weather__key" >{ props.wind_speed6 }</tr>
    }
    {
     props.wind_speed7 && <tr className="weather__key" >{ props.wind_speed7 }</tr>
    }
   
  </th>
 


</table>

 

	</div>
);

export default Weather;