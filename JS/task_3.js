function outputSquares (a,b){
    for (let i = a; i<=b; i++){
        var squaresContent = document.getElementById('squares');
        document.getElementById("squares").innerHTML = squaresContent.innerHTML + "<p>" + i + "<sup>2</sup> = " + i*i + "</p>";
    }
}


