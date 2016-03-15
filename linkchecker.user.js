// ==UserScript==
// @name        LinkChecker [FW]
// @description Verificador de links [Filewarez]
// @include     /^http:\/\/(www\.)?filewarez\.tv.*$/
// @copyright   XOR
// @author      XOR
// @version     0.2.9
// @license     MIT License (Expat)
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @require     https://raw.githubusercontent.com/kupriyanenko/jbone/master/dist/jbone.min.js
// @updateURL   https://linkchecker.github.io/releases/linkchecker.meta.js
// @downloadURL https://linkchecker.github.io/releases/linkchecker.user.js
// @namespace   4971e63b909612f5598edd6d90012dae
// @run-at      document-start
// ==/UserScript==
'use strict';(function(k, q, n) {
  function u() {
    return new Promise(function(c, f) {
      "loading" !== q.readyState ? c() : q.addEventListener("DOMContentLoaded", function() {
        c();
      });
    });
  }
  if (k.top == k.self) {
    var v = unsafeWindow, r = function() {
      function c(c, d) {
        console[c].apply(console, Array.prototype.slice.call(d));
      }
      var f = function() {
        c("error", arguments);
      };
      return {info:function() {
        c("info", arguments);
      }, warn:function() {
        c("warn", arguments);
      }, error:f, log:function() {
        c("log", arguments);
      }, toJSON:function(c) {
        try {
          return JSON.parse(c);
        } catch (d) {
          f(d);
        }
        return null;
      }, toDOM:function(c) {
        try {
          return (new DOMParser).parseFromString(c, "text/html");
        } catch (d) {
          f(d);
        }
        return null;
      }};
    }(), t = function() {
      function c(c, d, e, f) {
        e.Referer || (e.Referer = d);
        return new Promise(function(b, a) {
          GM_xmlhttpRequest({method:c, url:d, headers:e, data:f, onload:function(l) {
            200 === l.status ? b(l.responseText) : a({response:l.responseText, status:l.status});
          }});
        });
      }
      var f = function(c) {
        if ("string" === typeof c) {
          return c;
        }
        var d = [], e;
        for (e in c) {
          c.hasOwnProperty(e) && d.push(encodeURIComponent(e) + "=" + encodeURIComponent(c[e]));
        }
        return d.join("&");
      };
      return {get:function(h, d) {
        d = d || {};
        var e = f(d.data || {});
        return c("GET", h + (e ? "?" + e : ""), d.headers || {}, "");
      }, post:function(h, d) {
        d = d || {};
        var e = {"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}, g = f(d.data || {}), b = d.headers || {}, a;
        for (a in b) {
          b.hasOwnProperty(a) && (e[a] = b[a]);
        }
        return c("POST", h, e, g);
      }, querify:f};
    }(), w = function(c, f) {
      var h = /^(?:www(?:\.|\d{1,2}\.(?=zippyshare))|\w{9}(?:\.(?=letitbit)|\w\.(?=1fichier)))/, d = {}, e = function(l) {
        return new Promise(function(a, b) {
          b(l);
        });
      }, g = {hosts:"hiderefer.com anonymz.com blankrefer.com hidemyass.com nullrefer.com refhide.com href.li".split(" "), remove:function(a) {
        g.regex ? g.regex.test(a.href) && (a.href = a.search.substr(1)) : f.warn("not_inicialized");
      }, init:function() {
        g.regex = new RegExp("^https?:\\/\\/(?:www\\.)?(?:" + g.hosts.join("|").replace(/\./g, "\\.") + ")\\/\\?h", "i");
      }}, b = function(a, b) {
        var c = function(a) {
          return this.linkOff.test(a) ? "LINK_OFF" : this.linkOn.test(a) ? "LINK_ON" : e("UNKNOWN");
        }, d = function(a) {
          return "LINK_ON";
        }, f = function(a) {
          return "LINK_OFF";
        }, m = function(a) {
          return "UNKNOWN";
        };
        return {for404:function(b, c, p) {
          return a["post" === c ? "post" : "get"](b, p || {}).then(d, f);
        }, testRegex:function(b, p, d) {
          return a["post" === p ? "post" : "get"](b, d || {}).then(c.bind(this), m);
        }, onSuccess:d, onFail:f, onUnknown:m};
      }(c, f), a = function(a, b, c, f, e) {
        "function" === typeof f && (a.check = !0 === e ? f.bind(a) : f);
        if (c) {
          c = c.split("|");
          var m = c.pop(), g = c.pop();
          a.validation = function(a) {
            a = this[g][m](a[g]);
            return "boolean" === typeof a ? a : a ? a.pop() : !1;
          }.bind(a);
        } else {
          "function" !== typeof a.validation && (a.validation = function() {
            return !0;
          });
        }
        for (c = 0;c < b.length;++c) {
          d[b[c]] = a;
        }
      };
      a({name:"GDrive", pathname:/^(?:\/a\/g\.pl)?\/file\//, pathname2:/^(\/a\/g\.pl)?\/(?:uc|open)$/, search:/^\?id=([\w-]+)(?:$|\/|&)/, validation:function(a) {
        return this.pathname.test(a.pathname) ? !0 : this.pathname2.test(a.pathname) && (a = this.search.exec(a.search)) ? a.pop() : !1;
      }, check:function(a, c) {
        return b.for404("boolean" === typeof c ? a.href : "https://drive.google.com/file/d/" + c);
      }}, ["docs.google.com", "drive.google.com"]);
      a({name:"MEGA", hash:/^#!(\w{8})!/, check:function(a, d) {
        return c.post("https://eu.api.mega.co.nz/cs?id=0", {headers:{"Content-Type":"text/plain; charset=UTF-8", Referer:"https://mega.co.nz/"}, data:'[{"a":"g","p":"' + d + '"}]'}).then(function(a) {
          a = /\[(-*\d+)]/.exec(a);
          switch(a && a[1] | 0 || 0) {
            case -6:
            ;
            case -16:
            ;
            case -9:
              return "LINK_OFF";
            case 0:
              return "LINK_ON";
            default:
              return b.onUnknown();
          }
        }, b.onUnknown);
      }}, ["mega.co.nz", "mega.nz"], "hash|exec");
      a({name:"Uploaded", href:/^http:\/\/(?:(?:www\.)?uploaded\.net\/file\/)|ul\.to\/\w{8}/}, ["uploaded.net", "ul.to"], "href|test", b.for404);
      a({name:"GeTT", pathname:/\w{7}($|\/)/}, ["ge.tt"], "pathname|test", b.for404);
      a({name:"Amazon", pathname:/^\/clouddrive\/share\/([\w-]{43})$/, check:function(a, c) {
        return b.for404("https://www.amazon.com/drive/v1/shares/" + c + "?customerId=0&resourceVersion=V2&ContentType=JSON&asset=ALL", "get", {headers:{Referer:a.href}});
      }}, ["amazon.com"], "pathname|exec");
      a({name:"CloudMail", pathname:/^\/public\/(\w{4}\/\w{9})$/, check:function(a, d) {
        var f = {Referer:a.href}, e = {weblink:d};
        return c.get("https://cloud.mail.ru/api/v2/file", {headers:f, data:e}).then(function(a) {
          return "LINK_ON";
        }, function(a) {
          return 403 === a.status ? c.get("https://cloud.mail.ru").then(function(a) {
            return (a = /"token":\s*"(.+?)"/.exec(a)) ? (e.token = a.pop(), c.get("https://cloud.mail.ru/api/v2/file", {headers:f, data:e}).then(function(a) {
              return "LINK_ON";
            }, function(a) {
              return 404 === a.status ? "LINK_OFF" : b.onUnknown();
            })) : b.onUnknown();
          }, b.onUnknown) : 404 === a.status ? "LINK_OFF" : b.onUnknown();
        });
      }}, ["cloud.mail.ru"], "pathname|exec");
      a({name:"DropBox", pathname:/^\/s\//, linkOff:/class="err">/, linkOn:/id="default_content_download_button"/}, ["dropbox.com"], "pathname|test", b.testRegex, !0);
      a({name:"Letitbit", pathname:/^\/download\//}, ["letitbit.net"], "pathname|test", b.for404);
      a({name:"Faststore", linkOff:/could not be found/, linkOn:/id="btn_download"/}, ["faststore.org"], "", b.testRegex, !0);
      a({name:"180Upload", pathname:/^\/+\w{12}$/, linkOff:/file expired or deleted/, linkOn:/id="btn_download"/}, ["180upload.com"], "pathname|test", b.testRegex, !0);
      a({name:"HugeFiles", pathname:/^\/+\w{12}(?=\/+.*|$)/, linkOff:/www.hugefiles.net\/404.html\"|No such file with this filename/, linkOn:/FILE NAME:/}, ["hugefiles.net"], "pathname|test", b.testRegex, !0);
      a({name:"Uploadable", pathname:/^\/+file\/+/, linkOff:/Page not found|File not available/, linkOn:/id="file_name"/}, ["uploadable.ch"], "pathname|test", b.testRegex, !0);
      a({name:"1Fichier", linkOff:/durant 60 jours|File not found/, linkOn:/FileName\s:/}, ["1fichier.com"], "", b.testRegex, !0);
      a({name:"Userscloud", linkOff:/download is no longer available/, linkOn:/value="download2"/}, ["userscloud.com"], "", b.testRegex, !0);
      a({name:"Tusfiles", linkOff:/download is no longer available/, linkOn:/value="download2"/}, ["tusfiles.net"], "", b.testRegex, !0);
      a({name:"Mediafire", linkOff:/error_msg_title/, linkOn:/class="dl-btn-container"/}, ["mediafire.com"], "", b.testRegex, !0);
      a({name:"Uptobox", linkOff:/<span class="para_title">File not found/, linkOn:/value="download2"/}, ["uptobox.com"], "", b.testRegex, !0);
      a({name:"DepositFiles", linkOff:/no_download_msg/, linkOn:/class="downloadblock"/}, ["depositfiles.org", "dfiles.eu"], "", b.testRegex, !0);
      a({name:"RapidGator", linkOff:/File not found/, linkOn:/text-block file-descr/}, ["rapidgator.net", "rg.to"], "", b.testRegex, !0);
      a({name:"Turbobit", linkOff:/File not found/, linkOn:/download-file-block/}, ["turbobit.net"], "", b.testRegex, !0);
      a({name:"BRupload", linkOff:/Arquivo Nao Encontrado/, linkOn:/Baixar Arquivo/}, ["brupload.net"], "", b.testRegex, !0);
      a({name:"SpeedyShare", pathname:/\/+\w{5}\/+/}, ["speedyshare.com"], "pathname|test", b.for404);
      a({name:"2Shared", pathname:/\/file\//, check:function(a) {
        return c.get("http://verificador2.ga/2sd/status.php", {headers:{Referer:"http://verificador2.ga"}, data:{url:a.href}}).then(function(a) {
          return "200" === a ? "LINK_ON" : "404" === a ? "LINK_OFF" : b.onUnknown;
        }, b.onUnknown);
      }}, ["2shared.com"]);
      a({name:"OpenLoad", pathname:/^\/f\//, linkOff:/deleted by the owner or was removed/, linkOn:/class="download"/}, ["openload.io"], "pathname|test", b.testRegex, !0);
      a({name:"FileFactory", linkOff:/alert alert-danger/, linkOn:/id="file_name"/}, ["filefactory.com"], "", b.testRegex, !0);
      a({name:"Zippyshare", pathname:/^\/v\/\w{8}(?=\/|$)/, linkOff:/File does not exist/, linkOn:/id="dlbutton"/}, ["zippyshare.com"], "pathname|test", b.testRegex, !0);
      a({name:"SecureUpload", pathname:/\/\w{12}\//, linkOff:/could not be found/, linkOn:/value="download1"/}, ["secureupload.eu"], "pathname|test", b.testRegex, !0);
      a({name:"4Shared", linkOff:/The file link that you requested is not valid/, linkOn:/class="fileName/, check:function(a) {
        a = a.href.replace(/\/(file|rar)\//, "/get/");
        return b.testRegex.call(this, a, "get", {headers:{Cookie:"4langcookie=en"}});
      }}, ["4shared.com"]);
      a({name:"Oboom", pathname:/\/(\w{8})(?:$|\/)/, session:/Session\s+:\s+"(\w{8}-(?:\w{4}-){3}\w{12})"}/, check:function(a, d) {
        return c.get(a.href).then(function(e) {
          e = {token:this.session.exec(e)[1], item:d, http_errors:0};
          return c.get("https://api.oboom.com/1/ls", {headers:{Referer:a.href}, data:e}).then(function(a) {
            a = f.toJSON(a);
            return 200 === a[0] ? "LINK_ON" : 404 === a[0] ? "LINK_OFF" : b.onUnknown;
          }, b.onUnknown);
        }.bind(this), b.onUnknown);
      }}, ["oboom.com"], "pathname|exec");
      g.init();
      return {check:function(a) {
        var b;
        try {
          b = new URL(a), g.remove(b);
        } catch (c) {
          return e("INVALID_URL");
        }
        a = d[b.hostname.replace(h, "")];
        if (!a) {
          return e("NOT_SUPPORTED");
        }
        var f = a.validation(b);
        return f ? a.check(b, f) : e("ERROR_ON_VALIDATION");
      }};
    }(t, r);
    n = function(c, f, h, d, e) {
      var g = function(a) {
        return h.post("/postador.php", {headers:{Referer:c.location.href}, data:{linkid:a.id, status:a.online, automatic:!1, securitytoken:a.token, "do":"updatestatus"}});
      }, b = function(a) {
        this.length = a;
      };
      b.prototype = {changed:!1, checkedLink:0, onCheckSuccess:function(a, b, c) {
        d.info(a, c);
        ++this.checkedLink;
        return b !== ("LINK_ON" === c ? !0 : !1) ? (this.changed = !0, {update:!0, change:!0, status:c}) : this.checkedLink !== this.length || this.changed ? {update:!1, change:!1, status:c} : {update:!0, change:!1, status:c};
      }, onCheckFail:function(a, b) {
        d.warn(a, b);
        ++this.checkedLink;
        return this.checkedLink !== this.length || this.changed ? {update:!1, change:!1, status:"UNKNOWN"} : {update:!0, change:!1, status:"UNKNOWN"};
      }, onCheck:function(a, b) {
        return w.check(a).then(this.onCheckSuccess.bind(this, a, b), this.onCheckFail.bind(this, a));
      }};
      return {checkTopicLinks:function() {
        var a = f(".upload_links");
        if (a.length) {
          a[0].scrollIntoView();
          var a = f("#upload_links").find(".upload_link"), c = new b(a.length), d = e.SECURITYTOKEN, h = {LINK_ON:"background-color: rgba(46, 204, 113, 0.2);", LINK_OFF:"background-color: rgba(231, 76, 60, 0.2);", UNKNOWN:"background-color: rgba(255, 247, 163, 0.9);"};
          a.forEach(function(a) {
            var b = f(a), e = b.find("span"), k = e.hasClass("online") ? !0 : !1;
            a = b.find("a")[0];
            e.addClass("loading");
            c.onCheck(a.href, k).then(function(a) {
              if (a.update) {
                var c = a.change ? !k : k;
                g({id:e[0].id, online:c, token:d}).then(function(a) {
                  c ? e.addClass("online").removeClass("loading offline") : e.addClass("offline").removeClass("online loading");
                });
              } else {
                e.removeClass("loading");
              }
              b.attr({style:h[a.status]});
            });
          });
        }
      }};
    }(k, n, t, r, v);
    0 === k.location.pathname.indexOf("/showthread.php") && u().then(n.checkTopicLinks);
  }
<<<<<<< HEAD
})(window, document, jBone);
=======
})(window, document, jBone);
>>>>>>> origin/master
