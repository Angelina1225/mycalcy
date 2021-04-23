function clearInput() {
    document.getElementById("f_ans").value = '';
}
function show(x)
{   
    document.getElementById("f_ans").value = document.getElementById("f_ans").value + x;
}
function solution()
{
    var x;
    var y;
    x = document.getElementById("f_ans").value;
    y = eval(x);
    document.getElementById("f_ans").value = y;
        
}
function backspace()
{
    var str = document.getElementById("f_ans").value;
    document.getElementById("f_ans").value = str.substr(0, str.length - 1);
}
            
