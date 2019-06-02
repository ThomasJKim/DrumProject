function random(min,max){
    return Math.round(Math.random() * (max-min) + min);
}

var letterJ = 4;
var letterF = 1.25;
var letterD = 2;


interval = setInterval(dropBox, 350, letterF);
interval2 = setInterval(dropBox, 1400, letterJ);
interval3 = setInterval(dropBox, 1400, letterD);

var letters = {
    J: {url: "url('https://image.flaticon.com/icons/svg/253/253861.svg')", location: 3},
    F: {url: "url('https://image.flaticon.com/icons/svg/140/140238.svg')", location: 1.5},
    D: {url: "url('https://image.flaticon.com/icons/svg/1809/1809807.svg')", location: 5}
}


var Jurl = letters.J.url;
var Furl = letters.F.url;
var Durl = letters.D.url;

function dropBox(letter){
    
    var length = ($(".game").width() / letter );
    var velocity = 3000;
    var size = ( 100 );
    var thisBox = $("<div/>", {
      class: "box",
      style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
    });
    

    if((letter === 1.25)){
      thisBox.css({"background": Jurl, "background-size":"contain"});
    } 
    else if((letter === 4)){
      thisBox.css({"background": Furl, "background-size":"contain"});
    }
    else if(letter === 2){
      thisBox.css({"background": Durl, "background-size":"contain"});
    }
    //   thisBox.css({"background": "url('https://cdn0.iconfinder.com/data/icons/system-ui-set/512/uppercase-letter-r-alphabet-512.png')", "background-size":"contain"});
    // }

    $(".game").append(thisBox);

    if(letter === 2){setTimeout(function(){
        thisBox.addClass("move");
      }, 700 );
    }
    else{
    setTimeout(function(){
        thisBox.addClass("move");
      }, 1400 );
    }
    
    thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function(event) {
        $(this).remove();
    });
}

