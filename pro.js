setInterval(startTime,1000);
function startTime(){
  var dat=new Date();
  var h=dat.getHours();
  var m=dat.getMinutes();
  var s=dat.getSeconds();
  var st="AM";
  var dt=dat.getDate();
  var mo=new Array();
  var yr=dat.getFullYear();
  if(h>12){
      h=h-12;
      st="PM";
    }
  h=h<10?"0"+h:h;
  m=m<10?"0"+m:m;
  s=s<10?"0"+s:s;
  mo[0]="January";
  mo[1]="February";
  mo[2]="March";
  mo[3]="April";
  mo[4]="May";
  mo[5]="June";
  mo[6]="July";
  mo[7]="August";
  mo[8]="September";
  mo[9]="October";
  mo[10]="November";
  mo[11]="December";
  var mon=mo[dat.getMonth()];
  document.getElementById("tim").innerHTML=mon+" "+dt+" "+","+yr+"<br>"+h+":"+m+":"+s+" "+st;
}



// }
