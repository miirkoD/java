var niz = [4, 5, 7, 2, 5];
//1
for (i = 0; i < niz.length; i++)
    console.log(niz[i]);
//2
for (var i in niz) {
    broj = niz[i];
    if (broj % 2 == 0)
        console.log(broj);
}
//3
var suma = 0;
for (i = 0; i < niz.length; i++) {
    suma += niz[i];
    console.log(suma);
}
//4
var prvi = 0;
var broj = 0;
for (i = 0; i < niz.length; i++) {
    prvi = niz[0];
    broj = niz[i];
    if (prvi < niz[i])
        console.log(broj);
}