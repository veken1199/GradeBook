function quickCalculate(form){
    var grade = form[0].value;
    var max = form[1].value;
    return (grade/max) * 100;
}



function setState(grade){
    if(grade<0)
     {
        return "Negative!!! hmm";
     }

     if(grade==100)
     {
        return "100!!!!";
     }

    if(grade<=60)
    {
        return "Your are failing";
    }

    if(grade>60 && grade<=70)
    {
        return "Passing, try harder";
    }

     if(grade>70 && grade<=80)
     {
        return "Good! You do better next time";
     }

     if(grade>80 && grade<=90)
     {
        return "Very Good! keep it up";
     }

     if(grade>90 && grade<100)
     {
        return "Nerd!!!";
     }

     if(grade>100 && grade<=120)
     {
        return "Wow, You got bonus";
     }

     if(grade>=120)
     {
        return "What did you do to the prof!";
     }    
}


function itemCalculor(item){

    var data = {
               "grade"       :   item['grade'],
               "percentage"  :   item['percentage'],
               "recieved"    :   (item["grade"]/item['maxgrade'] * 100).toFixed(3) ,
               "item"        :   item['item'],
               "contribution":   (item["grade"]/item['maxgrade'] * item['percentage']).toFixed(3)
           };
           
           return data;

}