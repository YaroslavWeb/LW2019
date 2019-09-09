let x0 = Math.round(Math.random() * (1000 - 1) + 1), 
    a = 630360016,
    m = 2147483647,
    A = [],
    x = x0;
    n = 3000;

while (n > 0) {
    if (n == 100) x = a * x0 % m;
    else x = a * x % m;
    A.push(x);
    n--;
}

let i = Math.round((Math.random()*n));
let k = A[i];
let xs = A.reduce((sum, curent)=> (sum+curent)/m);

$('.result-items').append(`
<li class="list-group-item list-group-item-dark">i  = ${i}</li>
<li class="list-group-item list-group-item-dark">k  = ${k}</li>
<li class="list-group-item list-group-item-dark">Xs = ${xs.toFixed(2)}</li>
`)



