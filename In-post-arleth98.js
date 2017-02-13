//Related Post Thumb
$("ul#related-summary li img").each(function () {    $(this).attr("src", $(this).attr("src").replace(/\/s[0-9]+(\-c)?\//, "/w200-h120-c/")) });
// Ripple
$(function(){var t,i,s,e;$(".ripplelink").click(function(h){0===$(this).find(".ink").length&&$(this).prepend("<span class='ink'></span>"),t=$(this).find(".ink"),t.removeClass("animate"),t.height()||t.width()||(i=Math.max($(this).outerWidth(),$(this).outerHeight()),t.css({height:i,width:i})),s=h.pageX-$(this).offset().left-t.width()/2,e=h.pageY-$(this).offset().top-t.height()/2,t.css({top:e+"px",left:s+"px"}).addClass("animate")})});
/Pager
$(document).ready(function(){var e=$("a.blog-pager-older-link").attr("href");$("a.blog-pager-older-link").load(e+" .post-title:first",function(){var e=$("a.blog-pager-older-link").text();$("a.blog-pager-older-link").text(e)});var r=$("a.blog-pager-newer-link").attr("href");$("a.blog-pager-newer-link").load(r+" .post-title:first",function(){var e=$("a.blog-pager-newer-link:first").text();$("a.blog-pager-newer-link").text(e)})});
// Pesan komentar
function cdClear2() {
  var wtarea = document.getElementById('codes2');
  wtarea.value = '';
  wtarea.focus();
  var clears = document.querySelectorAll('#cvrt3, #cvrt4, #cvrt5, #cvrt6, #cvrt7, #cvrt8, #cvrt9, #cvrt10, #cvrt11')
  for (var i = 0; i < clears.length; i++)
{
  clears[i].disabled = false,document.getElementById("btnInfo2")
        .style.display = "none",document.getElementById("button-link2")
        .style.display = "none"
}
}

function preConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt7 = document.getElementById('opt7'),
    opt8 = document.getElementById('opt8'),
    opt9 = document.getElementById('opt9'),
    opt10 = document.getElementById('opt10'),
    opt11 = document.getElementById('opt11'),
    opt16 = document.getElementById('opt16');
  cv = cv.replace(/\t/g, "    ");
 if (opt16.checked) { if (opt7.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt8.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt9.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt10.checked) cv = cv.replace(/</g, "&lt;");
  if (opt11.checked) cv = cv.replace(/>/g, "&gt;");
  cv = cv.replace(/^/, "<pre>");
      cv = cv.replace(/$/, "</pre>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function codeConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt7 = document.getElementById('opt7'),
    opt8 = document.getElementById('opt8'),
    opt9 = document.getElementById('opt9'),
    opt10 = document.getElementById('opt10'),
    opt11 = document.getElementById('opt11'),
    opt17 = document.getElementById('opt17');
  cv = cv.replace(/\t/g, "    ");
  if (opt17.checked) { if (opt7.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt8.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt9.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt10.checked) cv = cv.replace(/</g, "&lt;");
  if (opt11.checked) cv = cv.replace(/>/g, "&gt;");
  cv = cv.replace(/^/, "<code>");
      cv = cv.replace(/$/, "</code>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function precodeConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt7 = document.getElementById('opt7'),
    opt8 = document.getElementById('opt8'),
    opt9 = document.getElementById('opt9'),
    opt10 = document.getElementById('opt10'),
    opt11 = document.getElementById('opt11'),
    opt18 = document.getElementById('opt18');
  cv = cv.replace(/\t/g, "    ");
  if (opt18.checked) { if (opt7.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt8.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt9.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt10.checked) cv = cv.replace(/</g, "&lt;");
  if (opt11.checked) cv = cv.replace(/>/g, "&gt;");
  cv = cv.replace(/^/, "<pre><code>");
      cv = cv.replace(/$/, "</code></pre>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function spoilerConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt19 = document.getElementById('opt19')
  cv = cv.replace(/\t/g, "    ");
    if (opt19.checked) {cv = cv.replace(/^/, "<spoiler>");
      cv = cv.replace(/$/, "</spoiler>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function strongConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt12 = document.getElementById('opt12')
  cv = cv.replace(/\t/g, "    ");
    if (opt12.checked) {cv = cv.replace(/^/, "<strong>");
      cv = cv.replace(/$/, "</strong>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function emConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt13 = document.getElementById('opt13')
  cv = cv.replace(/\t/g, "    ");
    if (opt13.checked) {cv = cv.replace(/^/, "<em>");
      cv = cv.replace(/$/, "</em>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};

function uConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt14 = document.getElementById('opt14')
  cv = cv.replace(/\t/g, "    ");
    if (opt14.checked) {cv = cv.replace(/^/, "<u>");
      cv = cv.replace(/$/, "</u>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function strikeConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt15 = document.getElementById('opt15')
  cv = cv.replace(/\t/g, "    ");
    if (opt15.checked) {cv = cv.replace(/^/, "<strike>");
      cv = cv.replace(/$/, "</strike>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function embedConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt20 = document.getElementById('opt20')
  cv = cv.replace(/\t/g, "    ");
    if (opt20.checked){ cv = cv.replace(/^/, "<iframe src=\"https://embed.disqus.com/p/");
      cv = cv.replace(/$/, "\" style=\"border:0;width:100%;height:300px;\" seamless=\"seamless\" scrolling=\"no\" allowtransparency=\"true\"><\/iframe>");
  ctarea.value = cv;
  ctarea.focus();
  document.getElementById("button-link2")
        .style.display = "inline-block"}
};
function showParser2(){
  document.getElementById("parser2").style.display = "block";
  document.getElementById("show-parse2").style.display = "none";
  document.getElementById("hide-parse2").style.display = "inline-block";
}
function hideParser2(){
  document.getElementById("parser2").style.display = "none";
  document.getElementById("show-parse2").style.display = "inline-block";
  document.getElementById("hide-parse2").style.display = "none";
}

function downloadJSAtOnload(){var d=document.createElement("script");d.src="https://cdn.rawgit.com/KompiAjaib/kompi-js/c909b5ed/clipboardjs_disqus.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;