// ==UserScript==
// @name        MP Filewarez
// @namespace   634c902e418bb4d9bb4760064269240a
// @description MP
// @include     http://www.filewarez.tv/private.php?do=newpm*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1.07
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @updateURL   https://monkeyguts.com/719.meta.js?c
// @downloadURL https://monkeyguts.com/719.user.js?c
// ==/UserScript==
function criarDropDownMenu() {
  var textpara = document.getElementById('pmrecips_ctrl');
  var nickmehtml = $('.welcomelink').html();
  var re = /member.*\">(.*)\<\/a\>/g;
  var nickme = re.exec(nickmehtml)
  var tagurl = 'topicourl1'
  var tagurl2 = 'topicourl2'
  
  var mp = {
    'mensagens': [
      {
        'titulo': '==------http------==',
        'separador': 'on',
        'estilo': 'color: green; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--Download no Gdrive',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nVoc� tentou baixar no gdrive mas n�o conseguiu?\n' +
        'Temos um tutorial que ensina a baixar mesmo com o gdrive bloqueando o arquivo que ao verificar estava online.\n\n' +
        'Veja:\n' +
        '[url]http://www.filewarez.tv/showthread.php?t=663102[/url]\n\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Link Fora das Regras',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nO(s) link(s) que voc� postou est�(�o) em [B]desacordo com as nossas regras[/B]' +
        ' e por isso foi(ram) [B]removido(s)[/B].\nPara [B]evitar futuros transtornos[/B] � imprescind�vel que [B]conhe�a' +
        ' nossas normas[/B]:\n\n[URL="http://www.filewarez.tv/showthread.php?t=355842"][COLOR=#3366ff]Regulamento' +
        ' Geral do F�rum[/COLOR][/URL];\n[URL="http://www.filewarez.tv/showthread.php?t=355838"][COLOR=#3366ff]' +
        'Regras de Uploads da Comunidade[/COLOR][/URL].\n\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '==------P2M------==',
        'separador': 'on',
        'estilo': 'color: #33CC33; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--link Mailshare',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nEste  [url\=\"' + tagurl + '\"][COLOR=#3366ff]t�pico/upload[/COLOR][/url] que voc� est� tentando baixar foi compartilhado atrav�s do programa [B]MailShare[/B]' +
        ' e voc� precisar� dele para realizar o download. Nos links abaixo voc� tem o tutorial para download e utiliza��o do programa' +
        ' e tamb�m o t�pico para tirar d�vidas.\n\nLinks:\n[url]http://www.filewarez.tv/showthread.php?t=165119[/url]\n' +
        '[url]http://www.filewarez.tv/showthread.php?t=480347[/url]\n\n' +
        'Em caso de outras d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '==------links checados------==',
        'separador': 'on',
        'estilo': 'color: black; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--Links/Contas Online',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nO(s) link(s) HTTP / hash code(s) P2M do [url\=\"' + tagurl + '\"][COLOR=#3366ff]t�pico/upload[/COLOR][/url] foi(ram)' +
        ' verificado(s) por mim e est�(�o) [B]online(s) e funcional(is)[/B].\n\nCaso voc� esteja tentando fazer download de link http' +
        ' GDRIVE e estiver recebendo mensagens como Not Found ou a cota m�xima de download foi atingida, veja o [URL="http://www.filewarez.' +
        'tv/showthread.php?t=663102"][COLOR=#3366ff]tutorial de como baixar no GDRIVE[/COLOR][/URL].\n\n[B]DICA:[/B]' +
        ' N�o fa�a download de arquivos grandes por navegador. Sempre que poss�vel use um gerenciador de download, como Free Download Manager,' +
        ' Internet Download Manager, jDownloader entre outros. Assim voc� diminui consideravelmente as chances do arquivo se corromper no download.\n\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Links/Contas Offline',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nO(s) link(s) HTTP / hash code(s) P2M do [url\=\"' + tagurl + '\"][COLOR=#3366ff]t�pico/upload[/COLOR][/url] foi(ram)' +
        ' verificado(s) por mim e realmente est�(�o) [B]offline(s)[/B]. Infelizmente o Uploader n�o term condi��es de reupa-lo(s) e por' +
        ' isso o upload foi [B]apagado[/B].\n\nObrigado(a) pela sua contribui��o.\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Arquivos checados',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nVc tentou baixar deste link e n�o conseguiu?\n [url\=\"' + tagurl + '\"][COLOR=#3366ff]t�pico/upload[/COLOR][/url] \n\n' +
        ' N�s fizemos o teste, baixamos o arquivo e funcionou 100%. Este arquivo est� hospedado no ' + tagurl2 + '.\n\n' +
        'Para garantir o sucesso do seu download recomendamos que voc� use um gerenciador de download.\n' +
        'Sempre que poss�vel use um gerenciador de download, como Free Download Manager,' +
        'Internet Download Manager, jDownloader entre outros. Assim voc� diminui consideravelmente as chances do arquivo se corromper no download.\n\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      
      {
        'titulo': '==------Imagens------==',
        'separador': 'on',
        'estilo': 'color: #693605; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--Imagem Online',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nA(s) imagem(ns) do [url\=\"' + tagurl + '\"][COLOR=#3366ff]t�pico/upload[/COLOR][/url] foi(ram) verificada(s) por mim' +
        ' e est�(�o) [B]online(s) e funcional(is)[/B]. Verifique se n�o � a sua [B]conex�o com a Internet[/B] ou o cache do seu [B]navegador[/B].\n\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Imagem Offline',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nA(s) imagem(ns) do [url\=\"' + tagurl + '\"][COLOR=#3366ff]t�pico/upload[/COLOR][/url] foi(ram) verificada(s) por mim' +
        ' e realmente est�(�o) [B]offline(s)[/B]. Infelizmente o Uploader n�o tem condi��es de reupa-la(s) e por isso o t�pico foi [B]apagado[/B].\n\n' +
        'Obrigado(a) pela sua contribui��o.\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Assinatura Fora dos Padr�es',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nSua assinatura foi [B]removida[/B] por estar [B]fora de um ou mais padr�es' +
        '[/B] estabelecidos no [URL="http://www.filewarez.tv/showthread.php?t=355842"][COLOR=#3366ff]Regulamento ' +
        'Geral do F�rum[/COLOR][/URL]:\n\n- Tamanho m�ximo permitido: 500kb;\n- Resolu��o m�xima: 500 x 300 (largura x altura' +
        ');\n- [B]Proibida[/B] a utiliza��o de textos ou links direcionados a outros sites ou f�runs com conte�do warez ou que' +
        ' contenham links copiados do site FileWarez;\n- [B]Proibida[/B] a utiliza��o de imagens com propagandas, de conte�do' +
        ' adulto, obsceno, vulgar ou que incite qualquer forma de viol�ncia, discrimina��o ou difama��o;\n\nPara maiores informa��es,' +
        ' leia o [URL="http://www.filewarez.tv/showthread.php?t=355842"][COLOR=#3366ff]Regulamento Geral do F�rum[/COLOR]' +
        '[/URL].\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '==------Geral/outros------==',
        'separador': 'on',
        'estilo': 'color: black; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--�rea Incorreta',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nSeu [url\=\"' + tagurl + '\"][COLOR=#3366ff]t�pico/upload[/COLOR][/url] foi movido ' +
        'por estar numa [B]�rea incorreta[/B].\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Propaganda n�o Autorizada',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nSeu t�pico/upload foi [B]removido[/B] por conter [B]propaganda n�o autorizada[/B].\n\n' +
        'De acordo com o nosso [URL="http://www.filewarez.tv/showthread.php?t=355842"][COLOR=#3366ff]Regulamento Geral do F�rum' +
        '[/COLOR][/URL] � proibida a veicula��o de qualquer propaganda, an�ncios de vendas ou trocas, mensagens de "ganhe dinheiro f�cil",' +
        ' pir�mides, spam, links e quaisquer outros meios para a obten��o de vantagens pessoais, assim como t�picos, mensagens ou links que visem' +
        ' enganar o usu�rio.\n\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Bot�o errado',
        'mensagem': 'Ol� ' + textpara.innerHTML + '\n\nVoc� clicou no bot�o errado para enviar uma mensagem de agradecimento.\n' +
        'Para responder um post e/ou enviar uma mensagem de agradecimento em um UP voc� sempre deve clicar no item chamado' +
        ' [b]Responder[/b] que fica no lado direito inferior.\n\n' +
        'Veja:\n[img]http://s28.postimg.org/x1q2ixb1p/reponder.jpg[/img]\n\n' +
        'Este bot�o que voc� clicou errado: [img]http://s28.postimg.org/vqirttwdl/reportar.jpg[/img]\n' +
        'serve apenas para relatar mensagens ofensivas, spams e outros problemas.\n\n' +
        'Em caso de d�vidas estou a disposi��o.\n\n' +
        'Att.\n' + nickme[1]
      }
    ]
  }
  var elementoSelect = document.createElement('select');
  elementoSelect.setAttribute('id', 'msg');
  elementoSelect.style = 'color: #666; font-style: italic; opacity: 0.7; text-overflow: ellipsis; line-height: 21px; padding: 3px 10px 2px 6px';
  var elemento = document.createElement('option');
  elemento.selected = true;
  elemento.disabled = true;
  elemento.textContent = 'MPs Padr�o para Reports';
  elementoSelect.appendChild(elemento);
  for (var i = 0; i < mp.mensagens.length; ++i) {
    var tituloDaMensagem = mp.mensagens[i].titulo;
    var elemento = document.createElement('option');
    elemento.textContent = tituloDaMensagem;
    elemento.value = tituloDaMensagem;
    elemento.style = mp.mensagens[i].estilo;
    elementoSelect.appendChild(elemento);
  }
  $(elementoSelect).change(function () {
    var indiceSelecionado = this.selectedIndex;
    if ((indiceSelecionado > 0) && (mp.mensagens[indiceSelecionado - 1].separador !== 'on')) {
      if (mp.mensagens[indiceSelecionado - 1].mensagem.match(/topicourl1/g)) { var tagurl1 = prompt('Digite a URL do topico', '');
  var tagon = 'on'  }
      if (mp.mensagens[indiceSelecionado - 1].mensagem.match(/topicourl2/g)) { var tagurl2 = prompt('Digite o(s) servidor(es) que vc testou o arquivo.', '');
   var tagon = 'on' }
      if (tagon == 'on') { unsafeWindow.vB_Editor.vB_Editor_001.editor.setData(mp.mensagens[indiceSelecionado - 1].mensagem.replace(/topicourl2/g, tagurl2).replace(/topicurl1/g, tagurl1)); }                                                                                
      else { unsafeWindow.vB_Editor.vB_Editor_001.editor.setData(mp.mensagens[indiceSelecionado - 1].mensagem); }
      $('#title').val(mp.mensagens[indiceSelecionado -1].titulo.replace('--', ''));
  //    this.options[0].selected = 'selected'; // reseta op��o selecionada
    }
  })
  return elementoSelect;
}
function adicionarDropDownMenu() {
  var dropDownMenu = criarDropDownMenu();
  var navegador = navigator.userAgent.match(/Firefox/g)
  if (navegador == 'Firefox') {
    var browsercke = 'span.cke_browser_gecko'
  } 
  else {
    var browsercke = 'span.cke_browser_webkit'
  }
  $('html#vbulletin_html body div.main_wrap.outer_border div#body_bg div.main_wrap div.body_wrapper div#usercp_content div.cp_content form div.blockbody.formcontrols ' +
  'div.section div#vB_Editor_001.blockrow.texteditor.forum div.editor div.editor_textbox_container.smilie div.editor_textbox.editor_textbox_smilie ' +
  'span#cke_vB_Editor_001_editor.cke_skin_kama.cke_1.cke_editor_vB_Editor_001_editor ' + browsercke + ' span.cke_wrapper.cke_ltr table.cke_editor ' +
  'tbody tr td#cke_top_vB_Editor_001_editor.cke_top div.cke_toolbox').attr('onmousedown', '');
  var elemento2 = document.createElement('span');
  elemento2.setAttribute('class', 'cke_toolbar_start');
  var elemento3 = document.createElement('span');
  elemento3.setAttribute('class', 'cke_toolgroup');
  elemento3.appendChild(dropDownMenu);
  var elemento = document.createElement('span');
  elemento.setAttribute('class', 'cke_toolbar');
  elemento.appendChild(elemento2);
  elemento.appendChild(elemento3);
  var div_id__cke_17 = 'html#vbulletin_html body div.main_wrap.outer_border div#body_bg div.main_wrap div.body_wrapper div#usercp_content div.cp_content form ' +
  'div.blockbody.formcontrols div.section div#vB_Editor_001.blockrow.texteditor.forum div.editor div.editor_textbox_container.smilie ' +
  'div.editor_textbox.editor_textbox_smilie span#cke_vB_Editor_001_editor.cke_skin_kama.cke_1.cke_editor_vB_Editor_001_editor ' + browsercke +
  ' span.cke_wrapper.cke_ltr table.cke_editor tbody tr td#cke_top_vB_Editor_001_editor.cke_top div.cke_toolbox span#cke_17.cke_toolbar';
  $(div_id__cke_17).after(elemento);
}
setTimeout(adicionarDropDownMenu, 3000);
