// ==UserScript==
// @name        fwp2m
// @namespace   filewarez
// @description filewarez p2m
// @include     /^http(s)?:\/\/(www\.)?filewarez\.tv/.*$/
// @include     /^http(s)?:\/\/(www\.)?filewarez\.ml/.*$/
// @updateURL   https://github.com/triplexfw/greasemonkey/raw/master/fwp2m.meta.js
// @downloadURL https://github.com/triplexfw/greasemonkey/raw/master/fwp2m.user.js
// @version     1.27
// @grant       none
// @run-at      document-idle
// ==/UserScript==

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    var element1 = localStorage.getItem('p2mcopy')
    var element = element1 + element
    localStorage.setItem('p2mcopy', element)
    $temp.val(element).select();
    document.execCommand("copy");
    $temp.remove();
}
function copiap2m() { 
  $('.upload_link').each((i, item) => {
    if($('.link_status', item).hasClass('online')){
        copyToClipboard($('.link_username', item).val());
    }
});
                   }
function iniciar() {
 
  var linkado = document.getElementById('upload_check_all')
 if (linkado) { 
  var janela = document.createElement('ul');
 
               janela.style = 'top: 30%; left: 95%; position: fixed; margin: -30px 0 0 -80px; width: 140px; height: 35px; ' +
                 'padding: 20px; background: #fff; z-index: 999999999;';
              
               janela.innerHTML = '<button type="button" onclick="location.hash=\'#upload_check_all\'">LINK</button>&nbsp;&nbsp;&nbsp;' +
               '<button type="button" onclick="location.hash=\'#postlist\'">TOPO</button><br>';
               if ($('.link_username').val()) { janela.innerHTML = '<button type="button" onclick="location.hash=\'#upload_check_all\'">LINK</button>&nbsp;&nbsp;&nbsp;' +
                 '<button type="button" onclick="location.hash=\'#postlist\'">TOPO</button><br>' +
                 '<br><button type="button" id="copiap2mid">Copy P2M</button>&nbsp;<button type="button" id="limparcopiaid">limpar copia</button>'; }
              janela.setAttribute('id', 'novo');
            var elemento =  document.body.appendChild(janela);
            var cf = '#postlist'
           $(cf).after(elemento); 
           $('#copiap2mid').click(copiap2m)
           $('#limparcopiaid').click(function delcopy() { localStorage.setItem('p2mcopy', '')})
  }
 }


setTimeout(iniciar, 2000);
