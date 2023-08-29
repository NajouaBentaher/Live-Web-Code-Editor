// declare vaiables 
var htmlV = document.getElementById("htmlCode")
var cssV = document.getElementById("cssCode");
var jsV = document.getElementById("jsCode");
(function setValues(){
if(localStorage.getItem("code")){
    var code = JSON.parse(localStorage.getItem("code"))
    htmlV.value=code.htmlC;
    cssV.value=code.cssC;
    jsV.value=code.jsC;
}else
{
document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";
}
showPreview()
})()
function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
   
    // save codes in an object 
    var codeObj = {
        htmlC:htmlCode,
        cssC:cssCode,
        jsC:jsCode
    }
    // save the code in local storage
    localStorage.setItem("code",JSON.stringify(codeObj))


    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
