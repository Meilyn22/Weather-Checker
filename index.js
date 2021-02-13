window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature_description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let lastUpdated = document.querySelector(".last-updated");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
    
        const api = `https://api.weatherapi.com/v1/current.json?key=9735fba8b78a4e3dbed04131211002&q=${lat},${long}`;
           
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                const {temp_f} = data.current;
                const {text} = data.current.condition;
                const{last_updated} = data.current;
                const {country} = data.location;
                const {region} = data.location;
                
                //set DOM element from the API
                temperatureDegree.textContent = temp_f;
                temperatureDescription.textContent = text;
                locationTimezone.textContent = country + " / " + region;
                lastUpdated.textContent = "Last Updated  " + last_updated;
        });

    });

}


});
