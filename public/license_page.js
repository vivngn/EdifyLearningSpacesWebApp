var crimtxtState = "close",
    hometxtState = "close",
    cctxtState = "close";

//opening and closing licensing information
function crimOC() {
document.getElementById("crimCheck").addEventListener("click", () =>{
    if (crimtxtState == "close"){
        document.getElementById("crInfo").style.display = "block";
        crimtxtState = "open";
    } else if (crmtxtState = "open"){
       document.getElementById("crInfo").style.display = "none";
       crimtxtState = "close";
    }
});
}

function homeOC() {
    document.getElementById("homeCheck").addEventListener("click", () =>{
    if (hometxtState == "close"){
        document.getElementById("homeInfo").style.display = "block";
        hometxtState = "open";
    } else if (hometxtState = "open"){
       document.getElementById("homeInfo").style.display = "none";
       hometxtState = "close";
    }
});
}
function ccOC() {
    document.getElementById("ccCheck").addEventListener("click", () =>{
    if (cctxtState == "close"){
        document.getElementById("ccInfo").style.display = "block";
        cctxtState = "open";
    } else if (cctxtState = "open"){
       document.getElementById("ccInfo").style.display = "none";
       cctxtState = "close";
    }
});
}


//alert for License Submit
document.getElementById("crSubmit").addEventListener("click", () => {
    alert("You have attempted to submit a document")
});
document.getElementById("homeSubmit").addEventListener("click", () => {
    alert("You have attempted to submit a document")
});
document.getElementById("ccSubmit").addEventListener("click", () => {
    alert("You have attempted to submit a document")
});

crimOC();
homeOC();
ccOC();