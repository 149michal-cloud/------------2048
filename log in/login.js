function login()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username=="" || password=="")
    {
        alert("נא למלא את כל השדות");
        return;
    }
      let users = localStorage.getItem("users");
    if(users!=null) 
        users=JSON.parse(users);
    else
        users={};
    //בדיקה אם המשתמש קיים במערכת
    if(users[username] )
    {
        if(users[username].password==password)
        {
            alert("ברוך הבא! התחברת בהצלחה");
        sessionStorage.setItem("current_user", JSON.stringify(users[username]));
        window.location.href = "/menu.html";
        }
        else
        {
         alert(" סיסמה שגויים");
         
        }
    }
    else
    {
        alert("משתמש לא קיים!");
        window.location.href = "register/register.html";
    }
}