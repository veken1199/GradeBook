function Obj_Class(class_selector) {
      this.inputMapVar1 = class_selector;
      this.title = class_selector[0].value;
      this.content = class_selector[1].value;
      this.grades = {};
}

Obj_Class.prototype.addNewClass = function () {
      insertClass(this);
      addToClassList(this);
}

Obj_Class.prototype.validate = function () {
      return formValidor(this.inputMapVar1);
}

//title = class name
Obj_Class.prototype.isUnique = function () {
      return isUniqueClassTDG(this.title);
}

Obj_Class.prototype.updateGrades = function () {
      var allGrades = getClassGrades(this.title);
      
      if (!isEmptyObject(allGrades)) {
            calculateClassStats(allGrades, $$('#gradeNeeded').val());
      }
}

Obj_Class.prototype.loadClass = function () {
      populateClassFrontTable(this.title);   
      this.updateGrades(); 
}

Obj_Class.prototype.toJSON = function () {
      var json_self = {
            'title': this.title,
            'content': this.content,
            'grades': this.grades
      };
      return json_self;
}


Obj_Class.prototype.deleteClass = function (class_name) {
      deleteCLassModel(class_name);
}

Obj_Class.prototype.setTitle = function (class_name) {
      this.title = class_name;
}

// this method is resposible for calculating of grade of the class.
// it shows the results on the frontend 
// it operates on the list of grades that each element in this list has
// the following format:  
// grade  
// maxgrade       
// percentage     
// item