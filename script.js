console.log("taylor swift");
const apiKEY = "ad269f335fe283efea967260b3287c51";

// When the user clicks the search button
const findCityBtn = $(".findBtn");

console.log(findCityBtn);

findCityBtn.click(function() {
    var cityInput = $(this).prev("input").val();
    console.log(cityInput);
    // localStorage.setItem("scheduled-hour-" + hourButtonClicked, eventInput);
    handleSearch();
});
const cityNameSearched = $(".findBtn").prev("input").val();
console.log(cityNameSearched);

// findCityBtn.on("click", function (event) {
//     var clickedButton = $(this);
//     // var hourButtonClicked = $(clickedButton).siblings("div").data("time");
//     const eventInput = $(clickedButton).prev("input").val();
//     // localStorage.setItem("scheduled-hour-" + hourButtonClicked, eventInput);
//     console.log(eventInput);
//     console.log(clickedButton);
//     handleSearch();
// });
function handleSearch() {
    console.log("Britney Spears")
    // Then GET the user input VALUE they entered
    makeWeatherRequest();
};


function makeWeatherRequest( city ){

    // NEXT, we need to build the url for the first api request
    const cityNameAPIReq = `https://api.openweathermap.org/data/2.5/weather?q=boston&appid=${apiKEY}`;
    
    //    replace the users input with the location they wish to search for
    
    // Next, make the request to the URL with jQuery ajax
    
    $.ajax({
        url: cityNameAPIReq,
        method: "GET"
    }).then(function(response) {
        
        // START rendering data to the html
        
        // THEN get the lat and lng out of the response object
        var lat = response.coord.lat
        var lon = response.coord.lon
        console.log(lat, lon);

        // NEXT call `makeOneCallRequest` and pass in the lat and lng
        // create new variables for lat and lng if you need to
        console.log(response);
    });
    makeOneCallRequest();
};

function makeOneCallRequest() {

    // NEXT, we need to build the url for the first api request
    const latLonAPIReq = `https://api.openweathermap.org/data/2.5/onecall?lat=42.3584&lon=-71.0598&appid=${apiKEY}`;
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