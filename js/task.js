var x="Wang";
var i,bz;
function start() {
    document.getElementById("start").disabled=true;
    document.getElementById("start").style.color="gray";
    if(document.getElementById("stop").value=="继   续") document.getElementById("stop").value="停   止";
    var tot=document.getElementById("time").value;
    tot=tot+"00";
    tot=parseInt(tot);
    if(x=="Wang"||x==-1) x=tot;
    if(x<10) document.getElementById("main_function").innerHTML="0.0"+x;
    else if(x<100) document.getElementById("main_function").innerHTML="0."+x;
    else
    {
        var str;
        x=String(x);
        str=x.substring(0,x.length-2);
        document.getElementById("main_function").innerHTML=str+"."+x.substring(x.length-2);
    }
    x--;
    if(x>=0) i = setTimeout("start()", 10);
}

function stop() {
    clearTimeout(i);
    if(x!="Wang") 
    {
        x="Wang";
        document.getElementById("stop").value="继   续";
        document.getElementById("start").disabled=false;
        document.getElementById("start").style.color="white";
    }           
    else
    {
        var str;
        document.getElementById("stop").value="停   止";
        x=document.getElementById("main_function").innerHTML;
        str=x.substring(0,x.length-3);
        x=str+x.substring(x.length-2);
        x=parseInt(x);
        i=setTimeout("start()",10);
    } 
}