function validate()
{
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let cpassword=document.getElementById('cpassword').value;
    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkCpassword(password,cpassword);
}

function checkUsername(username)
{
    if(username.length >7)
    {
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error','success');
        document.getElementById('username_error').innerText = "";
    }
    else
    {
        document.getElementById('username').classList.add('error');
        document.getElementById('username_error').innerText = "username must be atleast 8 letters long";
    }
}
function checkEmail(email)
{
    if(email.length >7 && email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error','success');
        document.getElementById('email_error').innerText = "";
    }
    else
    {
        document.getElementById('email').classList.add('error');
        document.getElementById('email_error').innerText = "please enter valid email address";
    }
}
function checkPassword(password)
{
    if(password.length >7)
    {
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error','success');
        document.getElementById('password_error').innerText = "";
    }
    else
    {
        document.getElementById('password').classList.add('error');
        document.getElementById('password_error').innerText = "password must be atleast 8 character long";
    }
}
function checkCpassword(password,cpassword)
{
    if(password.length >0 && password==cpassword)
    {
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('error','success');
        document.getElementById('cpassword_error').innerText = "";
    }
    else
    {
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').innerText = "Confirm password must match with password";
    }
}