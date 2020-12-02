jQuery(document).ready(function(){

    "use strict"
    $('.slider').ripples({
        dropRadius:20,
        perturbance:0.01,
    });
    
    $('.text').typed({
        strings:["<strong>Eat</strong> <strong class='primary'>good!</strong> ","<strong>Feel</strong> <strong class='primary'>good!</strong>"],
         typespeed:0,
         loop:true
    });
});

