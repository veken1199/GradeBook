function loadClassList(classList){
    $$.each(classList,function(index,obj)
    {
        var html= getCLassTemplate(obj);
        $$('.mmjm').append(html);
    });
}

function addToClassList(form){
    var obj = {
        title:form[0].value,
        content:form[1].value
    };
    var html = getCLassTemplate(obj);
    $$('.mmjm').append(html);
}

function getCLassTemplate(obj){
    var html =  '<li id="'+obj.title.replace(/\s/g,'')+'" class="swipeout">'+     
                    '<div class="swipeout-content">'+
                        
                            '<div href="# " class="item-link item-content">'+
                                '<div class="item-media"><i class="icon icon-f7"></i></div>'+
                                '<div class="item-inner">'+
                                '<div class="item-title">' + obj.title + '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="swipeout-actions-left">'+
                        '<a href="#" class="item-link" onclick="deleteClass(\''+obj.title+'\')">Delete</a >'+
                        '<a href="#" class="item-link" onclick="openClass(\''+obj.title+'\')">Open</a >'+
                    '</div>'+
                    '<div class="swipeout-actions-right">'+
                       '<a href="#">'+ obj.content+'</a >'+
                    '</div>'+
                '</li>';
    return html;
}

function removeFromList(title){
   $$('#'+ title.replace(/\s/g,'')+ '').remove(); 
}

