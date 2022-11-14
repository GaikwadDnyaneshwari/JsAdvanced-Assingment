const tip = document.getElementById("range");
const tit = document.querySelector(".ran");
const tipamt = document.querySelector(".tipamt");
const amt = document.querySelector(".bill");


tip.addEventListener("input", function(e){
    let inp = document.getElementById("num").value ;
    const tipamp = e.target.value ;

    if(inp === "" ){
        alert("amount is required")
    }else{
        tit.textContent = `${tipamp} %`;
        tipamt.textContent = `${tipamp} %`;
        amt.textContent = tipCalc(parseFloat(inp), parseFloat(tipamp))
    }

    function tipCalc(amt, tip){
        let tipC = (amt * tip/100);
        return tipC+amt;
    }
})