var userName=document.getElementById("name")
var pw=document.getElementById("password")
var pn=document.getElementById("phone-number")
var rpw=document.getElementById("re-password")
function check (){
    if(userName.value=="" ||pn.value=="" ||pw.value==""){
        alert("Nhập thông tin đầy đủ")
    }
    // else if (Number.isInteger(parseInt(pn.value))){   
    // }
    else if (rpw.value!=pw.value){
        alert("Mật khẩu chưa khớp")
    }
    else {
        window.location.href="./index2.html"
    }
}











