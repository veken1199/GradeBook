function populateGradeBook(data) {

    var html =
        '<div class="row">' +
            '<div class="col-20">' + data['item'] + '</div>' +
            '<div class="col-20">' + data['grade'] + '</div>' +
            '<div class="col-20">' + data['recieved'] + '</div>' +
            '<div class="col-20">' + data['percentage'] + '</div>' +
            '<div class="col-20">' + data['contribution'] + '</div>' +
        '</div>';

    $$('#Class-Item-List').append(html);

}

function removeItemFromList(){

}

function addGradeToList(){
      
}