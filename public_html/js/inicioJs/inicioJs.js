/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready( function() {
    
  new WOW().init();  
    
});

!function(underscore){
    
    function foo(){
    
    underscore.someawesomemethod = "yeah!!";
    console.log(underscore.VERSION);
   
    }
    
   foo();
    
}(_);

var awesomeNewModule = (function(exports){
    
    var exports = {
        foo:5,
        bar:10        
    };
    
    exports.helloMars = function(){        
        console.log('hello mars');        
    };
    
    exports.goodbye = function(){
        console.log("GoodBye!!");        
    };
    
    return exports;
    
}(awesomeNewModule || {}));