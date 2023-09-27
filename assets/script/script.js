function calc(){
    const num = document.getElementById("num").value;
    const conta = Math.log(parseFloat(num)).toFixed(3);
    const res = document.getElementById("saida");

    if (num === ""){
        res.textContent = "Digite algo."
    }else{
        res.textContent = `${conta}`
    }
}