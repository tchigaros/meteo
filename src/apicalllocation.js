getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://geoip-db.com/jsonp/`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
          city: data.name,
          country: data.sys.country,
          error: "",
      });
    }
     else {
      this.setState({
        city: undefined,
        country: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    city={this.state.city}
                    country={this.state.country}
                    error={this.state.error}
                  />
                </div>
       
        </div>
      </div>
    );
  }