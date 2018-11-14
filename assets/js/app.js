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

  if(e.target.className === 'nav-menu-icon') {
    document.getElementById('navbar-ul').style.display = 'block';
  }

  if(e.target.parentElement.className === 'navbar-ul--first' || e.target.className === 'navbar-ul--first') {
    document.getElementById('navbar-ul').style.display = 'none';
  }

  console.log(e.target);
}

// Add box-shadow to nav bar on scroll.
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add('navbar-shadow');
  } else {
    document.getElementById("navbar").classList.remove('navbar-shadow');
  }
}
