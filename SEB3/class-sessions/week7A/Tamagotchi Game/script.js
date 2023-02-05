
let stats = {
  hunger: 100,
  hygiene: 100,
  sleep: 100,
  fun: 100,
  social: 100
}
  
  let petImg = document.getElementById("petImg");
  let hungerBar = document.getElementById("hunger");
  let hygieneBar = document.getElementById("hygiene");
  let sleepBar = document.getElementById("sleep");
  let funBar = document.getElementById("fun");
  let socialBar = document.getElementById("social");


  function Loop(time = 1) {
    let total = stats["hunger"] + stats["hygiene"] + stats["sleep"] + stats["fun"] + stats["social"];
  
    if (stats["hunger"] <= 0 || stats["hygiene"] <= 0 || stats["sleep"] <= 0 || stats["fun"] <= 0 || stats["social"] <= 0) {
      petImg.src = "img/tamagochi8.png";
    } else if (total > 400) {
      petImg.src = "Tamagotchi Game/tamagochi1.png";
    } else if (total > 300) {
      petImg.src = "Tamagotchi Game/tamagochi2.png";
    } else if (total > 200) {
      petImg.src = "Tamagotchi Game/tamagochi3.png";
    } else if (total > 100) {
      petImg.src = "Tamagotchi Game/tamagochi4.png";
    } else if (total > 50) {
      petImg.src = "Tamagotchi Game/tamagochi5.png";
    }

    checkValue = (barValue, element, time) =>{
      if (stats[barValue] - parseInt(time) < 0){
        stats[barValue] = 0
        alert("Game Over!")
      } else{
        stats[barValue] = stats[barValue] - parseInt(time)
        element.value = stats[barValue]
        element.style.setProperty(
          "accent-color",
          stats[barValue] > 50 ? "inherit": "red"
        )
      }
    }
  

    checkValue("hunger", hungerBar, time)
    checkValue("hygiene", hygieneBar, time)
    checkValue("sleep", sleepBar, time)
    checkValue("fun", fun, time)
    checkValue("social", socialBar, time)
    
  
  
    hungerBar.innerHTML = stats["hunger"] + "%";
    hygieneBar.innerHTML = stats["hygiene"] + "%";
    sleepBar.innerHTML = stats["sleep"] + "%";
    funBar.innerHTML = stats["fun"] + "%";
    socialBar.innerHTML = stats["social"] + "%";
  }
  
  function Start() {
    setInterval(Loop, 1000);
  }

  resetToMaxValue = (barValue, element) => {
    stats[barValue] = 100
    element.innerHTML = stats[barValue] + "%";
    element.value = stats[barValue];
  }
  
  function Eat() {
    resetToMaxValue("hunger", hungerBar)
  }
  
  function Bathe() {
    resetToMaxValue("hygiene", hygieneBar)
  }
  
  function Sleep() {
    resetToMaxValue("sleep", sleepBar)
  }
  
  function Play() {
    resetToMaxValue("fun", funBar)
  }
  
  function Talk() {
    resetToMaxValue("social", socialBar)
  }
  
  Start();