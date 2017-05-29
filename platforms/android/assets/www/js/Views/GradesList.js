function populateGradeBook(data) {
    var item_color = " ";

    if(data['recieved'] > 80)
    {
        item_color = "style = 'background:	#8bc34a; border-radius:19px'";
    }

    if(data['recieved'] < 60)
    {
        item_color = "style= 'background:	#ff5722; border-radius:19px' ";
    }

    var html =
        '<div class="row" ' + item_color + ' id="'+ data['item'].replace(/\s/g,'')+'">' +
            '<div class="col-20 Grade"><p>' + data['item'] + '</p></div>' +
            '<div class="col-20 Grade"><p>' + data['grade'] + '</p></div>' +
            '<div class="col-20 Grade"><p>' + data['recieved'] + '</p></div>' +
            '<div class="col-20 Grade"><p>' + data['percentage'] + '</p></div>' +
            '<div class="col-20 Grade"><p>' + data['contribution'] + '<a href="#" onclick="deleteGrade("'+data['item']+'")">  Delete</a></p></div>'
        '</div>';

    $$('#Class-Item-List').append(html);

}

function removeItemFromGradeList(title){
     $$('#'+ title.replace(/\s/g,'')+ '').remove();
}

function addGradeToList(){
      
}