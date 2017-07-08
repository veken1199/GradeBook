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

function success_callback() {
    return loadClassTable();
}


function getGradebook(){
    var gradebook = JSON.parse(localStorage.getItem("gradebook"));
    return gradebook;
}

function getClassFromBook(class_name){
    gradebook = getGradebook();
    return gradebook[class_name];
}

// class info is json obj in the following format:
//          {'title' : 'class_name',
//          'content: 'class_description'};
function addClassToGradeBook(class_info){
    gradebook = getGradebook();
    gradebook[class_info['title']] = class_info;
    storeInLocalStorage(gradebook, 'gradebook');
}

function removeClassFromGradeBook(class_name){
    gradebook = getGradebook();
    delete gradebook[class_name];
    storeInLocalStorage(gradebook, 'gradebook');
}

// takes json obj and localstorage key
function storeInLocalStorage(json_obj, storage_key){
    localStorage.setItem(storage_key, JSON.stringify(json_obj));
}