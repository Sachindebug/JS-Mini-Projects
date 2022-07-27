function display(value)
{
    document.getElementById('textarea').value+=value;
}
function calculate()
{
    let val = document.getElementById('textarea').value;
    let Value = eval(val);
    document.getElementById('textarea').value=Value;
}
function clr()
{
    document.getElementById('textarea').value="";
}