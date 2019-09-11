let x0 = Math.round(Math.random() * (1000 - 1) + 1), 
    a = 630360016,
    m = 2147483647,
    A = [],
    x,
    n = 3000,
    sum = 0;

for (let index = 0; index < 3000; index++) {
    if (index == 0) x = a * x0 % m;
    else x = a * x % m;
    A.push(x);
}

console.log(A);

let i = Math.round((Math.random()*n));
let k = A[i];
for (let index = 0; index < n; index++) sum+=A[index];
xs = (sum/m)/n

$('.result-items').append(`
<li class="list-group-item list-group-item-dark">i  = ${i}</li>
<li class="list-group-item list-group-item-dark">k  = ${k}</li>
<li class="list-group-item list-group-item-dark">Xs = ${xs.toFixed(5)}</li>
`)



