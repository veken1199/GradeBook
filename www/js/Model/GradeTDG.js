function deleteGradeModel(itemName, gradeBook) {
    removeGradeFromClass(itemName, gradeBook);
    removeItemFromGradeList(itemName);
    var gradeBookStats = gradeBookStats(allGrades);

    //TODO view the changes on the ui when deleting a grade.
}

function loadGradeBookTable(allItems) {
    $$.each(allItems, function (index, element) {
        var computedData = itemCalculor(element);
        populateGradeBook(computedData);
        console.log(element);
    });
}

function getClassGrades(class_name) {
    var class_info = getClass(class_name);
    return class_info['grades'];
}

function populateClassFrontTable(class_name) {
    var class_grades = getClassGrades(class_name);

    if (isEmptyObject(class_grades)) {
        successMessage("No grades found in this class, please add some", "First time!");
    }

    else {
        loadGradeBookTable(class_grades);
    }

}

function insertGrade(item, class_name) {
    insertGradeIntoClass(item, class_name);

    var data = itemCalculor(item);
    populateGradeBook(data);

    myApp.closeModal('.popup-add-grade');
    successMessage("Successfully added a new component", "Good Job!");
}

function addGradeInfo(gradeBook, allItems, item) {
    if (validateGradebookLimit(allItems, item)) {
        insertGrade(item, gradeBook);
        return true;
    }
    else {
        return false;
    }
}

//this is where adding a new grade prcess starts
//we check if the grade is unique, if yes => we add the grade through add grade info
//else we promote that the grade name already exists. 
//item is a grade object which. 
function isUnqueGradeItem(item, class_name) {
    var class_info = getClass(class_name);
    if (class_info['grades'][item.item]) {
        successMessage('This component name already exists', "Component Found");
        return false;
    }

    else return true;
}