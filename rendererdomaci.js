var data = {
    "nodes": [{ "id": "A" }, { "id": "B" }, { "id": "C" }, { "id": "D" }, { "id": "E" }, { "id": "F" }, { "id": "G" }, { "id": "H" }],
    "edges": [{ "from": "A", "to": "B" }, { "from": "A", "to": "C" }, { "from": "A", "to": "G" }, { "from": "A", "to": "D" }, { "from": "A", "to": "F" },
        { "from": "B", "to": "C" }, { "from": "B", "to": "G" },
        { "from": "C", "to": "H" }, { "from": "C", "to": "D" }, { "from": "C", "to": "F" },
        { "from": "D", "to": "E" }, { "from": "D", "to": "H" },
        { "from": "E", "to": "F" }, { "from": "F", "to": "G" },
        { "from": "G", "to": "H" }, { "from": "F", "to": "D" }
    ]
}


// Metoda za iscrtavanje grafa u div-u koji sa id="container"
function renderGraph() {
    document.getElementById("container").innerHTML = "";
    anychart.data.set(data);
    chart = anychart.graph(data);
    chart.title("D0m@ci uradjen");
    chart.container("container").draw();
    anychart.color.darken("#FF0000", 0.2);

}
// Poziv metode za ispis
anychart.onDocumentReady(renderGraph);