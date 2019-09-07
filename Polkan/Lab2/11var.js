'use strict';

var numberMask = IMask(
    document.getElementById('input-mask'), {
        mask: Number,
        min: -1,
        max: 1,
        radix: '.',
        scale: 10
    }); 

        var a = document.getElementById('button');
        a.onclick = function () {
            var text = document.getElementsByTagName("input")[0];
            var x = text.value;
            x = Number(x);
            if (x > 0.0 && x < 1.0) {
                var y = Math.sqrt(1.0 - (x) * (x));
                var y1 = Math.sqrt(0.25 - (0.5 - Math.abs(x)) * (0.5 - Math.abs(x)));
                var y_razrez = y + y1;
           var     alfa=Math.atan(y/x);
var segment=0.5*(alfa-Math.sin(alfa));
var St=(y*(1.0-x))/2.0;
var s1=segment+St;
 var alfa1=Math.sin(y1/x);
 var segment1=0.5*(alfa1-Math.sin(alfa1));
 var st1=(y1*(1-x))/2;
    var s2=segment1+st1;
        var s_right=s1+s2;
 var s_left=((Math.PI)/2)+(Math.PI*0.25)-s_right;
 var s_full = s_right + s_left;

                document.getElementById("output").innerHTML = ` y=${y.toFixed(4)},  y1=${y1.toFixed(4)},  
                y_razrez=${y_razrez.toFixed(4)}, s_right = ${s_right.toFixed(4)}, s_left = ${s_left.toFixed(4)}, s_full = ${s_full.toFixed(4)} `;
                
                
            } else if ( x <0.0 && x > -1.0) {
                    var y = Math.sqrt(1.0 - (x) * (x));
                 y1 = Math.sqrt(0.25 - (0.5 - Math.abs(x)) * (0.5 - Math.abs(x)));
                 y_razrez = y + y1;
                   alfa=Math.atan(y/x);
 segment=0.5*(alfa-Math.sin(alfa));
 St=(y*(1.0-x))/2.0;
 s1=segment+St;
  alfa1=Math.sin(y1/x);
  segment1=0.5*(alfa1-Math.sin(alfa1));
  st1=(y1*(1-x))/2;
     s2=segment1+st1;
         s_left=s1+s2;
                s_right =((Math.PI)/2)+(Math.PI*0.25)-s_left;
s_full = ((Math.PI)/2)+(Math.PI*0.25);
document.getElementById("output").innerHTML = `    y_razrez=${y_razrez.toFixed(4)}, s_right = ${s_right.toFixed(4)}, 
    s_left = ${s_left.toFixed(4)}, s_full = ${s_full.toFixed(4)} `;
               

            } else if (x == 0) {
                y_razrez = 1;
                s_full = (Math.PI/2) + (Math.PI/4) ;
                s_left = s_full / 2;
                s_right = s_full / 2 ;
                document.getElementById("output").innerHTML = ` y_razrez=${y_razrez}, s_right = ${s_right.toFixed(4)}, 
                s_left = ${s_left.toFixed(4)}, s_full = ${s_full.toFixed(4)} `;
            } else if (x == 1) {
                y_razrez = 0;
                s_left =  (Math.PI/2) + (Math.PI/4) ;
                s_right = 0;
                s_full = s_left;
                document.getElementById("output").innerHTML = ` y_razrez=${y_razrez}, s_right = ${s_right}, 
                s_left = ${s_left.toFixed(4)}, s_full = ${s_full.toFixed(4)} `;
            } else if (x == (-1)) {
                y_razrez = 0;
                s_right =  (Math.PI/2) + (Math.PI/4) ;
                s_left = 0;
                s_full = s_right;
                document.getElementById("output").innerHTML = ` y_razrez=${y_razrez}, s_right = ${s_right.toFixed(4)}, 
                s_left = ${s_left}, s_full = ${s_full.toFixed(4)} `;

            }

        }
   