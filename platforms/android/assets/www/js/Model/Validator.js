
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

function validateGradebookLimit(items, newItem){
    var sum = 0;

    $$.each(items,function (index,item) {
        sum = (item['percentage'] + sum);

    });

    var insertedPercentage = newItem["percentage"];

    if ( (sum + insertedPercentage) > 100 ){
        successMessage("You are trying to go beyond the limits", "gradeOverFlow");
        return false;
    }
    else{
        return true;
    }

}