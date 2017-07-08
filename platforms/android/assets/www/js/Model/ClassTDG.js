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