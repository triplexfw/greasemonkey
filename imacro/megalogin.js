var macro, macro1, macrov1, extrair1, extrair2, macrov2;
var login, senha, c, a, b, extrair3, macrosave;
var jsLF = "\n";


macro = "CODE:";
macro += "URL GOTO=https://mega.nz/#login" + jsLF;
macro += "wait seconds=3" + jsLF;

iimPlay(macro);

function lercsv() {
macrov2 = "CODE:";
macrov2 += "CMDLINE !DATASOURCE mega.csv" + jsLF;
macrov2 += "SET !DATASOURCE_LINE " + c + jsLF;
macrov2 += "ADD !EXTRACT {{!COL1}}" + jsLF;
macrov2 += "ADD !EXTRACT {{!COL2}}" + jsLF;

iimPlay(macrov2);
login = iimGetLastExtract(1);
senha = iimGetLastExtract(2);
}

macrov1 = "CODE:";
macrov1 += "TAG POS=1 TYPE=A ATTR=TXT:Info EXTRACT=TXT" + jsLF;
macrov1 += "TAG POS=1 TYPE=A ATTR=TXT:Menu EXTRACT=TXT" + jsLF;
macrov1 += "TAG POS=100 TYPE=SPAN ATTR=* EXTRACT=TXT"

function verificar() { iimPlay(macrov1);
extrair1 = iimGetLastExtract(1);
extrair2 = iimGetLastExtract(2); 
extrair3 = iimGetLastExtract(3);
}
verificar();
c = 1
lercsv();
while (!(login == null)) {
for (a=0;a<1;verificar()) {
if (!(extrair1 =='Info') && extrair2 =='Menu') { macro1 = "CODE:"; //logar
macro1 += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:login-name2 CONTENT=" + login + jsLF;
macro1 += "SET !ENCRYPTION NO" + jsLF;
macro1 += "EVENT TYPE=CLICK SELECTOR=\"#login-password2\" BUTTON=0" + jsLF;
macro1 += "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:login-password2 CONTENT=" + senha + jsLF;
macro1 += "TAG POS=1 TYPE=DIV ATTR=CLASS:register-st2-button-arrow" + jsLF;
iimPlay(macro1);
b = 1
 }
 if (extrair1 =='Info' && extrair2 =='Menu') { macro2 = "CODE:"; //deslogar
 macro2 += "EVENT TYPE=CLICK SELECTOR=\"#topmenu>DIV>DIV>A:nth-of-type(3)\" BUTTON=" + jsLF;
macro2 += "EVENT TYPE=CLICK SELECTOR=\"#topmenu>DIV>DIV>DIV>DIV:nth-of-type(19)\" BUTTON=0" + jsLF;
 iimPlay(macro2);
if (b == 1) { a = 2
b = 0 }
 }
 if (extrair1 =='Info' && !(extrair2 =='Menu')) { macro3 = "CODE:"; //recarregar
  macro3 += "refresh" + jsLF;
iimPlay(macro3);
 }
if (!(extrair1 =='Info') && !(extrair2 =='Menu')) { macro4 = "CODE:"; //nihil
macro4 += "wait seconds=3" + jsLF;
iimPlay(macro4);
}
if (extrair3 == "Erro") { macrosave = "CODE:";
macrosave += "SET !EXTRACT " + login + "," + senha + jsLF;
macrosave += "SAVEAS TYPE=EXTRACT FOLDER=* FILE=mega_contas_erro.txt" + jsLF;
macrosave += "refresh" + jsLF;
iimPlay(macrosave);
a = 2
b = 0 }
if (extrair3 == "Conta suspensa") { macrosave = "CODE:";
macrosave += "SET !EXTRACT " + login + "," + senha + jsLF;
macrosave += "SAVEAS TYPE=EXTRACT FOLDER=* FILE=mega_contas_suspensa.txt" + jsLF;
macrosave += "refresh" + jsLF;
iimPlay(macrosave);
a = 2
b = 0 }
}
iimDisplay("log feito numero:" + c);
c++;
lercsv(); } 
iimDisplay("Script completed.");
