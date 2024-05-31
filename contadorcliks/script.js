var count = 0;
        var cliques = document.getElementById("botao-cliques");
        var disp = document.getElementById("Contador");
  
        cliques.onclick = function () {
            count++;
            disp.innerHTML = count;
        }