/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

*/

//framework 7 instantiation 

var myApp = new Framework7({
    material: true
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

myApp.onPageInit('ClassBook', function (page) {
    if(db==null||page.fromPage.name=="index"){
        loadClassTable();
    }
  
    
});


function calculate(cssSelector) {
    var inputMapVar = $$('input[name*="' + cssSelector + '"]');
    if (formValidor(inputMapVar)) {
        var total = quickCalculate(inputMapVar);
        var state1 = setState(total);
        $$('.q_output').text(total.toFixed(3) + " %");
        $$(".q_state").text(state1 + " ");
    }
}

function addClass(cssSelector) {
    var inputMapVar = $$('input[name*="' + cssSelector + '"]');
    if (formValidor(inputMapVar)) {
        isUniqueClass(inputMapVar);
    }
}


function deleteClass(className) {
    deleteCLassModel(className);
}

function openClass(className) {
    mainView.router.load({ url: "Class.html" });
    loadGradeBookTable(className);
    $$('#class-title').text(className);
    sessionStorage.setItem("ClassName",className)
}

function addGrade(cssSelector){

    var inserted_grade;
    var actual_grade;
    var contribution;
    var weight;
    var max_grade;
    var item_name;



    var inputMapVar = $$('input[name*="' + cssSelector + '"]');

    if (formValidor(inputMapVar)) {
        
        actual_grade = quickCalculate(inputMapVar);
        
        inserted_grade = inputMapVar[0].value;
        max_grade      = inputMapVar[1].value;
        weight         = inputMapVar[2].value;
        item_name      = inputMapVar[3].value;
        contribution   = actual_grade * weight;

        var item = {
        "grade"     : inserted_grade,
        "percentage": weight,
        "maxgrade"  : max_grade,
        "item"      : item_name
    };

        insertGrade(item,sessionStorage.getItem("ClassName"));
        alert(contribution);
    }
}


