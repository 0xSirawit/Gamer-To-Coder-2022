const quizdb = [
  {
    question: "Life style ของคุณเป็นอย่างไร?",
    a: "มักทำสิ่งต่างๆตามแผนที่ตั้งไว้",
    b: "ชอบศึกษาสิ่งใหม่ๆ",
    c: "มักจะอินกับบทละครหรือหนังที่ดู",
    d: "ชอบความท้าทาย",
    Ra: "d",
    Rad: "b",
    Rr: "c",
    Rs: "a",
  },
  {
    question: "ในวันหยุดยาวคุณมักจะทำอะไร?",
    a: "จัดระเบียบของให้ห้อง",
    b: "ท่องเที่ยวในที่ใหม่ๆ",
    c: "ลองทำกิจกรรมใหม่ๆที่ไม่เคยทำ",
    d: "ดูหนังแอ็คชั่น",
    Ra: "d",
    Rad: "b",
    Rr: "c",
    Rs: "a",
  },
  {
    question:
      "หากเกิดเหตุการณ์เชื้อไวรัสซอมบี้ระบาดแล้วคุณติดอยู่ในsuper market คุณจะทำอย่างไร?",
    a: "ออกไปต่อสู้กับฝงซอมบี้แล้วหาวัคซีนป้องกัน",
    b: "ตามหาผู้อยู่รอดคนอื่นๆ",
    c: "จัดแบ่งอาหารและทรัพยากรต่างๆให้สามารถอยู่ได้นานที่สุด",
    d: "ทำตามหนังที่เคยดู",
    Ra: "a",
    Rad: "b",
    Rr: "d",
    Rs: "c",
  },
  {
    question: "หากมีกิจกรรมให้เลือกทำ 1 อย่าง คุณจะเลือกทำอะไร?",
    a: "walk rally",
    b: "cosplay",
    c: "เล่น board games",
    d: "เล่น paint balls",
    Ra: "d",
    Rad: "a",
    Rr: "b",
    Rs: "c",
  },
  {
    question: "สไตล์การเล่นเกมของคุณเป็นอย่างไร?",
    a: "ชอบสำรวจพื้นที่ต่องๆในเกม ตามหาสมบัติ",
    b: "ชอบต่อสู้ตี monster ",
    c: "ชอบการวางแผน กลยุทธ์",
    d: "ชอบสวมบทบาทตัวละคร เก็บlevelชิลๆ",
    Ra: "b",
    Rad: "a",
    Rr: "d",
    Rs: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const abtn = document.getElementById("a");
const bbtn = document.getElementById("b");
const cbtn = document.getElementById("c");
const dbtn = document.getElementById("d");

let currentQuiz = 0;
let scoreAD = 0;
let scoreA = 0;
let scoreS = 0;
let scoreR = 0;

action = ["Bed Wars", "Frontline", "Bullets Fly"];
adventure = ["Night at school", "Party Street", "Rodent Evil"];
roleplay = ["Free City", "Jail Break", "Party Street"];
strategy = ["Egg Wark", "Sky Block", "Build and Shoot"];
function card(type) {
  fetch("https://gamertocoder.garena.co.th/api/minigames")
    .then((response) => {
      if (response.status !== 200) {
        return response.status;
      }
      return response.json();
    })
    .then((data) => {
      if (typeof data == "number") {
        alert(data);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (eval(`${type}.includes(data[i].name)`)) {
            const currentData = data[i];
            console.log(22);
            const newListItem = document.createElement("li");
            newListItem.classList.add("card");
            const genre_array = currentData.genre;
            let genre_string = "<span>" + genre_array[0] + "</span>";
            if (genre_array.length > 1) {
              for (let j = 1; j < genre_array.length; j++) {
                genre_string =
                  genre_string + "<span>" + genre_array[j] + "</span>";
              }
            }
            const html1 =
              '<img src="' +
              currentData.icon +
              '"/>' +
              "<div class=coninfo>" +
              "<div class=mcon>" +
              '<div class="name" onclick="changeName(' +
              currentData.name +
              ')">' +
              currentData.name +
              "</div>" +
              '<div class="detail">' +
              currentData.description +
              "</div>" +
              "</div>" +
              "</div>";
            html1.trim();
            newListItem.innerHTML = html1;
            document.getElementById("gamelist").appendChild(newListItem);
          }
        }
      }
    });
}

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizdb = quizdb[currentQuiz];
  questionEl.innerText = currentQuizdb.question;
  a_text.innerText = currentQuizdb.a;
  b_text.innerText = currentQuizdb.b;
  c_text.innerText = currentQuizdb.c;
  d_text.innerText = currentQuizdb.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function checkcurrentquiz() {
  if (currentQuiz < quizdb.length) {
    loadQuiz();
  } else {
    var nameType = ["action", "adventure", "strategy", "roleplay"];
    var allnum = [scoreA, scoreAD, scoreS, scoreR];
    const sumall = allnum.indexOf(Math.max(...allnum));
    quiz.innerHTML = `
        <h1>Let's test what type of game you would like.</h1>
        <div class="mainquiz" style="height: 100%">
          <div class="bgquiz" style="margin-left:0; display: flex;flex-direction: column;
          align-items: center;">
          <div style="display: flex;
          align-items: center;
          flex-wrap: wrap;margin-bottom: 24px">
            <img src="images/${nameType[sumall]}.png" style="height: 12vw;" />
            <h2 id="question" style="float: right;">Your style is ${nameType[sumall]}.<br><span>Recommended Games</span></h2></div>
            <ul id= gamelist></ul>
          </div>
        </div>
                `;
    card(nameType[sumall]);
  }
}

abtn.addEventListener("click", () => {
  const answer = "a";
  if (answer) {
    if (answer === quizdb[currentQuiz].Ra) {
      scoreA++;
    } else if (answer === quizdb[currentQuiz].Rad) {
      scoreAD++;
    } else if (answer === quizdb[currentQuiz].Rs) {
      scoreS++;
    } else if (answer === quizdb[currentQuiz].Rr) {
      scoreR++;
    }
    currentQuiz++;
    checkcurrentquiz();
  }
});

bbtn.addEventListener("click", () => {
  const answer = "b";
  if (answer) {
    if (answer === quizdb[currentQuiz].Ra) {
      scoreA++;
    } else if (answer === quizdb[currentQuiz].Rad) {
      scoreAD++;
    } else if (answer === quizdb[currentQuiz].Rs) {
      scoreS++;
    } else if (answer === quizdb[currentQuiz].Rr) {
      scoreR++;
    }
    currentQuiz++;
    checkcurrentquiz();
  }
});

cbtn.addEventListener("click", () => {
  const answer = "c";
  if (answer) {
    if (answer === quizdb[currentQuiz].Ra) {
      scoreA++;
    } else if (answer === quizdb[currentQuiz].Rad) {
      scoreAD++;
    } else if (answer === quizdb[currentQuiz].Rs) {
      scoreS++;
    } else if (answer === quizdb[currentQuiz].Rr) {
      scoreR++;
    }
    currentQuiz++;
    checkcurrentquiz();
  }
});

dbtn.addEventListener("click", () => {
  const answer = "d";
  if (answer) {
    if (answer === quizdb[currentQuiz].Ra) {
      scoreA++;
    } else if (answer === quizdb[currentQuiz].Rad) {
      scoreAD++;
    } else if (answer === quizdb[currentQuiz].Rs) {
      scoreS++;
    } else if (answer === quizdb[currentQuiz].Rr) {
      scoreR++;
    }
    currentQuiz++;
    checkcurrentquiz();
  }
});
