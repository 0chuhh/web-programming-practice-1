const accordions = document.querySelectorAll(".nav-menu-item");
const img = document.querySelectorAll(".img");
const answer = document.querySelectorAll(".answer");
for (item of accordions) {
  item.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.add("active");
    } else {
      for (el of accordions) {
        el.classList.remove("active");
      }
      this.classList.add("active");
    }
  });
}
for (item of img) {
  item.addEventListener("click", function () {
    if (this.name == "4") {
      this.classList.add("true-answer", "lock");
      $("#4").css("opacity", "1");
      $(".main-text").css("display", "none");
      $(".dop-text").css("display", "block");

      $("#7").addClass("lock")
      $("#6").addClass("lock")
      $("#5").addClass("lock")

    } else if (this.name == "2" && !(this.classList.contains("lock"))) {
      this.classList.add("false-answer");
      $("#8").addClass("true-answer");
      $("#2").css("opacity", "1");
      $("#4").css("opacity", "1");
      $(".main-text").css("display", "none");
      $(".dop-text").text("Не правильно!!!!");
      $(".dop-text").css("display", "block");

      
      $("#7").addClass("lock")
      $("#5").addClass("lock")
    } else if (this.name == "3" && !(this.classList.contains("lock"))) {
      this.classList.add("false-answer");
      $("#8").addClass("true-answer");
      $("#4").css("opacity", "1");
      $("#3").css("opacity", "1");
      $(".main-text").css("display", "none");
      $(".dop-text").text("Неа!!!!");
      $(".dop-text").css("display", "block");

     
      $("#6").addClass("lock")
      $("#5").addClass("lock")
    } else if (this.name == "1" && !(this.classList.contains("lock"))) {
      this.classList.add("false-answer");
      $("#8").addClass("true-answer");
      $("#4").css("opacity", "1");
      $("#1").css("opacity", "1");
      $(".main-text").css("display", "none");
      $(".dop-text").text("Мимо!!!");
      $(".dop-text").css("display", "block");

      $("#7").addClass("lock")
      $("#6").addClass("lock")
      
    }
  });
}
