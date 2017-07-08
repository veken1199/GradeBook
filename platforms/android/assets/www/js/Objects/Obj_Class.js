

function Obj_Class(class_selector, class_name){
      this.inputMapVar = class_selector;
      this.class_name  = class_name;
      this.allGrades   = [];
}

Obj_Class.prototype.addNewClass = function(){
      if (formValidor(this.inputMapVar)) {
        isUniqueClass(inputMapVar);
    }
}

Obj_Class.prototype.updateGradesList = function(grades){
      this.allGrades = grades
}

Obj_Class.prototype.loadClass = function(){
      this.allGrades = getAllGrades(this.class_name);
}

// this method is resposible for calculating of grade of the class.
// it shows the results on the frontend 
// it operates on the list of grades that each element in this list has
// the following format:  
      // grade  
      // maxgrade       
      // percentage     
      // item  
Obj_Class.prototype.calculateResults = function(){
      
}