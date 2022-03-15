//spread operator
function F(... niz){
    F(4);
    F(5,6,7);
}
function SUma(... brojevi){
    var SUma=0;
    brojevi.forEach(
        function(value){
            SUma+=value;
        }
    )
    return SUma;
}