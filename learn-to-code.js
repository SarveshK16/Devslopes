var numField1 = document.getElementById("numField1")
var numField2 = document.getElementById("numField2")
var resultField = document.getElementById("resultField")
var form = document.getElementById("xisy")
form.addEventListener("submit", function(event) {
    if(!numField1.value || !numField2.value){
        alert("Values Enter Kar")
    }else{
        var x = parseFloat(numField1.value)
        var y = parseFloat(numField2.value)
    }
    var result = x / y
    var percentage = result * 100
    resultField.innerText = "Answer: " + percentage + "%"
    event.preventDefault()
    
})