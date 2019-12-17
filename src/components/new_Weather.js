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
  <tr id="toptable" Name="date_weather__info">
	   <th>Date</th>
	   <th>Conditions</th>
	   <th>Min Temperature</th>
	   <th>Max Temperature</th>
	   <th>Humidity</th>
	   <th>Wind </th>
  </tr>

  <tr className="description_weather__info">
 	
	    {
	     props.date && <th className="weather__key" >{ props.date }</th>
	    }
	     {
	     props.description && <th className="weather__key" >{ props.description} <img src={"https://openweathermap.org/img/w/" + props.iconcode + ".png"}  className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min && <th className="weather__key" >{ props.temperature_min }</th>
	    }
	   {
	     props.temperature_max && <th className="weather__key" >{ props.temperature_max }</th>
	    }
	   {
	     props.humidity && <th className="weather__key" >{ props.humidity } </th>
	    }
	    {
	     props.wind_speed && <th className="weather__key" >{  props.wind_dir + props.wind_speed }</th>
	    } 
  
  </tr>
   


  <tr className="description_weather__info">
 	
	    {
	     props.date1 && <th className="weather__key" >{ props.date1 }</th>
	    }
	     {
	     props.description1 && <th className="weather__key" >{ props.description1 } <img src={"https://www.weatherbit.io/static/img/icons/" + props.iconurl1 + ".png"} className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min1 && <th className="weather__key" >{ props.temperature_min1 }</th>
	    }
	   {
	     props.temperature_max1 && <th className="weather__key" >{ props.temperature_max1 }</th>
	    }
	   {
	     props.humidity1 && <th className="weather__key" >{ props.humidity1 } </th>
	    }
	    {
	     props.wind_speed1 && <th className="weather__key" >{  props.wind_dir1 + props.wind_speed1 }</th>
	    } 
  
  </tr>

   <tr className="description_weather__info">
 	
	    {
	     props.date2 && <th className="weather__key" >{ props.date2 }</th>
	    }
	     {
	     props.description2 && <th className="weather__key" >{ props.description2 } <img src={"https://www.weatherbit.io/static/img/icons/" + props.iconurl2 + ".png"} className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min2 && <th className="weather__key" >{ props.temperature_min2 }</th>
	    }
	   {
	     props.temperature_max2 && <th className="weather__key" >{ props.temperature_max2 }</th>
	    }
	   {
	     props.humidity2 && <th className="weather__key" >{ props.humidity2 } </th>
	    }
	    {
	     props.wind_speed2 && <th className="weather__key" >{ props.wind_speed2 }</th>
	    } 
  
  </tr>

     <tr className="description_weather__info">
 	
	    {
	     props.date3 && <th className="weather__key" >{ props.date3 }</th>
	    }
	     {
	     props.description3 && <th className="weather__key" >{ props.description3 } <img src={"https://www.weatherbit.io/static/img/icons/" + props.iconurl3 + ".png"} className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min3 && <th className="weather__key" >{ props.temperature_min3}</th>
	    }
	   {
	     props.temperature_max3 && <th className="weather__key" >{ props.temperature_max3 }</th>
	    }
	   {
	     props.humidity3 && <th className="weather__key" >{ props.humidity3} </th>
	    }
	    {
	     props.wind_speed3 && <th className="weather__key" >{ props.wind_speed3 }</th>
	    } 
  
  </tr>

     <tr className="description_weather__info">
 	
	    {
	     props.date4 && <th className="weather__key" >{ props.date4 }</th>
	    }
	     {
	     props.description4 && <th className="weather__key" >{ props.description4 } <img src={"https://www.weatherbit.io/static/img/icons/" + props.iconurl4 + ".png"} className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min4 && <th className="weather__key" >{ props.temperature_min4 }</th>
	    }
	   {
	     props.temperature_max4 && <th className="weather__key" >{ props.temperature_max4 }</th>
	    }
	   {
	     props.humidity4 && <th className="weather__key" >{ props.humidity4 } </th>
	    }
	    {
	     props.wind_speed4 && <th className="weather__key" >{ props.wind_speed4 }</th>
	    } 
  
  </tr>

     <tr className="description_weather__info">
 	
	    {
	     props.date5 && <th className="weather__key" >{ props.date5 }</th>
	    }
	     {
	     props.description5 && <th className="weather__key" >{ props.description5 } <img src={"https://www.weatherbit.io/static/img/icons/" + props.iconurl5 + ".png"} className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min5 && <th className="weather__key" >{ props.temperature_min5 }</th>
	    }
	   {
	     props.temperature_max5 && <th className="weather__key" >{ props.temperature_max5 }</th>
	    }
	   {
	     props.humidity5 && <th className="weather__key" >{ props.humidity5 } </th>
	    }
	    {
	     props.wind_speed5 && <th className="weather__key" >{ props.wind_speed5 }</th>
	    } 
  
  </tr>

     <tr className="description_weather__info">
 	
	    {
	     props.date6 && <th className="weather__key" >{ props.date6 }</th>
	    }
	     {
	     props.description6 && <th className="weather__key" >{ props.description6 } <img src={"https://www.weatherbit.io/static/img/icons/" + props.iconurl6 + ".png"} className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min6 && <th className="weather__key" >{ props.temperature_min6 }</th>
	    }
	   {
	     props.temperature_max6 && <th className="weather__key" >{ props.temperature_max6 }</th>
	    }
	   {
	     props.humidity6 && <th className="weather__key" >{ props.humidity6 } </th>
	    }
	    {
	     props.wind_speed6 && <th className="weather__key" >{ props.wind_speed6 }</th>
	    } 
  
  </tr>

     <tr className="description_weather__info">
 	
	    {
	     props.date7 && <th className="weather__key" >{ props.date7 }</th>
	    }
	     {
	     props.description7 && <th className="weather__key" >{ props.description7 } <img src={"https://www.weatherbit.io/static/img/icons/" + props.iconurl7 + ".png"} className="icondescription"></img></th>
	    }

	    
	    {
	     props.temperature_min7 && <th className="weather__key" >{ props.temperature_min7 }</th>
	    }
	   {
	     props.temperature_max7 && <th className="weather__key" >{ props.temperature_max7 }</th>
	    }
	   {
	     props.humidity7 && <th className="weather__key" >{ props.humidity7 } </th>
	    }
	    {
	     props.wind_speed7 && <th className="weather__key" >{ props.wind_speed7 }</th>
	    } 
  
  </tr>



  


</table>

 

	</div>
);

export default Weather;
