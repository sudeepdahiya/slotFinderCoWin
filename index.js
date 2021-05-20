var tag = document.createElement("script");
tag.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
document.getElementsByTagName('Head')[0].appendChild(tag);
var obj = null
setTimeout(() => {
  obj = new (function () {
    let interval = null;
    let age = 'Age 18+'
    let count =  40;
    let type = [['COVISHIELD', 'COVAXIN'], ['COVISHIELD'], ['COVAXIN']];
    let vaccine = 0;
    this.start = () => {
      interval = setInterval(this.getSlots, 3000);
    }
    this.toggleVaccine = () => {
      vaccine++;
      if (vaccine === type.length) {
        vaccine = 0;
      }
      return type[vaccine];
    }
    this.toggleAge = () => {
      age = age === 'Age 18+' ? 'Age 45+' : 'Age 18+'
      return age;
    }
    this.stop = () => {
      clearInterval(interval)
    }
    this.setCount = (val) => {
      count =  val;
      return count;
    }
    this.getSlots = () => {
      $("ion-button")[0].click()
      setTimeout(() => {
        var obj2 = $(".slots-box");
        for (let i = 0; i < obj2.length; i++) {
          let tagA = $("a", obj2[i]);
          let ageA = $(".age-limit", obj2[i]);
          if (tagA.length && ageA.length) {
            let vaccineType = $("div.vaccine-cnt h5",  obj2[i])[0].innerHTML;
            let available = parseInt(tagA[0].innerHTML);
            let isValid = ageA[0].innerHTML === age;
            if (available > count && isValid && type[vaccine].indexOf(vaccineType) !== -1) {
              console.log('tagA ', tagA, i, vaccineType)
              tagA[0].click();
              clearInterval(interval)
              break;
            }
          }
        }
      }, 1000)
    }
  })()
})
