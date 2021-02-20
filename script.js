console.log("taylor swift");
const apiKEY = "ad269f335fe283efea967260b3287c51";
const findCityBtn = $(".findBtn");
const time = moment();
const currentDate = time.format("MMM Do");
console.log(currentDate);

//When page loads the last searched city should append to the appropriate elements

//When the page loads the list of previously searched cities appears in a list

// When the user clicks the search button
findCityBtn.click(function() {
    var cityInput = $(this).prev("input").val();
    // var i = 0;
    // for (i = 0; i < localStorage.length; i++) {
    //     console.log(cityInput);
    //     var cityKeyNum = "city-" + i;
    // };
    localStorage.setItem("city", cityInput);
    
    // handleSearch();
    makeWeatherRequest();
});

// function handleSearch() {
//     console.log("Britney Spears")
//     // Then GET the user input VALUE they entered
//     localStorage.getItem("city");
//     console.log(localStorage.getItem("city"));
//     makeWeatherRequest();
// };


function makeWeatherRequest( city ){
    
    // var i = 0;
    // for (i = 0; i < localStorage.length; i++) {
        
    //     var cityKeyNum = "city-" + i;
    // }
    var cityNameSearched = localStorage.getItem("city");
    console.log(cityNameSearched);
    console.log("Shawn Mendez");
    // NEXT, we need to build the url for the first api request
    const cityNameAPIReq = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameSearched}&units=imperial&appid=${apiKEY}`;
    
    //    replace the users input with the location they wish to search for
    
    // Next, make the request to the URL with jQuery ajax
    
    $.ajax({
        url: cityNameAPIReq,
        method: "GET"
    }).then(function(response) {
        
        // START rendering data to the html
        var cityName = response.name;
        var countryCode = response.sys.country;
        var cityTemp = response.main.temp;
        var cityHum = response.main.humidity;
        var cityWindy = response.wind.speed;
        // var cityUV = response
        //clears out the element to be used
        $("#currentCityName").empty();
        $("#currentCityDate").empty();
        $("#currentCityTemp").empty();
        $("#currentCityHum").empty();
        $("#currentCityWind").empty();
        // $("#currentCityUV").empty();

        //Append api data to element
        $("#currentCityName").append(cityName, ", ", countryCode);
        $("#currentCityDate").append(currentDate);
        $("#currentCityTemp").append(cityTemp);
        $("#currentCityHum").append(cityHum);
        $("#currentCityWind").append(cityWindy);
        // $("#currentCityUV").append();

        
        
        // THEN get the lat and lng out of the response object
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        console.log(lat, lon);
        localStorage.setItem("lat", lat);
        localStorage.setItem("lon", lon);

        // NEXT call `makeOneCallRequest` and pass in the lat and lng
        // create new variables for lat and lng if you need to
        console.log(response);
        makeOneCallRequest();
    });
};

function makeOneCallRequest() {
    var lat = localStorage.getItem("lat");
    var lon = localStorage.getItem("lon");
    console.log(lat,lon);
    // NEXT, we need to build the url for the first api request
    const latLonAPIReq = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKEY}`;
    //    replace the users input with the location they wish to search for
    
    // Next, make the request to the URL with jQuery ajax
    $.ajax({
        url: latLonAPIReq,
        method: "GET"
    }).then( function(response) {

        // Finish rendering data to the html
        console.log(response);
        console.log(response.current.weather)

    });
    
}