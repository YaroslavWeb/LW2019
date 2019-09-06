let y_razrez,
    s_left,
    s_right,
    x,y1,y2;

$('.btn').click(() => {
    x =+ $('.form-control').val();
    x > 1 || x < -1 ?
        $('.output').empty().append(`Вы ввели неправильное число`) :
        mathRazrez();
});

let mathRazrez = () => {
    if (x > 0 && x <= 1) {
        y1 = Math.sqrt(1 - x ** 2);
        y2 = Math.sqrt(0.25 - (0.5 - x) * (0.5 - x));
        y_razrez = y1 - y2;
    };
    if (x < 0 && x >= -1) {
        y1 = Math.sqrt(1 - x ** 2);
        y2 = Math.sqrt(0.25 - (0.5 - Math.abs(x)) * (0.5 - Math.abs(x)));
        y_razrez = y1 + y2;
    };
    if (x == 0) {
        y1 = 1;
        y2 = 0;
        y_razrez = 1;
    };
    $('.output').empty().append(`
        x = ${x}
        y1 = ${y1.toFixed(4)}
        y2= ${y2.toFixed(4)}
        y_Разрез = ${y_razrez.toFixed(4)}
    `);
}



// alfa:=arctan(y/x);

// segment:=0.5(alfa-sin(alfa));

// St:=(y(1.0-x))/2.0;

// s1:=segment+St;

// alfa1:=arctan(y1/x);

// segment1:=0.5(alfa1-sin(alfa1));

// st1:=(y1(1-x))/2;

// s2:=segment1+st1;

// s_right:=s1+s2;

// s_left:=(pi)+(pi0.25)-S_right;

// end;

// if (x>-1)and(x<0)then

// begin

// y:=sqrt(1.0-(abs(x) abs(x)));

// y1:=sqrt(0.25-(0.5-abs(x))(0.5+abs(x)));

// y_razrez:=y+y1;

// alfa:=arctan(y/abs(x));

// segment:=0.5(alfa-sin(alfa));

// St:=(y(1.0-abs(x)))/2.0;

// s1:=segment+St;

// alfa1:=arctan(y1/abs(x));

// segment1:=0.5(alfa1-sin(alfa1));

// st1:=(y1(1-abs(x)))/2;

// s2:=segment1+st1;

// s_left:=s1+s2;

// s_right:=(pi)+(pi0.25)-S_left;

// end;

// if(x=1)then

// begin

// s_left:=(pi)+(pi0.25);

// s_right:=0;

// end;

// if (x=-1)then

// begin

// s_right:=(pi)+(pi0.25);

// s_left:=0;

// end;

// if (x=0) then

// begin

// s_left:=(((pi)+(pi0.25))/2);

// s_right:=(((pi)+(pi*0.25))/2);

// end;

// WriteLn('y_razrez=',y_razrez:6:4);

// WriteLn('s_left=', s_left:6:4);

// WriteLn('s_right=', s_right:6:4);

// end.