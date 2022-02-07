function compute()
{

    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    let interest = principal * years * rate / 100;
    let endYear = new Date().getFullYear() + parseInt(years);


    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    document.getElementById("result").innerHTML = `<br>If you deposit is <mark>${principal}</mark>,<br>at an interest rate of 
    <mark>${rate}%</mark><br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>in the year <mark>${endYear}</mark><br> <br> `;
}


function updateRate()
{
    let updatedRate = document.getElementById("rate").value;
    document.getElementById("updatedRate").innerText = `${updatedRate}%`;
}
