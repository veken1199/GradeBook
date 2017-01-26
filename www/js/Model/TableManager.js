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

        case "gradebook":
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




