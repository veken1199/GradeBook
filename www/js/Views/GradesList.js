function populateGradeBook(data) {
    var item_color = " ";

    if(data['recieved'] > 80)
    {
        item_color = "style = 'background:green;'";
    }

    if(data['recieved'] < 60)
    {
        item_color = "style= 'background:red' ";
    }

    var html =
        '<div class="row" ' + item_color + '>' +
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