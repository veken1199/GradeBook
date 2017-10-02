function Grade(grade_info, class_lec){
      this.inputMapVar = grade_info;
      this.class_name  = class_lec;
      this.grade_info = {};
}

Grade.prototype.validateGrade = function(){
      if (formValidor(this.inputMapVar)) {
            this.createGradeInfo();
            if (isUnqueGradeItem(this, this.class_name)){
                  insertGrade(this, this.class_name);
                  return true;
            }
      }
      return false;
      //TODO VALIDATE IF THE INPUTS ARE INT.
} 

Grade.prototype.createGradeInfo = function(){
      this.grade          = this.inputMapVar[0].value;
      this.maxgrade       = this.inputMapVar[1].value;
      this.percentage     = this.inputMapVar[2].value;
      this.item           = this.inputMapVar[3].value;
}

//adds a grade to the database
Grade.prototype.addGrade = function(){
      this.validateGrade();
      calculateClassStats(getClassGrades(this.class_name), $$('#gradeNeeded').val());
}


Grade.prototype.deleteGrade = function(grade_name, class_name){
      deleteGradeModel(grade_name, class_name);
      calculateClassStats(getClassGrades(class_name), $$('#gradeNeeded').val());
}


