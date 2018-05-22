// när man scrollar ner ser man knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// när man klickar kommer man till toppen
function topFunction() {
    document.body.scrollTop = 0; // För Safari
    document.documentElement.scrollTop = 0; // För Chrome, Firefox, IE och Opera
}