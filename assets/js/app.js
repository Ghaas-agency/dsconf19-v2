// Hides "Read more" button of schedule items with less lines.
window.addEventListener('DOMContentLoaded', function() {
  var truncTexts = document.getElementsByClassName('section-schedule-item__right--text');
  for (var i = 0; i < truncTexts.length; i++) {
    if(truncTexts[i].clientHeight < 70) {
      var el = truncTexts[i].parentElement.getElementsByClassName('read-more')[0];
      el.style.display = 'none';
    }
  }
})

// Expand schedule details
document.onclick = function(e) {
  if(e.target.className === 'read-more') {
    var trucTextEl = e.target.parentElement.getElementsByClassName('section-schedule-item__right--text')[0];
    trucTextEl.style.maxHeight = 'unset';
    e.target.style.display = 'none';
  }
}

/* var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function myFunction(x) {
  if (x.matches) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x);
x.addListener(myFunction);
 */