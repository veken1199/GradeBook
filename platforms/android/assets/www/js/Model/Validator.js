
function formValidor(form){
    isValid = true;
    $$.each(form,function(index,obj){
        if(obj.value==""&&!isReserverdWord(obj.value)&&isValid){
            isValid=false
            $$(obj).parent().parent().addClass("focus-state");
        }
    });

    if(!isValid){
        successMessage("One of the fields is empty", "Missing Field");
        return isValid;
    }
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