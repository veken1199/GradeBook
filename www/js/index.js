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
var loaded_class = null; 
var grade_item = null;

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
    var new_class = new Obj_Class(inputMapVar);
    if(new_class.isUnique() && new_class.validate()){
        new_class.addNewClass();
    }
}


function deleteClass(className) {
    deleteCLassModel(className);
}

function openClass(className) {
    mainView.router.load({ url: "Class.html" });
    loaded_class = new Obj_Class(null, className);
    loaded_class.loadClass();
    $$('#class-title').text(className);
    sessionStorage.setItem("ClassName", className);
}

function addGrade(cssSelector){
    var inputMapVar = $$('input[name*="' + cssSelector + '"]');
    grade_item = new Grade(inputMapVar, sessionStorage.getItem("ClassName"));
    grade_item.addGrade();
}

function deleteGrade(itemName){
    deleteGradeModel(itemName, loaded_class);
}


