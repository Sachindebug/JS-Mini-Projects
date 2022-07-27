let open=0;

function openNav()
{
    if(!open)
    {
        $('.maindiv').css('width','100%');
        $('li').css('display','block');
        open=1;

    }
    else
    {
        $('.maindiv').css('width','0');
        $('li').css('display','none');
        open=0;
    }
}