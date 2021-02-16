console.log("taylor swift");

// When the user clicks the search button
var findCityBtn = $(".findBtn");
console.log(findCityBtn);
findCityBtn.click(function() {
    const cityInput = $(this).prev("input").val();
    console.log(cityInput);
    console.log("Shawn Mendez");
    handleSearch();
})

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
    console.log(eventInput);
    // Then GET the user input VALUE they entered
    makeWeatherRequest( eventInput );


};


function makeWeatherRequest( search ){

    // NEXT, we need to build the url for the first api request
    //    replace the users input with the location they wish to search for
    
    // Next, make the request to the URL with jQuery ajax
    
    $.ajax( queryUrl).then(function(response) {
        
        // START rendering data to the html
        
        // THEN get the lat and lng out of the response object

        // NEXT call `makeOneCallRequest` and pass in the lat and lng
        // create new variables for lat and lng if you need to

    });
    
};

function makeOneCallRequest( lat, lng ) {

    // NEXT, we need to build the url for the first api request
    //    replace the users input with the location they wish to search for
    
    // Next, make the request to the URL with jQuery ajax
    $.ajax( queryUrl ).then( function(response) {

        // Finish rendering data to the html

    });

}