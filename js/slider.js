window.onload = function() {
  var slides = document.getElementsByClassName("slide");
  var indices = document.getElementsByClassName("indi");
  var imgs = ['sl-0.jpg','sl-1.jpg', 'sl-2.jpg','sl-3.jpg']
  var prev = indices[0];
  var next = indices[indices.length-1];
  var curImg = slides[1];
  var leftImg = slides[0];
  var rightImg = slides[2];
  // cur img: 1
  // left img: 0
  // right img: 2
  // indices = indices.slice(1, indices.length-1);
  var cur = 0;
  // console.log(slides.length);
  for (var i = 1; i <= 4; i++){
    indices[i].onclick = function(){
      if (cur != parseInt(this.dataset['index'])){
        console.log("pressed:",this.dataset['index']);
        console.log("cur:",cur);
        slide(this.dataset['index']);
        cur = parseInt(this.dataset['index']);
      
      }
    }
    if (i < 4){
      slides[i-1].style.background="linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+i+".jpg)";
      slides[i-1].style.backgroundRepeat="no-repeat";
      slides[i-1].style.backgroundCover="cover";
    // slides[i-1].style.display = "none";
    }
  }
  slides[0].style.display = "inline-block";
  curImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+"0"+".jpg)";
  leftImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+"3"+".jpg)";
  rightImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+"1"+".jpg)";
  function autoslide(){
    console.log("in auto slide", cur);
    slide(parseIndex(cur + 1));
    cur = parseIndex(cur + 1);
  }
  var ids = document.getElementById("main-bg-indicator");
  var itv = null;
  itv = setInterval(()=>{
    autoslide();
  }, 3400);
  ids.onmouseover = function(){
    if (itv != null){
      clearInterval(itv);
      itv = null;
    }
  }
  ids.onmouseout = function(){
    if (itv == null)
      itv = setInterval(()=>{
        autoslide();
      }, 3400);
  }
  // slide function: slide from index a to b
  function slide(id) {
    console.log("in slide ",id);
    id = parseInt(id);
    id = parseIndex(id);
    // console.log(parseIndex(id));
    // console.log(parseIndex(id+1).toString());
    // console.log("./images/slider/sl-"+parseIndex(id+1).toString()+".jpg)");
    if (id - cur > 0){
      rightImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+parseIndex(id).toString()+".jpg)";
      curImg.style.animation = "toleft 1s";
      rightImg.style.animation = "toleft 1s";
    }
    else {
      leftImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+parseIndex(id).toString()+".jpg)";
      curImg.style.animation = "toright 1s";
      leftImg.style.animation = "toright 1s";
    }
    // cur = id;
    setTimeout(()=>{
      curImg.style.animation = "none";
      leftImg.style.animation = "none";
      rightImg.style.animation = "none";
      leftImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+parseIndex(id-1).toString()+".jpg)";
      // leftImg.style.opacity = "0.1";
      curImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+parseIndex(id).toString()+".jpg)";
      rightImg.style.background = "linear-gradient( -180deg, rgba(255, 255, 255, 0.055),  rgba(255, 255, 255, 0.418), rgba(235, 235, 235, 0.74), rgb(235, 235, 235)), url(./images/slider/sl-"+parseIndex(id+1).toString()+".jpg)";
      // rightImg.style.opacity = "0.1";
    }, 900);
    
  }
  function parseIndex(i){
    if (i < 0)
      return imgs.length + i;
    else if (i > imgs.length - 1)
      return i - imgs.length;
    else
      return i;
  }
}


