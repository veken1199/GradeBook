
//take class_obj obj and then we need to create json obj from this
function insertClass(class_obj) {
    json_class = class_obj.toJSON();
    addClassToGradeBook(json_class);
    myApp.closeModal('.popup-about');
    
}

function loadClassTable() {
    testValues();
    gradebook = getGradebook();
    if (gradebook ==null){
        return successMessage('Plaese Add Classes', 'NO Classes!');
    }

    else{
        loadClassList(gradebook);
    }
}


function deleteCLassModel(className) {
    loadDB("class");
    db.transaction(function (tx) {
        sql = "DELETE FROM " + name + " WHERE title=?";
        tx.executeSql(sql, [className], function (tx, results) {
            //delete From list 
            removeFromList(className);
        });

    });
}

function isUniqueClassTDG(class_name) {
    var gradebook = getGradebook(); 
    
    if (gradebook[class_name]){
       successMessage('Class name Already Exists!', 'Class Found');
       return false;
    }
    else{
        return true;   
    }    
}