var db;
var name;
var res;


function loadDB(input) {
    db = window.openDatabase("app", "1.0", "classes", 100000);
    db.transaction(populateDB);
    name = input;
}

function populateDB(tx) {
    switch (name) {

        case "class":
            sql = "CREATE TABLE IF NOT EXISTS " + name + "(" +
                "title VARCHAR," +
                "content VARCHAR)";
            tx.executeSql(sql);
            break;

        default:
            sql = "CREATE TABLE IF NOT EXISTS " + name + "(" +
                "grade VARCHAR," +
                "percentage VARCHAR," +
                "maxgrade VARCHAR," +
                "item VARCHAR)";
            tx.executeSql(sql);
            break;
    }
}

function populate_success() {
    db.transaction(getClassContent, transaction_error);
}

function transaction_error(tx) {
    successMessage(tx.error(), 'Error!');
}

function getClassContent(tx) {
    switch (name) {
        case "class":
            sql = "SELECT title,content from " + name + "";
            tx.executeSql(sql, [], getData_success);
            break;
        case "X":
    }
}

function getData_success(tx, results) {
    var length = results.rows.length;

    if (length === 0) {
        successMessage('Plaese Add Classes', 'NO Classes!');
    }
    else {
        loadClassList(results.rows);
    }

}


function addClassModel(form) {
    loadDB("class");
    title = form[0].value;
    desc = form[1].value;
    db.transaction(insertClass, transaction_error);
}

function insertClass(tx) {
    tx.executeSql('INSERT INTO class (title,content) VALUES ( ?, ?)', [title, desc],
        function (tx, results) {

            myApp.closeModal('.popup-about');
            successMessage('Successfull added a class', 'Good One!');
        });
}

function loadClassTable() {
    loadDB("class");
    return db.transaction(getClassContent, transaction_error);
}

function success_callback() {
    return loadClassTable();
}

function isUniqueClass(form) {
    var flag;
    loadDB("class");
    title = form[0].value;
    desc = form[1].value;
    db.transaction(function (tx) {
        sql = "SELECT title FROM " + name + " WHERE title=?";
        tx.executeSql(sql, [title], function (tx, results) {
            flag = results.rows.length == 0;
            if (!flag) {
                successMessage('Class name Already Exists!', 'Class Found');
            }
            else {
                addClassModel(form);
                addToClassList(form);

            }
        });
    }, transaction_error);
}

//commet
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
                    successMessage("Successfully added a new component", "Good Job!")
                }
            }
        })
    })
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


