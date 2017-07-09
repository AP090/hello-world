var a=document.getElementsByTagName('b')[0],i=0;
setInterval(function(){
    a.innerHTML=" Hello. :) ".substr(0,++i);
},750);
