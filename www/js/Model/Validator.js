
function formValidor(form){
    isValid = true;
    $$.each(form,function(index,obj){
        if(obj.value==""&&!isReserverdWord(obj.value)){
            isValid=false
            $$(obj).parent().parent().addClass("focus-state");
        }
    });
    return isValid;
}

function isReserverdWord(word){
    return word.includes('#');
}