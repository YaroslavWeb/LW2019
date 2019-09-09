let x0 = Math.round(Math.random() * (100 - 1) + 1),
    a = 630360016,
    m = 2147483647,
    A = [],
    x = x0;
    n = 3000;
    console.log(x0);
while(n > 0) {
    if (n == 100) x = a * x0 % m;
    else x = a * x % m;
    A.push(x);
    n--;
    console.log(n);
}
console.log(A);
