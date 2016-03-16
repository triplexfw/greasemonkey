// ==UserScript==
// @name        Verificador de uploads [FW]
// @description Userscript para auxiliar na verificação de uploads na FileWarez.
// @include     /^http:\/\/(www\.)?filewarez\.tv/.*$/
// @copyright   2015, XOR
// @author      Triplex,Portal_games
// @version     0.3.2
// @license     MIT License
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @require     https://raw.githubusercontent.com/triplexfw/greasemonkey/master/asmcrypto.js
// @updateURL   https://raw.githubusercontent.com/triplexfw/greasemonkey/master/linkchecker.meta.js
// @downloadURL https://raw.githubusercontent.com/triplexfw/greasemonkey/master/linkchecker.user.js
// @namespace   4971e63b909612f5598edd6d90012dae
// @run-at      document-start
// ==/UserScript==

'use strict';(function() {
  function P(a, c) {
    return Object.keys(a).map(function(b) {
      return c(b, a[b]);
    });
  }
  function z(a, c) {
    Object.keys(a).forEach(function(b) {
      return c(b, a[b]);
    });
  }
  function A(a) {
    if (a) {
      var c = typeof a;
      if ("string" === c) {
        return a;
      }
      if ("object" === c) {
        return P(a, function(a, c) {
          return [a, c].map(encodeURIComponent).join("=");
        }).join("&");
      }
    }
    return "";
  }
  function B(a, c, b, d, e) {
    "undefined" === typeof b.Referer && (b.Referer = c);
    b["X-Requested-With"] = "XMLHttpRequest";
    return new Promise(function(f, h) {
      var g = void 0, g = "function" === typeof e ? function(a) {
        var b = a.responseText;
        a = a.status;
        200 === a ? f(e(b)) : h({responseText:e(b), status:a});
      } : function(a) {
        var b = a.responseText;
        a = a.status;
        200 === a ? f(b) : h({responseText:b, status:a});
      };
      GM_xmlhttpRequest({method:a, url:c, headers:b, data:d, onload:g});
    });
  }
  function k(a, c, b, d) {
    b = A(b);
    return B("GET", a + (b ? "?" + b : ""), c || {}, "", d);
  }
  function C(a, c, b, d) {
    b = A(b);
    var e = {"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"};
    z(c, function(a, b) {
      e[a] = b;
    });
    return B("POST", a, e, b, d);
  }
  function Q(a) {
    return C("/postador.php", {Referer:a.referer || window.location.href}, {linkid:a.id, status:a.online, securitytoken:a.token || unsafeWindow.SECURITYTOKEN, automatic:!1, "do":"updatestatus"});
  }
  function n(a) {
    var c = a.responseText;
    a = a.status;
    404 === a ? this.status = "offline" : (this.status = "unknown", this.reason = "Response: " + JSON.stringify(c || "") + "\nStatus : " + a);
    return this;
  }
  function g(a) {
    var c = this, b = {hostName:this.hostName, url:a.href, type:"file"};
    return k(b.url, this.headers || {}, this.data || "").then(function(a) {
      var e = void 0, f = void 0, h = c.regex;
      h && (e = h.linkOff, f = h.linkOn);
      if (e && e.test(a)) {
        b.status = "offline";
      } else {
        if ("undefined" === typeof f || f.test(a)) {
          b.status = "online";
          if (c.getInfo) {
            return c.getInfo(b, a);
          }
          e = h.fileName;
          h = h.fileSize;
          e && (e = (e.exec(a) || [])[1]) && (b.name = e);
          h && (a = (h.exec(a) || [])[1]) && (b.size = a);
        } else {
          b.status = "unknown", b.reason = "Ops... regex";
        }
      }
      return b;
    }, n.bind(b));
  }
  function l(a) {
    return R.parseFromString(a, "text/html");
  }
  function S(a, c) {
    var b = l(c), d = b.querySelector('input[name="filename"]'), b = b.getElementsByClassName("meta");
    d && (a.name = d.value);
    b.length && (d = T.exec(b[0].textContent)) && (a.size = d[1]);
    return a;
  }
  function U(a) {
    var c = {url:a.href, type:"file"};
    return k("http://gdvid.ga/2shd/index.php?url=" + c.url).then(function(a) {
      try {
        var d = JSON.parse(a);
        switch(d.code) {
          case 200:
            c.status = "online";
            c.name = d.name;
            c.size = d.size;
            break;
          case 404:
            c.status = "offline";
            break;
          default:
            c.status = "unknown";
        }
        return c;
      } catch (e) {
        c.status = "unknown";
      }
      return c;
    }, function() {
      c.status = "unknown";
      return c;
    });
  }
  function V(a, c) {
    var b = l(c).getElementsByClassName("inner-bg-repeat");
    b.length && (b = b[0].children, 4 <= b.length && (a.name = b[2].textContent, b = (W.exec(b[3].textContent || "") || [])[1], a.size = b));
    return a;
  }
  function X(a, c) {
    var b = l(c).getElementsByClassName("fNameLink");
    if (b.length) {
      var b = Y.exec(b[0].textContent) || [], d = b[2];
      a.name = b[1];
      a.size = d;
    }
    return a;
  }
  function Z(a) {
    return a.rest.startsWith("/download/") ? !0 : !1;
  }
  function aa(a) {
    return ba.test(a.rest) ? !0 : !1;
  }
  function ca(a, c) {
    var b = l(c), d = b.querySelector(".title-font .title");
    d && (a.name = d.textContent);
    b = b.getElementsByClassName("size pic");
    b.length && (a.size = b[0].textContent.trim());
    return a;
  }
  function da(a) {
    return ea.test(a.rest) ? !0 : !1;
  }
  function fa(a, c) {
    var b = l(c), d = b.getElementsByClassName("sizetagtext");
    d.length && (a.size = d[0].textContent);
    if (b = b.getElementsByClassName("downloadfilename")) {
      a.name = b[0].textContent;
    }
    return a;
  }
  function ga(a, c) {
    var b = l(c);
    a.name = b.getElementById("main").children[6].textContent;
    return a;
  }
  function ha(a) {
    return a.rest.startsWith("/v/") ? !0 : !1;
  }
  function ia(a, c) {
    var b = l(c).getElementsByClassName("left")[0];
    a.name = b.children[3].textContent;
    a.size = b.children[6].textContent;
    return a;
  }
  function ja(a, c) {
    var b = l(c).getElementsByClassName("font14");
    if (b.length) {
      var b = ka.exec(b[0].textContent) || [], d = b[2];
      a.name = b[1];
      a.size = d;
    }
    return a;
  }
  function la(a, c) {
    var b = l(c), d = b.getElementById("file_name");
    d && (a.name = d.title);
    b = b.getElementsByClassName("filename_normal");
    b.length && (b = ma.exec(b[0].textContent)) && (a.size = b[1]);
    return a;
  }
  function na(a) {
    return a.rest.startsWith("/file/") ? !0 : !1;
  }
  function oa(a) {
    return pa.test(a.rest) ? {type:"file"} : !1;
  }
  function qa(a, c) {
    var b = c.type;
    return ra[b]({url:a.href, type:b});
  }
  function sa(a) {
    return a.rest.startsWith("/file/") ? !0 : !1;
  }
  function ta(a, c) {
    var b = l(c);
    b.getElementsByClassName("in").length ? (a.name = b.querySelector(".btm p a").textContent.trim(), a.size = b.querySelector(".btm div > strong").textContent) : a.status = "unknown";
    return a;
  }
  function ua(a) {
    return va.test(a.rest) ? !0 : !1;
  }
  function wa(a) {
    return xa.file({url:a.href, type:"file"});
  }
  function ya(a) {
    return a.rest.startsWith("/d/") ? !0 : !1;
  }
  function za(a, c) {
    var b = unescape(Aa.exec(c)[1]);
    a.name = Ba.exec(b)[1];
    a.size = Ca.exec(c)[1];
    return a;
  }
  function Da(a) {
    return D.test(a.rest) ? !0 : !1;
  }
  function Ea(a) {
    var c = a.rest.replace(D, "/get/");
    return E({host:a.host, rest:c, href:"http://" + a.host + c});
  }
  function Fa(a) {
    return Ga.test(a.rest) ? !0 : !1;
  }
  function p(a) {
    for (var c = 0;1024 <= a;++c, a /= 1024) {
    }
    return a.toFixed(1) + " " + ["B", "kiB", "MiB", "GiB", "TiB"][c];
  }
  function Ha(a) {
    return (a = Ia.exec(a.rest)) ? {id:a[1]} : !1;
  }
  function Ja(a, c, b) {
    return k("https://api.oboom.com/1/ls", c, b, JSON.parse).then(function(b) {
      var c = b[0];
      b = b[1];
      switch(c) {
        case 404:
          a.status = "offline";
          break;
        case 200:
          a.status = "online";
          a.name = b.name;
          a.size = p(b.size);
          break;
        default:
          a.status = "unknown", a.reason = "Code: " + c;
      }
      return a;
    });
  }
  function Ka(a, c) {
    var b = c.id, d = {type:"file", url:a.href, id:b};
    return k(d.url, F).then(function(a) {
      a = {token:(La.exec(a) || [])[1], item:b, http_errors:0};
      return Ja(d, F, a);
    });
  }
  function Ma(a) {
    return a.rest.startsWith("/f/") ? {type:"folder"} : {type:"file"};
  }
  function Na(a, c) {
    var b = c.type;
    return Oa[b]({url:a.href, type:b});
  }
  function G(a) {
    var c = a.responseText;
    a = a.status;
    404 === a || 403 === a ? this.status = "offline" : (this.status = "unknown", this.reason = "Response: " + JSON.stringify(c || "") + "\nStatus : " + a);
    return this;
  }
  function Pa(a, c) {
    return k("https://docs.google.com" + c + "/folderview?usp=sharing&id=" + a.id).then(function(b) {
      a.status = "online";
      if (b = (Qa.exec(b) || [])[0]) {
        b = JSON.parse(b.replace(Ra, '"$1"').replace(Sa, '"$1"').replace(Ta, "[").replace(Ua, '","').replace(Va, "]").replace(Wa, "]}").replace(Xa, "]").trim());
        a.name = b.folderName;
        a.children = [];
        b = b.viewerItems;
        for (var c = 0;c < b.length;++c) {
          var e = b[c];
          a.children.push({name:e[0], id:e[2], url:e[5], type:"file"});
        }
      }
      return a;
    }, G.bind(a));
  }
  function Ya(a, c) {
    return k("https://drive.google.com" + c + "/file/d/" + a.id + "/view?usp=sharing").then(function(b) {
      a.status = "online";
      if (b = Za.exec(b)) {
        a.name = b[1];
      }
      return a;
    }, G.bind(a));
  }
  function $a(a) {
    var c = ab.exec(a.rest);
    if (c) {
      a = c[1] || "";
      var b = c[2] || c[3], c = c[4];
      switch(b) {
        case "file":
        ;
        case "uc":
        ;
        case "document":
        ;
        case "open":
        ;
        case "spreadsheets":
          b = "file";
          break;
        case "folderview":
        ;
        case "folder":
          b = "folder";
          break;
        default:
          return !1;
      }
      return {pref:a, id:c, type:b};
    }
    return !1;
  }
  function bb(a, c) {
    var b = c.pref, d = c.id, e = c.type, f = {hostName:this.hostName, id:d, url:a.href, type:e};
    return "file" === e ? Ya(f, b) : "folder" === e ? Pa(f, b) : handleOther(f, d);
  }
  function H(a) {
    var c = {weblink:a.weblink};
    a.token && (c.token = a.token);
    return k("https://cloud.mail.ru/api/v2/folder", {}, c, JSON.parse).then(function(b) {
      b = b.body;
      a.status = "online";
      if ("storage" === b.kind) {
        b = b.list[0], a.type = "file", a.name = b.name, a.size = p(b.size);
      } else {
        a.type = "folder";
        a.name = b.name;
        a.children = [];
        b = b.list;
        for (var c = 0;c < b.length;++c) {
          var e = b[c], f = {name:e.name, weblink:e.weblink};
          "file" === e.kind ? (f.type = "file", f.size = p(e.size)) : f.type = "folder";
          a.children.push(f);
        }
      }
      return a;
    }, function(b) {
      var c = b.responseText;
      b = b.status;
      a.status = 400 === b || 404 === b ? "offline" : "unknown";
      c = JSON.stringify(c);
      a.reason = "Response: " + c + "\nStatus : " + b;
      return a;
    });
  }
  function cb(a) {
    return (a = (db.exec(a.rest) || [])[1]) ? {weblink:decodeURIComponent(a)} : null;
  }
  function eb(a, c) {
    var b = {url:a.href, weblink:c.weblink};
    return k("https://cloud.mail.ru/api/v2/tokens", null, null, JSON.parse).then(function(a) {
      b.token = a.body.token;
      return H(b);
    }, function(a) {
      if (403 === a.status) {
        return H(b);
      }
      b.status = "unknown";
      return b;
    });
  }
  function I(a) {
    for (var c = a.length << 2, b = new Uint8Array(c), d = 0;d < c;d += 4) {
      var e = d >> 2;
      b[d] = a[e] >> 24;
      b[d + 1] = a[e] >> 16;
      b[d + 2] = a[e] >> 8;
      b[d + 3] = a[e];
    }
    return b;
  }
  function J(a) {
    for (var c = [24, 16, 8, 0], b = Array(a.length + 3 >> 2), d = 0, e = a.length;d < e;++d) {
      b[d >> 2] |= a[d] << c[d & 3];
    }
    return b;
  }
  function u(a) {
    switch(a.length % 4) {
      case 0:
        break;
      case 2:
        a += "==";
        break;
      case 3:
        a += "=";
        break;
      default:
        throw Error("Invalid base64url string.");;
    }
    var c = a.length;
    if (0 !== c % 4) {
      throw Error("Invalid string. Length must be a multiple of 4");
    }
    for (var b = void 0, b = "=" === a.charAt(c - 2) ? 2 : "=" === a.charAt(c - 1) ? 1 : 0, d = 0 < b ? c - 4 : c, c = new Uint8Array(.75 * c - b), e = 0, f = 0;f < d;f += 4) {
      var h = m[a.charAt(f)] << 18 | m[a.charAt(f + 1)] << 12 | m[a.charAt(f + 2)] << 6 | m[a.charAt(f + 3)];
      c[e++] = (h & 16711680) >> 16;
      c[e++] = (h & 65280) >> 8;
      c[e++] = h & 255;
    }
    2 === b ? (h = m[a.charAt(f)] << 2 | m[a.charAt(f + 1)] >> 4, c[e++] = h & 255) : 1 === b && (h = m[a.charAt(f)] << 10 | m[a.charAt(f + 1)] << 4 | m[a.charAt(f + 2)] >> 2, c[e++] = h >> 8 & 255, c[e++] = h & 255);
    return c;
  }
  function w(a, c) {
    var b = "string" === typeof a ? u(a) : a, d = "string" === typeof c ? u(c) : c;
    32 <= d.length && (d = J(d), d = I([d[0] ^ d[4], d[1] ^ d[5], d[2] ^ d[6], d[3] ^ d[7]]));
    b = v.decrypt(b, d, !1);
    for (d = b.length - 1;0 <= d && 0 === b[d];--d) {
    }
    b = b.subarray(4, d + 1);
    return JSON.parse(fb.decode(b));
  }
  function K(a, c) {
    var b = "string" === typeof a ? u(a) : a, d = "string" === typeof c ? u(c) : c;
    if (16 === b.length) {
      return v.decrypt(b, d, !1);
    }
    if (32 <= b.length) {
      var e = v.decrypt(b.subarray(0, 16), d, !1), b = v.decrypt(b.subarray(16, 32), d, !1), d = e.length, f = new Uint8Array(d + b.length);
      f.set(e, 0);
      f.set(b, d);
      e = J(f);
      return I([e[0] ^ e[4], e[1] ^ e[5], e[2] ^ e[6], e[3] ^ e[7]]);
    }
    throw Error("Invalid key.");
  }
  function L(a, c, b, d) {
    return C(a, gb, c).then(function(a) {
      var c = b.exec(a);
      if (c) {
        return a = c[1], a |= 0, -9 === a || -16 === a || -6 === a ? d.status = "offline" : (d.status = "unknown", d.reason = "C\u00f3digo: " + a), d;
      }
      d.status = "online";
      return hb[d.type](a, d);
    }, function(e) {
      var f = e.responseText;
      e = e.status;
      if (500 === e) {
        return L(a, c, b, d);
      }
      d.status = "unknown";
      f = JSON.stringify(f);
      d.reason = "Resp: " + f + " | Status: " + e;
      return d;
    });
  }
  function ib(a) {
    a = jb.exec(a.rest) || [];
    var c = a[2];
    return c ? {id:c, key:a[3], type:a[1] ? "folder" : "file"} : null;
  }
  function kb(a, c) {
    var b = {url:a.href, id:c.id, key:c.key, type:c.type}, d = void 0, e = void 0, f = void 0;
    "file" === b.type ? (d = /^\[(-*\d+)]/, e = '[{"a":"g","p":"' + b.id + '"}]', f = "https://eu.api.mega.co.nz/cs?id=0") : (d = /^(-*\d+)/, e = '[{"a":"f","c":1,"r":1}]', f = "https://eu.api.mega.co.nz/cs?id=0&n=" + b.id);
    return L(f, e, d, b);
  }
  function lb(a) {
    return (a = (mb.exec(a.rest) || [])[1]) ? {shareId:a} : null;
  }
  function nb(a) {
    return k("https://www.amazon.com/drive/v1/nodes/" + (a.id || a.infoId) + "/children?customerId=&resourceVersion=V2&ContentType=JSON&limit=200&sort=%5B%22kind+DESC%22%2C+%22name+ASC%22%5D&tempLink=true&shareId=" + a.shareId, {Referer:a.url}, "", JSON.parse).then(function(c) {
      c = c.data[0];
      a.status = "online";
      a.id = c.id;
      a.name = c.name;
      "FILE" === c.kind ? (a.type = "file", a.size = p(c.contentProperties.size)) : a.type = "folder";
      return a;
    }, n.bind(a));
  }
  function ob(a) {
    return k("https://www.amazon.com/drive/v1/shares/" + a.shareId + "?resourceVersion=V2&ContentType=JSON&asset=ALL", {Referer:a.url}, "", JSON.parse).then(function(c) {
      c = c.nodeInfo;
      a.status = "online";
      a.infoId = c.id;
      return nb(a);
    }, n.bind(a));
  }
  function pb(a, c) {
    return ob({url:a.href, shareId:c.shareId});
  }
  function qb(a) {
    return a.rest.startsWith("/f/") ? !0 : !1;
  }
  function M(a) {
    return (a = rb.exec(a)) ? {href:a[0], host:a[2], rest:a[3] || "/"} : null;
  }
  function x(a) {
    var c = M(a), b = void 0, b = void 0;
    if (c) {
      if (c = N.test(c.href) ? M(c.rest.substring(2)) : c, c) {
        if (b = y[c.host.replace(sb, "")]) {
          if ("function" === typeof b.checkUrl) {
            var d = b.checkUrl(c);
            if (d) {
              return b.checkStatus(c, d);
            }
            b = "Tipo de URL n\u00e3o suportada para este servidor.";
          } else {
            return b.checkStatus(c);
          }
        } else {
          b = "Servidor n\u00e3o suportado ou desativado.";
        }
      } else {
        b = "URL inv\u00e1lida ap\u00f3s remover anonimizador.";
      }
    } else {
      b = "URL inv\u00e1lida.";
    }
    return Promise.resolve({url:a, status:"unknown", reason:b});
  }
  function tb(a) {
    var c = a.beforeEach, b = a.afterEach, d = a.context || document;
    if (!d.getElementsByClassName("upload_links").length) {
      return Promise.resolve("Ops...");
    }
    a = [];
    var d = d.getElementsByClassName("upload_link"), e = d.length;
    b.n = e;
    for (var f = 0;f < e;++f) {
      var h = d[f], g = h.lastElementChild.firstElementChild, h = {linkE:h, statusE:g, url:h.firstElementChild.firstChild.href, status:g.classList.contains("online") ? "online" : "offline"};
      c(h);
      h = x(h.url).then(b.bind(this, h));
      a.push(h);
    }
    return Promise.all(a);
  }
  function ub() {
    return new Promise(function(a, c) {
      "loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", function() {
        a();
      });
    });
  }
  function vb(a, c) {
    a.statusE.classList.add("loading");
  }
  function q(a, c) {
    console.log(a, c);
    var b = a.statusE;
    a.linkE.style.backgroundColor = wb[c.status];
    --q.n;
    !q.checkInDone && 0 === q.n || "unknown" !== c.status && a.status !== c.status ? function() {
      var d = "unknown" === c.status ? "online" === a.status : "online" === c.status;
      Q({id:b.id, online:d}).then(function() {
        var a = b.classList;
        d ? (a.add("online"), a.remove("offline")) : (a.add("offline"), a.remove("online"));
        a.remove("loading");
      });
      q.checkInDone = !0;
    }() : b.classList.remove("loading");
    return {row:a, node:c};
  }
  function xb() {
    ub().then(function() {
      var a = document.getElementsByClassName("upload_links"), c = document.getElementsByClassName("link_password");
      a.length && 0 === c.length ? (a[0].scrollIntoView(), tb({beforeEach:vb, afterEach:q})) : console.warn("n\u00e3o h\u00e1 http links");
    });
  }
  if (window.top === window.self) {
    var R = new DOMParser, T = /\u00b7\s*(.+)$/, yb = {hostName:"DropboxCom", host:["dropbox.com"], getInfo:S, checkStatus:g, regex:{linkOff:/class="err">/, linkOn:/id="default_content_download_button"/}}, zb = {hostName:"_2sharedCom", host:["2shared.com"], checkStatus:U}, W = /\((.+)\)/, Ab = {hostName:"HugefilesNet", host:["hugefiles.net"], checkStatus:g, getInfo:V, regex:{linkOff:/www.hugefiles.net\/404.html"|File Not Found/, linkOn:/download-file-btn-f"/}}, Y = /\s(.+)\s\[(.+)\]/, Bb = {hostName:"EzfileCh", 
    host:["ezfile.ch"], getInfo:X, checkStatus:g, regex:{linkOff:/was either removed or did not exist/, linkOn:/class="fNameLink"/}}, Cb = {hostName:"LetitbitNet", host:["letitbit.net"], checkUrl:Z, checkStatus:g, regex:{linkOff:/id="captcha"/, fileName:/file-info-name">(.+)&nbsp;/, fileSize:/"file-info-size">\[(.+)\]/}}, ba = /^\/\w{7}(\/|$)/, Db = {hostName:"GeTt", host:["ge.tt"], checkUrl:aa, checkStatus:g, getInfo:ca}, ea = /^\/\w{5}(\/|$|\?)/, Eb = {hostName:"SpeedyshareCom", host:["speedyshare.com"], 
    checkUrl:da, checkStatus:g, getInfo:fa}, Fb = {hostName:"_180uploadCom", host:["180upload.com"], checkStatus:g, getInfo:ga, regex:{linkOff:/file expired or deleted/, linkOn:/id="btn_download"/}}, Gb = {hostName:"ZippyshareCom", host:["zippyshare.com"], checkUrl:ha, checkStatus:g, getInfo:ia, regex:{linkOff:/does not exist/, linkOn:/id="dlbutton"/}}, ka = /Downloading "(.+)" \((.+)\)/, Hb = {hostName:"SecureuploadEu", host:["secureupload.eu"], checkStatus:g, getInfo:ja, regex:{linkOff:/could not be found/, 
    linkOn:/value="download1"/}}, Ib = {hostName:"SoniclockerCom", host:["soniclocker.com"], checkStatus:g, regex:{linkOn:/class="download-content"/, fileName:/class="name">(.+?)</, fileSize:/class="size">(.+?)</}}, ma = /\((.+)\)/, Jb = {hostName:"UploadableCh", host:["uploadable.ch"], checkStatus:g, getInfo:la, regex:{linkOff:/Page not found|File not available|no longer available/, linkOn:/id="file_name"/}}, Kb = {hostName:"FilefactoryCom", host:["filefactory.com"], checkUrl:na, checkStatus:g, 
    regex:{linkOff:/alert alert-danger/, linkOn:/id="file_name"/, fileName:/<h2>(.+)</, fileSize:/id="file_info">([\d.,]+\s\w+)/}}, pa = /^\/\w{12}/, Lb = /File was not found/, Mb = /download-file-block/, Nb = /Download file\s(.+)\s\((.+)\)/, ra = {file:function(a) {
      return k(a.url).then(function(c) {
        var b = l(c);
        Lb.test(c) ? a.status = "offline" : Mb.test(c) ? (a.status = "online", c = Nb.exec(b.title), a.name = c[1], a.size = c[2]) : a.status = "unknown";
        return a;
      }, n.bind(a));
    }}, Ob = {hostName:"TurbobitNet", host:["turbobit.net"], checkUrl:oa, checkStatus:qa}, Pb = {hostName:"RapidgatorNet", host:["rapidgator.net"], checkUrl:sa, checkStatus:g, getInfo:ta, regex:{linkOff:/File not found/}}, va = /^\/\w{12}(?=$|\/|\?)/, xa = {file:function(a) {
      return k(a.url).then(function(c) {
        c = l(c);
        var b = c.getElementsByClassName("para_title")[0].textContent;
        if (b.startsWith("File not found")) {
          a.status = "offline";
        } else {
          if (c.querySelector('input[value="download2"]')) {
            if (a.status = "online", c = /(.+)\s\((.+)\)/.exec(b)) {
              a.name = c[1], a.size = c[2];
            }
          } else {
            a.status = "unknown";
          }
        }
        return a;
      }, function(c) {
        a.status = "unknown";
        return a;
      });
    }}, Qb = {hostName:"UptoboxCom", host:["uptobox.com"], checkUrl:ua, checkStatus:wa}, Rb = {hostName:"SolidfilesCom", host:["solidfiles.com"], checkUrl:ya, checkStatus:g, regex:{linkOn:/id="file"/, fileName:/title="(.+)"/, fileSize:/<p class="meta">(.+),/}}, Aa = /unescape\('(.+)'/, Ba = /title="(.+)">/, Ca = /"file_size">.+?(\d.+?)</, Sb = {hostName:"DepositfilesOrg", host:["depositfiles.org", "dfiles.eu"], checkStatus:g, getInfo:za, regex:{linkOff:/no_download_msg/, linkOn:/class="downloadblock"/}}, 
    D = /^\/(zip|rar|file|video)\//, E = void 0, O = {hostName:"_4sharedCom", host:["4shared.com"], checkUrl:Da, checkStatus:Ea, headers:{Cookie:"4langcookie=en"}, regex:{linkOff:/link that you requested is not valid/, linkOn:/class="fileName/, fileName:/f24">(.+)<\/h1/, fileSize:/floatLeft">\s*(\d+.+?)\s\|/}}, E = g.bind(O), Ga = /^\/\w{12}(\/|$|\?)/, Tb = {hostName:"BruploadNet", host:["brupload.net"], checkUrl:Fa, checkStatus:g, regex:{linkOff:/Arquivo Nao Encontrado/, linkOn:/Baixar Arquivo/, 
    fileName:/<small>(.+)<\/s/, fileSize:/\((\d.+)\)/}}, r = {hostName:"UserscloudCom", host:["userscloud.com"], checkStatus:g, regex:{linkOff:/download is no longer available/, linkOn:/value="download2"/, fileName:/\?q=(.+?)"/, fileSize:/<div class="ribbon">(.+?)</}}, Ub = {hostName:"TusfilesNet", host:["tusfiles.net"], checkUrl:r.checkUrl, checkStatus:r.checkStatus, regex:{linkOff:r.regex.linkOff, linkOn:r.regex.linkOn, fileName:/#ffffff">(.+)<\/F/, fileSize:/Size:<\/th>\s+<.+">(.+?)</m}}, F = 
    {Referer:"https://www.oboom.com"}, Ia = /^\/(\w{8})(?:$|\/)/, La = /Session\s+:\s+"(\w{8}-(?:\w{4}-){3}\w{12})"}/, Vb = {hostName:"OboomCom", host:["oboom.com"], checkUrl:Ha, checkStatus:Ka}, Wb = {hostName:"1fichierCom", host:["1fichier.com"], checkStatus:g, regex:{linkOff:/durant 60 jours|File not found/i, linkOn:/File Name :/i, fileName:/File Name :<\/td>[\s\w<="]+>(.+)</m, fileSize:/Size :<\/td>[\s\w<="]+>(.+)</m}}, Xb = {hostName:"MediafireCom", host:["mediafire.com"], checkStatus:g, regex:{linkOff:/error_msg_title/, 
    linkOn:/class="dl-btn-container"/, fileName:/class="fileName">(.+?)</, fileSize:/File size: <span>(.+?)</}}, Oa = {folder:function(a) {
      return k(a.url).then(function(c) {
        c = l(c);
        a.status = "online";
        a.name = c.title;
        a.children = [];
        c = c.querySelectorAll("#fileList td.file");
        for (var b = 0, d = c.length;b < d;++b) {
          var e = c[b];
          a.children.push({name:e.children[0].textContent, size:e.children[1].textContent, type:"file", url:e.children[0].firstChild.href});
        }
        return a;
      }, n.bind(a));
    }, file:function(a) {
      return k(a.url).then(function(c) {
        c = l(c);
        c.getElementById("download") ? (c = c.getElementById("filename"), a.status = "online", a.name = c.textContent, a.size = c.nextElementSibling.textContent) : (a.status = "unknown", a.type = null);
        return a;
      }, n.bind(a));
    }}, Yb = {name:"UploadedNet", host:["ul.to", "uploaded.net"], checkUrl:Ma, checkStatus:Na}, Ra = /(\w+)\s*(?=:[^\/])/g, Sa = /'\s*(.+)\s*'/g, Ta = /\[,+/g, Ua = /"\s*,+\d?,+"/g, Va = /,+\d]/g, Wa = /]\s*,}/g, Xa = /]\s*/g, Qa = /{folder(?:.\s*)+?}/, Za = /,\[,"(.+?)",,/, ab = /^(\/a\/g\.pl|\/a\/gazeta\.pl)?\/(?:(file|document|spreadsheets|folder)\/d\/|(folderview|uc|open)\?id=)([\w-]+)/, Zb = {hostName:"GoogleCom", host:["docs.google.com", "drive.google.com"], checkUrl:$a, checkStatus:bb}, db = 
    /^\/public(\/.+)/, $b = {name:"CloudmailRu", host:["cloud.mail.ru"], checkUrl:cb, checkStatus:eb}, fb = new TextDecoder, m = function() {
      for (var a = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = 0;b < c.length;++b) {
        a[c[b]] = b;
      }
      a["+"] = b;
      a["-"] = b;
      a["/"] = b + 1;
      a._ = b + 1;
      return a;
    }(), v = asmCrypto.AES_CBC, gb = {"Content-Type":"text/plain; charset=UTF-8", Referer:"https://mega.nz"}, hb = {folder:function(a, c) {
      var b = JSON.parse(a)[0].f, d = b[0], e = c.key, f = K(d.k.split(":")[1], e);
      c.name = w(d.a, f).n;
      c.parent = "#";
      c.id = d.h;
      c.children = [];
      d = {};
      d[c.id] = c;
      for (var h = 1;h < b.length;++h) {
        var g = b[h], k = {id:g.h, parent:g.p};
        1 === g.t ? (k.type = "folder", k.children = [], d[k.id] = k) : 0 === g.t && (k.type = "file", k.size = p(g.s));
        f = K(g.k.split(":")[1], e);
        k.name = w(g.a, f).n;
        d[k.parent].children.push(k);
      }
      return c;
    }, file:function(a, c) {
      var b = JSON.parse(a)[0];
      c.size = p(b.s);
      c.key && (c.name = w(b.at, c.key).n);
      return c;
    }}, jb = /^\/#(F)?!(\w{8})!([\w-]+)$/, mb = /^\/clouddrive\/share\/([\w-]{43})/, ac = {OpenloadCo:{hostName:"OpenloadCo", host:["openload.io", "openload.co"], checkUrl:qb, checkStatus:g, regex:{linkOff:/deleted by the owner or was removed/, linkOn:/container file-details/, fileName:/class="other-title-bold">(.+?)</, fileSize:/File size:\s(.+?)</}}, AmazonCom:{name:"AmazonCom", host:["amazon.com"], checkUrl:lb, checkStatus:pb}, MegaNz:{name:"Mega", host:["mega.nz", "mega.co.nz"], checkUrl:ib, 
    checkStatus:kb}, CloudMailRu:$b, GoogleCom:Zb, UploadedNet:Yb, MediafireCom:Xb, _1fichierCom:Wb, OboomCom:Vb, UserscloudCom:r, TusfilesNet:Ub, BruploadNet:Tb, _4sharedCom:O, DepositfilesOrg:Sb, SolidfilesCom:Rb, UptoboxCom:Qb, RapidgatorNet:Pb, TurbobitNet:Ob, FilefactoryCom:Kb, UploadableCh:Jb, SoniclockerCom:Ib, SecureuploadEu:Hb, ZippyshareCom:Gb, _180uploadCom:Fb, SpeedyshareCom:Eb, GeTt:Db, LetitbitNet:Cb, EzfileCh:Bb, HugefilesNet:Ab, _2sharedCom:zb, DropboxCom:yb}, rb = /^(https?:)\/\/([\w\-\.]+)(\/.*|$)/, 
    N = void 0, y = Object.create(null), bc = "hiderefer.com anonymz.com blankrefer.com hidemyass.com nullrefer.com refhide.com href.li".split(" "), sb = /^(?:www(?:\.|\d{1,2}\.(?=zippyshare))|\w{9}(?:\.(?=letitbit)|\w\.(?=1fichier)))/;
    x.init = function() {
      N = new RegExp("^https?:\\/\\/(?:www\\.)?(?:" + bc.join("|").replace(/\./g, "\\.") + ")\\/\\?", "i");
      z(ac, function(a, c) {
        for (var b = c.host, d = 0, e = b.length;d < e;++d) {
          y[b[d]] = c;
        }
      });
    }();
    x.hosts = y;
    var t, wb = (t = {}, t.online = "rgba(46, 204, 113, 0.2)", t.offline = "rgba(231, 76, 60, 0.2)", t.unknown = "rgba(255, 247, 163, 0.9)", t);
    window.location.pathname.startsWith("/showthread.php") && xb();
  }
})();

