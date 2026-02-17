


let count = 0;
let index = -1;
let e2;
let conteainer = document.querySelector(".conteainer");

// פונקציה לטיפול בלחיצה על קלף
let clickMark = function (e) {

    if (count === 2) return; // חוסם לחיצות מיותרות

    e.target.style.backgroundImage =
        "url(images/" + e.target.innerText + ".jpg)";
    e.target.style.pointerEvents = 'none';

    count++;

    if (index === -1) {
        index = e.target.innerText;
        e2 = e;
        return;
    }

    // זה הקלף השני
    if (index === e.target.innerText) {
        // זוג נכון – לא צריך להחזיר
        count = 0;
        index = -1;
    } else {
        // זוג לא נכון
        setTimeout(() => {
            e.target.style.backgroundImage = "url(images/0.jpg)";
            e2.target.style.backgroundImage = "url(images/0.jpg)";
            e.target.style.pointerEvents = 'auto';
            e2.target.style.pointerEvents = 'auto';

            count = 0;
            index = -1;
        }, 1000);
    }
}


// פונקציה ליצירת המשחק לפי כמות קלפים
function createGame(num) {
    conteainer.innerHTML = ""; // ניקוי הלוח הקיים
    let arr = new Array(num);
    
    // הגרלת מיקומים לפי הכמות שנבחרה (חצי מהכמות הם זוגות)
    for (let i = 0; i < num / 2; i++) {
        for (let j = 0; j < 2; j++) {
            let random = Math.floor(Math.random() * num);
            while (arr[random] != undefined) {
                random = Math.floor(Math.random() * num);
            }
            arr[random] = i;
        }
    }

    // יצירת האלמנטים ב-DOM
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.classList.add("box");
        div.innerText = arr[i]+1;
        div.style.fontSize = "0px";
        div.style.backgroundImage = "url(images/0.jpg)";
        div.onclick = clickMark;
        conteainer.append(div);
    }
}

// האזנה לכפתורים ב-HTML
let buttons = document.querySelectorAll(".radio-group button");
buttons.forEach(btn => {
    btn.onclick = function() {
        let amount = parseInt(this.id);
        createGame(amount);
    };
});

// יצירת משחק התחלתי של 10 קלפים בטעינה הראשונה
createGame(10);


