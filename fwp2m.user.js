// ==UserScript==
// @name        fwp2m
// @namespace   filewarez
// @description filewarez p2m
// @include     http://filewarez.tv/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/triplexfw/greasemonkey/master/fwp2m.meta.js
// @downloadURL https://raw.githubusercontent.com/triplexfw/greasemonkey/master/fwp2m.user.js
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==


function iniciar() {
  var linkado = document.getElementById('upload_check_all')
 if (linkado) { 
  var janela = document.createElement('ul');
 
               janela.style = 'top: 50%; left: 95%; position: fixed; margin: -30px 0 0 -50px; width: 100px; height: 15px; ' +
                 'padding: 20px; background: #fff; z-index: 999999999;';
              
               janela.innerHTML = '<button type="button" onclick="location.hash=\'#upload_check_all\'">LINK</button>&nbsp;&nbsp;&nbsp;' +
               '<button type="button" onclick="location.hash=\'#postlist\'">TOPO</button>';
              janela.setAttribute('id', 'novo');
            var elemento =  document.body.appendChild(janela); 
  
           var cf = '#postlist'
           $(cf).after(elemento); 
  }
 }
setTimeout(iniciar, 2000);
setTimeout(iniciar, 5000);
setTimeout(iniciar, 10000);
setTimeout(iniciar, 20000);
