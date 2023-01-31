let hunger = 100;
  let hygiene = 100;
  let sleep = 100;
  let fun = 100;
  let social = 100;
  
  let petImg = document.getElementById("petImg");
  let hungerBar = document.getElementById("hunger");
  let hygieneBar = document.getElementById("hygiene");
  let sleepBar = document.getElementById("sleep");
  let funBar = document.getElementById("fun");
  let socialBar = document.getElementById("social");
  
  function Loop(time = 1) {
    let total = hunger + hygiene + sleep + fun + social;
  
    if (hunger <= 0 || hygiene <= 0 || sleep <= 0 || fun <= 0 || social <= 0) {
      petImg.src = "img/tamagochi8.png";
    } else if (total > 400) {
      petImg.src = "img/tamagochi1.png";
    } else if (total > 300) {
      petImg.src = "img/tamagochi2.png";
    } else if (total > 200) {
      petImg.src = "img/tamagochi3.png";
    } else if (total > 100) {
      petImg.src = "img/tamagochi4.png";
    } else if (total > 50) {
      petImg.src = "img/tamagochi5.png";
    }
  
    if (hunger - parseInt(time) < 0) {
      hunger = 0;
      alert("Game Over!");
    } else {
      hunger = hunger - parseInt(time);
      hungerBar.value = hunger;
      hungerBar.style.setProperty(
        "accent-color",
        hunger > 50 ? "inherit" : "red"
      );
    }
  
    if (hygiene - parseInt(time) < 0) {
      hygiene = 0;
      alert("Game Over!");
    } else {
      hygiene = hygiene - parseInt(time);
      hygieneBar.value = hygiene;
      hygieneBar.style.setProperty(
        "accent-color",
        hygiene > 50 ? "inherit" : "red"
      );
    }
  
    if (sleep - parseInt(time) < 0) {
      sleep = 0;
      alert("Game Over!");
    } else {
      sleep = sleep - parseInt(time);
      sleepBar.value = sleep;
      sleepBar.style.setProperty("accent-color", sleep > 50 ? "inherit" : "red");
    }
  
    if (fun - parseInt(time) < 0) {
      fun = 0;
      alert("Game Over!");
    } else {
      fun = fun - parseInt(time);
      funBar.value = fun;
      funBar.style.setProperty("accent-color", fun > 50 ? "inherit" : "red");
    }
  
    if (social - parseInt(time) < 0) {
      social = 0;
      alert("Game Over!");
    } else {
      social = social - parseInt(time);
      socialBar.value = social;
      socialBar.style.setProperty(
        "accent-color",
        social > 50 ? "inherit" : "red"
      );
    }
  
    hungerBar.innerHTML = hunger + "%";
    hygieneBar.innerHTML = hygiene + "%";
    sleepBar.innerHTML = sleep + "%";
    funBar.innerHTML = fun + "%";
    socialBar.innerHTML = social + "%";
  }
  
  function Start() {
    setInterval(Loop, 1000);
  }
  
  function Eat() {
    hunger = 100;
    hungerBar.innerHTML = hunger + "%";
    hungerBar.value = hunger;
  }
  
  function Bathe() {
    hygiene = 100;
    hygieneBar.innerHTML = hygiene + "%";
    hygieneBar.value = hygiene;
  }
  
  function Sleep() {
    sleep = 100;
    sleepBar.innerHTML = sleep + "%";
    sleepBar.value = sleep;
  }
  
  function Play() {
    fun = 100;
    funBar.innerHTML = fun + "%";
    funBar.value = fun;
  }
  
  function Talk() {
    social = 100;
    socialBar.innerHTML = social + "%";
    socialBar.value = social;
  }
  
  Start();
  