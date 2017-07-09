var a=document.getElementsByTagName('b')[0],
    i=0; 
    /*
     * Get the "<b>" tag from the document,
     * and set it as "a"; Make a new number
     * "i" and set it to 0
     */
setInterval(function(){                      // Every 750 milliseconds,
    a.innerHTML=" Hello. :) ".substr(0,++i); // set a's innerHTML to a section of " Hello. :) " 
},750);//(this is where the 750ms comes from)// with the length of i; Then, increase i's value by 1;
