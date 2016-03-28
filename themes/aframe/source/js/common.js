(function () {

// Lazy loading for web fonts

/* fontfaceobserver 1.6.4 - Copyright (c) 2014 - Bram Stein https://github.com/bramstein/fontfaceobserver/ */
(function(){var h=!!document.addEventListener;function k(a,b){h?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function w(a){document.body?a():h?document.addEventListener("DOMContentLoaded",a):document.onreadystatechange=function(){"interactive"==document.readyState&&a()}};function x(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function y(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=l;z(a)&&null!==a.a.parentNode&&b(a.g)}var l=a;k(a.b,c);k(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,H=!!window.FontFace;function I(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
B.prototype.a=function(a,b){var c=this,l=a||"BESbswy",E=b||3E3,F=(new Date).getTime();return new Promise(function(a,b){if(H){var q=function(){(new Date).getTime()-F>=E?b(c):document.fonts.load(J(c,c.family),l).then(function(b){1<=b.length?a(c):setTimeout(q,25)},function(){b(c)})};q()}else w(function(){function r(){var b;if(b=-1!=e&&-1!=f||-1!=e&&-1!=g||-1!=f&&-1!=g)(b=e!=f&&e!=g&&f!=g)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],
10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(e==t&&f==t&&g==t||e==u&&f==u&&g==u||e==v&&f==v&&g==v)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function q(){if((new Date).getTime()-F>=E)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)e=m.a.offsetWidth,f=n.a.offsetWidth,g=p.a.offsetWidth,r();G=setTimeout(q,50)}}var m=new x(l),n=new x(l),p=new x(l),e=-1,f=-1,g=-1,t=-1,u=-1,v=-1,d=document.createElement("div"),
G=0;d.dir="ltr";y(m,J(c,"sans-serif"));y(n,J(c,"serif"));y(p,J(c,"monospace"));d.appendChild(m.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);t=m.a.offsetWidth;u=n.a.offsetWidth;v=p.a.offsetWidth;q();A(m,function(a){e=a;r()});y(m,J(c,'"'+c.family+'",sans-serif'));A(n,function(a){f=a;r()});y(n,J(c,'"'+c.family+'",serif'));A(p,function(a){g=a;r()});y(p,J(c,'"'+c.family+'",monospace'))})})};window.FontFaceObserver=B;window.FontFaceObserver.prototype.check=B.prototype.a;"undefined"!==typeof module&&(module.exports=window.FontFaceObserver);}());

/*
Fonts are loaded through @font-face rules in the CSS whenever an element references them.
FontFaceObserver creates a referencing element to trigger the font request, and listen for font load events.
When the fonts is loaded, we enable them by adding a class to `<html>`.
*/
if ('requestAnimationFrame' in window) {
  window.requestAnimationFrame(function () {
    new window.FontFaceObserver('FiraSansWeb').check().then(function () {
      document.documentElement.classList.add('font-loaded-body');
    });
    new window.FontFaceObserver('FiraMonoWeb').check().then(function () {
      document.documentElement.classList.add('font-loaded-code');
    });
  });
}

if ('FastClick' in window) {
  document.addEventListener('DOMContentLoaded', function () {
    window.FastClick.attach(document.body);
  });
}

/**
 * Wraps `querySelector` à la jQuery's `$`.
 *
 * @param {String|Element} sel CSS selector to match an element.
 * @param {Element=} parent Parent from which to query.
 * @returns {Element} Element matched by selector.
 */
window.$ = function (sel, parent) {
  var el = sel;
  if (sel && typeof sel === 'string') {
    el = (parent || document).querySelector(sel);
  }
  return el;
};

/**
 * Wraps `querySelectorAll` Ã  la jQuery's `$`.
 *
 * @param {String|Element} sel CSS selector to match elements.
 * @param {Element=} parent Parent from which to query.
 * @returns {Array} Array of elements matched by selector.
 */
window.$$ = function (sel, parent) {
  if (Array.isArray(sel)) { return sel; }
  var els = sel;
  if (sel && typeof sel === 'string') {
    els = (parent || document).querySelectorAll(sel);
  }
  return toArray(els);
};

/**
 * Turns an array-like object into an array.
 *
 * @param {String|Element} obj CSS selector to match elements.
 * @param {Array|NamedNodeMap|NodeList|HTMLCollection} arr An array-like object.
 * @returns {Array} Array of elements matched by selector.
 */
var toArray = function (obj) {
  if (Array.isArray(obj)) { return obj; }
  if (typeof obj === 'object' && typeof obj.length === 'number') {
    return Array.prototype.slice.call(obj);
  }
  return [obj];
};

window.getJSON = function (opts, cb) {
  if (typeof opts === 'string') {
    opts = {url: opts};
  } else {
    opts = opts || {};
  }
  var req = new XMLHttpRequest();
  req.open('get', opts.url);
  req.setRequestHeader('accept', 'application/json');
  req.addEventListener('load', function () {
    var err = null;
    var response = req.response;

    // It could be a successful response but not an OK one (e.g., 3xx, 4xx).
    if (req.status === 200) {
      // `responseType` is not supported in IE <11.
      try {
        response = JSON.parse(response);
      } catch (e) {
        err = new Error('Could not parse response as JSON');
      }
    } else {
      err = new Error(req.statusText);
    }

    cb(err, response);
  });
  req.addEventListener('error', function () {
    cb(new Error('Network Error'));
  });
  req.send(opts.data);
  return req;
};

})();
