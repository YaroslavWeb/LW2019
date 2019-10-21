function key(a,x,p) {
c = a % p;
if (c<p) {
    return a **x % p;
}
else if (c>p) {
    key(c,x,p);
}
}

console.log(key(BigInt(133),BigInt(3484),BigInt(4959)));