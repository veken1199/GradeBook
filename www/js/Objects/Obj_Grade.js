function Grade(grade_info, class_lec){
      this.inputMapVar = grade_info;
      this.class_lec  = class_lec;
      this.grade_info = {};
}

Grade.prototype.validateGrade = function(){
      if (formValidor(this.inputMapVar)) {
            this.createGradeInfo();
      }


      //TODO VALIDATE IF THE INPUTS ARE INT.
} 

Grade.prototype.createGradeInfo = function(){
      this.inserted_grade = this.inputMapVar[0].value;
      this.max_grade      = this.inputMapVar[1].value;
      this.weight         = this.inputMapVar[2].value;
      this.item_name      = this.inputMapVar[3].value;
}

//adds a grade to the database
Grade.prototype.addGrade = function(){
      
}

Grade.prototype.isUnique = function(){
      
}


