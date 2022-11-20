console.log("file is linked")

function ValidatePAN() { 
    var Obj = document.getElementById("textPanNo");
          if (Obj.value != "") {
              ObjVal = Obj.value;
              var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
              if (ObjVal.search(panPat) == -1) {
                  alert("Invalid Pan No");
                  Obj.focus();
                  return false;
              }
            else
              {
                alert("Correct Pan No");
                }
          }
    }
    var otp1 = 0;
    var loanamt = 0;
    function generateOTP() {
        var otp = Math.floor(1000 + Math.random() * 9000)
        otp1 = otp
        console.log("Your one time otp is  :",otp);
        document.getElementById('displaynone').style.display = "none"
        document.getElementById("displayform").style.display = "block"
        var d = document.getElementById('Name').value
        const myArray = d.split(" ")
        var m = myArray[0]
        var z = document.getElementById("appendname").innerHTML = "Dear  "+ m
    }

    function checkOTP(){
       var abc = document.getElementById("otp").value
       
       if(abc== otp1){
        var loanamt = document.getElementById("loanamt").value
        var emiamt = loanamt/8.5
        var emiamt = emiamt + loanamt
        var emiamt = emiamt*15
        var emiamt = emiamt/180
        alert("validation sucessfully and Installment per month is  :"+ emiamt)
        
       }else{
        alert("404 Page error")
       }
       otp1=1
    }

document.getElementById("displayform").style.display = "none"
      
var form = document.getElementById("displaynone");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var form2 = document.getElementById("displayform");
function handleForm(event) { event.preventDefault(); } 
form2.addEventListener('submit', handleForm);