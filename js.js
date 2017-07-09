var a=document.getElementsByTagName('b')[0],i=0; //Get the "<b>" tag from the document, set it as "a"; Make a new number "i" and set it to 0
setInterval(function(){ //Every 750 milliseconds,
    a.innerHTML=" Hello. :) ".substr(0,++i); //set a's innerHTML to a section of " Hello. :) " with the length of i; increase i's value by 1;
},750); //This where the 750 ms comes from
