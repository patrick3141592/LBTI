const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const stage1 = document.querySelector("#stage1");
const stage2 = document.querySelector("#stage2");
const stage3 = document.querySelector("#stage3");

const img = document.querySelector("img");

let Lovescore = 50;
const endpoint = 10;
select = [];
stages = [stage1, stage2, stage3];

function check(stageNum) {
  if (Lovescore < 50 + (stageNum + 1) * 5) {
    img.src = "./img/거절리오.jpg";
    return;
  } else {
    img.src = "./img/좋아리오.jpg";
    stages[stageNum].style.Webkitanimation = "fadeOut 1s";
    stages[stageNum].style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.Webkitanimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        stages[stageNum].style.display = "none";
        qna.style.display = "block";
      }, 450);
    });
    console.log((stageNum + 1) * 3 + 1 / 2);
    goNext((stageNum + 1) * 3 + 1 / 2);
  }
}

function goStage(stageNum) {
  const stage = stages[stageNum];
  qna.style.Webkitanimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    stage.style.Webkitanimation = "fadeIn 1s";
    stage.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      stage.style.display = "block";
    }, 450);
  });
  check(stageNum);
}

function calResult() {
  var pointArray = [
    { name: "mouse", value: 0, key: 0 },
    { name: "cow", value: 0, key: 1 },
    { name: "tiger", value: 0, key: 2 },
    { name: "rabbit", value: 0, key: 3 },
    { name: "dragon", value: 0, key: 4 },
    { name: "snake", value: 0, key: 5 },
    { name: "horse", value: 0, key: 6 },
    { name: "sheep", value: 0, key: 7 },
    { name: "monkey", value: 0, key: 8 },
    { name: "chick", value: 0, key: 9 },
    { name: "dog", value: 0, key: 10 },
    { name: "pig", value: 0, key: 11 },
  ];

  for (let i = 0; i < endpoint; i++) {
    var target = qnaList[i].a[select[i]];
    for (let j = 0; j < target.type.length; j++) {
      for (let k = 0; k < pointArray.length; k++) {
        if (target.type[j] === pointArray[k].name) {
          pointArray[k].value += 1;
        }
      }
    }
  }
  var resultArray = pointArray.sort(function (a, b) {
    if (a.value > b.value) {
      return -1;
    }
    if (a.value < b.value) {
      return 1;
    }
    return 0;
  });
  console.log(resultArray);
  let resultword = resultArray[0].key;
  return resultword;
}

/*function setResult(){
    let point = calResult()
    const resultName
}
    */

function goResult() {
  qna.style.Webkitanimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.Webkitanimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  });
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-2");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        select[qIdx] = idx;
        Lovescore += 5 * (qnaList[qIdx]["a"][idx]["score"] - 1);
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

function goNext(qIdx) {
  if (qIdx === endpoint) {
    goResult();
    return;
  } else if (qIdx % 3 === 0 && qIdx != 0) {
    goStage(qIdx / 3 - 1);
    return;
  } else if (2 * qIdx === 7) {
    qIdx = qIdx - 1 / 2;
  } else if (2 * qIdx === 13) {
    qIdx = qIdx - 1 / 2;
  } else if (2 * qIdx === 19) {
    qIdx = qIdx - 1 / 2;
  }
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var Love = document.querySelector(".LoveBar");
  Love.style.width = Lovescore + "%";
  console.log(qIdx);
}
function begin() {
  main.style.Webkitanimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.Webkitanimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
