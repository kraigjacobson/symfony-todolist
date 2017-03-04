// main js

console.log('Assetic is pulling in the JS');

// ajax call to grab text
function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

// replace text on page
function myFunction(xhttp) {
    document.getElementById("demo").innerHTML =
        xhttp.responseText;
}