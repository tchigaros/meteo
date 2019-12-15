import React from "react";


const Form = props => (
  
	<form onSubmit={props.getWeather}>
	
		<p name="type"><label > <input type="radio" className="radioButton1" name="type" value="forecast" placeholder="F"/> Forecast   Weather Today</label>
		<label> <input type="radio" className="radioButton1" name="type" value="weather" placeholder="K" defaultChecked /></label>
		</p>
		<p name="inputs"><input type="text" id="city" name="city"  placeholder="City..."/>
		<input type="text" id="country" name="country"  placeholder="Country..."/>
		</p>
		<p name="unities">
		<label name="unity"> °C </label>
		<label name="unity"> <input type="radio" className="radioButton" name="unity" value="M" placeholder="°C" defaultChecked />   </label>
		<label name="unity"> <input type="radio" className="radioButton" name="unity" value="I" placeholder="F"/> </label>
		<label name="unity">  F </label>
		</p>
		<button>Request</button>

	</form>
);

export default Form;

// <script type="text/javascript">
// 			function activatePlaces(){
// 				const input =document.getElementById("city");
// 				const autocomplete= new google.maps.palces.Autocomplete(input);
// 			}
// 	</script>
	
// 	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHwNyNXDGpbqUb_pcHH3ViwUZVMkA61PM&libraries=places&callback=activatePlaces"></script>
