const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const stage1 = document.querySelector("#stage1");
const stage2 = document.querySelector("#stage2");
const stage3 = document.querySelector("#stage3");

const img1 = document.getElementById("test_id1");
const img2 = document.getElementById("test_id2");
const img3 = document.getElementById("test_id3");
const img4 = document.getElementById("test_id4");

let Lovescore = 50;
const endpoint = 10;
select = [];
stages = [stage1, stage2, stage3];

function check(stageNum) {
  if (Lovescore < 50 + (stageNum + 1) * 5 && stageNum === 0) {
    img1.src = "./img/거절리오.jpg";
    return;
  } else if (Lovescore >= 50 + (stageNum + 1) * 5 && stageNum === 0) {
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
  } else if (Lovescore < 50 + (stageNum + 1) * 5 && stageNum === 1) {
    img2.src = "./img/수줍리오.png";
    return;
  } else if (Lovescore >= 50 + (stageNum + 1) * 5 && stageNum === 1) {
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
  } else if (Lovescore < 50 + (stageNum + 1) * 5 && stageNum === 2) {
    img3.src = "./img/좋아리오.jpg";
    return;
  } else if (Lovescore >= 50 + (stageNum + 1) * 5 && stageNum === 2) {
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

function setResult() {
  img4.src = "./img/좋아리오.jpg";
  return;
}

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


function beginn() {
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
  saveName();
}

window.beginn = beginn();