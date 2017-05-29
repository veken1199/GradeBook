function deleteGradeModel(itemName, gradeBook){
    loadDB(gradeBook);
    db.transaction(function(tx){
       sql = "DELETE FROM " + gradeBook + "WHERE item =?";
       tx.executeSql(sql,[itemName], function(tx,results){
            removeItemFromGradeList(itemName);
            var allGrades = getAllGrades(gradeBook);
            var gradeBookStats = gradeBookStats(allGrades);

            //TODO view the changes on the ui when deleting a grade.
        });
    });
}

function loadGradeBookTable(allItems) {

    $$.each(allItems,function(index,element) {
        var computedData = itemCalculor(element);
        populateGradeBook(computedData);
        console.log(element);
    });
}


function getAllGrades(gradeBook){
    var allItems;
    loadDB(gradeBook);
    db.transaction(function(tx) {
        sql = "SELECT * FROM " + gradeBook;
        tx.executeSql(sql, [], function (tx, results) {
            allItems = results.rows;
            $$('#Class-Item-List').children().remove();
            loadGradeBookTable(allItems);
        });
    });
    return allItems;
}

function insertGrade(item,gradebook) {
    loadDB(gradebook);
    db.transaction(function(tx) {
       sql = "INSERT INTO " + gradebook + " (grade,percentage,maxgrade,item)  VALUES (?,?,?,?)" ;
       tx.executeSql(sql,[
                            item['grade'],
                            item['percentage'],
                            item['maxgrade'],
                            item['item']
       ], function (tx,results){
           var data = itemCalculor(item);
           populateGradeBook(data);
           console.log(results);
       });
    });
}

function addGradeInfo(gradeBook,allItems,item){
    if(validateGradebookLimit(allItems,item)){
        insertGrade(item,gradeBook);
        return true;
    }
    else {
        return false;
    }
}

function isUnqueGradeItem(item,gradeBook){
    loadDB(gradeBook);
    var name = item['item'];
    db.transaction(function (tx) {
        sql = "SELECT * FROM "+ gradeBook + " WHERE item =?"
        tx.executeSql(sql,[name], function (tx,results) {
            if(results.rows.length > 0){
                successMessage('This component name already exists' , "Component Found");
            }

            else{
                if(addGradeInfo(gradeBook,getAllGrades(gradeBook),item)){
                    myApp.closeModal('.popup-add-grade');
                    successMessage("Successfully added a new component", "Good Job!")
                }
            }
        })
    })
}