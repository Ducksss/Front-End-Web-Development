"use strict";

/*Targets all the divs with the counter*/
var counters = document.querySelectorAll('.counter');

/*Objectives -> to increment the value from 0 to the value inside the "data inside" data-target */
/*For each counter inside the html file, they will run x number of counters */
counters.forEach(counter => {
    //we initially set the data value to 0
    counter.innerText = '0';

    //Another way to create a function
    var updateCounter = () => {
        //adding a + infront of it converts the supposedly sting into numbers
        var target = +counter.getAttribute('data-target');
        var c = +counter.innerText;

        /*This line of code determines the speed of the increments */
        var increment = Math.random() * 5;

        if (c < target) {
            //to increase / speed up the rate the numbers are added, we can change the value of c + x to increase speed which is incremented
            counter.innerText = Math.ceil(c + increment); //c+ x
            /*Call the function again in a setTimeout */
            setTimeout(updateCounter, 1);
        } else {
            /*If the script fails, this is the backup, immediate boot from the system */
            counter.innerText = target;
        }
    };
    updateCounter();
});