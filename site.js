(function(){
  "use strict";
  var D = window.ODILA_I18N || {};
  var CA = {};
  var lang = "ca";

  function store(k, v){ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k, v); }catch(e){ return null; } }

  /* ---------- carta ---------- */
  function t(o){ if(!o) return ""; if(typeof o === "string") return o; return o[lang] || o.ca; }
  function renderMenu(){
    var M = window.ODILA_MENU, F = window.ODILA_FLAGS, wrap = document.getElementById("carta-cats"), nav = document.getElementById("carta-nav");
    if(!M || !wrap) return;
    var colors = ["sky","blush","mint","yellow","white","lila","sky","blush","mint"];
    wrap.innerHTML = ""; nav.innerHTML = "";
    M.forEach(function(c, i){
      var a = document.createElement("a"); a.href = "#" + c.id; a.textContent = t(c.hand); nav.appendChild(a);
      var s = document.createElement("section"); s.className = "cat band " + colors[i % colors.length]; s.id = c.id;
      var w = document.createElement("div"); w.className = "wrap";
      var head = document.createElement("div"); head.className = "cat__head";
      var h = document.createElement("h2"); var sp = document.createElement("span"); sp.className = "hand"; sp.textContent = t(c.hand); h.appendChild(sp); head.appendChild(h);
      if(c.intro){ var p = document.createElement("p"); p.className = "lead"; p.textContent = t(c.intro); head.appendChild(p); }
      w.appendChild(head);
      var g = document.createElement("div"); g.className = "items";
      c.items.forEach(function(it){
        var el = document.createElement("article"); el.className = "item reveal";
        var n = document.createElement("strong"); n.textContent = t(it.n); el.appendChild(n);
        if(it.d){ var d = document.createElement("p"); d.textContent = t(it.d); el.appendChild(d); }
        if(it.f){ var fl = document.createElement("div"); fl.className = "flags"; it.f.forEach(function(k){ var b = document.createElement("span"); b.className = "flag"; b.textContent = t(F[k]); fl.appendChild(b); }); el.appendChild(fl); }
        g.appendChild(el);
      });
      w.appendChild(g); s.appendChild(w); wrap.appendChild(s);
    });
  }

  /* ---------- limbă ---------- */
  function applyLang(l){
    lang = (l === "es" || l === "en") ? l : "ca";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n"); if(!(k in CA)) CA[k] = el.innerHTML;
      var v = lang === "ca" ? CA[k] : (D[lang] && D[lang][k]);
      if(v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function(el){
      var k = el.getAttribute("data-i18n-alt"); if(!(("alt:"+k) in CA)) CA["alt:"+k] = el.alt;
      var v = lang === "ca" ? CA["alt:"+k] : (D[lang] && D[lang][k]); if(v) el.alt = v;
    });
    document.querySelectorAll("[data-i18n-marquee]").forEach(function(el){
      var k = el.getAttribute("data-i18n-marquee");
      el.querySelectorAll(":scope > span").forEach(function(sp){
        var tn = sp.firstChild; if(!tn || tn.nodeType !== 3) return;
        if(!(k in CA)) CA[k] = tn.nodeValue.trim();
        var v = lang === "ca" ? CA[k] : (D[lang] && D[lang][k]); if(v) tn.nodeValue = v + " ";
      });
    });
    document.querySelectorAll(".lang button").forEach(function(b){ b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.querySelectorAll("[data-words]").forEach(splitWords);
    renderMenu();
    store("odila-lang", lang);
    if(window.ScrollTrigger) window.ScrollTrigger.refresh();
  }
  function splitWords(el){
    var txt = el.textContent.trim().split(/\s+/);
    el.innerHTML = txt.map(function(w){ return '<span class="w">' + w.replace(/</g,"&lt;") + '</span>'; }).join(" ");
  }

  /* ---------- SVG-uri vectorizate, inline ca să moștenească culoarea ---------- */
  function inlineSvgs(){
    var els = document.querySelectorAll("[data-svg]");
    return Promise.all(Array.prototype.map.call(els, function(el){
      return fetch(el.getAttribute("data-svg")).then(function(r){ return r.ok ? r.text() : ""; })
        .then(function(s){ if(s) el.innerHTML = s; }).catch(function(){});
    }));
  }

  /* ---------- UI ---------- */
  function ui(){
    document.querySelectorAll(".lang button").forEach(function(b){ b.addEventListener("click", function(){ applyLang(b.dataset.lang); }); });
    var burger = document.querySelector(".burger"), mm = document.getElementById("mobile-menu");
    if(burger && mm){
      burger.addEventListener("click", function(){ mm.hidden = false; burger.setAttribute("aria-expanded","true"); var c = mm.querySelector(".close"); if(c) c.focus(); });
      mm.addEventListener("click", function(e){ if(e.target.closest(".close") || e.target.closest("nav a")){ mm.hidden = true; burger.setAttribute("aria-expanded","false"); } });
      document.addEventListener("keydown", function(e){ if(e.key === "Escape" && !mm.hidden){ mm.hidden = true; burger.setAttribute("aria-expanded","false"); burger.focus(); } });
    }
    document.querySelectorAll("[data-copy]").forEach(function(b){
      b.addEventListener("click", function(){
        var orig = b.textContent, done = function(){ b.textContent = lang === "ca" ? "copiat" : (D[lang] && D[lang].copied) || "ok"; setTimeout(function(){ b.textContent = orig; }, 1600); };
        var phone = b.parentNode.querySelector(".phone");
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(b.getAttribute("data-copy")).then(done, function(){ selectText(phone); });
        } else selectText(phone);
      });
    });
  }
  function selectText(el){ if(!el) return; var r = document.createRange(); r.selectNodeContents(el); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }

  /* ---------- mișcare ---------- */
  function motion(){
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var g = window.gsap, ST = window.ScrollTrigger;
    if(reduce || !g || !ST) return;
    g.registerPlugin(ST);

    // desene care se trasează la scroll
    document.querySelectorAll(".doodle .s").forEach(function(p){
      var len = 0; try{ len = p.getTotalLength(); }catch(e){}
      if(!len) return;
      p.style.strokeDasharray = len; p.style.strokeDashoffset = 0;
      g.fromTo(p, {strokeDashoffset: len}, {strokeDashoffset: 0, ease: "power2.inOut", duration: 1.6,
        scrollTrigger:{ trigger: p.closest(".doodle") || p, start: "top 95%", once: true }});
    });

    // hero: intrare + scroll cinematic
    var hero = document.querySelector(".hero");
    if(hero){
      var tl = g.timeline({defaults:{ease:"expo.out"}});
      tl.from(".hero__blob", {scale:.4, duration:1.2})
        .from(".hero__cut", {yPercent:30, duration:1.3}, "<.1")
        .from(".hero__word--1", {xPercent:-30, duration:1.4}, "<")
        .from(".hero__word--2", {xPercent:30, duration:1.4}, "<")
        .from(".hero .sticker", {scale:0, rotate:-120, duration:1, ease:"back.out(2)"}, "-=1");
      if(window.innerWidth > 860){
        tl.eventCallback("onComplete", function(){
          var st = function(){ return {trigger: hero, start:"top top", end:"bottom top", scrub: true}; };
          g.fromTo(".hero__word--1", {xPercent:0}, {xPercent:-22, ease:"none", immediateRender:false, scrollTrigger: st()});
          g.fromTo(".hero__word--2", {xPercent:0}, {xPercent:22, ease:"none", immediateRender:false, scrollTrigger: st()});
          g.fromTo(".hero__cut", {scale:1}, {scale:1.08, transformOrigin:"50% 100%", ease:"none", immediateRender:false, scrollTrigger: st()});
          g.fromTo(".hero__blob", {scale:1}, {scale:1.25, ease:"none", immediateRender:false, scrollTrigger: st()});
          g.fromTo(".hero__info, .hero__cta", {y:0}, {y:-60, ease:"none", immediateRender:false, scrollTrigger: st()});
        });
      }
    }

    // blocurile urcă în straturi (fără să ascundă conținutul)
    document.querySelectorAll(".block .reveal, .reviews .reveal, .pets .reveal, .cat .item").forEach(function(el, i){
      g.from(el, {y: 70, rotate: (i % 2 ? 1.5 : -1.5), ease:"power3.out", duration: 1,
        scrollTrigger:{ trigger: el, start:"top 92%", once:true }});
    });

    // autocolante: rotire continuă + accelerare cu viteza de scroll
    document.querySelectorAll(".spin").forEach(function(el){
      var rot = g.to(el, {rotate:"+=360", duration:16, ease:"none", repeat:-1});
      ST.create({ trigger: el, start:"top bottom", end:"bottom top", onUpdate:function(self){
        var v = Math.min(Math.abs(self.getVelocity())/600, 6); g.to(rot, {timeScale: 1 + v, duration:.3, overwrite:true}); g.to(rot, {timeScale:1, duration:1.2, delay:.3});
      }});
    });

    // boabe care plutesc
    document.querySelectorAll(".bean").forEach(function(b, i){
      g.to(b, {y: i % 2 ? -18 : 18, rotate: i % 2 ? 25 : -25, duration: 2.4 + i*.4, yoyo:true, repeat:-1, ease:"sine.inOut"});
      g.to(b, {yPercent: i % 2 ? -120 : 120, ease:"none", scrollTrigger:{trigger: b.closest(".band"), start:"top bottom", end:"bottom top", scrub:true}});
    });

    // banda care curge, schimbă direcția cu scroll-ul
    document.querySelectorAll(".marquee__track").forEach(function(tr){
      var loop = g.to(tr, {xPercent:-50, duration:22, ease:"none", repeat:-1});
      ST.create({ trigger: tr, start:"top bottom", end:"bottom top", onUpdate:function(self){ g.to(loop, {timeScale: self.direction * (1 + Math.min(Math.abs(self.getVelocity())/400, 4)), duration:.4, overwrite:true}); }});
    });

    // câinele trece prin secțiune
    var pets = document.querySelector(".pets");
    if(pets){
      g.fromTo(".pets__dog", {xPercent:-110}, {xPercent: function(){ var w = document.querySelector(".pets__walk").offsetWidth, d = document.querySelector(".pets__dog").offsetWidth; return (w/d)*100 - 100; }, ease:"none",
        scrollTrigger:{ trigger: pets, start:"top 80%", end:"bottom 20%", scrub: 1, invalidateOnRefresh:true }});
      g.to(".pets__cat", {y:-14, rotate:4, duration:.8, yoyo:true, repeat:-1, ease:"sine.inOut"});
      g.to(".pets__sleep", {scaleY:1.03, transformOrigin:"50% 100%", duration:1.6, yoyo:true, repeat:-1, ease:"sine.inOut"});
    }

    // manifest: secțiune fixată, cuvintele se aprind pe rând
    var man = document.querySelector(".manifest");
    if(man){
      var words = man.querySelectorAll(".w");
      if(words.length){
        g.set(words, {color:"rgba(0,0,0,.2)"});
        g.to(words, {color:"#000", stagger:.1, ease:"none",
          scrollTrigger:{ trigger: man, start:"top top", end:"+=" + Math.round(window.innerHeight*0.9), scrub: true, pin: window.innerWidth > 700 }});
      }
      g.from(".smile", {rotate:-90, scale:.5, scrollTrigger:{trigger: man, start:"top 70%", end:"top 10%", scrub:true}});
    }

    // formele din jurul pozei
    g.to(".shape-star", {rotate:180, ease:"none", scrollTrigger:{trigger:".visit", start:"top bottom", end:"bottom top", scrub:true}});
    g.to(".shape-u", {rotate:-25, yPercent:-10, ease:"none", scrollTrigger:{trigger:".visit", start:"top bottom", end:"bottom top", scrub:true}});

    // harta: traseul și pin-ul
    var route = document.querySelector(".map-route");
    if(route){ g.fromTo(route, {strokeDashoffset: 220}, {strokeDashoffset: 0, duration: 4, ease:"none", repeat:-1}); }
  }

  function boot(){
    var q = (location.search.match(/lang=(ca|es|en)/) || [])[1];
    var saved = q || store("odila-lang") || "ca";
    ui();
    inlineSvgs().then(function(){
      applyLang(saved);
      motion();
    });
    if(saved === "ca") applyLang("ca");
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
