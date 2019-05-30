{	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span> 
	 	</p> 
	 }
	 { 	
	 	props.date && <p className="weather__key"> Date: 
	 		<span className="weather__value"> { props.date }</span>
	 	</p> 
	 }

	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }</span>
	 	</p> 
	 }

	 { 	
	 	props.temperature_min && <p className="weather__key"> Temperature_min: 
	 		<span className="weather__value"> { props.temperature_min }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature_max && <p className="weather__key"> Temperature_max: 
	 		<span className="weather__value"> { props.temperature_max }</span>
	 	</p> 
	 }

	 { 	
	 	props.pressure && <p className="weather__key"> Pressure: 
	 		<span className="weather__value"> { props.pressure }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }