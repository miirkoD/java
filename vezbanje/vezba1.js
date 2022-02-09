var niz = [4, 5, 6, "g", 5.7, {}, 8]
typeof(4)
if (typeof(4) == 'number')
    console.log("jeste broj");
//1
var brojac = 0;
var brojac2 = 0;
for (el of niz)
    if (typeof(el) == 'number') {
        brojac++;
        console.log(brojac)
    } else {
        brojac2++;
        console.log(brojac)

    }
    //2
niziz = [1, 5, 6, 7, 3, 7, 8, 10]
for (i = 0; i < niziz.length; i++)
    if (niziz[i] > niziz[i - 1])
        console.log(niziz[i]);