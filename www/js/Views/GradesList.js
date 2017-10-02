function populateGradeBook(data) {
     

    // var initial_html = ' <div class="row">'+
    //                     '<div class="col-20 Grade"><p>Item</p></div>'+
    //                     '<div class="col-20 Grade"><p>Grade</p></div>'+
    //                     '<div class="col-20 Grade"><p>Grade %</p></div>'+
    //                     '<div class="col-20 Grade"><p>Per %</p></div>'+
    //                     '<div class="col-20 Grade"><p>Contributes</p></div></div>';
    
    
    var item_color = " ";

    if(data['recieved'] > 80)
    {
        item_color = "style = 'margin: 2px; background:	#8bc34a; border-radius:19px'";
    }

    if(data['recieved'] < 60)
    {
        item_color = "style= 'margin: 2px;background: #ff5722; border-radius:19px' ";
    }

    var html =
        '<div class="row" ' + item_color + ' id="'+ data['item'].replace(/\s/g,'')+'">' +
            '<div class="col-15 Grade"><p>' + data['item'] + '</p></div>' +
            '<div class="col-15 Grade"><p>' + data['grade'] + '</p></div>' +
            '<div class="col-15 Grade"><p>' + data['recieved'] + '</p></div>' +
            '<div class="col-15 Grade"><p>' + data['percentage'] + '</p></div>' +
            '<div class="col-15 Grade"><p>' + data['contribution'] + '</p></div>' +
            '<div class="col-15 Grade"><p><a style="color:white" href="#" onclick="deleteGrade(\''+data['item']+'\');">X</a></p></div>'
        '</div>';
    
    $$('#Class-Item-List').append(html);

}

function removeItemFromGradeList(title){
     $$('#'+ title.replace(/\s/g,'')+ '').remove();
}

function ViewClassStats(stats){
    if (isEmptyObject(stats)){
        stats = {current_grade: 0,
                final_exam: 0,
                meeded: 0}
    }
    
    $$("#final_exam").text(stats.final_exam);
    $$("#current_grade").text(stats.current_grade);
    $$("#targetView").text(stats.target);
    $$("#needed").text(stats.needed);
}
