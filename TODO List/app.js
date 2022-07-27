function addtolist()
{
    var taskname = document.getElementById('taskname').value;
    var tododiv = document.getElementById('mytodo');

    var newtodoitem = document.createElement('div');
    var todoname = document.createElement('li');
    todoname.innerHTML = taskname;
    var done = document.createElement('i');
    done.classList.add('fa');

    done.classList.add('fa-check');
    var deletebtn = document.createElement('i');

    deletebtn.classList.add('far');
    deletebtn.classList.add('fa-trash-alt');
    newtodoitem.appendChild(todoname);
    newtodoitem.appendChild(done);
    newtodoitem.appendChild(deletebtn);
    tododiv.appendChild(newtodoitem);
    
}
var tododiv = document.getElementById('mytodo');
tododiv.addEventListener('click',deleteitem);

function deleteitem(e)
{
    const ele = e.target;
    if(ele.classList[0]=='far')
    {
        ele.parentElement.remove();
    }
    else if(ele.classList[0]=='fa')
    {
        ele.parentElement.classList.add('done')
    }
}