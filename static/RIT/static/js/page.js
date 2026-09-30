/* RIT project page -- project-page-1.0. Two behaviours: the BibTeX copy button, and the result clips, which play
   only while on screen and never on their own when the reader asks for reduced motion. */
(function () {
  var btn = document.getElementById("copy-bib");
  var pre = document.getElementById("bibtex");
  if (btn && pre) {
    btn.addEventListener("click", function () {
      var label = btn.querySelector("span");
      var show = function (t) {
        label.textContent = t;
        window.setTimeout(function () { label.textContent = "Copy BibTeX"; }, 1800);
      };
      var selectAll = function () {
        var r = document.createRange();
        r.selectNodeContents(pre);
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
        show("Selected: press Ctrl+C");
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pre.textContent).then(function () { show("Copied"); }, selectAll);
      } else {
        selectAll();
      }
    });
  }

  var clips = document.querySelectorAll("video[data-clip]");
  if (!clips.length) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.35 });
  clips.forEach(function (v) { io.observe(v); });
})();
