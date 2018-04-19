// ==UserScript==
// @name        MP Filewarez
// @namespace   634c902e418bb4d9bb4760064269240a
// @description MP
// @include     /^http(s)?:\/\/(www\.)?filewarez\.tv/private\.php\?do\=newpm.*$/
// @include     /^http(s)?:\/\/(www\.)?filewarez\.ml/private\.php\?do\=newpm.*$/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1.15
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @updateURL   https://github.com/triplexfw/greasemonkey/raw/master/mp%20fw.user.js
// @downloadURL https://github.com/triplexfw/greasemonkey/raw/master/mp%20fw.user.js
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
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nVocê tentou baixar no gdrive mas não conseguiu?\n' +
        'Temos um tutorial que ensina a baixar mesmo com o gdrive bloqueando o arquivo que ao verificar estava online.\n\n' +
        'Veja:\n' +
        '[url]http://filewarez.tv/showthread.php?t=663102[/url]\n\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Link Fora das Regras',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nO(s) link(s) que você postou está(ão) em [B]desacordo com as nossas regras[/B]' +
        ' e por isso foi(ram) [B]removido(s)[/B].\nPara [B]evitar futuros transtornos[/B] é imprescindível que [B]conheça' +
        ' nossas normas[/B]:\n\n[URL="http://filewarez.tv/announcement.php?f=104&a=4"][COLOR=#3366ff]Regulamento' +
        ' do Fórum[/COLOR][/URL];\n[URL="http://filewarez.tv/announcement.php?f=104&a=4"][COLOR=#3366ff]' +
        'Regras de Uploads da Comunidade[/COLOR][/URL].\n\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '==------P2M------==',
        'separador': 'on',
        'estilo': 'color: #33CC33; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--link Mailshare',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nEste  [url\=\"' + tagurl + '\"][COLOR=#3366ff]tópico/upload[/COLOR][/url] que você está tentando baixar foi compartilhado através do programa [B]MailShare[/B]' +
        ' e você precisará dele para realizar o download. Nos links abaixo você tem o tutorial para download e utilização do programa' +
        ' e também o tópico para tirar dúvidas.\n\nLinks:\n[url]http://filewarez.tv/showthread.php?t=165119[/url]\n' +
        '[url]http://filewarez.tv/showthread.php?t=480347[/url]\n\n' +
        'Em caso de outras dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '==------links checados------==',
        'separador': 'on',
        'estilo': 'color: black; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--Links/Contas Online',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nO(s) link(s) HTTP / hash code(s) P2M do [url\=\"' + tagurl + '\"][COLOR=#3366ff]tópico/upload[/COLOR][/url] foi(ram)' +
        ' verificado(s) por mim e está(ão) [B]online(s) e funcional(is)[/B].\n\nCaso você esteja tentando fazer download de link http' +
        ' GDRIVE e estiver recebendo mensagens como Not Found ou a cota máxima de download foi atingida, veja o [URL="http://filewarez.' +
        'tv/showthread.php?t=663102"][COLOR=#3366ff]tutorial de como baixar no GDRIVE[/COLOR][/URL].\n\n[B]DICA:[/B]' +
        ' Não faça download de arquivos grandes por navegador. Sempre que possível use um gerenciador de download, como Free Download Manager,' +
        ' Internet Download Manager, jDownloader entre outros. Assim você diminui consideravelmente as chances do arquivo se corromper no download.\n\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Links/Contas Offline',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nO(s) link(s) HTTP / hash code(s) P2M do [url\=\"' + tagurl + '\"][COLOR=#3366ff]tópico/upload[/COLOR][/url] foi(ram)' +
        ' verificado(s) por mim e realmente está(ão) [B]offline(s)[/B]. Infelizmente o Uploader não term condições de reupa-lo(s) e por' +
        ' isso o upload foi [B]apagado[/B].\n\nObrigado(a) pela sua contribuição.\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Arquivos checados',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nVc tentou baixar deste link e não conseguiu?\n [url\=\"' + tagurl + '\"][COLOR=#3366ff]tópico/upload[/COLOR][/url] \n\n' +
        ' Nós fizemos o teste, baixamos o arquivo e funcionou 100%. Este arquivo está hospedado no ' + tagurl2 + '.\n\n' +
        'Para garantir o sucesso do seu download recomendamos que você use um gerenciador de download.\n' +
        'Sempre que possível use um gerenciador de download, como Free Download Manager,' +
        'Internet Download Manager, jDownloader entre outros. Assim você diminui consideravelmente as chances do arquivo se corromper no download.\n\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },

      {
        'titulo': '==------Imagens------==',
        'separador': 'on',
        'estilo': 'color: #693605; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--Imagem Online',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nA(s) imagem(ns) do [url\=\"' + tagurl + '\"][COLOR=#3366ff]tópico/upload[/COLOR][/url] foi(ram) verificada(s) por mim' +
        ' e está(ão) [B]online(s) e funcional(is)[/B]. Verifique se não é a sua [B]conexão com a Internet[/B] ou o cache do seu [B]navegador[/B].\n\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Imagem Offline',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nA(s) imagem(ns) do [url\=\"' + tagurl + '\"][COLOR=#3366ff]tópico/upload[/COLOR][/url] foi(ram) verificada(s) por mim' +
        ' e realmente está(ão) [B]offline(s)[/B]. Infelizmente o Uploader não tem condições de reupa-la(s) e por isso o tópico foi [B]apagado[/B].\n\n' +
        'Obrigado(a) pela sua contribuição.\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Assinatura Fora dos Padrões',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nSua assinatura foi [B]removida[/B] por estar [B]fora de um ou mais padrões' +
        '[/B] estabelecidos no [URL="http://filewarez.tv/announcement.php?f=104&a=4"][COLOR=#3366ff]Regulamento ' +
        'do Fórum[/COLOR][/URL]:\n\n- Tamanho máximo permitido: 500kb;\n- Resolução máxima: 500 x 300 (largura x altura' +
        ');\n- [B]Proibida[/B] a utilização de textos ou links direcionados a outros sites ou fóruns com conteúdo warez ou que' +
        ' contenham links copiados do site FileWarez;\n- [B]Proibida[/B] a utilização de imagens com propagandas, de conteúdo' +
        ' adulto, obsceno, vulgar ou que incite qualquer forma de violência, discriminação ou difamação;\n\nPara maiores informações,' +
        ' leia o [URL="http://filewarez.tv/announcement.php?f=104&a=4"][COLOR=#3366ff]Regulamento do Fórum[/COLOR]' +
        '[/URL].\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '==------Geral/outros------==',
        'separador': 'on',
        'estilo': 'color: black; text-align: center; clear: both; font-weight: bold;'
      },
      {
        'titulo': '--Área Incorreta',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nSeu [url\=\"' + tagurl + '\"][COLOR=#3366ff]tópico/upload[/COLOR][/url] foi movido ' +
        'por estar em uma [B]área incorreta[/B].\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Propaganda não Autorizada',
        'mensagem': 'Olá ' + textpara.innerHTML + '\n\nSeu tópico/upload foi [B]removido[/B] por conter [B]propaganda não autorizada[/B].\n\n' +
        'De acordo com o nosso [URL="http://filewarez.tv/announcement.php?f=104&a=4"][COLOR=#3366ff]Regulamento do Fórum' +
        '[/COLOR][/URL] é proibida a veiculação de qualquer propaganda, anúncios de vendas ou trocas, mensagens de "ganhe dinheiro fácil",' +
        ' pirâmides, spam, links e quaisquer outros meios para a obtenção de vantagens pessoais, assim como tópicos, mensagens ou links que visem' +
        ' enganar o usuário.\n\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
        'Att.\n' + nickme[1]
      },
      {
        'titulo': '--Botão errado',
        'mensagem': 'Obrigado por participar do fórum e um muito obrigado por lembrar de agradecer a galera pelo arquivo '+
        'disponibilizado, porém você clicou no botão errado para enviar uma mensagem de agradecimento.\n' +
        'Para responder um post e/ou enviar uma mensagem de agradecimento em um UP você sempre deve clicar no item chamado' +
        ' [b]Responder[/b] que fica no lado direito inferior.\n\n' +
        'Veja:\n[img]http://s28.postimg.org/x1q2ixb1p/reponder.jpg[/img]\n\n' +
        'Este botão que você clicou errado: [img]http://s28.postimg.org/vqirttwdl/reportar.jpg[/img]\n' +
        'serve apenas para relatar mensagens ofensivas, spams e outros problemas.\n\n' +
        'Em caso de dúvidas estou a disposição.\n\n' +
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
  elemento.textContent = 'MPs Padrão para Reports';
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
    var topicUrl, servers;
    var indiceSelecionado = this.selectedIndex;
    var msg_obj = mp.mensagens[indiceSelecionado - 1];
    var msg = msg_obj.mensagem;
    if (indiceSelecionado > 0 && !msg_obj.separador) {
      if (msg.indexOf(tagurl) > -1) {
        topicUrl = prompt('Digite a URL do topico', '');
        msg = msg.replace(new RegExp(tagurl, 'g'), topicUrl);
      }
      if (msg.indexOf(tagurl2) > - 1) {
        servers = prompt('Digite o(s) servidor(es) que vc testou o arquivo.', '');
        msg = msg.replace(new RegExp(tagurl2, 'g'), servers);
      }
      unsafeWindow.vB_Editor.vB_Editor_001.editor.setData(msg);
      $('#title').val(msg_obj.titulo.replace('--', ''));
    }
    else {
      this.options[0].selected = 'selected'; // reseta opção selecionada
    }
  });

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
