function Grade(grade_info, class_lec){
      this.inputMapVar = grade_info;
      this.class_name  = class_lec;
      this.grade_info = {};
}

Grade.prototype.validateGrade = function(){
      if (formValidor(this.inputMapVar)) {
            this.createGradeInfo();
            isUnqueGradeItem(this, this.class_name);
      }
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
}

Grade.prototype.isUnique = function(){
      
}

Grade.prototype.deleteGrade = function(grade_name){
      console.log(loaded_class)
      deleteGradeModel(grade_name,loaded_class.class_name);
}


