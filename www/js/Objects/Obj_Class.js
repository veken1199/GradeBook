

function Obj_Class(class_selector){
      this.inputMapVar = class_selector;
}

Obj_Class.prototype.addNewClass = function(){
      if (formValidor(this.inputMapVar)) {
        isUniqueClass(inputMapVar);
    }
}