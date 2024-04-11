questions = document.querySelectorAll(".questions .question");
paragraphs = document.querySelectorAll(".question p");
plusImages = document.querySelectorAll(".heading img.plusIcon");
minusImages = document.querySelectorAll(".heading img.minusIcon");

questions.forEach((question) => {
  question.onclick = function () {
    paragraphs[this.id - true].classList.toggle("hide");
    plusImages[this.id - true].classList.toggle("hide");
    minusImages[this.id - true].classList.toggle("hide");
  };
});
