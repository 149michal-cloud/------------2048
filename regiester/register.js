 function register() 
 {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mail = document.getElementById("email").value;
    let nickname = document.getElementById("nickname").value;

    if (username === "" || password === "" || mail === "" || nickname === "") {
        alert("נא למלא את כל השדות");
        return;
    }
    if (password.length < 6) {
        alert("הסיסמה חייבת להיות לפחות 6 תווים");
        return;
    }
    let users = localStorage.getItem("users");
    if(users!=null) 
        users=JSON.parse(users); 
    else 
        users={};
    if (users[username]) {
        alert("אן הכנס כרשום שם המשתמש כבר קיים, אנא בחר שם אחר");
        return;
    }
    users[username] = 
    {
        username: username,
        password: password,
        email: mail,
        nickname: nickname,
        score: 0    
    };
    localStorage.setItem("users", JSON.stringify(users));
    alert("ההרשמה הושלמה בהצלחה!");
    window.location.href = "/log in/login.html";
 }