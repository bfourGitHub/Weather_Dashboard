console.log("taylor swift");

// When the user clicks the search button
function handleSearch() {

    // Then GET the user input VALUE they entered
    makeWeatherRequest( search );

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