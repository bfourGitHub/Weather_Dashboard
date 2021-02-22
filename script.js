console.log("taylor swift");
const apiKEY = "ad269f335fe283efea967260b3287c51";
const findCityBtn = $(".findBtn");
const time = moment();
const currentDate = time.format("MMM Do");
const forecastedDate = time.format("dddd");
console.log(currentDate);

//When page loads the last searched city should append to the appropriate elements

//When the page loads the list of previously searched cities appears in a list

// When the user clicks the search button
findCityBtn.click(function () {

    var cityInput = $(this).prev("input").val();
    localStorage.setItem("city", cityInput);

    // handleSearch();
    makeWeatherRequest();
});


function makeWeatherRequest(city) {

    var cityNameSearched = localStorage.getItem("city");
    console.log(cityNameSearched);
    // console.log("Shawn Mendez");

    // NEXT, we need to build the url for the first api request
    const cityNameAPIReq = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameSearched}&units=imperial&appid=${apiKEY}`;

    //    replace the users input with the location they wish to search for

    // Next, make the request to the URL with jQuery ajax

    $.ajax({
        url: cityNameAPIReq,
        method: "GET"
    }).then(function (response) {

        // START rendering data to the html
        var cityName = response.name;
        var countryCode = response.sys.country;
        var cityTemp = response.main.temp;
        var cityHum = response.main.humidity;
        var cityWindy = response.wind.speed;

        //clears out the element to be used
        $("#currentCityName").empty();
        $("#currentCityDate").empty();
        $("#currentCityTemp").empty();
        $("#currentCityHum").empty();
        $("#currentCityWind").empty();


        //Append api data to element
        $("#currentCityName").append(cityName, ", ", countryCode);
        $("#currentCityDate").append(forecastedDate, ",", " ", currentDate);
        $("#currentCityTemp").append(cityTemp);
        $("#currentCityHum").append(cityHum);
        $("#currentCityWind").append(cityWindy);

        //Add a list element to contain previous searches
        var newSearchedCity = document.createElement(`li`);
        newSearchedCity.appendChild(document.createTextNode(cityName));
        newSearchedCity.classList.add("list-group-item");
        document.querySelector("#searchedCityCard").appendChild(newSearchedCity);

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
    console.log(lat, lon);

    // NEXT, build the url for the second api request
    const latLonAPIReq = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKEY}`;
    

    // Next, make the request to the URL with jQuery ajax
    $.ajax({
        url: latLonAPIReq,
        method: "GET"
    }).then(function (response) {

        // Finish rendering data to the html

        //Render Icon to Current weather card
        var currentCityIcon = response.current.weather[0].icon;
        var currentIconURL = `http://openweathermap.org/img/wn/${currentCityIcon}@2x.png`;
        var currentIconEl = $("#currentCityIcon");
        currentIconEl.attr("src", currentIconURL);
        $("#currentCityIcon").empty();
        $("#currentCityIcon").append(currentIconEl); 

        //Render UV data to Current Weather Card
        var cityUV = response.current.uvi;
        $("#currentCityUV").empty();
        $("#currentCityUV").append(cityUV);

        //Render Corresponding info to forecast days
        //Define needed Variables
        var formattedForecastDate = time.add(1, "days").format("dddd");
        var dailyWeatherIcon = response.daily[1].weather[0].icon
        var forecastIconURL = `http://openweathermap.org/img/wn/${dailyWeatherIcon}.png`;
        var forecastIconEl = $("#forecastIcon1");
        forecastIconEl.attr("src", forecastIconURL)
        var forecastTemp = response.daily[1].temp.day;
        var forecastHum = response.daily[1].humidity;

        //Clear out corresponding elements
        $("#forecastDay1").empty();
        $("#forecastIcon1").empty();
        $("#forecastTemp1").empty();
        $("#forecastHum1").empty();

        //Append corresponding info to forecast weather cards
        $("#forecastDay1").append(formattedForecastDate);
        $("#forecastIcon1").append(forecastIconEl);
        $("#forecastTemp1").append(forecastTemp);
        $("#forecastHum1").append(forecastHum);

       
        console.log(formattedForecastDate);

        $("#forecastDay1")


        console.log(response);
        console.log(response.current.weather)

    });

}