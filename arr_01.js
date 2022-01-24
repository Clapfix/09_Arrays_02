/*********   Theorie **********/


/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];

// Modul: HTML-Synthese | Test
//output(getHTML());
function getHTML() {
    
    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        // htmlStr += getElement(tags[i],"open");
        // htmlStr += getElement(tags[i],"close");
    }

    return htmlStr;
}


// Modul: Zusammenbau der Elements: <tagStr> ---> Test
output(getElement(tags[1],"open"));
output(getElement(tags[1],"close"));
output(getElement(tags[1],));
function getElement(tag,op) {
    switch (op) {
        case "open":
            return controls[0] + tag + controls[2];
        case "close":
            return controls[1] + tag + controls[2];
        default:
            return "#!?"
    }

//     if (op == "open") {
//         return controls[0] + tag + controls[2];
//     }
//     else if(op == "close"){
//         return controls[1] + tag + controls[2];
//     }
//     else {
//         return "#!?";
//     }
// }


// Modul: Ausgabe | Test
// output("hi");
function output(outputData) {
    console.log(outputData);
}
