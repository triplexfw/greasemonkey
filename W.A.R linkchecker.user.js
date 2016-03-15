//fixed uploadrocket false live link (yurii)
// ==UserScript==
// @name			W.A.R. Links Checker Customized Premium Link Version
// @description		        detects live, dead and premium links.
// @details			this script automatically checks links from 650+ filehosts. For Firefox, Chrome, Opera, Safari. 
// @namespace		premium version
// @version			1.1.7.4
// @icon            http://sharenxs.com/photos/2014/02/14/52fd759db90ac/cooltext1428903746.png
// @license			GPL version 3 or any later version (http://www.gnu.org/copyleft/gpl.html)
// @author			mental
// @include			http://*
// @include			https://*
// @include			file:///*
// @grant			GM_setValue
// @grant			GM_getValue
// @grant			GM_xmlhttpRequest
// @grant			GM_log
// @grant			GM_addStyle
// @grant			GM_registerMenuCommand
// @grant			GM_getResourceText
// @grant			GM_info
// @require			https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require			https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js
// @resource		jQueryUICSS https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/smoothness/jquery-ui.css
// @homepage        http://www.warlc.5gbfree.com
// @namespace      http://www.warlc.5gbfree.com
// @downloadURL     http://www.warlc.5gbfree.com/script/295074.user.js
// @updateURL       http://www.warlc.5gbfree.com/script/295074.user.js
// @noframes
// ==/UserScript==

//separate alternative domains with "|" char (first name is considered being main)
var allHostNames = [
 "1fichier.com|dl4free.com",
 "filenuke.com",
 "vidto.me",
 "vidspot.net",
 "sharesix.com|sharesix.net",
 "movpod.in",
 "thefile.me",
 "vidzi.tv",
 "videoweed.es",
 "vodlocker.com",
 "nowvideo.sx",
 "cloudtime.to",
 "thevideo.me",
 "vidbull.com",
 "allmyvideos.net",
 "novamov.com",
 "filehoot.com",
 "stagevu.com",
 "gorillavid.in",
 "streamin.to",
	"4upld.com",
	"cloudshares.net",
	"swoopshare.com",
	"newfileland.com",
	"2shared.com",
	"fileupload.pw",
	"zxcfiles.com",
  "up07.net",
	"4shared.com",
	"adrive.com",
	"aisfile.com",
	"hexupload.com",
  "bezvadata.cz",
	"burnupload.com|burnupload.ihiphop.com",
	"xkeepfile.com|Gamesena.com",
//	"firedrive.com",
	"usersfiles.com",
	"pan.baidu.com",
	"radicalshare.com",
  "cramit.in|cramitin.net",
	"datei.to",
	"daten-hoster.de|filehosting.org|xtraupload.de",
	"demo.ovh.eu",
	"depositfiles.com",
	"divshare.com",
  "easy-share.com|crocko.com",
	"easybytez.com",
	"edisk.cz",
	"euroshare.eu",
	"file-upload.net",
	"yadi.sk",
	"ryushare.com",
	"wizupload.com",
  "fastshare.cz",
	"filefactory.com",
	"share.vnn.vn",
	"yunpan.cn",
	"gulfup.com",
	"tropicshare.com",
	"cloudzilla.to",
	"inclouddrive.com",
  "fileflyer.com",
	"filerio.com|filekeen.com",
	"up.4share.vn",
	"upfile.vn",
	"datafilehost.com",
	"fileband.com",
	"worldbytez.com",
  "files.mail.ru",
	"filepost.com|fp.io",
	"filesflash.com",
	"box.com",
	"box.net",
	"goldbytez.com",
	"sdilej.cz",
	"ex-load.com",
	"filesmonster.com",
	"filestore.to",
//	"freakshare.net",
	"hulkload.com",
	"filedropper.com",
  "free-uploading.com",
	"gamefront.com|filefront.com",
	"gettyfile.ru",
	"gigapeta.com",
	"gigasize.com",
  "hellshare.com",
	"hellspy.com",
	"hitfile.net",
	"hostuje.net",
	"freefilehosting.net",
	"free.fr",
  "hulkshare.com",
	"hyperfileshare.com",
	"filecloud.io|ifile.it",
	"ifolder.ru",
	"jumbofiles.com",
	"uploadrocket.net",
	"lafiles.com",
  "leteckaposta.cz|sharegadget.com",
	"letitbit.net",
	"load.to",
	"mediafire.com",
	"megafileupload.com",
	"megashares.com",
  "movshare.net",
	"muchshare.net",
	"myupload.dk",
	"narod.ru|narod.yandex.ru",
	"netload.in",
	"fboom.me",
	"fileboom.me",
  "openfile.ru",
	"partage-facile.com",
	"plunder.com",
//	"putlocker.com",
	"sharerapid.cz",
	"exclusiveloader.com",
	"acefile.net",
  "queenshare.com",
	"quickshare.cz",
	"rapidgator.net",
	"keep2share.com",
	"oboom.com",
	"filepi.com",
	"neodrive.co",
  "rarefile.net",
	"rayfile.com",
	"rghost.net",
	"sendmyway.com",
	"clicknupload.com",
	"sharemods.com",
	"hostr.co",
  "sendspace.com",
	"sharecash.org",
	"share-links.biz",
	"share-online.biz|egoshare.com",
	"megarapid.cz",
  "shareflare.net",
	"solidfiles.com",
	"led.wf",
	"lan.wf",
	"adlink.wf",
	"click.tf",
	"kyc.pm",
	"ssh.tf",
	"ssh.yt",
	"yep.pm",
  "stahovanizasms.cz",
	"tufiles.ru",
	"turbobit.net",
	"filecloud.cc",
	"tikfile.com",
	"cloudsix.me",
  "turboupload.com",
	"uloz.to|ulozto.cz|bagruj.cz|zachowajto.pl",
	"ulozisko.sk",
	"uloziste.com",
	"unibytes.com",
  "upload-il.net|przeslij.net",
	"uploaded.to|ul.to",
	"uploading.com",
	"chayfile.com",
	"rockfile.eu",
	"24uploading.com", 
  "uploadspace.pl",
	"upnito.sk",
	"uptobox.com",
	"usaupload.net",
	"veehd.com",
	"videobb.com",
  "vip-file.com",
	"webshare.cz",
	"xdisk.cz",
	"yunfile.com|filemarkets.com",
	"ziddu.com",
	"krotix.net",
  "zippyshare.com",
	"rodfile.com",
	"migahost.com",
	"wikiupload.com", 
	"uploadstube.de",
	"faststore.org",
  "flyfiles.net", 
	"nowdownload.eu", 
	"prefiles.com", 
	"axifile.com",
	"rapidsonic.com|fileparadox.com", 
  "hackerbox.org", 
	"amonshare.com",
	"data.hu",
	"brupload.net",
	"userscloud.com",
  "netkups.com",
	"edoc.com",
	"xfileload.com",
	"jumbofile.net",
	"kumpulbagi.com",
  "uppit.com|up.ht",
	"downloadani.me", 
	"filesabc.com",
  "sharebeast.com", 
	"180upload.com",
	"verzend.be", 
  "movreel.com",
	"4up.me", 
	"extmatrix.com", 
	"sendfiles.nl", 
	"yourfilestore.com", 
	"filebig.net",
  "nekaka.com",
	"file4safe.com",
	"tusfiles.net",
  "filemac.com", 
	"idup.in",
  "fileswap.com",
	"ozofiles.com",
	"loudupload.net", 
  "nosupload.com", 
	"gboxes.com",
  "myvdrive.com|fileserving.com",
	"filesin.com", 
	"novafile.com", 
	"longfiles.com",
  "uploadhero.com", 
	"uploadbaz.com",
  "bitupload.com",
  "indowebster.com",
	"superload.cz", 
	"mafiastorage.com",
	"4upfiles.com",
  "filesmelt.com", 
	"hellupload.com", 
	"uploadingit.com", 
	"stiahni.si",
  "sendspace.pl",
	"fastshare.org",
	"filejoker.net", 
  "filestore.com.ua",
  "secureupload.eu",
	"rapidfileshare.net",
	"stiahnito.sk",
  "rusfolder.com",
	"fileover.net", 
	"catshare.net",
	"anonfiles.com", 
	"mixturecloud.com", 
  "fileparadox.in",
	"filedais.com", 
	"imdb.com",
	"nitroflare.com",    
  "akafile.com",
	"creafile.net",
	"hugefiles.net",
	"vidxden.com",
	"up.top4top.net",
  "upload.ee",
	"shareplace.org",
	"uploadc.com",
	"remixshare.com",
  "exoshare.com",
	"borncash.org",
	"junocloud.me",
	"keep2share.cc",
	"k2s.cc",
	"expressleech.com",
	"2downloadz.com",
  "mightyupload.com",
	"anysend.com",
	"datafile.com",
	"upstore.net",
	"upsto.re",
	"speedy.sh",
  "sanshare.com",
	"kingfiles.net",
	"uploadhero.co",
	"ge.tt",
	"filesflash.net",
  "salefiles.com",
	"keep2s.cc",
	"megairon.net",
  "datoid.cz",
	"cloudstor.es",
	"streamfile.com",
	"eyesfile.ca",
	"filemoney.com",
	"uploadboy.com",
	"speedshare.eu",
	"google.com",
  "unlimitzone.com",
	"rioupload.com",
	"rg.to",
	"jumbofiles.org",
	"fshare.vn",
	"spaceforfiles.com",
	"up.media1fire.com",
	"depfile.com",
  "go4up.com",
	"dropbox.com",
	"redbunker.net",
	"divxpress.com",
  "mega.nz|mega.co.nz",
	"anafile.com",
	"uploadable.ch",
  "arabloads.com",
	"sharerepo.com",
	"sfshare.se",
	"files.fm",
	"koofile.com",
	"vidplay.net",
	"storagon.com",
	"doraupload.com",
	"openload.io",
	"geupload.com|lenfile.com",
	"uploads.xxx",
         
];

try
{
	//iframes excluded
	if (window.top != window.self)
	{
		return;
	}
	
	//allHostNames sites excluded
	if (window.location.href.match("https?:\/\/(www\.)?[\w\.-]*(?:" + 
						allHostNames.join("|").replace(/\./g, "\\.").replace(/-/g, "\\-") + 
																		")"))
	{
		return;
	}
}
catch (e)
{
	return;
}

//separate alternative domains with "|" char (first name is considered being main)
var allContainerNames = [
	"adf.ly",
	"linkcrypt.ws",
	"linksafe.me",
	"linksave.in",
	"linkto.net",
	"madlink.sk",
	"multiload.cz",
  "mirrorcreator.com",
	"ncrypt.in",
	"redi.re",
	"relink.us",
	"safelinking.net",
	"theloo.katt.it",
	"bit.ly",

];

//separate alternative domains with "|" char (first name is considered being main)
var allObsoleteNames = [
	"uloz.cz",
	"freakshare.com",
	"freakshare.net",
	"daj.to",
	"bl.st",
	"2drive.net",
	"uncapped-downloads.com",
	"sockshare.com",
	"ddlstorage.com",
	"dataport.cz",
	"dizzcloud.com",
	"stahovadlo.cz",
	"shared.com",
	"storage.to",
	"putlocker.com",
	"lumfile.com",
	"lumfile.se",
	"lumfile.eu",
	"firedrive.com",
	"fileshare.in.ua",
	"filecore.co.nz",
	"iskladka.cz",
	"file-rack.com",
	"fast-load.net",
	"subory.sk",
	"bigandfree.com",
  "fileop.com",
	"mujsoubor.cz",
	"sendfile.to",
	"superfastfile.com",
	"quickyshare.com",
	"duckload.com",
	"uploadstore.net",
	"meinupload.com",
  "dualshare.com",
	"2xupload.to|2xupload.de",
	"oxedion.com",
	"uploadline.com",
	"dll.bz",
	"movieshare.in",
	"milledrive.com",
	"quickupload.net",
  "safelink.in",
	"metadivx.com",
	"divxlink.com",
	"uploadrack.com",
	"teradepot.com",
	"dataup.to",
	"upit.to",
	"driveway.com",
	"eatlime.com",
  "a2zuploads.com",
	"friendlyfiles.net",
	"flyfile.us",
	"speedyshare.com",
	"uploadspace.eu",
	"keepfile.com",
	"piggyshare.com",
	"uplly.com",
  "filecrown.com",
	"6giga.com",
	"uploadjockey.com",
	"bluehost.to",
	"filegu.ru",
	"filebase.to",
	"up-file.com",
	"xvideos.com",
	"ufox.com",
  "filebling.com",
	"loaded.it",
	"uploadcell.com",
	"uploadshare.cz",
	"mangoshare.com",
	"filestab.com",
	"crazyupload.com",
	"gaiafile.com",
  "sharejunky.com",
	"fileho.com",
	"bigandfree.com",
	"bigfile.in",
	"bigshare.eu",
	"dahosting.org",
	"digisofts.net",
	"file4save.com",
  "filechip.com",
	"filescloud.com",
	"saveqube.com",
	"turboshare.de",
	"z-upload.com",
	"youshare.com",
	"jiffyupload.com",
	"gigeshare.com",
  "datenklo.net",
	"upload.dj",
	"loadfiles.in",
	"upit.to",
	"dsfileshare.com",
	"sharesimple.net",
	"4files.net",
	"wooupload.com", 
  "odsiebie.com",
	"filenavi.com",
	"3oof.com",
	"meshwaar.com",
	"maxupload.com",
	"share.cx",
	"atserver.eu",
	"hotfiles.ws",
	"esnips.com",
	"tuxfile.com",
  "file2upload.net",
	"filebling.com",
	"turboshare.com",
	"rarhost.com",
	"isharehd.com",
	"i741.com",
	"dataup.de",
	"fofly.com",
	"shareonall.com",
  "sexuploader.com",
	"megaupload.com|megavideo.com|megaporn.com|megarotic.com",
	"uploadhyper.com",
	"filespawn.com",
	"caizzii.com",
  "volnyweb.cz",
	"usershare.net",
	"filescash.net",
	"metahyper.com",
	"combozip.com",
	"x7.to",
	"uploadbox.com",
	"enterupload.com|flyupload.com",
  "filepoint.de",
	"mystream.to",
	"x-fs.com",
	"shareator.com",
	"srapid.eu",
	"sosame.cz",
	"filesdump.com",
	"2-klicks.de",
	"uploking.com",
  "silofiles.com",
	"upfile.in",
	"filehook.com",
	"uploadking.com",
	"uploadhere.com",
	"kewlshare.com",
	"rapidable.com",
	"uploadwaste.com",
	"filemup.com",
  "filesonic.com|sharingmatrix.com",
	"fileserve.com",
	"wupload.com",
	"skipfile.com", 
	"smartuploader.com",
	"dualshare.com",
	"storeandserve.com",
  "mountfile.com",
	"transitfiles.com",
	"uploadstation.com",
	"filejungle.com",
	"shareshared.com",
	"quickyshare.com",
	"save.am", 
	"petandrive.com",
  "file2box.com",
	"flyshare.cz",
	"yabadaba.ru",
	"cloudcache.cc",
	"yourfilehost.com",
	"jakfile.com",
	"kickload.com",
	"pyramidfiles.com",
  "refile.net",
	"zshare.net", 
	"ddlani.me|ddlanime.com", 
	"ftp2share.com",
	"fooget.com",
	"rapidhide.com", 
	"gotupload.com",
	"mooload.com",
  "zupload.com",
	"mytempdir.com",
	"onionshare.com", 
	"stahnu.to",
	"oron.com",
	"badongo.com",
	"filereactor.com",
	"filegaze.com",
	"4bytez.com",
  "1hostclick.com",
	"anonstream.com",
	"batshare.com",
	"bitroad.net",
	"brontofile.com",
	"cloudnxt.net",
	"cloudnator.com|shragle.com",
	"filesfrog.net",
  "coolshare.cz", 
	"dotavi.com", 
	"ezyfile.net", 
	"file-bit.net", 
	"filecosy.com", 
	"fileduct.com|fileduct.net", 
	"filefat.com", 
	"filelaser.com", 
	"filemashine.com",
  "fileserver.cc",
	"filetechnology.com",
	"fireuploads.net",
	"gigfiles.net",
	"holderfile.com",
	"ihostia.com", 
	"k2files.com",
	"mojofile.com",
  "ovfile.com",
	"qshare.com",
	"shafiles.me", 
	"sharefilehost.com",
	"shareupload.com",
	"stahuj.to", 
	"ugotfile.com",
	"uploadboost.com",
	"fileom.com",
  "vidhog.com",
	"xfileshare.eu", 
	"bzlink.us", 
	"bulletupload.com",
//	"wizzupload.com",
	"bloggerarticles.com", 
	"mojedata.sk", 
	"sharpfile.com", 
  "upgrand.com", 
	"nasdilej.cz",
	"mediatack.cz",
	"share-it.to",
	"primeupload.com",
	"filebeer.info",
	"baberepublic",
	"xtu.me",
	"sharebase.de",
	"luckyshare.net",
  "filerobo.com",
	"filevelocity.com",
	"filezpro.com",
	"file4sharing.com",
	"cing.be",
	"ufile.eu",
	"pigsonic.com",
	"fileupped.com",
	"sharerun.com",
	"filesaur.com",
  "rapidslnare.com",
	"bestsharing.com",
	"savefiles.net",
	"file2share.biz",
	"filecache.de",
	"monsteruploads.eu",
	"b9bb.com",
	"aiotool.net",
	"jamber.info",
  "megaftp.com",
	"desiupload.net",
	"file27.com",
	"yastorage.com",
	"filehost.ws",
	"copyload.com",
	"venusfile.com",
	"aieshare.com",
	"terafile.co",
	"terafile.com",
  "fileza.net",
	"filerose.com",
	"squillion.com",
	"fileprohost.com",
	"bitbonus.com",
	"warserver.cz",
	"uload.to",
	"sharedbit.net",
	"megaload.it",
	"filewinds.com",
  "uploadcore.com",
	"syfiles.com",
	"eyesfile.com",
	"hotfile.com",
	"superupl.com",
	"oteupload.com",
	"henchfile.com",
	"filegag.com",
	"HenchFile.com",
	"filedefend.com",
  "share-rapid.com|rapids.cz|share-credit.cz|share-central.cz|share-ms.cz|share-net.cz|srapid.cz|share-rapid.cz",
	"megabitshare.com",
	"cloudzer.com",
	"asfile.com",
  "cloudzer.net",
	"clz.to",
	"extabit.com",
	"247upload.com",
	"2download.de",
	"4fastfile.com",
	"asixfiles.com",
	"berofile.com",
	"bigupload.com",
	"cepzo.com",
	"clouds.to",
	"cobrashare.sk",
  "coraldrive.net",
	"cyberlocker.ch",
	"czshare.com",
	"darkport.org",
	"dark-uploads.com",
	"davvas.com",
	"enigmashare.com",
	"erofly.cz",
	"fastsonic.net",
	"filebox.com",
  "filecity.net",
	"filedap.com",
	"filedino.com",
	"filedownloads.org",
	"filefolks.com",
	"fileking.co",
	"filemates.com",
	"files.to",
	"files2k.eu",
	"filesector.cc",
	"bitshare.com",
  "filesega.com",
	"filesend.net",
	"filestay.com",
	"filestrum.com",
	"fileuplo.de",
	"fileupup.com",
	"forunesia.com",
	"freeuploads.fr",
	"uploa.dk",
	"getthebit.com",
	"getzilla.net",
  "goldfile.eu",
	"good.com",
	"grupload.com",
	"hellfile.com",
	"hipfile.com",
	"hitfile.com",
	"hulkfile.eu|duckfile.net",
	"i-filez.com",
	"ifile.ws",
	"kupload.org",
	"packupload.com",
  "lemuploads.com",
	"limelinx.com",
	"maxshare.pl",
	"megarelease.org",
	"megashare.com",
	"minus.com",
	"mlfat4arab.com",
	"multishare.cz",
	"nirafile.com",
	"ok2upload.com",
	"peejeshare.com",
  "premiuns.org",
	"przeklej.net",
	"qkup.net",
	"rapidupload.sk",
	"rockdizfile.com",
	"rocketfile.net",
	"share-now.net",
	"share76.com",
	"sharebees.com",
	"sharefiles.co",
	"slingfile.com",
  "sms4file.com",	
	"space4file.com",
	"tigershare.net",
	"toucansharing.com",
	"ubuntuone.com",
	"unextfiles.com",
	"upaj.pl",
	"upfile.biz",
	"uploadbin.net",
	"uploadic.com",
	"uploadinc.com",
  "uploading4u.eu",
	"uploadjet.net",
	"uploadorb.com",
	"upthe.net",
	"uptorch.com",
	"vidbox.yt",
	"videozer.com",
	"vreer.com",
	"wallobit.com",
	"zooupload.com",
	"privatefiles.com",
	"xerver.co",
  "BillionUploads.com",
	"rapidshare.com",
	"rapidshare.ru",
	"4savefile.com",
	"bayfiles.com",
	"bayfiles.net",
	"dodane.pl",
	"dotsemper.com",
	"egofiles.com",
	"epicshare.net",
	"fiberupload.net",
  "filemonkey.in",
	"filemonster.net",
	"filepom.com",
	"filesbb.com",
	"fileshareup.com",
	"filevice.com",
	"gigaup.fr",
	"inafile.com",
	"isavelink.com",
	"loombo.com",
	"megafiles.se",
  "migupload.com",
	"mydisc.net",
	"nitrobits.com",
	"potload.com",
	"redload.net",
	"shareprofi.com",
	"sharesuper.info",
	"sinhro.net",
	"speedfile.cz",
	"speedshare.org",
	"storage.novoro.net",
  "swankshare.com",
	"swatupload.com",
	"upafile.com",
	"uploadmachine.com",
	"uploadsat.com",
	"upshared.com",
	"usefile.com",
	"yourfiles.to",
	"zomgupload.com",
	"ultramegabit.com",
	"uploadto.us",

];
///////////////////////////////////////////////////////////////////////////////////////
var firstRun = GM_getValue("First_run", true);

var chromeBrowser = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
//////////////////////////////////////////////////////////////////////////////////////
try
{
	var thisVersion = GM_info.script.version; //not supported in Scriptish and others
	var last_known_version = GM_getValue("last_known_version", "");
	if (!last_known_version)
	{
		last_known_version = thisVersion;
		GM_setValue("last_known_version", last_known_version);
	}
	//var newVersion = !(thisVersion == last_known_version);
	var newVersion = !(a.replace(/^(\d+\.\d+\.\d+).*/,'$1') == b.replace(/^(\d+\.\d+\.\d+).*/,'$1')); //true only if one of the first three numbers differs
	GM_setValue("last_known_version", thisVersion);
}
catch (err)
{
	var newVersion = false;
}

var now = (new Date()).getTime();
var last_custom_rules_nag = GM_getValue('last_custom_rules_nag', 0);
if (!last_custom_rules_nag)
{
	last_custom_rules_nag = now;
	GM_setValue('last_custom_rules_nag', ''+now);
}


allHostNames.sort();
allContainerNames.sort();
allObsoleteNames.sort();

var RAND_STRING = "8QyvpOSsRG3QWq";
var DEBUG_MODE = false;

var TOOLTIP_MAXWIDTH = 600; //in pixels
var TOOLTIP_THUMBWIDTH = 200;
		
var containers_processed = false;

//settings for keyboard functions start
var CHECK_ALL_LINKS_KEY = "A";
var CONFIGURATION_KEY = "C";
var copy_to_dead_key = "D";
var toggle_autocheck_key = "W";
var toggle_Enable_Anonymizer_key = "Z";
var first_key_keycode = '17'; // 18=ALT 16=Shift 17=Ctrl 32=SPACE_BAR 9=TAB
var first_key_keycodename = 'CTRL';
var second_key_keycode = '18';
var second_key_keycodename = 'ALT';
var CHECK_ALL_LINKS_KEYCODE = CHECK_ALL_LINKS_KEY.charCodeAt(0);
var CONFIGURATION_KEYCODE = CONFIGURATION_KEY.charCodeAt(0);
var copy_to_dead_keycode = copy_to_dead_key.charCodeAt(0);
var toggle_autocheck_keycode = toggle_autocheck_key.charCodeAt(0);
var toggle_Enable_Anonymizer_keycode = toggle_Enable_Anonymizer_key.charCodeAt(0);
//settings for keyboard functions end

//global settings start
var Show_black_background_in_DL_links, Show_line_through_in_dead_links, Color_DL_links;
var Live_links_color, Dead_links_color, Temp_unavailable_links_color, Premium_links_color, Ref_anonymize_service;
var Do_not_linkify_DL_links, Keyboard_functions, Autocheck, Enable_Anonymizer;
var Show_progress_stats, Display_tooltip_info, Icon_set;
var Progress_box_pos_bottom, Progress_box_pos_right, Progress_box_opacity, Progress_box_background_color, Progress_box_item_color;
var Progress_box_refresh_rate;
var Obsolete_file_hosts;
var Custom_rules, Custom_rules_text;

var messageBox = document.createElement('b'); // top-left message box

var cLinksTotal = 0;
var cLinksDead = 0;
var cLinksAlive = 0;
var cLinksUnava = 0;
var cLinksprem = 0;
var cLinksProcessed = 0;

var intervalId; //for updateProgress()

//icon resources
var PAW_ICON_GREEN = 	'data:image/png;base64,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';
var PAW_ICON_RED = 		'data:image/png;base64,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';
var PAW_ICON_YELLOW =	'data:image/png;base64,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';
var	PAW_ICON_PINK =	  'data:image/png;base64,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';

var RSLC_ICON_GREEN =   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH2AMJCQY36Sc4vgAAAlRJREFUeNpV0r9PE3EABfD3veu1lJYr15ZCoBHBqJBAMEbjL0hYFAkyOAmJMUYd/Q+cXF1wYPQPILppYkKIRARiMDGoaAKimBaKHMWDXnu93venE0Tf9Ib3tg/BP7m3NGgwxtKcM4vyIKSk4BBqnwux9/LGKjvckcNy9/1Akgk2ZJHMWNyw+qWUMSGZ51R2FzbdX1NSyOnZWznn6HRn8UqSCv6gLdz58GSsL2voURJIirAWhh+U1fLO4tbKztdJIvHsw/1NR7/97pJBOR9tDXc+6rMGsg4vkd3AhkMdVJgLounkdKLHdL1S13ZpdyMzbK5pnNF0I0mNn4r3Ze3AJrZvo0zL8KkPyil6rTOgipFzrRezLXVt4zWKtBbwWjIeTgyEQlHiUhepcBpNkSaYehxX20Yw2HYd3VYP6iNRYhrpAeojGfJqvs7rRIyKGpSUGOm4iYgWwX7wB72ps/hWXMZCbgaNkUYQrseUr3SNB0JQRj0DBnSlYWN/DcfNEzifuYzVvS94vf4cVeoiBB2ScY8IiBBnytk7KM5XG8qj9SRClrbnUKNVZKLNWMjPwKkWkYk146BSUbZrz0PC0ZuHzaBYLokq9S90p3pMJRnJl35gtfgZQnAko0lY4WY1+2lu63s+N0EE+agXXrkydc3czjtF7noHXccSx82mWIY0hBpgRVMIalK9WX67tfJzfZJo5EVuouAdieh4kk3KQA21J1rGmuoy/UToMSG5t+vaC5u/7Smikenc04LzHyMAaH+cNcBVGgyWClSIgHAA+2DYy00Wjuz9Bce5MucW9xnuAAAAAElFTkSuQmCC';
var RSLC_ICON_RED = 	  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH2AMJCQkjdGXwDAAAAcpJREFUeNptkj9PFHEQhp/ZBcIhxyKHYgNCYUxogE0OpdDGxsQCY6e5ggS1Mn4Ce621u7MCYqOdX4DkSLTBqwyNiQmJBiJiDjmWP/ub1+IAMXGqmTx5M5nJY5wpwRiQHPfoL2rG8PVksDOBlKRYZWgwxcwkIQlc0o+fDe3sPu6E1dOQIGWg/yUT4zOUBiLtHYAHFBy6YvRrW+Hzl4/e/P2kAJ8iwRhJscrE+AzDwxG3Z2E/oO9bKMvhzj104aLZ1dFr9PZUWzDWASQMDaYqDZjdvAWzd2HkMlpcJKpUsMlJdHiI3i1Ffr4v9d29pEMnt7UyfOkNNjKKTU8Tl8tghq+sEGqvUZwjZA5EAiShPIetLXxhASSIY3An1Gr4xkabq70iar9OkOeoWCSqVMAM8hzMiObnIUnQ0RFyR0DkgNylzhh7cB+bmsLrdQ7n5gj1OlG5TPxoHro7kUsC4mdQUB5u0NdziW/r5q2M/PkLfG2NsLwMkRHevyVkWQib26t+FJYMIIOUvt5XdmXkunXEke/sQchRCNDdRfAQ8vXND97af1qCxqkRLUj9XKFq/cUUMMmRQHKFZquh7OBhCRr/aATQ/I97foxKZ9z7A9QA5voyr3dtAAAAAElFTkSuQmCC';
var RSLC_ICON_YELLOW =	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH2AQJDBgxYO68rwAAAZNJREFUeNptkr9LW1EcxT/3GhOTKIG8QTpm8B8IIoJTFkFwsXVyUaxFJHYoFzJYUVFHn4sKtoidCoKtIigWOtQOhRKowaFzJwcF0VeJ+fFe7nUwP57R7/S9nO+595z7PQJfGUgAsWqPaUBOC/yrHQI+QjKTXc7GQq4EhP+uKzdUcbtnelvhDzXQQHL2bCkbxhOA5GmZ24LUC73zPWE4lQYSmexynaCmjh5Nq9FdANER1uL9j7nfeUhIIFaVJNXEPrguKvPzgfD2G0iBGt8DkPG4CGiIyapZAWBvDUEoBOfnqPQxaANxC3v7Ze1hoQFpmsTbGwMQicLNNeTz2HaKYuO/4DnTauwLeC6i8wW4ZdSbA9rw/GtB6kaPmjyESATKZVZWUxAMQqnI9MTXOqdGcvRFoSw8o+0Pg1DxsD+PcFcJYH8aphSNsr71CkAH/17danAEQAGSa98zv7x4W9AIpGkRzap18cKU3vUv9lmQq6N5SH7cSZ8Uuqx205SI1rPL/6/HN1MW5GiKC84z2at6dixf9u4B/PqUtJuX27QAAAAASUVORK5CYII=';
var RSLC_ICON_PINK = 	  'data:image/png;base64,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';

var NEW_ICON_GREEN = 	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGklEQVR42mNkIBcwMWQwsDMrMZKhlZmRi2mCWYtE9st1bx+SagAPlwTLCt+pot6vrv/8t7/mnQcpBsjI6jNvDp4uZvDuMw/D8uA7U39/+Z9DrAGG5r5Mmz06pKQ//BVnWJl89daL0z8MgeLfiDHAN6SAaZlhjjzP+x8SDAcX3P1zuueVDVD8JEiSkVOcZbWAJKPi8wu/q4H8nSgBzcyQl9jN1ifvp8z8+acQw50brxk2Rd1u+fvzfy1MDaN7DOO7ohnSgqe2Pf0/rYJh1/N7/0uB4tdYuRknJMzgzZYyV2L89pub4c3Xbwwb4q+de3/9pwVQ/jfcAGYWhrJ5x207ZdSFGB59Ockwb+L3vydX/7oRPYFPW05DnuHbb1aGD79+MRyZev/H9TlvTIB6riK7EhQGbNr2rJe714eq/fjLwPD8x22GO5/eM/CzijN8BdoD0nz3/FuG/an3Sv7/ZehFDyBYIHplzFHcYullyPjp13eGj79/MHwEagRpfvPpB8OuuJsHvz785QRU9w+XAQwCMkyby3aZ+/xj5YBr/vDzD8OpngefHq55rw9U8gBbFCFHo4pljvAV60x19o+/fgMN+cNw79h7hjNFD5IZ/jPMwxXHKOmAmYOxPWCNWgWzKBfDm7c/GY4m3Nr089Uff3yJBD0h8Ug68tzQbVCUvtD66PWrXR91gWIvSTEABOw5pNlKfjz91QNkHySUTAGg7t0uvj1ytQAAAABJRU5ErkJggg==';
var NEW_ICON_RED = 		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVQ4jbWTwWrCQBRFz6Rxnay6iuAXlJIg+BHZZR/d6++4t/5MpRQRf8CCrurGrDP6uumESTol04J3dbmPd7hvYBTAG5QBzIFH/PQpsBzDWm2gDGEFKM9lIxGYBSEsustRnpPWNZkImQip1sRF0QUoBQv1DgdgZE9SrdmGIX0Z8NFKni8XHqIIgEzkR+dMhGtVsYvjJgt6L+1Rq4FN/hcA2md01a0PjhPM8n44bDLjXeBf36A+nZzeG+Cr+wEGSeL0LsDZDq5VBcDT8dhkxpuZpbN6hXIAL76Vbd1gqgC+IX/6zhqWE1h/AYSwSjYrmXJlAAAAAElFTkSuQmCC';
var NEW_ICON_YELLOW =	'data:image/png;base64,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';
var	NEW_ICON_PINK =	  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUklEQVQ4jY3TsUuWURQG8F8WEvFNDREfIg5RURAOIeL0DhJBS0tDY9BQQ0Oj29kiIvoDhBpFQRTUD1GKi0sRtEs0SEQ0RBQIRcVXw3eF6+vrWwcunPvc53nuPffcS0uEmA0x38Y5cohwGjOYxBBe4VGI3j8NQlzHYhaW0cfNEAslWCfBw4yvYhkv8hjCgxD7yMdquw/jbJ4+xq2cz+AKdrJRv9EAv/EDx3Ft75QhtrHdcFpHy0mS/lSqcVzAFM7he6XaTNLXJoOmS+ziOc4XcB893A3xodUgm5zAHdzHSLH0DhdD/GwsoSjlV5Je5nK+YQUTOInXSXq7x6134RQuo4unGf6Me7iKMxgrNfUuXMJazr8U+DA6Of/UZrCF9xjFM3zELpZwOptulIKmLlQGNXdqS7u4EWK9BA9cYpJ2KtWcwaMazcInuB3iTZ3fGv/znf8CBMxX4hrPUbUAAAAASUVORK5CYII=';											

//global settings end
if (window.opera && !window.console)
{
	window.console = {};

	function fn()
	{
		opera.postError(arguments);
	};
	['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'].forEach(function (name)
	{
		window.console[name] = fn;
	});
}

//displays colored text in message box
function sendMessage(text, color)
{
	var msgDiv = document.createElement('div');
	msgDiv.style.color = color;
	msgDiv.innerHTML = text;
	messageBox.appendChild(msgDiv);
	setTimeout(function(){messageBox.removeChild(msgDiv)}, 3000);
}

function linkify(totalourls)
{ // code from http://userscripts.org/scripts/review/2254  Linkify ting
	var ikkeTilladteTags;
	
	var allLinksRegex = "(?:http:\/\/.+?\\?)?(?:https?:\/\/)?"
		+ "[0-9A-Za-z]+(?:[\\.-][0-9A-Za-z]+)*\\.[A-Za-z]+/"   //instead of totalourls
		+ "[\\w\\–\\-\\.+$!*\\/()\\[\\]\',~%?:@#&=\\\\\\—;…×Ã\\_\\u0080-\\u03FF’‘" +    (Allow_spaces_in_DL_links ? "\\u0020" : "")    + "]*";
	allLinksRegex = new RegExp(allLinksRegex, "g");
	
	var regexy = "^(?:http:\/\/.+?\\?)?(?:https?:\/\/)?(?:www\\.)?(?:" + totalourls + ")";

	if (Do_not_linkify_DL_links)
		ikkeTilladteTags = ['a', 'head', 'script', 'style', 'title', 'option', 'iframe', 'textarea', 'span']; //tags, hvor det der stAÎžâ€™Î’ÂĄr inden i ikke skal vAÎžâ€™Î’Â¦re links
	else
		ikkeTilladteTags = ['a', 'head', 'script', 'style', 'title', 'option', 'iframe', 'textarea']; //tags, hvor det der stAÎžâ€™Î’ÂĄr inden i ikke skal vAÎžâ€™Î’Â¦re links

	var regex = new RegExp(regexy);
	var textNode, muligtLink;

	var path = "//text()[not(parent::" + ikkeTilladteTags.join(" or parent::") + ") and contains(.,'/')]";
	var textNodes = document.evaluate(path, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

	var i = textNodes.snapshotLength;
	
	while (i--)
	{
		textNode = textNodes.snapshotItem(i);

		muligtLink = textNode.nodeValue; //all links on page

		var myArray = null;
		var span = null;
		var lastLastIndex = 0;
		allLinksRegex.lastIndex = 0;
		
		if (/^https?:\/\/~[\w\s\~]*\//.test(muligtLink))
		{
			if (textNode.parentNode.className == "adead_link") continue;
			var censoredLink = muligtLink;
			var span = document.createElement('span');
			span.className = "adead_link";
			$(span).attr('warlc_error', "Cause of error: <b>Censored link.</b>");
			$(span).html(censoredLink);
			span.addEventListener("mouseover", displayTooltipError, false);
			cLinksTotal++; cLinksProcessed++; cLinksDead++;
			textNode.parentNode.replaceChild(span, textNode);
			continue;
			alert(censoredLink);
		}
		
		while (myArray = allLinksRegex.exec(muligtLink)) //find all links
		{
			if (!regex.test(myArray[0]))  //this link is not recognized
			{

				continue;
			}
			
			if (!span) 
				span = document.createElement('span');

			var link = myArray[0];
			span.appendChild(document.createTextNode(muligtLink.substring(lastLastIndex, myArray.index))); //inds?t det der kommer for dette hit

			var $a = $("<a>" + link + "</a>")
			
			if (!link.match(/https?:\/\//))
			{
				link = 'http://' + link;
			}

			$a.attr("href", link.replace(/\[\/hide:\w+\]/,""))
				.addClass("processing_link")
				.appendTo(span);
			
			
			lastLastIndex = allLinksRegex.lastIndex;
		}
		
		if (span)
		{
			span.appendChild(document.createTextNode(muligtLink.substring(lastLastIndex))); //ins?t det der kommer efter sidste hit
			textNode.parentNode.replaceChild(span, textNode);
		}
	}
}

function add_WARLC_style()
{
	if (!(document.getElementsByTagName('WARLC')[0]))
	{
		var meta_not_to_add_more_style = document.createElement("WARLC");
		meta_not_to_add_more_style.setAttribute('content', 'war_links_checker');
		meta_not_to_add_more_style.setAttribute('name', 'description');
		document.getElementsByTagName('head')[0].appendChild(meta_not_to_add_more_style);
	
		alive_link_png = "";
		adead_link_png = "";
		unava_link_png = "";
		prem_link_png = "";
		switch(Icon_set)
		{
		//no icons
		case 0:	break;
		
		// cat paws
		case 1:	alive_link_png = PAW_ICON_GREEN;
				adead_link_png = PAW_ICON_RED;
				unava_link_png = PAW_ICON_YELLOW;
				prem_link_png = PAW_ICON_PINK;
				break;
		
		// classic RSLC look
		case 2: alive_link_png = RSLC_ICON_GREEN;
				adead_link_png = RSLC_ICON_RED;
				unava_link_png = RSLC_ICON_YELLOW;
				prem_link_png = RSLC_ICON_PINK;
				break;
				
		// New Icons
		case 3: alive_link_png = NEW_ICON_GREEN;
				adead_link_png = NEW_ICON_RED;
				unava_link_png = NEW_ICON_YELLOW;
				prem_link_png = NEW_ICON_PINK;
				break;				
		
		// cat paws
		default:alive_link_png = PAW_ICON_GREEN;
				adead_link_png = PAW_ICON_RED;
				unava_link_png = PAW_ICON_YELLOW;
				prem_link_png = PAW_ICON_PINK;
				break;
		}
		
		processing_link_gif = 'data:image/gif;base64,' + // or temporary anavailable
		'R0lGODlhCgAKAJEDAMzMzP9mZv8AAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACgAKAAACF5wncgaAGgJzJ647cWua4sOBFEd62VEAACH5BAUAAAMALAEAAAAIAAMAAAIKnBM2IoMDAFMQFAAh+QQFAAADACwAAAAABgAGAAACDJwHMBGofKIRItJYAAAh+QQFAAADACwAAAEAAwAIAAACChxgOBPBvpYQYxYAIfkEBQAAAwAsAAAEAAYABgAAAgoEhmPJHOGgEGwWACH5BAUAAAMALAEABwAIAAMAAAIKBIYjYhOhRHqpAAAh+QQFAAADACwEAAQABgAGAAACDJwncqi7EQYAA0p6CgAh+QQJAAADACwHAAEAAwAIAAACCpRmoxoxvQAYchQAOw%3D%3D';

		var dead_color_css, live_color_css, unava_color_css, prem_color_css, black_background_css;

		if (Color_DL_links)
		{
			dead_color_css = 'color:' + Dead_links_color + ' !important;';
			live_color_css = 'color:' + Live_links_color + ' !important;';
			unava_color_css = 'color:' + Temp_unavailable_links_color + ' !important;';
			container_color_css = 'color:' + Container_links_color + ' !important;';
			prem_color_css = 'color:' + Premium_links_color + ' !important;';
		}
		else
		{
			dead_color_css = live_color_css = unava_color_css = container_color_css = prem_color_css = '';
		}

		if (Show_black_background_in_DL_links)
		{
			black_background_css = 'background-color: black !important;';
		}
		else
		{
			black_background_css = '';
		}

		if (Show_line_through_in_dead_links)
		{
			line_through_css = 'text-decoration: line-through !important;';
		}
		else
		{
			line_through_css = '';
		}

		GM_addStyle(".alive_link {background:transparent url(" + alive_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;" + live_color_css + black_background_css + "}");
		GM_addStyle(".adead_link {background:transparent url(" + adead_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;" + dead_color_css + black_background_css + line_through_css + "}");
		GM_addStyle(".unava_link {background:transparent url(" + unava_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;" + unava_color_css + black_background_css + "}");
		GM_addStyle(".processing_link {background:transparent url(" + processing_link_gif + ") no-repeat scroll 100% 50%;padding-right:15px;" + container_color_css + black_background_css + "}");
		GM_addStyle(".container_link {background:transparent url(" + processing_link_gif + ") no-repeat scroll 100% 50%;padding-right:15px;" + container_color_css + black_background_css + "}");
		GM_addStyle(".container_list {font-size:90%; list-style-type:square; padding: 0px 5% 0px; margin: 0px}");
		GM_addStyle(".prem_link {background:transparent url(" + prem_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;" + prem_color_css + black_background_css + "}");
	}
}

var warlcTooltip = null;
var mouseoverLink = null; //link href with mouse cursor over it

var lastX = 0;
var	lastY = 0;

$(document).ready(initTooltip);
	
//inits tooltip	
function initTooltip()
{	warlcTooltip = document.createElement("div");
	warlcTooltip.setAttribute("style", "background: #EAEAEA; box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);padding: 6px 6px 6px 6px; border-radius:2px; border:2px solid #6699CC; color:#000000;font-family:Verdana,sans-serif;font-size:11px;position:absolute;z-index:1000; max-width: " + TOOLTIP_MAXWIDTH + "px;");
	warlcTooltip.style.visibility = "hidden";
		
	document.body.appendChild(warlcTooltip);
}	

//"mousemove" event handler for all links
function moveTooltip(event)
{
	if ((Math.abs(lastX - event.clientX) + Math.abs(lastY - event.clientY)) < 6)
	{	//no need to reflow if the cursor moved just a little
		return;
	}
	else
	{
		lastX = event.clientX;
		lastY = event.clientY;
	}

	posX = event.clientX + window.pageXOffset + 10;
	posY = event.clientY + window.pageYOffset;
	
	var ttHeight = warlcTooltip.offsetHeight;
	var ttFreeSpace = window.innerHeight - event.clientY;
	
	if (ttHeight > ttFreeSpace)
	{	//prevents tooltip from getting out of the window
		posY -= (ttHeight - (ttFreeSpace)) + 10;
	}
	else
	{
		posY += 7;
	}
	
	warlcTooltip.style.top = posY + "px";
	warlcTooltip.style.left = posX + "px";	
}

//"mouseout" event handler for all links
function hideTooltip(){
	warlcTooltip.style.visibility = "hidden";
	mouseoverLink = null;
}	


//"mouseover" event handler for dead links
//displays tooltip error message on dead links 
function displayTooltipError()
{
	mouseoverLink = this.href;	
	
	this.addEventListener("mouseout", hideTooltip);
	this.addEventListener("mousemove", function(event) { moveTooltip(event); });
	
	warlcTooltip.innerHTML = '<b>LOADING...</b>';
	warlcTooltip.style.minWidth = 0;
	warlcTooltip.style.visibility = "visible";
	
	if (this.warlc_error) //an error message is already known and stored in warlc_error attribute
	{
		warlcTooltip.innerHTML = this.warlc_error;
	}
	else
	{
		loadErrorInfo(this);
	}
	
	function loadErrorInfo(link)
	{
		var href = link.href;
		
		href = href.replace(/quickshare\.cz\/.+/, "quickshare.cz/chyba");
		
		GM_xmlhttpRequest({
			method: 'GET',
			url: href.replace(Ref_anonymize_service, ""),
			headers: {
				'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
				'Accept': 'text/xml',
				'Referer': ""
			},
			onload: function(result) {
				var res = result.responseText;
				
				//TODO: errorRegexs - 
				var errorRegexs = 	[	//generic error messages follow
										/(empty directory)/i,
										/(soubor nebyl nalezen)/i,
										/((?:file|page|link|folder)(?:is|not|does|has been|was| ){1,}(?:found|available|blocked|exists?|deleted|removed))/i,
																				
										//server specific error messages follow
										/msg error" style="cursor: default">(.+?)<\/div>/, //sendspace
										/color:red;font\-weight:bold;border\-style:dashed;font-size:12px;border\-width:2px;><tr><td align=center>(.+?)<\/td>/, //fastshare
										/(Takový soubor neexistuje. Je možné, že byl již smazán.)/, //quickshare
										/file_info file_info_deleted">\s*<h1>(.+?)<\/h1>/, //filepost
										/<br \/>\s*<p style="color:#000">(.+?)<\/p>\s*<\/center>/, //letitbit
										/(?:error_div">|<\/h1><p>)<strong>(.+?)<\/strong>/, //share-rapid,quickshare
										/class="red">(.+?)<(?:span|br)>/, //czshare, megashares
										/class="wp640">\s*<h1 class="h1">(.+?)<\/h1>/, //uloz.to
										/not-found">\s*<p>(.+?)<\/p>/, //bayfiles
										/(Your file could not be found. Please check the download link.)/, //stahnu.to
										/error_msg">\s*(<h3>.+?<\/h3><ul>(.+?)<\/ul>)/, //edisk
										/id="obsah">\s*<h2>(.+?)<\/h2>/, //euroshare
										/error">\s*(?:<[bp]>)?\s*(.+?)<\/[bp]>/, //filesmonster, shragle, gigapeta
										///center aC">\s*<h1>(.+?)<br \/>/, //uploaded.to
										/icon_err">\s*<h1>(.+?)<\/h1>/, //filejungle
										/Code: ER_NFF_\d+<\/h2>\s*(.+?)\s*<\/div>/, //netload
										/(File has been removed due to Copyright Claim)/, //filerio
										
									];
				var errorIdx = errorRegexs.length;
				
				var error = "Cause of error: <b>unknown</b>";
				var errorCandidate = "";
				while(errorIdx--)
				{
					var errorCandidate = res.match(errorRegexs[errorIdx]);
					if (errorCandidate != null)
					{
						error = "Cause of error: <b>" + errorCandidate[1].replace(/&nbsp;/g," ") + "</b>";
						break;
					}
				}
				
				//link attributes 
				link.warlc_error = error;				
				
				if (mouseoverLink == link.href) //mouse cursor is still over the link
				{
					warlcTooltip.innerHTML = error;
				}
			}
		});
	}
}

//"mouseover" event handler for alive links
//displays tooltip info (file size, file name,...) on alive links 
function displayTooltipInfo()
{
	mouseoverLink = this.href;
	
	//exclude direct download filehostings
	if (this.href.match(/(?:uloziste\.com|filemonster\.net|uploadbin\.net|loombo\.com|adrive\.com|myupload\.dk|storage\.novoro\.net|ubuntuone\.com|multi-debrid\.com\/directdl|mms\.multishare\.cz\/html\/mms_process\.php|zevera\.com\/getFiles|filesmelt\.com)/))
	{
		return;
	}
	
	this.addEventListener("mouseout", hideTooltip);
	this.addEventListener("mousemove", function(event) { moveTooltip(event); });
	
	warlcTooltip.innerHTML = '<b>LOADING...</b>';
	warlcTooltip.style.minWidth = 0;
	warlcTooltip.style.visibility = "visible";
	
	if (this.warlc_tooltipcache) //file size is already known and stored in warlc_filename and warlc_filesize attributes
	{
		warlcTooltip.innerHTML = this.warlc_tooltipcache;
	}
	else
	{
		loadInfo(this);		
	}
	
	function loadInfo(link)
	{
		var href = link.href;
		
		GM_xmlhttpRequest({
			method: 'GET',
			url: href.replace(Ref_anonymize_service, ""),
			headers: {
				'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
				'Accept': 'text/xml',
				'Referer': ""
			},
			onload: function(result) {
					
				var res = result.responseText;
				
				var nameRegexs = 	[	/Filename: <b class="f_arial f_14px">(.+?)<\/b>/, //oron
										/(?:finfo|file[-_]?name)">\s*(.+?)<\/?(?:h1|a|div|span style|td)/, //hellshare, netload, badongo, 4fastfile
										/fl" title="(.+?)">/, //edisk
										/<title>\s*(?:Download)?\s*(.+?)\s*(?::: DataPort|\| Ulož|- Share\-Rapid|- WEBSITENAME|download Extabit|- download now for free|\| refile)/, //dataport, uloz.to, share-rapid, shragle, extabit, refile.net
										/<h3>Stahujete soubor: <\/h3>\s*<div class="textbox">(.+?)<\/div>/, //webshare
										/<h3><b><span style=color:black;>(.+?)<\/b><\/h3><br>/, //fastshare
										/title="download (.+?)">/, //sendspace
										/Stáhnout soubor: (.+?)<\/h1>/, //quickshare
										/fz24">Download:\s*<strong>(.+?)<\/strong>/, //crocko
										/'file\-icon\d+ \w+'>(?:<\/span><span>)?(.+?)<\/span>/, //hitfile, turbobit
										/d0FileName =  "(.+?)";/, //letitbit
										/file(?:_name|-info)" title="">\w+: <span>(.+?)<\/span>/, //vip-file, shareflare
										/recent-comments"><h2>(.+) &nbsp;/, //xdisk
										/fname" value="(.+?)">/, //syfiles, grupload, 
										/download\-header">\s*<h2>File:<\/h2>\s*<p title="(.+?)">/, //bayfiles
										/description">\s*<p><b>Soubor: (.+?)<\/b>/, //bezvadata
										/Complete name                            : (.+?)<br \/>/, //bezvadata
										/itemprop="name">(.+?)<\/span>/, //bezvadata
									];
				var nameIdx = nameRegexs.length;
				
				
				//      [sizeRegexs]
				//      /    \    \?
				//   prefix (size) postfix
				//           /   \
				//          val  quant
				
				var quantRegex = '(?:M|G|K)?i?(?:B)(?:[y|i]te?s?)?';		
				var valRegex = '\\d+(?:[\\., ]\\d+){0,2}'; 				// 111([., ]222)?([., ]333)?
								
				var uniSizeRegex = valRegex + '(?:\\s*|&nbsp;)' + quantRegex;
				
				var preSizeRegex = '(?::|\\(|>|>, | - )';
				var postSizeRegex = '(?:\\))?';
				
				var sizeRegexs = 	[	 preSizeRegex + "\\s*(" + uniSizeRegex + ")\\s*" + postSizeRegex,
										'FileSize_master">(.+?)<\/strong>', //hellshare
									];
				var sizeIdx = sizeRegexs.length;
				
				//
				//
				
				var tooltip = "File Name: <b>";
				
				var fileName = "unknown";
				var nameCandidate = "";
				while(nameIdx--)
				{
					var nameCandidate = res.match(nameRegexs[nameIdx]);
					if (nameCandidate != null)
					{
						fileName = nameCandidate[1].replace(/&nbsp;/g," ");
						break;
					}
				}
				
				tooltip += fileName + "</b><br>File Size:  <b>";
				
				var fileSize = "unknown";
				var sizeCandidate = "";
				while(sizeIdx--)
				{
					sizeCandidate = res.match(new RegExp(sizeRegexs[sizeIdx], "i"));
					if (sizeCandidate != null)
					{
						fileSize = sizeCandidate[1].replace(/&nbsp;/g," ");
						if (/^\d+$/.test(fileSize) && fileSize >= 1024)  //assume bytes
						{
							if(fileSize > (1<<30)) fileSize = Math.round(10 * fileSize / (1<<30)) / 10 + ' GB';
								else if(fileSize > (1<<20)) fileSize = Math.round(fileSize / (1<<20)) + ' MB';
									else fileSize = Math.round(fileSize / 1024) + ' KB';
						}
						break;
					}
				}
				
				tooltip += fileSize + "</b>";
				
				// PROTOTYPE 
				// video thumbnails
				if (href.match('hellshare')) 
				{
					var thumbs;
					thumbs = res.match(/http:\/\/static\d+\.helldata\.com\/thumbs(?:\/\d+){1,2}\/\d{1,2}"/g);
					
					if (thumbs)
					{
						tooltip += '<br>';
						
						var j = Math.min(thumbs.length, 9);
						for (var i = 0; i < j; i++)
						{
							tooltip += '<img src="' + thumbs[i].replace('"',"") + '" width="' + TOOLTIP_THUMBWIDTH + 'px">';
						}
						
						warlcTooltip.style.minWidth = TOOLTIP_MAXWIDTH;
					}						
				}
				
				if (href.match('czshare'))
				{
					var thumbs;
					thumbs = res.match(/src="http:\/\/www(\d+)\.czshare\.com\/images_velke\/\d+\.(\d+)\.jpeg/);
					
					if (thumbs)
					{
						var thumbsServer = thumbs[1];
						var thumbsId = thumbs[2];
						
						tooltip += '<br>';
						for (var i = 1; i < 9; i++)
						{
							tooltip += '<img src="http://www' + thumbsServer + '.czshare.com/images_velke/' + i + '.' + thumbsId + '.jpeg" width="' + TOOLTIP_THUMBWIDTH + 'px">';
						}
						
						warlcTooltip.style.minWidth = TOOLTIP_MAXWIDTH;
					}						
				}
				
				if (href.match('bezvadata'))
				{
					var thumbs;
					thumbs = res.match(/http:\/\/nahledy\.bezvadata\.cz\/nahledy\/\d+\/\d+\/\d+_\d+_\d+x\d+_\w.jpg/g);
					
					if (thumbs)
					{
						tooltip += '<br>';
						
						var j = Math.min(thumbs.length, 9);
						for (var i = 0; i < j; i++)
						{
							tooltip += '<img src="' + thumbs[i] + '" width="' + TOOLTIP_THUMBWIDTH + 'px">';
						}
						
						warlcTooltip.style.minWidth = TOOLTIP_MAXWIDTH;
					}						
				}
				
				
				link.warlc_tooltipcache = tooltip;
				
				if (mouseoverLink == link.href) //mouse cursor is still over the link
				{
					warlcTooltip.innerHTML = tooltip;
				}			
			}
		});
	}
}

	function setVariables()
	{
		if (firstRun)
		{
			GM_log('First run, applying default settings...');
			
			GM_setValue("Icon_set",1);
			GM_setValue("Display_tooltip_info",true);
			GM_setValue("Show_black_background_in_DL_links",false);
			GM_setValue("Show_line_through_in_dead_links",false);
			GM_setValue("Display_full_links_in_link_containers",false);
			GM_setValue("Allow_spaces_in_DL_links",false);
			GM_setValue("Autocheck",true);
			GM_setValue("Enable_Anonymizer",false);
			GM_setValue("Do_not_linkify_DL_links",false);
			GM_setValue("Show_progress_stats",true);
			GM_setValue("Keyboard_functions",true);
			GM_setValue("Obsolete_file_hosts",false);
			GM_setValue("Color_DL_links",true);
			GM_setValue("Live_links_color","Green");
			GM_setValue("Dead_links_color","#FF3300");
			GM_setValue("Temp_unavailable_links_color","#F7EF09");
			GM_setValue("Container_links_color","DarkKhaki");
			GM_setValue("Premium_links_color","DeepPink");
			GM_setValue("Ref_anonymize_service","http://hiderefer.com/?");
			GM_setValue("Custom_rules",false);
			GM_setValue("Custom_rules_text","");
			
			GM_setValue("First_run", false);		
		}
		
		//hidden settings
		GM_setValue("Progress_box_pos_bottom", Progress_box_pos_bottom = GM_getValue("Progress_box_pos_bottom", 20));
		GM_setValue("Progress_box_pos_right", Progress_box_pos_right = GM_getValue("Progress_box_pos_right", 10));
		GM_setValue("Progress_box_opacity", Progress_box_opacity = GM_getValue("Progress_box_opacity", 85));
		GM_setValue("Progress_box_background_color", Progress_box_background_color = GM_getValue("Progress_box_background_color", 'DimGray'));
		GM_setValue("Progress_box_item_color", Progress_box_item_color = GM_getValue("Progress_box_item_color", 'DimGray'));
		GM_setValue("Progress_box_refresh_rate", Progress_box_refresh_rate = GM_getValue("Progress_box_refresh_rate", 2000));
		GM_setValue("Debug_mode", DEBUG_MODE = GM_getValue("Debug_mode", false));
		//hidden settings end

		Icon_set = GM_getValue("Icon_set", 1); //0 - no icons, 1 - cat paws, 2 - old RSLC style, 3 - New Icons,
		Display_tooltip_info = GM_getValue("Display_tooltip_info", true);
		Show_black_background_in_DL_links = GM_getValue("Show_black_background_in_DL_links", false);
		Show_line_through_in_dead_links = GM_getValue("Show_line_through_in_dead_links", false);
		Display_full_links_in_link_containers = GM_getValue("Display_full_links_in_link_containers", false);
		Allow_spaces_in_DL_links = GM_getValue("Allow_spaces_in_DL_links", false);
		Autocheck = GM_getValue("Autocheck", true);
		Enable_Anonymizer = GM_getValue("Enable_Anonymizer", false);
		Do_not_linkify_DL_links = GM_getValue("Do_not_linkify_DL_links", false);
		Show_progress_stats = GM_getValue("Show_progress_stats", true);
		Keyboard_functions = GM_getValue("Keyboard_functions", true);
		Obsolete_file_hosts = GM_getValue("Obsolete_file_hosts", false);
		Color_DL_links = GM_getValue("Color_DL_links", true);
		Live_links_color = GM_getValue("Live_links_color", "Green");
		Dead_links_color = GM_getValue("Dead_links_color", "#FF3300");
		Temp_unavailable_links_color = GM_getValue("Temp_unavailable_links_color", "#F7EF09");
		Container_links_color = GM_getValue("Container_links_color", "DarkKhaki");
		Premium_links_color = GM_getValue("Premium_links_color", "DeepPink");
		Ref_anonymize_service = GM_getValue("Ref_anonymize_service", "http://hiderefer.com/?");
		Custom_rules = GM_getValue("Custom_rules", false);
		Custom_rules_text = GM_getValue("Custom_rules_text", false);
	}


	// Delinkifies the links
	// params:
	// links -> list of links or link components (note they should be sufficiently unique to identify the link on page,
	// e.g. 'uloz.to/xs68skxl8')
	function delinkifySnapshot(snapshot)
	{
		var n = snapshot.snapshotLength;

		while (n--)
		{
			thisLink = snapshot.snapshotItem(n);

			var spanElm = document.createElement("span");
			spanElm.className = thisLink.className;
			spanElm.innerHTML = thisLink.innerHTML;

			if (Display_tooltip_info)
			{
				spanElm.href = thisLink.href;
						
				switch (thisLink.className){
				case "alive_link": spanElm.addEventListener("mouseover", displayTooltipInfo, false); break
				case "adead_link": spanElm.addEventListener("mouseover", displayTooltipError, false); break;
				case "unava_link": //reserved
				default: 
				}
			}
			
			thisLink.parentNode.replaceChild(spanElm, thisLink);
		}
	}

	function processContainers()
	{
		var redirectorTypes = {	"HTTP_302": 0, 
								"INNER_LINK": 1, 
								"THELOO_KATT_IT": 2,
								"CING_BE": 3,
								"ADF_LY": 4};
		
		var cMultiloadTotal = 0;
		var cMultiloadProcessed = 0;

		var cMirrorcreatorComTotal = 0;
		var cMirrorcreatorComProcessed = 0;

		var hostRestrictionRegex = "";
		var multiloadComRestriction = "";
		var multiloadComRestrictionRegex;

		//
		//HANDLING REDIRECTORS START
		//

		var redirectors = new Array();
		initRedirectors();

		var redirectorsCount = redirectors.length;

		if (redirectorsCount > 0)
		{
			var allRedirectorsRegex = "";

			//linkify redirector links
			for(var redirIdx = 0; redirIdx < redirectorsCount; redirIdx++)
			{
				allRedirectorsRegex += redirectors[redirIdx].linkRegex + "|";
			}
			allRedirectorsRegex = allRedirectorsRegex.replace(/\|$/, "");
			linkify(allRedirectorsRegex);
			//
			
			//process redirector links
			for(var redirIdx = 0; redirIdx < redirectorsCount; redirIdx++)
			{
				var redirectorsSnapshot = document.evaluate(redirectors[redirIdx].xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
				redirectors[redirIdx].cTotal = redirectorsSnapshot.snapshotLength;

				cLinksTotal += redirectors[redirIdx].cTotal;
				var linkIdx = redirectors[redirIdx].cTotal;

				while(linkIdx--)
				{
					switch(redirectors[redirIdx].type)
					{
					case redirectorTypes.HTTP_302:			processRedirectorLink(redirectorsSnapshot.snapshotItem(linkIdx), redirIdx); break;
					case redirectorTypes.INNER_LINK:		processRedirectorLinkEx(redirectorsSnapshot.snapshotItem(linkIdx), redirIdx); break;
					case redirectorTypes.THELOO_KATT_IT:	processThelooKattItLink(redirectorsSnapshot.snapshotItem(linkIdx), redirIdx); break;
					case redirectorTypes.CING_BE:			processCingBeLink(redirectorsSnapshot.snapshotItem(linkIdx), redirIdx); break;
					case redirectorTypes.ADF_LY:			processAdfLyLink(redirectorsSnapshot.snapshotItem(linkIdx), redirIdx); break;
					default:
					}
				}
			}
			//
		}

		//HTTP_302
		function processRedirectorLink(link, redirectorId)
		{
			link.className = 'container_link';

			GM_xmlhttpRequest({
				method: 'HEAD',
				url: link.href,
				headers: {
					'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
					'Accept': 'text/xml',
					'Referer': ""
				},
				onload: function(result) {
					if (result.finalUrl.replace("https", "http") == link.href) // service hasn't redirected anywhere
					{
						processRedirectorLink(link, redirectorId);
					}					
					else
					{
						redirectors[redirectorId].cProcessed++;
											
						link.href = result.finalUrl;
						
						if (redirectors[redirectorId].cProcessed >= redirectors[redirectorId].cTotal)
						checkLinks('container_link');
					}					
				},
				onerror: function(result) { //probably caused by unresponsive filehosting
					redirectors[redirectorId].cProcessed++;
					
					link.className = 'unava_link';
					cLinksProcessed++;
					
					if (redirectors[redirectorId].cProcessed >= redirectors[redirectorId].cTotal)
						checkLinks('container_link');
				}
			});
		}
		
		//INNER_LINK
		function processRedirectorLinkEx(link, redirectorId)
		{
			link.className = 'container_link';
					
			GM_xmlhttpRequest({
				method: 'GET',
				url: link.href,
				headers: {
					'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
					'Accept': 'text/xml',
					'Referer': ""
				},
				onload: function(result) {
					link.href = result.responseText.match(redirectors[redirectorId].innerLinkRegex)[1];
					
					redirectors[redirectorId].cProcessed++;
					
					if (redirectors[redirectorId].cProcessed >= redirectors[redirectorId].cTotal)
						checkLinks('container_link');
				}				
			});
		}
		
		//theloo.katt.it (wrapped safelinking.net)
		function processThelooKattItLink(link, redirectorId)
		{
			link.className = 'container_link';
					
			GM_xmlhttpRequest({
				method: 'GET',
				url: link.href,
				headers: {
					'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
					'Accept': 'text/xml',
					'Referer': ""
				},
				onload: function(result) {
					link.href = result.responseText.match(redirectors[redirectorId].innerLinkRegex)[1];
					
					redirectors[redirectorId].cProcessed++;
					
					
					//the inner links are safelinking.net links, so lets proceed with it
					if (GM_getValue("Check_safelinking_dot_net_links", false))
					{
						processRedirectorLink(link, 0);
					}
				}					
			});
		}
		
		//adf.ly (adf.ly/go innerLink, locking mechanism)
		function processAdfLyLink(link, redirectorId)
		{
			link.className = 'container_link';
					
			GM_xmlhttpRequest({
				method: 'GET',
				url: link.href,
				headers: {
					'User-agent': 'Mozilla/4.0',
					'Accept': 'text/xml',
					'Referer': ""
				},
				onload: function(result) {
				
					if (result.finalUrl.match('/locked/'))
					{
						var delay = result.responseText.match(/countdown">(\d+)</)[1];
						// GM_log(result.finalUrl + 'is locked. Repeating the request in ' + delay + 's.');
						// setTimeout(function(){processAdfLyLink(link, redirectorId);}, delay * 1000);
					}
					else
					{
						// GM_log('Processing... ' + link.href);
						// GM_log('Found...' + result.responseText.match(/\/go\/(\w+\/\w+)/)[1]);
						
						var directLink = 'http://adf.ly' + result.responseText.match(/(\/go\/\w+\/\w+)/)[1];
						
						var logToken = result.responseText.match(/flashy_(\w+)/)[1];
						var users = result.responseText.match(/user=\d+&user2=\d+/);
						
						//confirm advert
						GM_xmlhttpRequest(
						{
						method: 'POST',
						url: 'http://adf.ly/l.php',
						headers: {
							'User-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20100101 Firefox/13.0',
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
							'Referer': link.href
						},
						data: users + '&lt=' + logToken,
						onload: function(result) {
							
							//retrieve final url from .../go/... link
							GM_xmlhttpRequest({
							method: 'GET',
							url: directLink,
							headers: {
								'User-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20100101 Firefox/13.0',
								'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
								'Referer': link.href
							},
							onload: function(result) {
							
								link.href = result.finalUrl;
								
								redirectors[redirectorId].cProcessed++;
							
								if (redirectors[redirectorId].cProcessed >= redirectors[redirectorId].cTotal)
									checkLinks('container_link');
							}
							});
						}					
						});						
					}
			
				}					
			});
			
			function proceedOK()
			{
			}
		}
		
		//MULTILOAD.CZ START
		if (GM_getValue("Check_multiload_dot_cz_links", false))
		{
			var mlRegex = 'multiload\\.cz\/stahnout\/\\d+\/';
			var mlXpath = "//a[contains(@href,'http://www.multiload.cz/stahnout')]";

			hostRestrictionRegex = 'Upload se nezdařil|limit exceeded|probíhá reupload|';

			if (GM_getValue("Check_hellshare_dot_com_links", false))
				hostRestrictionRegex += 'hellshare|';
			if (GM_getValue("Check_share_dash_rapid_dot_com_links", false))
				hostRestrictionRegex += 'share-rapid\\.com|';
			if (GM_getValue("Check_quickshare_dot_cz_links", false))
				hostRestrictionRegex += 'quickshare\\.cz|';
			if (GM_getValue("Check_czshare_dot_com_links", false))
				hostRestrictionRegex += 'czshare\\.com|';
			if (GM_getValue("Check_uloz_dot_to_links", false))
				hostRestrictionRegex += 'uloz\\.to|';
			if (GM_getValue("Check_hellspy_dot_com_links", false))
				hostRestrictionRegex += 'hellspy|';
			if (GM_getValue("Check_multishare_dot_cz_links", false))
				hostRestrictionRegex += 'multishare\\.cz|';

			hostRestrictionRegex = hostRestrictionRegex.replace(/\|$/, "");

			linkify(mlRegex);

			var mlSnapshot = document.evaluate(mlXpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
			var mlCount = mlSnapshot.snapshotLength;

			if (mlCount > 0)
			{
				cMultiloadTotal += mlCount;

				mlIdx = mlCount - 1;
				do
				{
					processMultiloadLink(mlSnapshot.snapshotItem(mlIdx));
				}
				while(mlIdx--)
			}
		}
		//MULTILOAD.CZ END



		function processMultiloadLink(mlLink)
		{
			GM_xmlhttpRequest({
				method: 'GET',
				url: mlLink.href,
				headers: {
					'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
					'Accept': 'text/xml',
					'Referer': ""
				},
				onload: function(result) {
					var res = result.responseText;

					var innerBlockRegex = /<p class="manager-linky">(?:.|\s)+?<\/p>/g;
					var innerLinksRegex = /(?:Upload se nezdařil \((?:chyba serveru|chybné přihlašovací údaje)\)\. <|>https?:\/\/(?:.|\s)+?<|Právě probíhá reupload, buďte trpěliví\.\.\.<)/g;
					var innerLinkRegex = /((?:Upload se nezdařil.+|https?:\/\/(?:.|\s)+|Právě probíhá reupload, buďte trpěliví\.\.\.))</; 
					var mlRestrictionRegex = new RegExp(hostRestrictionRegex,"g"); //what links should be displayed

					var blocks; // blocks of links
					var blockIdx;

					mlLink.className = '';

					if (result.status == 503) //service temporarily unavailable, repeat request in one second
					{
						setTimeout(function(){ processMultiloadLink(mlLink); }, 1000);
						return;
					}

					blocks = res.match(innerBlockRegex);

					if (blocks == null) //no links found, cancel further processing
					{
						mlLink.parentNode.appendChild(document.createTextNode(' | Požadovaný soubor neexistuje.'));
						cMultiloadProcessed++;
						if (cMultiloadTotal <= cMultiloadProcessed)
						{
							startBulkCheck('container_link');
							start('container_link');
						}
						return;
					}

					blockIdx = blocks.length;

					if (Display_full_links_in_link_containers)
					{
						var ulElm = document.createElement('ul');
						ulElm.className = 'container_list'; //CSS smaller font, padding, margin, square style

						while(blockIdx--)
						{
							if (blocks[blockIdx].match(mlRestrictionRegex) == null)
							{
								continue;
							}

							var innerLinks = blocks[blockIdx].match(innerLinksRegex);

							var linkIdx = innerLinks.length;
							while (linkIdx--)
							{
								var innerLink = innerLinks[linkIdx].match(innerLinkRegex)[1];

								var liElm = document.createElement('li');

								if (innerLink.match(/Upload se nezdařil|limit exceeded|probíhá reupload/))
								{
									liElm.appendChild(document.createTextNode(innerLink));
								}
								else
								{
									var aElm = document.createElement('a');
									aElm.innerHTML = innerLink;
									aElm.href = innerLink;
									aElm.className = 'container_link';

									liElm.appendChild(aElm);
								}

								ulElm.appendChild(liElm);
								cLinksTotal++;
							}
						}

						mlLink.parentNode.appendChild(ulElm);
					}
					else //compact view
					{
						mlLink.parentNode.appendChild(document.createTextNode("|"));

						while(blockIdx--)
						{
							if (blocks[blockIdx].match(mlRestrictionRegex) == null)
							{
								continue;
							}

							var innerLinks = blocks[blockIdx].match(innerLinksRegex);

							var linkIdx = innerLinks.length;
							while (linkIdx--)
							{
								var innerLink = innerLinks[linkIdx].match(innerLinkRegex)[1];

								if (innerLink.match(/Upload se nezdařil|limit exceeded|probíhá reupload/))
								{
									mlLink.parentNode.appendChild(document.createTextNode("----"));
								}
								else
								{
									var aElm = document.createElement('a');

									var hostName = innerLink.match(/quickshare|hellshare|uloz\.to|multishare|hellspy|share\-rapid|czshare/);

									//abbreviate host name
									switch(hostName + ""){

										case 'quickshare': aElm.innerHTML = 'QS'; break;
										case 'hellshare': aElm.innerHTML = 'HS'; break;
										case 'uloz.to': aElm.innerHTML = 'UT'; break;
										case 'multishare': aElm.innerHTML = 'MS'; break;
										case 'hellspy': aElm.innerHTML = 'hs'; break;
										case 'share-rapid': aElm.innerHTML = 'SR'; break;
										case 'czshare': aElm.innerHTML = 'CS'; break;
										default: aElm.innerHTML = 'xx';

									}

									aElm.href = innerLink;
									aElm.className = 'container_link';

									mlLink.parentNode.appendChild(aElm);
									cLinksTotal++;
								}
							}

							mlLink.parentNode.appendChild(document.createTextNode("|")); //blocks delimiter

						}
					}

					cMultiloadProcessed++;
					if (cMultiloadTotal == cMultiloadProcessed) //start check when all ml links have been processed
					{
						if (Do_not_linkify_DL_links)
						{
							delinkifySnapshot(mlSnapshot);
						}
						
						startBulkCheck('container_link');
						start('container_link');
					}
				}
			});
		}


		if (GM_getValue("Check_mirrorcreator_dot_com_links", false))
		{
			var mcRegex = 'mirrorcreator\\.com/files/(\\w+)';
			var mcXpath = "//a[contains(@href,'mirrorcreator.com/files')]";
			
			var mcShortHostNames = 
				 '?? RS MU ES DF Zs FF ?? SS ?? Ba NL LT MF MS ZS UL 2S ZI HF ST UP GF ?? UB Fr IF fs X7 UG ?? TB FS EB LB EU ?? OR ?? ?? DL EY ?? FK FH US BS WU FP PL FJ CR JF SM Ms Ff GU';
				// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56
				//??????      depositfiles sendspace  load.to     ul.to       storage.to  uploadbox   x7.to       fileserve   ??????      duckload    filehook    filepost    jumbofiles  glumbouploads
				//   zshare      ??????      2shared     uploading   ugotfile    extabit     oron        eyvx       uploadstation putlocker  
				//      megaupload  badongo     megashare   gamefront   ifile       ??????      letitbit    ??????      ??????      filejungle  megashares
				//         easy-share  ??????      netload     zippyshare     ??????      filesonic   turbobit    enterupload ??????      filekeen    wupload     crocko      fileflyer

			linkify(mcRegex);

			var mcSnapshot = document.evaluate(mcXpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
			var mcCount = mcSnapshot.snapshotLength;

			cMirrorcreatorComTotal = mcCount;

			if (mcCount > 0)
			{
				mcShortHostNames = mcShortHostNames.split(' ');
				mcIdx = mcCount;
				while(mcIdx--)
					processMirrorcreatorLink(mcSnapshot.snapshotItem(mcIdx));
			}

		}
		//MIRRORCREATOR.CZ END


		//mirrorcreator.com checking works like this:
		//The base URL is http://www.mirrorcreator.com/files/XXXXXXXX/filename_links
		//the actual list of mirrors is at http://www.mirrorcreator.com/status.php?uid=XXXXXXXX
		//the list contains links in the form of (http://www.mirrorcreator.com)/redirect/XXXXXXXX/1
		//these redirector links are extracted with mcLinkBlockRegex and the pages loaded
		//they contain the actual filehost links, which are extracted with mcHostRegex and displayed in a container list
		function processMirrorcreatorLink(mcLink)
		{
			var mcURL = mcLink.href.match(mcRegex);
			if(!mcURL || !mcURL[1]) return;
			mcURL = 'http://www.mirrorcreator.com/status.php?uid=' + mcURL[1]; //link correction
			GM_xmlhttpRequest({
				method: 'GET',
				url: mcURL,
				headers: {
					'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
					'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*'+'/*;q=0.8',
					'Referer': ""
				},
				onload: function(mcLinkResult) {
					var mcLinkRes = mcLinkResult.responseText;

					var mcLinkBlockRegex = /(\/redirect\/\w+\/(\d+))/gi;
					var mcHostRegex = /<div id="redirectlink">.*?<a href="([^"]+)"/;

					var mcRedirectors;
					var mcHostURLs = [], mcRedirectorIDs = [], mcHostsFound = 0, mcHostsRetrieved = 0, mcHostsToProcess = 0;
					
					var m = mcLinkRes.match(mcLinkBlockRegex);
					
					if (m)
						mcHostsFound = m.length;
					else
					{ //no files inside container
						processMirrorcreatorFoundHosts(mcLink, []);
						return;
					}

					var mcRedirectorURL, idx, timedOut = false;

					var gmxhrFunc = function(mcRedirectorURL){ //Tampermonkey doesn't know neither this.url or result.finalUrl
						GM_xmlhttpRequest({
							method: 'GET',
							url: mcRedirectorURL,
							headers: {
								'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
								'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*'+'/*;q=0.8',
								'Referer': ""
							},
							onload: function(mcHostResult) {
								if (timedOut) return; //too late, the list is already displayed
								var mcHostRes = mcHostResult.responseText;
								var mcHost = mcHostRes.match(mcHostRegex);
								idx = mcHostURLs.indexOf(mcRedirectorURL);
								if (mcHost && idx!=-1)
								{
									mcHostURLs[idx] = mcHost[1].replace(/^\s+|\s+$/g, '');
									mcHostsRetrieved++;
									mcHostsToProcess++;
									if (mcHostsFound == mcHostsRetrieved) //this is the last one!
									{
										processMirrorcreatorFoundHosts(mcLink, mcHostURLs, mcRedirectorIDs);
										mcHostsToProcess = 0;
									}
								}
							} //end of onload: function
						}); //end of GM_xmlhttpRequest call
					};//end of var gmxhrFunc

					while (mcRedirectors = mcLinkBlockRegex.exec(mcLinkRes))
					{  //load individual redirector pages
						mcRedirectorURL = 'http://www.mirrorcreator.com' + mcRedirectors[1];
						mcHostURLs.push(mcRedirectorURL);
						mcRedirectorIDs.push(mcRedirectors[2]);
						gmxhrFunc(mcRedirectorURL);
					} //end of while block

					setTimeout(function(){ //in case the last page fails to load and call the function
							timedOut = true;
							if (mcHostsToProcess)
								processMirrorcreatorFoundHosts(mcLink, mcHostURLs);
						}, 60000);

				} //end of onload function
			}); //end of GM_xmlhttpRequest call
		} //end of function processMirrorcreatorLink


		function processMirrorcreatorFoundHosts(mcLink, mcHostURLs, mcRedirectorIDs)
		{
			var aEl, liEl, docFrag;
			var hostName, mcRedirectorID, trimFilename = false;
			
			var i = mcHostURLs.length;
			if (i == 0)
			{
				trimFilename = true;
				mcLink.parentNode.insertBefore(document.createTextNode(' | No files inside container'), mcLink.nextSibling);
			}
			else
			{
				if (Display_full_links_in_link_containers)
				{ //full view
					var wrapperEl = document.createElement('span');
					wrapperEl.style.display = 'block';
					var ulistEl = document.createElement('ul');
					ulistEl.className = 'container_list';
					while (i--)
					{
						liEl = document.createElement('li');
						aEl = document.createElement('a');
						aEl.appendChild(document.createTextNode(mcHostURLs[i]));
						aEl.href = mcHostURLs[i];
						aEl.className = 'container_link';
						liEl.appendChild(aEl);
						ulistEl.appendChild(liEl);
					}
					wrapperEl.appendChild(ulistEl);
					mcLink.parentNode.replaceChild(wrapperEl, mcLink);
					wrapperEl.insertBefore(mcLink, wrapperEl.firstChild);
				}
				else 
				{ //compact view
					trimFilename = true;
					docFrag = document.createDocumentFragment();
					docFrag.appendChild(document.createTextNode(' |'));
					while (i--)
					{
						mcRedirectorID = mcRedirectorIDs[i];
						hostName = mcHostURLs[i];
						if (mcRedirectorID > mcShortHostNames.length-1 || mcShortHostNames[mcRedirectorID] == '??')
							hostName = hostName.replace(/https?:\/\/(?:www\.)?([-0-9a-z]+(?:\.[-0-9a-z]+)?)\.[a-z]+\/.*/i, '$1').toUpperCase();
						else
							hostName = mcShortHostNames[mcRedirectorID];
							
						aEl = document.createElement('a');
						aEl.href = mcHostURLs[i];
						aEl.className = 'container_link';
						aEl.appendChild(document.createTextNode(hostName));
						docFrag.appendChild(aEl);
						docFrag.appendChild(document.createTextNode('|'));
					}
					mcLink.parentNode.insertBefore(docFrag, mcLink.nextSibling);
				} //end of else block
			} //end of else block
			
			mcLink.className = '';
			if (trimFilename)
				mcLink.firstChild.nodeValue = mcLink.firstChild.nodeValue.replace(/(https?:\/\/[^\/]+\/files\/\w+\/).+/, '$1...');
			
			cMirrorcreatorComProcessed++;
			if (cMirrorcreatorComProcessed == cMirrorcreatorComTotal) //start check when all mc links have been processed
			{
				if (Do_not_linkify_DL_links)
					delinkifySnapshot(mcSnapshot);
				startBulkCheck('container_link');
				start('container_link');
			}
		} //end of function processMirrorcreatorFoundHosts

		containers_processed = true;


		function initRedirectors()
		{
			function addRedirector(linkRegex, xpathEx, redirType, innerLinkRegex)
			{
				var redirector = new Object();
				
				redirector.linkRegex = linkRegex;
				redirector.xpath = xpathEx; 				//xpath expression
				redirector.cProcessed = 0; 					//processed links count
				redirector.cTotal = 0; 						//total links count
				redirector.type = redirType;				//redirectorTypes enum
				redirector.innerLinkRegex = innerLinkRegex;	//innerLink, null if unused
				
				redirectors.push(redirector);
			}
			if (GM_getValue("Check_safelinking_dot_net_links", false))
			{
				addRedirector(
				'safelinking\\.net\/d\/\\w+',
				"//a[contains(@href,'safelinking.net/d/')]",
				redirectorTypes.HTTP_302,
				null);
			}
			if (GM_getValue("Check_linksafe_dot_me_links", false))
			{
				addRedirector(
				'linksafe\\.me\/d\/\\w+',
				"//a[contains(@href,'linksafe.me/d/')]",
				redirectorTypes.HTTP_302,
				null);
			}
			if (GM_getValue("Check_linkto_dot_net_links", false))
			{
				addRedirector(
				'linkto\\.net\/\\?\\w+\\.\\d+',
				"//a[contains(@href,'linkto.net/?')]",
				redirectorTypes.INNER_LINK,
				/<iframe id="iframe" name="iframe"  src="(.+?)\s*" frameborder="0"/);
			}
			if (GM_getValue("Check_theloo_dot_katt_dot_it_links", false))
			{
				addRedirector(
				'(?:the)?loo\\.katt\\.it\/\\w+',
				"//a[contains(@href,'loo.katt.it/')]",
				redirectorTypes.THELOO_KATT_IT,
				/Proceed to URL - <a href="(.+?)">/);
			}
			if (GM_getValue("Check_madlink_dot_sk_links", false))
			{
				addRedirector(
				'madlink\\.sk\/\\w+',
				"//a[contains(@href,'madlink.sk/')]",
				redirectorTypes.INNER_LINK,
				/name="url" value="(.+?)\s*"\/>/);
			}
			if (GM_getValue("Check_adf_dot_ly_links", false))
			{
				addRedirector(
				'(?:adf\\.ly|[u9]\\.bb|[qj]\\.gs)\/\\w+',
				"//a[contains(@href,'adf.ly/') or contains(@href,'u.bb/') or contains(@href,'9.bb/') or contains(@href,'q.gs/') or contains(@href,'j.gs/')]",
				redirectorTypes.ADF_LY,
				null);
			}
			if (GM_getValue("Check_redi_dot_re_links", false))
			{
				addRedirector(
				'redi\\.re\/\\w+',
				"//a[contains(@href,'redi.re/')]",
				redirectorTypes.HTTP_302,
				null);
			}
			if (GM_getValue("Check_bit_dot_ly_links", false))
			{
				addRedirector(
				'bit\\.ly\/\\w+',
				"//a[contains(@href,'bit.ly/')]",
				redirectorTypes.HTTP_302,
				null);
			}
		}

	}

	var bulkHosts = new Array();
	var bulkHostNames = new Array();
	
	function initBulkCheck()
	{
			
		/////////////////////////////
		// Inits filehost object
		/////////////////////////////
		// params :
		// hostName 		-- 	[string]		host name (multiple domains separated with coma)
		// linkRegex		-- 	[string] 		link regex 
		// xpath 			-- 	[string] 		xpath expression to detect the link objects with evaluate
		// blockSize 		-- 	[integer]		max. number of links sent in one request, 50 if null
		// corrMatch		--	[regex]			link correction regex (match), applied prior to corrRepl
		// corrReplWhat		-- 	[regex]			link correction regex (replace)
		// corrReplWith		--  [string]		
		// splitSeparator	-- 	[string]		POSTDATA links separator, "\r\n" if null
		//						
		// apiUrl			-- 	[string]		web linkchecker or API URL
		// postData 		-- 	[string]		POSTDATA of xmlhttprequest
		// resLinkRegex		--	[regex]		
		// resLiveRegex		-- 	[regex]			matches substrings containing live links in the request response
		// resDeadRegex		-- 	[regex]			matches substrings containing dead links in the request response
		// resUnavaRegex	--	[regex]			matches substrings containing unava links in the request response
		// func				-- 	[function]		bulkcheck handler, genBulkCheck if null
		//
		//////////////////////////////
		function addHost(hostName, linkRegex, xpath, blockSize, corrMatch, corrReplWhat, corrReplWith, splitSeparator, 
							apiUrl, postData, resLinkRegex, resLiveRegex, resDeadRegex, resUnavaRegex, func)
		{
			var fileHost = new Object();

			fileHost.linkRegex = linkRegex;
			fileHost.linkRegexObject = new RegExp(linkRegex, "");
			fileHost.xpath = xpath;
			fileHost.cFound = 0; //found links counter
			fileHost.links = new Array(); //found links
			
			if (blockSize == null) 
			{ 
				fileHost.blockSize = 50;  
			}
			else
			{
				fileHost.blockSize = blockSize;
			}
			
			fileHost.corrMatch = corrMatch; 
			fileHost.corrReplWhat = corrReplWhat; 
			fileHost.corrReplWith = corrReplWith;
			
			if (splitSeparator == null) 
			{
				fileHost.splitSeparator = "\r\n"; 
			}
			else
			{
				fileHost.splitSeparator = splitSeparator;
			}
			
			fileHost.apiUrl = apiUrl;
			fileHost.postData = postData;
			fileHost.resLinkRegex = resLinkRegex;
			fileHost.resLiveRegex = resLiveRegex;
			fileHost.resDeadRegex = resDeadRegex;
			fileHost.resUnavaRegex = resUnavaRegex;
			
			if (func == null)
			{
				fileHost.func = genBulkCheck;
			}
			else
			{
				fileHost.func = func;
			}
			
			bulkHosts.push(fileHost);
			
			var names = hostName.split(',');
			var i = names.length;
			while(i--)
			{
				bulkHostNames[names[i]] = fileHost;			
			}
			
		}
		
		var genType1 = [				
							"migahost.com",		"rodfile.com",		"downloadani.me",
							"rarefile.net",				
							"filesabc.com",		"sharebeast.com",
							"180upload.com",	"verzend.be",
							"movreel.com",
							"4up.me",			
							"file4safe.com",	"filemac.com",		"4upfiles.com",
							"idup.in",			"novafile.com",		"longfiles.com",
							"bitupload.com",    
							"uploadbaz.com"     
						];
						
		var genType2 = [	"queenshare.com", 	
							"hulkload.com",
							"amonshare.com",	"edoc.com",
								
												
							 		
							      
						];
		
		//xfilesharing 1.0
		function addGenericType1()
		{
			var i = genType1.length;
			
			while(i--)
			{
				if (GM_getValue("Check_" + genType1[i].replace(/\./g, "_dot_").replace(/-/g, "_dash_") + "_links", false))
				{
					var regexSafe = genType1[i].replace(/\./g, "\\.").replace(/-/g, "\\-");
					
					addHost(
						genType1[i].match(/[\w-]+/)[0], //hostname
						regexSafe + "\/\\w+", //linkregex
						"//a[contains(@href,'" + genType1[i] + "/')]", //xpath
						null, //blocksize
						new RegExp("(http:\/\/(?:|www\\.)" + regexSafe + "\/\\w+)",""),//, //corrmatch
						null, //corrreplwhat
						null, //corrreplwith
						null, //separator
						"http://" + genType1[i] + "/checkfiles.html", //api url
						"op=checkfiles&process=Check+URLs&list=", //postdata
						new RegExp("(" + regexSafe + "\/\\w+)",""), //linkregex
						new RegExp("green'>http:\/\/(?:|www\.)" + regexSafe + "\/\\w+","g"), //liveregex
						new RegExp("red'>http:\/\/(?:|www\.)" + regexSafe + "\/\\w+","g"), //deadregex
						new RegExp("orange'>http:\/\/(?:|www\.)" + regexSafe + "\/\\w+","g"), //unavaregex
						null //function delegate
					)
				}
			}
		}
		
		//xfilesharing 2.0
		function addGenericType2()
		{
			var i = genType2.length;
			
			while(i--)
			{
				if (GM_getValue("Check_" + genType2[i].replace(/\./g, "_dot_").replace(/-/g, "_dash_") + "_links", false))
				{
					var regexSafe = genType2[i].replace(/\./g, "\\.").replace(/-/g, "\\-");
					
					addHost(
						genType2[i].match(/[\w-]+/)[0], //hostname
						regexSafe + "\/\\w+", //linkregex
						"//a[contains(@href,'" + genType2[i] + "/')]", //xpath
						null, //blocksize
						new RegExp("(http:\/\/(?:|www\\.)" + regexSafe + "\/\\w+)",""),//, //corrmatch
						null, //corrreplwhat
						null, //corrreplwith
						null, //separator
						"http://www." + genType2[i] + "/?op=checkfiles", //api url
						"op=checkfiles&process=Check+URLs&list=", //postdata
						new RegExp("(" + regexSafe + "\/\\w+)",""), //linkregex
						new RegExp(regexSafe + "\/\\w+.*?<\/td>\\s*<td style=\"color:green;\">","g"), //liveregex
						new RegExp(regexSafe + "\/\\w+.*?<\/td>\\s*<td style=\"color:red;\">","g"), //deadregex
						new RegExp(regexSafe + "\/\\w+.*?<\/td>\\s*<td style=\"color:orange;\">","g"), //unavaregex
						null //function delegate
					)
				}
			}
		}				
		
		// TEMPLATE
		// if (GM_getValue("Check__dot_com_links", false))
		// {			
			// addHost(
				// "", //hostname
				// "", //linkregex
				// "//a[contains(@href,'.com/')]", //xpath
				// null, //blocksize
				// null, //corrmatch
				// null, //corrreplwhat
				// null, //corrreplwith
				// null, //separator
				// "", //api url
				// "", //postdata
				// /()/, //linkregex
				// //liveregex
				// //deadregex
				// //unavaregex
				// null //function delegate
			// )			
		// }	
		
		
		addGenericType1();
		addGenericType2();
		

		if (GM_getValue("Check_myvdrive_dot_com_links", false))
		{	
			addHost(
				"myvdrive,fileserving", //hostname
				"(?:fileserving|myvdrive)\\.com\/files\/[\\w-]+", //linkregex
				"//a[contains(@href,'fileserving.com/files') or contains(@href,'myvdrive.com/files')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				"http://www.myvdrive.com/Public/linkchecker#", //api url
				"links=", //postdata
				/(?:fileserving|myvdrive)\.com\/(files\/\w+)/, //linkregex
				/icon_file_check_valid"><\/span>\s*http:\/\/www\.(?:fileserving|myvdrive)\.com\/files\/[\w-]+/g, //liveregex
				/icon_file_check_(?:removed|notvalid)"><\/span>\s*http:\/\/www\.(?:fileserving|myvdrive)\.com\/files\/[\w-]+/g, //deadregex
				null, //unavaregex
				null //function delegate
			)				
		}
		if (GM_getValue("Check_hackerbox_dot_org_links", false))
		{	
			addHost(
				"hackerbox", //hostname
				"host\\.hackerbox\\.org\/\\w+", //linkregex
				"//a[contains(@href,'host.hackerbox.org/')]", //xpath
				null, //blocksize
				/(http:\/\/host\.hackerbox\.org\/\w+)/, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				"http://host.hackerbox.org/checkfiles.html", //api url
				"op=checkfiles&process=Check+URLs&list=", //postdata
				/(host\.hackerbox\.org\/\w+)/, //linkregex
				/green'>http:\/\/host\.hackerbox\.org\/\w+/g, //liveregex
				/red'>http:\/\/host\.hackerbox\.org\/\w+/g, //deadregex
				/orange'>http:\/\/host\.hackerbox\.org\/\w+/g, //unavaregex
				null //function delegate
			)				
		}
		if (GM_getValue("Check_hellshare_dot_com_links", false))
		{			
			addHost(
				"hellshare", //hostname
				"(?:|download\\.(?:cz\\.|en\\.|sk\\.|)|www\\.)hellshare\\.(?:com|sk|cz|pl|hu|COM|SK|CZ|PL|HU)\/[\\w-\\.]+\/(?:[\\w-\\.]+\/|)\\d{5,}", //linkregex
				"//a[contains(@href,'hellshare.')]", //xpath
				48, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				null, //api url
				null, //postdata
				null, //linkregex
				null, //liveregex
				null, //deadregex
				null, //unavaregex
				hellshareBulkCheck //function delegate
			)				
		}	
		if (GM_getValue("Check_ncrypt_dot_in_links", false))
		{			
			addHost(
				"ncrypt", //hostname
				"ncrypt\\.in\/folder\\-\\w+", //linkregex
				"//a[contains(@href,'ncrypt.in/folder')]", //xpath
				100000, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				null,
				null,
				null,
				null,
				null,
				null,
				ncryptBulkCheck //function delegate
			)			
		}
    if (GM_getValue("Check_geupload_dot_com_links", false))
		{
			addHost(
				"geupload,lenfile", //hostname
				"(?:geupload\\.com|lenfile\\.com)\/\\w+", //linkregex
				"//a[contains(@href,'geupload.com/') or contains(@href,'lenfile.com/')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				'http://geupload.com/?op=checkfiles',
				'op=checkfiles&process=Check+URLs&list=',
				/>http:\/\/(?:geupload|lenfile)\.com\/(\w+)/,
				/>http:\/\/(?:geupload|lenfile)\.com\/\w+(?:[^>]+>)<td style=\"color\:green/g,
				/>http:\/\/(?:geupload|lenfile)\.com\/\w+(?:[^>]+>)<td style=\"color\:red/g,
				null,
				null
			)
		}
    if (GM_getValue("Check_uploadrocket_dot_net_links", false))
		{
			addHost(
				"uploadrocket", //hostname
				"(?:uploadrocket\\.net)\/\\w+", //linkregex
				"//a[contains(@href,'uploadrocket.net/')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				'http://uploadrocket.net/?op=checkfiles',
				'op=checkfiles&process=Check+URLs&list=',
				/uploadrocket.net\/(\w+)/,
				/>http:\/\/uploadrocket.net\/\w+(?:[^>]+>)<td style="color:green/g,
				/>http:\/\/uploadrocket.net\/\w+(?:[^>]+>)<td style="color:red/g,
				null,
				null //function delegate
			)
		}
		if (GM_getValue("Check_filepost_dot_com_links", false))
		{			
			addHost(
				"filepost,fp", //hostname
				"(?:filepost\\.com\/files|fp\\.io)\/\\w+", //linkregex
				"//a[contains(@href,'filepost.com/files/') or contains(@href,'fp.io/')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				'http://filepost.com/files/checker/?JsHttpRequest=0-xml',
				'urls=',
				/\\\/files\\\/(\w+)/,
				/>http:\\\/\\\/filepost\.com\\\/files\\\/\w+(?:[^>]+>){5}(?:\\n|\\t)+<span class=\\"v\\"/g,
				/>http:\\\/\\\/filepost\.com\\\/files\\\/\w+(?:[^>]+>){5}(?:\\n|\\t)+<span class=\\"x\\"/g,
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_filesflash_dot_com_links", false))
		{			
			addHost(
				"filesflash", //hostname
				"filesflash\\.com\/\\w+", //linkregex
				"//a[contains(@href,'filesflash.com')]", //xpath
				null, //blocksize
				null, //corrmatch
				/http:\/\//, //corrreplwhat
				'', //corrreplwith
				null, //separator
				'http://filesflash.com/checklinks.php',
				'submit=Go&links=',
				/filesflash\.com\/(\w+)/,
				/<td>filesflash\.com\/\w+<\/td>\s*<td>Available/g,
				/<td>filesflash\.com\/\w+<\/td>\s*<td>(?:Invalid|Deleted|Expired|Banned)?<\/td>/g,
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_jumbofiles_dot_com_links", false))
		{	
			addHost(
				"jumbofiles", //hostname
				"jumbofiles\\.com\/\\w+", //linkregex
				"//a[contains(@href,'jumbofiles.com/')]", //xpath
				null, //blocksize
				/(http:\/\/(?:|www\.)jumbofiles\.com\/\w+)/, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				"http://jumbofiles.com/checkfiles.html", //api url
				"op=checkfiles&process=Check+URLs&list=", //postdata
				/(jumbofiles\.com\/\w+)/, //linkregex
				/blue'>http:\/\/(?:|www\.)jumbofiles\.com\/\w+/g, //liveregex
				/red'>http:\/\/(?:|www\.)jumbofiles\.com\/\w+/g, //deadregex
				/orange'>http:\/\/(?:|www\.)jumbofiles\.com\/\w+/g, //unavaregex
				null //function delegate
			)				
		}
		if (GM_getValue("Check_edisk_dot_cz_links", false))
		{			
			addHost(
				"edisk", //hostname
				"(?:(?:muj|data)\\d*\\.|)edisk\\.(?:cz|sk|eu)\/(?:|(?:cz|sk|en|pl)\/)", //linkregex
				"//a[contains(@href,'edisk.')]", //xpath
				null, //blocksize
				null, //corrmatch
				/edisk\.\w{2}\/(?:|\w{2}\/)stahni/, //corrreplwhat
				'edisk.cz/stahni', //corrreplwith
				null, //separator
				'http://www.edisk.cz/zkontrolovat-odkazy',
				'submitBtn=Zkontrolovat&checkFiles=',
				/((?:download|stahn(?:i|out-soubor))\/\d+)/,
				/"ano"\/>\s*<\/td>\s*<td>\s*http:\/\/.+/g,
				/"ne"\/>\s*<\/td>\s*<td>\s*http:\/\/.+/g,
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_bezvadata_dot_cz_links", false))
		{			
			GM_xmlhttpRequest( //age check skip
			{
				method: 'POST',
				url: 'http://bezvadata.cz/vyhledavani/souhlas-zavadny-obsah',
				headers: {
					'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
					'Content-type': 'application/x-www-form-urlencoded',
					'Referer': ""						
				}
			});
			
			addHost(
				"bezvadata", //hostname
				"(?:beta\\.|)bezvadata\.cz\/stahnout\/\\d+\\w+", //linkregex
				"//a[contains(@href,'bezvadata.cz')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				'http://bezvadata.cz/nastroje/kontrola-odkazu?do=kontrolaOdkazuForm-submit',
				'zkontrolovat=Zkontrolovat&odkazy=',
				/(bezvadata\.cz\/stahnout\/\d+)/,
				/bezvadata\.cz\/stahnout\/.+?<\/td>\s*<td style="background-color: #d9ffb2/g,
				/bezvadata\.cz\/stahnout\/.+?<\/td>\s*<td style="background-color: #ffb2b2/g,
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_linkcrypt_dot_ws_links", false))
		{			
			addHost(
				"linkcrypt", //hostname
				"linkcrypt\\.ws\/dir\/\\w+", //linkregex
				"//a[contains(@href,'linkcrypt.ws/dir')]", //xpath
				100000, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				null,
				null,
				null,
				null,
				null,
				null,
				linkcryptBulkCheck //function delegate
			)			
		}
		if (GM_getValue("Check_linksave_dot_in_links", false))
		{			
			addHost(
				"linksave", //hostname
				"linksave\\.in\/\\w+", //linkregex
				"//a[contains(@href,'linksave.in')]", //xpath
				100000, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				null,
				null,
				null,
				null,
				null,
				null,
				linksaveBulkCheck //function delegate
			)			
		}
		if (GM_getValue("Check_videobb_dot_com_links", false))
		{			
			addHost(
				"videobb", //hostname
				"videobb\\.com\/(?:video\/|watch_video\\.php\\?v=)\\w+", //linkregex
				"//a[contains(@href,'videobb.com')]", //xpath
				null, //blocksize
				null, //corrmatch
				/watch_video\.php\?v=/, //corrreplwhat
				'video/', //corrreplwith
				null, //separator
				'http://www.videobb.com/link_checker.php',
				'links=',
				/videobb\.com\/video\/(\w+)/,
				/<td>http:\/\/(?:www\.|)videobb.com\/video\/\w+<\/td>\s+<td>.+?<\/td>\s+<td>\d+:\d+<\/td>\s+<td>Available/g,
				/<td>http:\/\/(?:www\.|)videobb.com\/video\/\w+<\/td>\s+<td><\/td>\s+<td>N\/A<\/td>\s+<td>Not Available/g,
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_cramit_dot_in_links", false))
		{			
			addHost(
				"cramit,cramitin", //hostname
				"cramit(?:\\.in|in\\.net)\/", //linkregex
				"//a[contains(@href,'cramitin.net') or contains(@href,'cramit.in')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				'http://cramit.in/checkfiles.html',
				'op=checkfiles&process=CHECK+URL%27S&list=',
				/(cramit(?:\.in|in\.net)\/\w+)/,
				/green>http:\/\/(?:www\.|)cramit(?:\.in|in\.net)\/\w+/g,
				/red'>http:\/\/(?:www\.|)cramit(?:\.in|in\.net)\/\w+/g,
				/orange'>http:\/\/(?:www\.|)cramit(?:\.in|in\.net)\/\w+/g,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_turbobit_dot_net_links", false))
		{			
			addHost(
				"turbobit", //hostname
				"turbobit\\.(?:net|pl)\/(?:\\w+\/|).+?\\.html", //linkregex
				"//a[contains(@href,'turbobit.')]", //xpath
				null, //blocksize
				/(turbobit\.(?:net|pl)\/(?:\w+\/|).+?\.html)/, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				'http://turbobit.net/linkchecker/csv',
				'links_to_check=',
				/(turbobit\.(?:net|pl)\/\w+)/,
				/turbobit\.(?:net|pl)\/.*?, 1/g,
				/turbobit\.(?:net|pl)\/.*?, 0/g, 
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_filerio_dot_com_links", false))
		{			
			addHost(
				"filekeen,filerio", //hostname
				//"file(?:keen|rio)\\.(?:com|in)\/\\w+\/.", //linkregex
				"file(?:keen|rio)\\.(?:com|in)\/\\w+", //linkregex
				"//a[contains(@href,'filekeen.com') or contains(@href,'filerio.')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				'http://filerio.in/checkfiles.html',
				'op=checkfiles&process=Check+URLs&list=',
				/(file(?:keen|rio)\.(?:com|in)\/\w+)/,
				/green'>http:\/\/(?:www\.|)file(?:keen|rio)\.(?:com|in)\/\w+/g,
				/red'>http:\/\/(?:www\.|)file(?:keen|rio)\.(?:com|in)\/\w+/g,
				/orange'>http:\/\/(?:www\.|)file(?:keen|rio)\.(?:com|in)\/\w+/g,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_share_dash_online_dot_biz_links", false))
		{			
			addHost(
				"share-online,egoshare", //hostname
				"(?:share-online\\.biz|egoshare\\.com)\/(?:dl\/|download\\.php\\?id=)", //linkregex
				"//a[contains(@href,'share-online.biz') or contains(@href,'egoshare.com')]", //xpath
				null, //blocksize
				/http:\/\/(?:www\.)?(?:share-online\.biz|egoshare\.com)\/d(?:l\/|ownload\.php\?id=)(\w+)/, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				'http://api.share-online.biz/linkcheck.php',
				'links=',
				/(\w+);(?:OK|NOTFOUND|DELETED)/,
				/\w+;OK/g,
				/\w+;(?:NOTFOUND|DELETED)/g, 
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_quickshare_dot_cz_links", false))
		{			
			addHost(
				"quickshare", //hostname
				"quickshare\\.cz\/stahnout-soubor\/\\d+", //linkregex
				"//a[contains(@href,'quickshare.cz')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				'http://www.quickshare.cz/nastroje/link-checker',
				'linky=',
				/quickshare\.cz\/stahnout-soubor\/(\d+(?::\w+)?)/,
				/quickshare\.cz\/stahnout-soubor\/\d+(?::[\w\-.+$!*\/()\[\]\',~%?:@#&=\\]+)?\s*<\/a><\/td><td><img src="\/img\/ok\.gif/g,
				/quickshare\.cz\/stahnout-soubor\/\d+(?::[\w\-.+$!*\/()\[\]\',~%?:@#&=\\]+)?\s*<\/td><td><img src="\/img\/nenalezeno\.gif/g, 
				null,
				null //function delegate
			)			
		}
		if (GM_getValue("Check_netload_dot_in_links", false))
		{			
			addHost(
				"netload", //hostname
				"netload\\.in\/datei\\w{10}", //linkregex
				"//a[contains(@href,'netload.in')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				"http://api.netload.in/index.php?id=2", //api url
				"send=Absenden&links=", //postdata
				/(\w+);/, //linkregex
				/\w{10,};.+?;.+?;online/g, //liveregex
				/\w{10,};.+?;.+?;offline/g, //deadregex
				null, //unavaregex
				//netloadBulkCheck //function delegate //disabled on probation since 1.2.4.5
				null //function delegate
			)			
		}
		if (GM_getValue("Check_oboom_dot_com_links", false))
		{
			addHost(
				"oboom", //hostname
				"oboom\\.com\/#?\\w{8}", //linkregex
				"//a[contains(@href,'oboom.com/')]", //xpath
				null, //blocksize
				/oboom\.com\/#?(\w{8})/, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				null,
				null,
				null,
				null, //liveregex
				null, //deadregex
				null,
				oboomBulk //function delegate
			)
		}
  
if (GM_getValue("Check_mega_dot_co_dot_nz_links", false))
        {
           addHost(
               "mega",
               "mega(?:\\.co)?\\.nz\/#!\\w+",
               "//a[contains(@href,'mega.co.nz/') or contains(@href,'mega.nz/')]",
               100000, //blocksize
               null, //corrmatch
               null, //corrreplwhat
               null, //corrreplwith
               null, //separator
               null,
               null,
               null,
               null,
               null,
               null,
               megaBulkCheck //function delegate
            )    
        }  

		//the same as GenType2, except api url is 'https://' instead of 'http://www.' and corrmatch is not??? needed

		if (GM_getValue("Check_extabit_dot_com_links", false))
		{			
			addHost(
				"extabit", //hostname
				"extabit\\.com\/file\/\\w+", //linkregex
				"//a[contains(@href,'extabit.com')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				"http://extabit.com/linkchecker.jsp", //api url
				"url=", //postdata
				/extabit\.com\/(file\/\w+)/, //linkregex
				/extabit\.com\/file\/\w+\/[^<]+<\/a><\/td>\s*<td class="status"><span class="status_green">/g, //liveregex
				/extabit\.com\/file\/\w+\/[^<]+<\/a><\/td>\s*<td class="status"><span class="status_red">/g, //deadregex
				/extabit\.com\/file\/\w+\/[^<]+<\/a><\/td>\s*<td class="status"><span class="status_yellow">/g, //unavaregex
				extabitBulkCheck //function delegate
			)			
		}				
		if (GM_getValue("Check_junocloud_dot_me_links", false))
		{			
			addHost(
				"junocloud", //hostname
				"junocloud\\.me\/\\w+", //linkregex
				"//a[contains(@href,'junocloud.me')]", //xpath
				null, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				"\n", //separator
				"http://junocloud.me/checkfiles.html", //api url
				"op=checkfiles&process=Check+URLs&list=", //postdata
				/(junocloud\.me\/\w+)/, //linkregex
				/<a href="http:\/\/junocloud\.me\/\w+[^<]+<\/a>\s*<span style="color: green/g, //liveregex
				/<a href="http:\/\/junocloud\.me\/\w+[^<]+<\/a>\s*<span style="color: red/g, //deadregex
				null, //unavaregex
				null //function delegate
			)			
		}				
		if (GM_getValue("Check_webshare_dot_cz_links", false))
		{
			addHost(
				"webshare", //hostname
				"webshare\.cz\/(?:(?:#/)?file/\\w+|\\w+-.*)", //linkregex
				"//a[contains(@href,'webshare.cz')]", //xpath
				100000, //blocksize
				null, //corrmatch
				null, //corrreplwhat
				null, //corrreplwith
				null, //separator
				null, //api url
				null, //postdata
				null, //linkregex
				null, //liveregex
				null, //deadregex
				null, //unavaregex
				webshareBulkCheck //function delegate
			)			
		}
		
		/////////////////////////////
		// Common function delegate to send links to get checked by host linkchecker
		/////////////////////////////
		// If you define a new delegate, you may use following properties
		// this.links 			[array] array of strings (link blocks). The links in each block separated with host.splitSeparator.
		// this.apiUrl			[string] API or web linkchecker URL
		// this.postData		[string] POSTDATA for POST request
		// this.resLiveRegex 	[regex] matches live substrings in the request response
		// this.resDeadRegex 	[regex] matches dead substrings in the request response
		// this.resUnavaRegex 	[regex] matches unava substrings in the request response (the regex is often null!)
		// 
		// this.resLinkRegex 	[regex] matches links further passed to DisplayTheCheckedLinks
		//
		// See the code below for standard bulkcheck handling reference.
		//////////////////////////////
		function genBulkCheck()
		{
			var blockIdx = this.links.length;
			
			while (blockIdx--)
			{
				postRequest(this.apiUrl, this.postData, this.links[blockIdx], 
					this.resLinkRegex, this.resLiveRegex, this.resDeadRegex, this.resUnavaRegex);
				
			}
			function postRequest(api, postData, links, linkRegex, liveRegex, deadRegex, unavaRegex)
			{
				GM_xmlhttpRequest(
				{
					method: 'POST',
					url: api,
					headers: {
						'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
						'Content-type': 'application/x-www-form-urlencoded',
						'Referer': api,
						'X-Requested-With': 'XMLHttpRequest'						
					},
					data: postData + encodeURIComponent(links),
					onload: function (result)
					{
						var res = result.responseText;
						
						// GM_log(res);
						
						var i;

						var livelinks = res.match(liveRegex);
						var deadlinks = res.match(deadRegex);						
						
						// GM_log(livelinks);
						// GM_log(deadlinks);
						
						if (livelinks != null)
						{
							i = livelinks.length - 1;
							do
							{
								livelinks[i] = livelinks[i].match(linkRegex)[1];
							}
							while (i--);
							DisplayTheCheckedLinks(livelinks, 'alive_link');
						}

						if (deadlinks != null)
						{
							i = deadlinks.length - 1;
							do
							{
								deadlinks[i] = deadlinks[i].match(linkRegex)[1];
							}
							while (i--);
							DisplayTheCheckedLinks(deadlinks, 'adead_link');
						}

						if (unavaRegex != null)
						{
							var unavalinks = res.match(unavaRegex);
							if (unavalinks)
							{
								i = unavalinks.length - 1;
								do
								{
									unavalinks[i] = unavalinks[i].match(linkRegex)[1];
								}
								while (i--);
								DisplayTheCheckedLinks(unavalinks, 'unava_link');
							}
						}
					}
				});
				
			}
		}
		
		//specialized bulkchecking handlers follow
		function webshareBulkCheck()
		{
			var arr = this.links[0].split("\r\n");
			var i = arr.length;
			
			while(i--)
			{	
				postRequest(arr[i]);				
			}
			
			//function postRequest(api, postData, links, linkRegex, liveRegex, deadRegex, unavaRegex)
			function postRequest(wsLink)
			{
				var id = wsLink.match(/webshare\.cz\/(?:(?:#\/)?file\/)?(\w+)/)[1];
				
				GM_xmlhttpRequest(
				{
					method: 'POST',
					url: "http://webshare.cz/api/file_info/",
					headers: {
						'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
						'Content-type': 'application/x-www-form-urlencoded',
						'Referer': "",
					},
					data: "wst=&ident=" + id,
					onload: function (result)
					{
						var res = result.responseText;
						
						if (res.match(/<name>.+?<\/name>/))
						{
							DisplayTheCheckedLinks([id], 'alive_link');
						}
						else
						{
							DisplayTheCheckedLinks([id], 'adead_link');
						}
					}
				});
				
			}
		}
		//like genBulkCheck, but extabit linkchecker only works when logged in. If not logged in, non-bulk checking has to be used.
		//extabit also doesn't like requests in fast succession, so some delays are added.
		function extabitBulkCheck()
		{
			var timeoutDelay = 0;
			
			var blockIdx = this.links.length;
			while (blockIdx--)
			{
				postRequest(this.apiUrl, this.postData, this.links[blockIdx], 
					this.resLinkRegex, this.resLiveRegex, this.resDeadRegex, this.resUnavaRegex);
				
			}
			
			function postRequest(api, postData, links, linkRegex, liveRegex, deadRegex, unavaRegex)
			{
				GM_xmlhttpRequest(
				{
					method: 'POST',
					url: api,
					headers: {
						'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
						'Content-type': 'application/x-www-form-urlencoded',
						'Referer': api,
						'X-Requested-With': 'XMLHttpRequest'
					},
					data: postData + encodeURIComponent(links),
					onload: function (result)
					{
						var res = result.responseText;
						
						if (/id="registration_header"/.test(res))  //not logged in, have to use non-bulk
						{
							function geturlfunc(link, tryID) //basically the geturl function with some changes (compacted, displaythecheckedlinkS, multiple tries)
							{
								//GM_log(tryID + ': ' + link);
								GM_xmlhttpRequest(
								{
									method: 'GET',
									url: link,
									headers: {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','Accept-Charset': 'windows-1250,utf-8;q=0.7,*;q=0.7','Referer': ""},
									onload: function(result2)
									{
										var res2 = result2.responseText;
										var res2Status = result.status;
										if (/download-file-btn/.test(res2)) {DisplayTheCheckedLinks([link], 'alive_link'); return;}
										if (/Search mirrors|id="mirrb"/.test(res2) || res2Status==404) {DisplayTheCheckedLinks([link], 'adead_link'); return;}
										if (/currently unavailable|temporarily unavailable|disponible en estos momentos|vorläufig unerreichbar|Файл временно недоступен/.test(res2) || res2Status == 500 || res2Status == 503)
										{
											if (tryID < 7)
												setTimeout(function(){geturlfunc(link,tryID+1)}, tryID * 1000 + (Math.random() * tryID * 2000));
											else
												{DisplayTheCheckedLinks([link], 'unava_link'); return;}
										}
									}
								});
							}
							
							//split the hrefs and check them one by one
							GM_log('Using slow extabit.com link checking. Log in to extabit to use fast bulk checking.');
							links = links.split('\n');
							var i = links.length;
							while (i--)
							{
								if (links[i])
								{
									(function(i){setTimeout(function(){geturlfunc(links[i],1)}, timeoutDelay);})(i);
									timeoutDelay += 500;
								}
							}
							
							return;
						}
						
																
						var i;

						var livelinks = res.match(liveRegex);
						var deadlinks = res.match(deadRegex);						
						
						if (livelinks != null)
						{
							i = livelinks.length - 1;
							do
							{
								livelinks[i] = livelinks[i].match(linkRegex)[1];
							}
							while (i--);
							DisplayTheCheckedLinks(livelinks, 'alive_link');
						}

						if (deadlinks != null)
						{
							i = deadlinks.length - 1;
							do
							{
								deadlinks[i] = deadlinks[i].match(linkRegex)[1];
							}
							while (i--);
							DisplayTheCheckedLinks(deadlinks, 'adead_link');
						}

						if (unavaRegex != null)
						{
							var unavalinks = res.match(unavaRegex);
							if (unavalinks)
							{
								i = unavalinks.length - 1;
								do
								{
									unavalinks[i] = unavalinks[i].match(linkRegex)[1];
								}
								while (i--);
								DisplayTheCheckedLinks(unavalinks, 'unava_link');
							}
						}
					}
				});
				
			}
		}
		function netloadBulkCheck()
		{
			var blockIdx = this.links.length;

			while (blockIdx--)
			{
				postRequest(this.apiUrl, this.postData, this.links[blockIdx], 
					this.resLinkRegex, this.resLiveRegex, this.resDeadRegex, this.unavaRegex);			
				
			}
			
			function postRequest(api, postData, links, linkRegex, liveRegex, deadRegex, unavaRegex)
			{
				GM_xmlhttpRequest(
				{
					method: 'POST',
					url: api,
					headers: {
						'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
						'Content-type': 'application/x-www-form-urlencoded',
						'Referer': ""						
					},
					data: postData + encodeURIComponent(links),
					onload: function (result)
					{
						var res = result.responseText;
						
						var i;

						var livelinks = res.match(liveRegex);
						var deadlinks = res.match(deadRegex);
						
						if (livelinks != null)
						{
							i = livelinks.length - 1;
							do
							{
								recheckLink(livelinks[i].match(linkRegex)[1]);
							}
							while(i--);
						}

						if (deadlinks != null)
						{
							i = deadlinks.length - 1;
							do
							{
								deadlinks[i] = deadlinks[i].match(linkRegex)[1];
							}
							while (i--);
							DisplayTheCheckedLinks(deadlinks, 'adead_link');
						}
					}
				});				
			}
			function recheckLink(link)
			{
				var link = link;
				
				GM_xmlhttpRequest(
				{
					method: 'GET',
					url: 'http://netload.in/datei' + link + '.htm',
					headers: {
						'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
						'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
						'Accept-Charset': 'windows-1250,utf-8;q=0.7,*;q=0.7',
						'Referer': ""
					},
					onload: function (result)
					{
						var res = result.responseText;

						if (res.match(/dl_first_file_download">|download_limit\.gif/))
						{
							DisplayTheCheckedLinks([link], 'alive_link');
							return;
						}

						if (res.match(/achtung\.jpg"/))
						{
							DisplayTheCheckedLinks([link], 'adead_link');
						}
					},
					onerror: function ()
					{
						displayTheCheckedLink(link, 'unava_link');
					}
				});
			}
		}

        function megaBulkCheck()
        {
            var arr = this.links[0].split("\r\n");
            var i = arr.length;
            var seqno = Math.floor(Math.random()*1000000000);
         
            while(i--)
            {
            postRequest(arr[i]);        
            }
         
		function postRequest(megaLink)
        {  
					  megaLink=megaLink.replace('mega.nz/','mega.co.nz/');
            var id = megaLink.match(/mega\.co\.nz\/#!(\w+)(?:!\w+)?/)[1];
       
                    GM_xmlhttpRequest(
                    {
                            method: "POST",
                            url: 'https://g.api.mega.co.nz/cs?id=' + seqno++,
                            data: '[{"a":"g","p":"' + id + '","ssl": "1"}]',
                            headers: {
                            'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
                            'Content-Type': 'application/xml',
                            'Referer': "https://mega.co.nz/"
                    },
                    onload: function (result)
                    {
                            var res = $.parseJSON(result.responseText.match(/\[(.+?)\]/)[1]);
               
                            if ((typeof res == "number" && (res == -9 || res == -16 || res == -6)) || res.d) 
                            { 

                                    DisplayTheCheckedLinks([id], 'adead_link');
                            } 
                            if (res.at) 
                            {
                            
                                    DisplayTheCheckedLinks([id], 'alive_link');
                            } 
                            if (res.e == "ETEMPUNAVAIL")
                            {
                           
                                    DisplayTheCheckedLinks([id], 'unava_link'); 
							}
						}
					});
			}       

		}  

function oboomBulk() {
			var a = [], b = [], c = [];
			var array = this.links;

			GM_xmlhttpRequest({
				method: 'GET',
				url: 'https://www.oboom.com/1/guestsession',
				headers: {
					'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
					'Content-type': 'application/x-www-form-urlencoded',
					'Referer': 'https://www.oboom.com',
					'X-Requested-With': 'XMLHttpRequest'						
				},
				onload: function(result) {
					var blockIdx = array.length;
					var token = JSON.parse(result.responseText)[1];
					while (blockIdx--) {
						startCheck(array[blockIdx].split('\r\n'), token);
					}
				}
			});

			function startCheck(links, token) {
				GM_xmlhttpRequest({
						method: 'POST',
						url: "https://api.oboom.com/1/info",
						headers: {
							'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
							'Content-type': 'application/x-www-form-urlencoded',
							'Referer': 'https://www.oboom.com/',
							'X-Requested-With': 'XMLHttpRequest'						
						},
						data: "token=" + token + "&items=" + links.join(","),
						onload: function(result) {
							var res = JSON.parse(result.responseText)[1];
							var i = res.length, s;

							while (i--) {
								s = res[i].state;
								if (s == 'online') a.push(res[i].id);
								else if (s == 'blocked' || s == 'abused' || s == 'lost' || s == 'not_found' || s == 'not_available'|| s == 'download_error' || s == 'offline' || s == 'expired' ) b.push(res[i].id);
								else c.push(res[i].id);
							}

							if (a.length > 0) DisplayTheCheckedLinks(a, 'alive_link');
							if (b.length > 0) DisplayTheCheckedLinks(b, 'adead_link');
							if (c.length > 0) DisplayTheCheckedLinks(c, 'unava_link');
						}
					});
			}
		}
		function linksaveBulkCheck()
		{
			var arr = this.links[0].split("\r\n");
			var i = arr.length;
			
			while(i--)
			{	
				postRequest(arr[i]);				
			}
			
			function postRequest(lsLink)
			{
				GM_xmlhttpRequest(
					{
						method: "GET",
						url: lsLink + '-t.jpg',
						headers: {
							'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
							'Accept': 'text/xml',
							'Referer': ""
						},
						onload: function (result)
						{
							var imgLen = result.responseHeaders.match(/Content-Length: (\d+)/)[1];
							
							if (imgLen == 965) //online
							{
								DisplayTheCheckedLinks([lsLink], 'alive_link');
							}

							if (imgLen == 972) //offline
							{
								DisplayTheCheckedLinks([lsLink], 'adead_link');
							}
							
							if (imgLen == 978) //unava
							{
								DisplayTheCheckedLinks([lsLink], 'unava_link');
							}
						}
					});
			}       

		}   
		function linkcryptBulkCheck()
		{
			var arr = this.links[0].split("\r\n");
			var i = arr.length;
			
			while(i--)
			{	
				postRequest(arr[i]);				
			}
			
			function postRequest(lcLink)
			{
				GM_xmlhttpRequest(
				{
					method: "GET",
					url: 'http://linkcrypt.ws/api.html?api=status_V1&folderKey=' + lcLink.match(/dir\/(\w+)/)[1],
					headers: {
						'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
						'Accept': 'text/xml',
						'Referer': ""
					},
					onload: function (result)
					{
						var res = result.responseText;
						
						if (res.match(/<errorCode>1101|folderStatus>[23]/)) //Offline status
						{
							DisplayTheCheckedLinks([lcLink], 'adead_link');
							return;
						}
						
						if (res.match(/folderStatus>1/)) //Online status
						{
							DisplayTheCheckedLinks([lcLink], 'alive_link');
						}
						else
						{
							DisplayTheCheckedLinks([lcLink], 'unava_link');
						}
					}
				});
			}
		}

		function megashareBulkCheck()
		{
			var arr = this.links[0].split("\r\n");
			var i = arr.length;
			
			while(i--)
			{	
				postRequest(arr[i]);				
			}
			
			function postRequest(msLink)
			{
				GM_xmlhttpRequest(
				{
					method: "GET",
					url: msLink,
					headers: {
						'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
						'Content-Type': 'application/x-www-form-urlencoded',
						'Referer': ""
					},
					onload: function (result)
					{
						var prZVal = result.responseText.match(/name="(\d+prZVal)" value="(\d+)">/);
						var btn3Name = result.responseText.match(/src="images\/dwn-btn3\.gif" name="(.+?)"/);
						
						if ((prZVal == null) || (btn3Name == null))
						{
							return;
						}						
						
						GM_xmlhttpRequest(
						{
							method: "POST",
							url: msLink,
							headers: {
								'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
								'Content-Type': 'application/x-www-form-urlencoded',
								'Referer': ""
							},
							data: prZVal[1] + "=" + prZVal[2] + '&' + btn3Name[1] + '.x=1&' + btn3Name[1] + '.y=1',
							onload: function (result)
							{
								var res = result.responseText;							
							
								if (res.match(/<div id="err">/))
								{
									DisplayTheCheckedLinks([msLink.match(/\.com(\/\d+)/)[1]], 'adead_link');
								}
								else
								{
									DisplayTheCheckedLinks([msLink.match(/\.com(\/\d+)/)[1]], 'alive_link');
								}
							}
						});
					}
				});
			}
		}
		function ncryptBulkCheck()
		{
			var arr = this.links[0].split("\r\n");
			var i = arr.length;
			
			while(i--)
			{	
				postRequest(arr[i]);				
			}
			
			function postRequest(ncryptLink)
			{		
				GM_xmlhttpRequest(
				{
					method: "POST",
					url: 'http://ncrypt.in/api_status.php',
					headers: {
						'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
						'Content-Type': 'application/x-www-form-urlencoded',
						'Referer': ""
					},
					data: 'link=' + encodeURI(ncryptLink),
					onload: function (result)
					{
						var foldStatus = result.responseText.match(/(?:offline|online);/);
												
						switch(foldStatus + ""){
						case "offline;": 	DisplayTheCheckedLinks([ncryptLink], 'adead_link'); break;
						case "online;": 	DisplayTheCheckedLinks([ncryptLink], 'alive_link'); break;
						default: 			DisplayTheCheckedLinks([ncryptLink], 'unava_link');
						}
					}
				});
			}
		}
		function hellshareBulkCheck()
		{
			var links = this.links;
			
			GM_xmlhttpRequest(
			{
				method: "GET",
				url: 'http://www.hellshare.com',
				headers: {
					'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
					'Accept': 'text/xml',
					'Referer': ""
				},
				onload: function (result)
				{
					var domain = result.responseText.match(/param_rau = "www\.hellshare\.(\w+)"/)[1];

					var loc = 'check=Zkontrolovat+dostupnost+soubor%C5%AF&links=';
					if (domain == 'sk')
						loc = 'check=Skontrolova%C5%A5&links=';
					if (domain == 'com')
						loc = 'check=Check+availability&links=';
					if (domain == 'hu')
						loc = 'check=Kontrol%C3%A1lj&links=';
					if (domain == 'pl')
						loc = 'check=Sprawd%C5%BC+dost%C4%99pno%C5%9B%C4%87+plik%C3%B3w&links=';

						
					genBulkCheck.call({ 	links:			links,
											apiUrl: 		'http://www.hellshare.' + domain + '/linkchecker?do=linkChecker-linkcheckerform-submit', 
											postData: 		loc, 
											resLinkRegex:	/hellshare\.(?:cz|com|sk|hu|pl)\/(?:[\w-\.]+\/|)([\w-\.]+\/\d{5,})/, 
											resLiveRegex:	/OK" style="width:21px;height:20px;margin-right:10px;" \/><a href="http:\/\/download\.hellshare\.(?:cz|com|sk|hu|pl)\/(?:[\w-\.]+\/|)[\w-\.]+\/\d{5,}/g, 
											resDeadRegex:	/<span style="color:gray">.*?<\/span> - <strong>/g, 
											resUnavaRegex: 	null
							});
				}
			});
		}
				
		
		/**
		 * Displays check result
		 * @param {Array} Array of links or link fragments.
		 * @param {String} Check result status -> ['alive_link'|'adead_link'|'unava_link']
		 */
		function DisplayTheCheckedLinks(links, resultStatus)
		{
			//(a[href*=link_1], a[href*=link_2], ..., a[href*=link_n])
			var $links = $('a[href*="' + links.join('"], a[href*="') + '"]');
			
			if (Do_not_linkify_DL_links)
			{	//TODO into separate jQuery function
				$links.replaceWith(function(){
					return '<span href="' + this.href + '">' + $(this).text() + '</span>';
				});
				
				$links = $('span[href*="' + links.join('"], span[href*="') + '"]');
			}
			
			$links.removeClass().addClass(resultStatus);
			$links.each(function() {
				this.href = Ref_anonymize_service + $(this).attr("href");
			});
			
			switch(resultStatus)
			{
				case "alive_link": 	cLinksAlive += $links.length; 
									if (Display_tooltip_info) $links.mouseover(displayTooltipInfo);
									break;
				case "adead_link": 	cLinksDead += $links.length; 
									if (Display_tooltip_info) $links.mouseover(displayTooltipError);
									break;
				case "unava_link": 	cLinksUnava += $links.length; break;
				default: 
			}		
			
			cLinksProcessed += $links.length;
		}
	}
	
	// starts bulkchecking
	//
	// params
	// filterId 	[string] restricts link detection with passed id attribute
	function startBulkCheck(filterId)
	{
		var cHosts = bulkHosts.length;
		
		if (cHosts == 0) //no filehostings selected
			return;		
		
		// STEP 1 linkify the links
		var linkifyRegex = '';
		var hostIdx = cHosts;
		while(hostIdx--)
		{
			linkifyRegex += bulkHosts[hostIdx].linkRegex + "|";
		}
		linkifyRegex = linkifyRegex.replace(/\|$/, '');
		linkify(linkifyRegex);
		//		
		
		//STEP 2 detect link objects
		var xpathAll = '';
		
		var hostIdx = cHosts;
		while(hostIdx--)
		{
			xpathAll += bulkHosts[hostIdx].xpath + "|";
		}	
		
		xpathAll = xpathAll.replace(/\]\|\/\/a\[/g, " or ");
		xpathAll = xpathAll.replace(/\]\|/, ')]');
				
		if (filterId != null) //insert id restriction in the xpath
		{
			xpathAll = xpathAll.replace(/\[/, "[@class='" + filterId + "' and (");
		}			
		else
		{
			xpathAll = xpathAll.replace(/\[/, "[((not(@class)) or (@class!='alive_link' and @class!='adead_link' and @class!='unava_link')) and (");
		}
		
		var links = document.evaluate(xpathAll, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		
		if (filterId == null)
		{
			cLinksTotal += links.snapshotLength;
		}		
		//
		
		//STEP 3 bind links with hostings 
		var linkIdx = links.snapshotLength;
		var href = null;
		
		if (linkIdx == 0) // no links found
			return;
		
		var name;
		while (linkIdx--)
		{
			href = links.snapshotItem(linkIdx).href; 
			
			try // DO NOT REMOVE, filters crap that went through xpath detection
			{
				name = gimmeHostName(href);
				if (href.match(bulkHostNames[name].linkRegexObject) != null)
					bulkHostNames[name].links.push(href);
			}
			catch(e)
			{

			}
		}
		//
		
		
		//STEP 4 process the links for each filehosting
		var hostIdx = cHosts;
		var host;
		var m,n;
		var arr;
				
		while (hostIdx--)
		{
			host = bulkHosts[hostIdx];
			arr = host.links;
			
			if (arr.length == 0) //no links for this hosting, skip
			{
				continue;
			}
			
			//links match corrections
			if (host.corrMatch != null)
			{
				var idx = arr.length;
				while (idx--)
				{
					arr[idx] = arr[idx].match(host.corrMatch)[1];					
				}
			}
			
			//links replace corrections
			if ((host.corrReplWhat != null) && (host.corrReplWith != null))
			{
				var idx = arr.length;
				while (idx--)
				{
					arr[idx] = arr[idx].replace(host.corrReplWhat, host.corrReplWith);
				}
			}			
			
			m = arr.length;
			n = host.blockSize;
			if (m > n)
			{
				//insert block separators (RAND_STRING) into the array
				for(var i = n; i < m; i += n + 1)
				{
					arr.splice(i, 0, RAND_STRING);
				}
			}	

			
			host.func.call({ 	links:			arr.join(host.splitSeparator).split(RAND_STRING),
								apiUrl: 		host.apiUrl, 
								postData: 		host.postData, 
								resLinkRegex:	host.resLinkRegex, 
								resLiveRegex:	host.resLiveRegex, 
								resDeadRegex:	host.resDeadRegex, 
								resUnavaRegex: 	host.resUnavaRegex
							});		
			
			
			//clean up
			arr.length = 0;							
		}		
		//	

    function gimmeHostName(link)
		{
			return link.replace(/https?:\/\/.*?http(s)?:\/\//, "http$1://").match(/https?:\/\/(?:www\.|[\w\.])*?([\w-]+)\.(?:co\.uk|co\.nz|\w+)\//)[1];
		}
		
	}
	
	
	function checkLinks(filterId)
	{
		startBulkCheck(filterId);
		start(filterId);
	}

	/**
	 * Initialises progress box including event binding and CSS 
	 */
	function initProgressBox()
	{
		if ($("#warlc-progressbox").length > 0)
			return;
		
		//progressbox css change size and color of progress box
		GM_addStyle("#warlc-progressbox  {position:fixed; background:DimGray;" + Progress_box_background_color +
					"; opacity:" + (Progress_box_opacity / 100) + 
					"; bottom:" + Progress_box_pos_bottom +
					"px; right:" + Progress_box_pos_right +
					"px; padding:5px; font-size:20px; font-weight:bold; cursor:default;}\
					\
					.warlc-progressbar {text-align:center; color: DimGray; height:2px; margin-bottom:2px;}\
					\
					.warlc-progressitem {}\
					\
					.alive {color:#00FF7F; " + Live_links_color + 
					"; background:transparent url(" + alive_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;} .dead {color:" + Dead_links_color +
					"; background:transparent url(" + adead_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;} .unava {color: " + Temp_unavailable_links_color + 
					"; background:transparent url(" + unava_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;} .processing {color:Black; " + Container_links_color +
					"; background:transparent url(" + processing_link_gif + ") no-repeat scroll 100% 50%;padding-right:15px;} .prem {color:" + Premium_links_color +
					"; background:transparent url(" + prem_link_png + ") no-repeat scroll 100% 50%;padding-right:15px;}"
					);
		//
				
		$('body').append('	<div id="warlc-progressbox">\
							<div class="warlc-progressbar"></div>\
							<span class="warlc-progressitem alive"></span> - \
							<span class="warlc-progressitem dead"></span> - \
							<span class="warlc-progressitem unava"></span> - \
							<span class="warlc-progressitem prem"></span> - \
							<span class="warlc-progressitem processing"></span>\
							</div>');	
		
		$('#warlc-progressbox').hide().click(function(){
												clearInterval(intervalId); 
												$(this).hide(); 
												return false;
											});
		
		$(".warlc-progressbar").progressbar({complete: function(){
												$(this).fadeOut();
												clearInterval(intervalId); //stop refreshing the stats
												} 
											})
								.one('progressbarchange', function(){$('#warlc-progressbox').show();});
		
	}
	
	/**
	 * Updates progress data in progress box
	 */
	function updateProgress()
	{
		$("#warlc-progressbox").attr('aria-valuenow', Math.round(((100 / cLinksTotal) * cLinksProcessed)));
		if (cLinksTotal) // some links were detected on page
		{
			var percProgress = Math.round(((100 / cLinksTotal) * cLinksProcessed));
			var $progressItems = $('#warlc-progressbox > .warlc-progressitem');
			
			$(".warlc-progressbar").progressbar('option', 'value', percProgress);
				
						if ((cLinksTotal - cLinksProcessed) == 0)
			{
				$progressItems.first().text(cLinksAlive)
							.next().text(cLinksDead)
							.next().text(cLinksUnava)
							.next().text(cLinksprem)
							.next().remove();
				$('#warlc-progressbox').html($('#warlc-progressbox').html().substr(0,$('#warlc-progressbox').html().lastIndexOf(">")+1));
				$('#warlc-progressbox div:first-child').remove();
			}
			else
			{
				$progressItems.first().text(cLinksAlive)
							.next().text(cLinksDead)
							.next().text(cLinksUnava)
							.next().text(cLinksprem)
							.next().text(cLinksTotal - cLinksProcessed);
			}			
		}	
	}
	
	

	function check_all_links()
	{
		add_WARLC_style();

		if (Show_progress_stats)
		{
			initProgressBox();			
			intervalId = setInterval(function(){updateProgress();}, Progress_box_refresh_rate);
		}

		startBulkCheck(null);
		start(null);

		if (!containers_processed)
		{
			processContainers();
		}
		
	}

	//Copies all found dead links to clipboard - right now for Scriptish only
	function copy_dead_to_clipboard()
	{
		initClipBoardTools();

		var deadlinksxpath = "//.[@class='adead_link']";

		var foundlinks = document.evaluate(deadlinksxpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		var foundlinkstext = '';

		var foundlinkIdx = foundlinks.snapshotLength;

		while(foundlinkIdx--)
		{
			if (foundlinks.snapshotItem(foundlinkIdx).innerHTML != ' x')
				foundlinkstext += foundlinks.snapshotItem(foundlinkIdx).innerHTML.replace(/\[\/hide:\w+\]/,"") + '\n';
		}

		unsafeWindow.copyToClipboard(foundlinkstext);
	}

	function toggle_autocheck()
	{
		var currentState = GM_getValue("Autocheck", false);
		GM_setValue("Autocheck", !currentState);

		if (currentState == true)
		{
			sendMessage('Autocheck disabled', 'red');
		}
		else
		{
			sendMessage('Autocheck enabled', 'SpringGreen');
		}
	}
	
	function toggle_Enable_Anonymizer()
	{
		var currentState = GM_getValue("Enable_Anonymizer", false);
		GM_setValue("Enable_Anonymizer", !currentState);

		if (currentState == true)
		{
			GM_setValue("Ref_anonymize_service", "");
			sendMessage('Anonymizer Disabled', 'red');
		}
		else
		{
			GM_setValue("Ref_anonymize_service", "http://hiderefer.com/?");
			sendMessage('Anonymizer Enabled', 'SpringGreen');
		}
	}	

	function KeyDownHandler(event)
	{
		var kcode = (event.keyCode) ? event.keyCode : event.which;
		if (event.ctrlKey && event.altKey)
		{
			switch(kcode)
			{
				case 65 : check_all_links(); break;
				case 67 : configuration(); break;
				case 68 : copy_dead_to_clipboard(); break;
				case 87 : toggle_autocheck(); break;
				case 90 : toggle_Enable_Anonymizer(); break;
			}
		}
	}

	//
	//
	//   SCRIPT EXECUTION START POINT
	//
	//
	
	// Safari specific GM_getResourceText override
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
	{
		GM_getResourceText = function(res) {
			var $cssText = GM_getValue("jquery_css", "");
			
			if ($cssText == "")
			{
				GM_xmlhttpRequest(
				{
					method: 'GET',
					url: 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css',
					onload: function (result)
					{
						GM_setValue("jquery_css", result.responseText);
						window.location.reload();
					}
				});
			}
			else
			{
				return $cssText;
			}	
		}
	}
	
	var jQueryUICSS = GM_getResourceText("jQueryUICSS");
	GM_addStyle(jQueryUICSS);
	
	//init the stuff
	setVariables();
	initBulkCheck();
	
	//init info boxes
	messageBox.style.position = 'fixed';
	messageBox.style.top = '20px';
	messageBox.style.left = '10px';
	messageBox.style.opacity = '0.85';
	messageBox.style.background = 'DimGray';
	messageBox.style.fontSize = '36px';
	document.body.appendChild(messageBox);

	//register GM menu commands & keyboard shortcut event handler
	if (Keyboard_functions)
	{
		$(document).keydown(KeyDownHandler);
		GM_registerMenuCommand("[W.A.R. Links Checker] Configuration  (" + first_key_keycodename + "+" + second_key_keycodename + "+" + String.fromCharCode(CONFIGURATION_KEYCODE) + ")", configuration);
		GM_registerMenuCommand("[W.A.R. Links Checker] Check The Links In This Page (" + first_key_keycodename + "+" + second_key_keycodename + "+" + String.fromCharCode(CHECK_ALL_LINKS_KEYCODE) + ")", check_all_links);
	}
	else
	{
		GM_registerMenuCommand("[W.A.R. Links Checker] Configuration", configuration);
		GM_registerMenuCommand("[W.A.R. Links Checker] Check The Links In This Page", check_all_links);
	}

	//start linkchecking
	if (Autocheck)
	{
		$(document).ready(check_all_links);
	}

	//
	//
	//   SCRIPT EXECUTION END POINT
	//
	//

	//shows configuration box
	function configuration()
	{

		//prevent multiple creating of config window
		if ($("#hideshow").length)
		{
			$("#hideshow").show();
			return;
		}

		var configcss = '\
		.popup_block .popup fieldset{\
		   padding: 1%;\
		   border-style: solid;\
		   border-width: 1px;\
		   border-color: gray;\
		   margin-bottom: 1px;\
		}\
		#h3hideshowtitle{\
		 font-size: 2em;\
		}\
		#h3hideshow{\
		 font-size: 1.5em;\
		}\
		#imghideshow {\
		 border: none;\
		}\
		#plusimage{\
			display:inline;\
			}\
		#hideshow {\
		 position: fixed;\
		 width: 100%;\
		 height: 100%;\
		 top: 0;\
		 left: 0;\
		 font-size:12px;\
		 z-index:2147483645;\
		 text-align:left;\
		}\
		#fade {\
		 background: #000;\
		 position: fixed;\
		 width: 100%;\
		 height: 100%;\
		 opacity: .80;\
		 -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";\
		 left: 0;\
		 z-index: 10;\
		}\
		.popup_block {\
		 font-family:verdana;\
		 color:black;\
		 background: #ddd;\
		 padding: 10px 20px;\
		 border: 2px solid DarkOrange;\
		 float: left;\
		 width: 700px;\
		 position: absolute;\
		 top: 7%;\
		 left: 50%;\
		 bottom: 7%;\
		 margin: 0 0 0 -350px;\
		 -moz-border-radius:10px;\
		 z-index: 100;\
		\
		}\
		.popup_block .popup {\
		 float: left;\
		 width: 100%;\
		 background: #fff;\
		 margin: 10px 0;\
		 padding: 0px 0 0px;\
		 border-left: 1px solid #bbb;\
		 border-top: 1px solid #bbb;\
		 border-right: 1px solid #bbb;\
		}\
		#h3hideshow{\
		 margin: 1px 0 0px;\
		 padding: 1px 10px;\
		 border-bottom: 1px solid #bbb;\
		 font-size: 1.5em;\
		 font-weight: normal;\
		 cursor:pointer;\
		 background:#DDDDDD none repeat scroll 0 0;\
		}\
		#h3hideshow:hover{\
		background:#C0BEBE none repeat scroll 0 0;\
		}\
		#h3hideshowtitle{\
		 margin: 2px 0 0px;\
		 padding: 7px 10px;\
		 border-bottom: 1px solid #bbb;\
		 font-size: 1.5em;\
		 font-weight: normal;\
		}\
		.popup_block .popup a {\
		 color:DarkSkyBlue;\
		 text-decoration:none;\
		}\
		.popup p {\
		 padding: 1px 10px;\
		 margin: 0px 0;\
		 -x-system-font:none;\
		 font-family:verdana,geneva,lucida,"lucida grande",arial,helvetica,sans-serif;\
		 font-size:10pt;\
		 font-size-adjust:none;\
		 font-stretch:normal;\
		 font-style:normal;\
		 font-variant:normal;\
		 font-weight:normal;\
		 line-height:normal;\
		}\
		#sites {\
		 padding: 1px 10px;\
		 margin: 0px 0;display:inline-block;width:16em;\
		}\
		#dev_ver {\
		 color: #00FF00;\
		 background: Black;\
		 text-align: right;\
		}\
		#sites_suspended {\
		 padding: 1px 10px;\
		 margin: 0px 0;display:inline-block;width:16em;\
		 text-decoration: line-through;\
		}\
		.popup img.cntrl {\
		 position: absolute;\
		 right: -15px;\
		 top: -15px;\
		}\
		#bulk {\
			font-size:8pt;\
			color:orange;\
			padding: 1px 10px;\
			margin: 0px 0;\
			display:inline-block;\
			width:100px;\
		}\
		#note {\
			font-size:7pt;\
			color:gray;\
			padding: 1px 10px;\
			margin: 0px 0;display:inline-block;\
			min-width:100px;\
		}\
		#rednote {\
			font-size:7pt;\
			color:red;\
			padding: 1px 10px;\
			margin: 0px 0;display:inline-block;\
		}\
		#configinfo {\
			font-size:8pt;\
			color:gray;\
			padding: 1px 10px;\
			margin: 0px 0;display:inline-block;width:60em;\
		}\
		#refAnonymizer, #inputColorLive, #inputColorprem, #hostSearchBox2, #hostSearchBox, #inputColorDead, #inputColorTemp, #inputColorCont, #selectAllButton, #selectNoneButton, #invertButton, #selectAllButton2, #selectNoneButton2, #invertButton2 {\
			color:black;\
			border-style: solid;\
			border-width: 1px;\
			border-color: gray;\
		}\
		#h3hideshowcontent {\
		min-height:220px;\
		max-height:220px;\
overflow:auto;\
		 display: none;\
		 padding: 10px 10px;\
		}\
		#specinfo{\
		font-size:14px;\
		}\
		.warlc-ui-tab {\
		height:300px;\
		overflow:auto;\
		}\
		#warlcsitelist2, #warlcsitelist1 {\
		height:220px;\
		border-top: 1px solid #ddd;\
		padding-top: 5px;\
		overflow:auto;\
		}\
		input:hover+label {\
		background:#F1F77C;\
		font-size:110%;\
		}\
		';

		GM_addStyle(configcss);

		var customRulesRefHTML = 
		'\
		<br>\
		A custom rule consists of <b>commands</b>. A command must be on its own line and in this form:<br>\
		<b>@keyword</b> <i>parameter</i>\
		<br><br>\
		Empty lines, lines containing only whitespace and lines starting with // are ignored. Whitespace before and after a keyword is also ignored. Keywords are not case sensitive. \
		<br><br>\
		A special type of keyword is <b>@customrule</b> and its forms. This command marks the start of a new rule definition and also the rule type.\
		Its <i>parameter</i> is the name of the rule. The name can contain letters, digits, periods, dashes and underscores and can be up to 30 characters long.\
		At this point, there are no other restrictions for rule naming, however, in future versions, the name can be used to identify and catalogize custom rules.\
		Therefore it is strongly recommended to use host names like <i>example.com</i> or <i>filehost.co.uk</i>. If the name is invalid, previous rule is saved,\
		but all commands until the next valid @customrule are ignored.<br><br>\
		Available forms and types:\
		<ul>\
		<li><b>@customrule</b> <i>name</i> - Classic checking. To determine whether a link is alive or dead, it is loaded and searched for specific patterns.\
		<li><b>@customrule_headers</b> <i>name</i> - Only headers are loaded. Use for direct download hosts (e.g. if you are a paying member), where classic checking would silently download the whole file.\
		<li><b>@customrule_obsolete</b> <i>name</i> - Nothing is loaded and no search patterns are needed. Links matching this rule are immediately deemed dead.\
		<li><b>@#customrule</b>\, <b>@#customrule_headers</b>\, <b>@#customrule_obsolete</b> - write # after @ to quickly disable the whole rule. It is still parsed and checked for errors, but not used.\
		</ul>\
		Other available commands:<br>\
		(Note: There can be more than 1 (up to 10) of these commands per rule. In that case, any of them will work.)\
		<ul>\
		<li><b>@baseurl</b> <i>url_pattern</i> - required. Used to find links for the rule. <i>url_pattern</i> must be the constant part of the url before, including and after the first slash.\
			It can also specify multiple (up to 10) Top Level Domains (.com, .net etc.)<br>\
			<ul>examples:<br>\
			<li>good: <i>filehost.com/download/</i><br>\
			<li>good: <i>download.filehost.net/?d=</i><br>\
			<li>good: <i>filehost. com net co.uk /</i> - multiple TLDs (note the spaces before, between and after TLDs)<br>\
			<li>ok: <i>filehost.com/</i> - works, but will also find links like filehost.com/login etc. Sometimes it\'s unavoidable though.<br>\
			<li>bad: <i>d8523.filehost.com/</i> - d8523 probably is not constant<br>\
			<li>bad: <i>filehost.com/3bfiq5d1</i> - 3bfiq5d1 probably is not constant<br>\
			<li>bad: <i>filehost.com</i> - no slash<br>\
			</ul>\
		\
		<li><b>@alivematch</b> <i>pattern</i> - ignored for type OBSOLETE, required for others. If <i>pattern</i> is found in the server\'s response, the link is deemed alive.\
			Two or more spaces in the pattern will match any whitespace (spaces, tabulators, newlines). <i>&lt;div&gt;&nbsp;&nbsp;&lt;p&gt;</i> will match \
			&lt;div&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt; even if there are new lines, tabulators etc.\
		<li><b>@deadmatch</b> <i>pattern</i> - ignored for OBSOLETE, required for others. (For HEADERS some servers return 404 Error \
			which is automatically used to deem the link dead and therefore <i>pattern</i> is never used. In that case, just write some rubbish there.)\
			Two spaces again match any whitespace.\
		<li><b>@unavamatch</b> <i>pattern</i> - optional, ignored for OBSOLETE and HEADERS. If found, the link is deemed temporarily unavailable.\
			Two spaces again match any whitespace.\
		<li><b>@alivelink</b> <i>url</i> - optional, ignored for OBSOLETE. It\'s not really a part of the rule, it\'s just an example link to test the rule. \
		<li><b>@deadlink</b> <i>url</i> - optional. Example dead link.\
		</ul>\
		\
		';

		//close image and css taken from = http://www.sohtanaka.com/web-design/examples/css-popup    icon_close.png;
		var configurationinnerHTML = 
		'<div id="fade"></div>\
		<div class="popup_block">\
			<div class="popup">\
				<a href="#"><img id="imghideshow" title="Close" class="cntrl" src="data:image/png;base64,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%3D%3D"/></a>\
			<div id="h3hideshowtitle"><img style="height:1.2em;" src="data:image/png;base64,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"></img>&nbsp;W.A.R. Links Checker Customized Premium Link version Configuration</div>\
			<div id="warlc-conf-tabs">\
				<ul>\
					<li><a href="#tabs-1">Filehostings</a></li>\
					<li><a href="#tabs-2">Containers</a></li>\
					<li><a href="#tabs-5">Custom rules</a></li>\
					<li><a href="#tabs-3">Settings</a></li>\
					<li><a href="#tabs-4">About</a></li>\
				</ul>\
				<div id="tabs-1" class="warlc-ui-tab">\
					<div class="warlc-ui-buttonset">\
						<input type="button" class="warlc-ui-select-all" value="Select All">\
						<input type="button" class="warlc-ui-select-none" value="Select None">\
						<input type="button" class="warlc-ui-select-invert" value="Invert">\
					</div><br>\
					<div>Search: <input type="textbox" id="hostSearchBox" value=""></div><br>\
					<div id="warlcsitelist1"><span>Empty</span></div>\
				</div>\
				<div id="tabs-2" class="warlc-ui-tab">\
					<div class="warlc-ui-buttonset">\
						<input type="button" class="warlc-ui-select-all" value="Select All">\
						<input type="button" class="warlc-ui-select-none" value="Select None">\
						<input type="button" class="warlc-ui-select-invert" value="Invert">\
					</div><br>\
					<div>Search: <input type="textbox" id="hostSearchBox2" value=""></div><br>\
					<div id="warlcsitelist2"><span>Empty</span></div>\
				</div>\
				<div id="tabs-5" class="warlc-ui-tab">\
					<div class="warlcsettings">\
					<fieldset><input type="checkbox" id="Custom_rules"> Enable custom rules <div id="bulk">EXPERIMENTAL</div></fieldset>\
					<br>\
					<div>Edit custom rules: \
						<a href="#" id="showCustomRulesReference">(<b>Click here to show/hide the reference</b>)</a>\
						<div id="customRulesReference" style="display:none;">'
							+ customRulesRefHTML + '\
						</div>\
						<textarea style="width:100%;height:200px;" id="Custom_rules_text"></textarea>\
						</div>\
					</div>\
				</div>\
				<div id="tabs-3" class="warlc-ui-tab">\
					<div class="warlcsettings">\
					<fieldset>\
					<p><input type="checkbox" id="Keyboard_functions"> Enable keyboard shortcuts</p>\
					<div id="configinfo">' + first_key_keycodename + '+' + second_key_keycodename + '+' + CONFIGURATION_KEY + ' = Configuration <br/>' + first_key_keycodename + '+' + second_key_keycodename + '+' + CHECK_ALL_LINKS_KEY + ' = Check all the links' + '<br/>' + first_key_keycodename + '+' + second_key_keycodename + '+' + copy_to_dead_key + ' = Copy found dead links to clipboard' + '<br/>' + first_key_keycodename + '+' + second_key_keycodename + '+' + toggle_autocheck_key + ' = Autocheck ON/OFF' + '<br/>' + first_key_keycodename + '+' + second_key_keycodename + '+' +  toggle_Enable_Anonymizer_key + ' = Anonymizer ON/OFF' + '</div>\
					</fieldset>\
					<fieldset>\
					<p><input type="checkbox" id="Color_DL_links"> Color DL links</p>\
					<div id="sites"><label for="inputColorLive">Live links color</label><input type="text" id="inputColorLive" style="background:' + Live_links_color + ';" value="' + Live_links_color + '"></div>\
					<div id="sites"><label for="inputColorDead">Dead links color</label><input type="text" id="inputColorDead" style="background:' + Dead_links_color + ';" value="' + Dead_links_color + '"></div><br>\
					<div id="sites"><label for="inputColorTemp">Temp. unavailable</label><input type="text" id="inputColorTemp" style="background:' + Temp_unavailable_links_color + ';" value="' + Temp_unavailable_links_color + '"></div>\
					<div id="sites"><label for="inputColorCont">Container links color</label><input type="text" id="inputColorCont" style="background:' + Container_links_color + ';" value="' + Container_links_color + '"></div><br>\
					<div id="sites"><label for="inputColorprem">Premium links color</label><input type="text" id="inputColorprem" style="background:' + Premium_links_color + ';" value="' + Premium_links_color + '"></div>\
					<div id="configinfo">For no color leave a field blank.<br>Standard HTML color names are supported. See <a href="http://www.w3schools.com/html/html_colornames.asp">w3schools.com</a> for more info.</div><br>\
					<p><input type="checkbox" id="Show_line_through_in_dead_links"> Show line through in dead links</p>\
					<p><input type="checkbox" id="Show_black_background_in_DL_links"> Show black background in DL links</p>\
					<p><input type="checkbox" id="Do_not_linkify_DL_links"> Do NOT linkify DL links</p>\
					<p><input type="checkbox" id="Allow_spaces_in_DL_links"> Allow spaces in DL links<br><div id="configinfo">Note: All links must end with a new line!</div></p>\
					<p><input type="checkbox" id="Display_full_links_in_link_containers"> Display full links in link containers</p><br>\
					<fieldset>\
					<p><input type="radio" name="warlciconset" value="0"> No icons</p>\
					<p><input type="radio" name="warlciconset" value="1"> <img src=" ' + PAW_ICON_GREEN + '"> <img src=" ' + PAW_ICON_RED + '"> <img src=" ' + PAW_ICON_YELLOW + '"> <img src=" ' + PAW_ICON_PINK + '"></p>\
					<p><input type="radio" name="warlciconset" value="2"> <img src=" ' + RSLC_ICON_GREEN + '"> <img src=" ' + RSLC_ICON_RED + '"> <img src=" ' + RSLC_ICON_YELLOW + '"> <img src=" ' + RSLC_ICON_PINK + '"></p>\
					<p><input type="radio" name="warlciconset" value="3"> <img src=" ' + NEW_ICON_GREEN + '"> <img src=" ' + NEW_ICON_RED + '"> <img src=" ' + NEW_ICON_YELLOW + '"> <img src=" ' + NEW_ICON_PINK + '"></p>\
					</fieldset>\
					</fieldset>\
					<fieldset>\
					<div id="sites"><input type="checkbox" id="Autocheck"> Autocheck</div><br><div id="configinfo">Script starts check automatically.</div><br>\
					</fieldset>\
					<fieldset>\
					<div id="sites"><input type="checkbox" id="Show_progress_stats"> Show progress stats</div><br>\
					</fieldset>\
					<fieldset>\
					<div id="sites"><input type="checkbox" id="Display_tooltip_info"> Display tooltip info</div><div id="bulk"></div><br><div id="configinfo">Note: File name, file size, error messages etc.</div><br>\
					</fieldset>\
					<fieldset>\
					<p><input type="checkbox" id="Enable_Anonymizer"> Enable Anonymizer</div><div id="bulk">EXPERIMENTAL Note: Checkbox does not work use CTRL+ALT+Z.</p>\
					<div id="sites"><label for="refAnonymizer">Refererer anonymizing service</label><input type="text" id="refAnonymizer" value="' + Ref_anonymize_service + '"></div>\
					</fieldset>\
					</div>\
				</div>\
				<div id="tabs-4" class="warlc-ui-tab">\
					<p><b>Author:</b> <a href="http://www.mentalps.5gbfree.com/viewtopic.php?f=2&t=6">mentalps</a></p>\
					<br />\
					<p><b>Currently supported:</b><br>\
					Filehostings: ' + allHostNames.length + '<br />\
					Containers: ' + allContainerNames.length + '<br />\
					Obsolete sites: ' + allObsoleteNames.length + '<br /></p>\
					<br />\
					<p><b>Based on:</b><br>\
					<a href="http://userscripts-mirror.org/scripts/show/125631.html">W.A.R. Links Checker - Dev</a></p>\
					<br />\
					<p><b>Uses:</b></p>\
					<p>adam_3\'s <a href="http://userscripts-mirror.org/scripts/show/2254">Linkify ting</a> (modified)</p>\
					<p><a href="http://jquery.com/">jQuery</a> JavaScript Library</p>\
					<br />\
					<p>License: GPL version 3 or any later version (<a href="http://www.gnu.org/copyleft/gpl.html">http://www.gnu.org/copyleft/gpl.html</a>)</p>\
				</div>\
			</div>\
		</div>\
		</div>';
		
		$('body').append('<div id="hideshow">' + configurationinnerHTML + '</div>');
		
		$("#warlc-conf-tabs").tabs({ fx: { opacity: 'toggle', duration: 'fast' } });
		
		$("#imghideshow").click(function(event){$("#hideshow").hide(); event.preventDefault();});
				
		var elmHostList = document.getElementById("warlcsitelist1");
		var elmContainerList = document.getElementById("warlcsitelist2");
		
		buildSettings();
		buildSitelist("", allHostNames, elmHostList);
		buildSitelist("", allContainerNames, elmContainerList);
			
		if (DEBUG_MODE)
		{
			//log all sites availability status
			diagSites();
		}
			
		//handler for checkbox state change
		function changeConfiguration(e)
		{
			var element = e.target;

			if (element.type == 'checkbox')
			{
				if (element.checked == 1)
				{
					GM_setValue(element.id, true);
				}
				else
				{
					GM_setValue(element.id, false);
				}

			}
			setVariables();
		}

		//Selects all filehosting checkboxes
		function selectAll()
		{
			$(":checkbox:visible:not(:checked)").prop("checked",true)
						 .each(function(index, element){GM_setValue(this.id, true)});
		}

		//Deselects all filehosting checkboxes
		function selectNone()
		{
			$(":checkbox:visible:checked").prop("checked",false)
						 .each(function(index, element){GM_setValue(this.id, false)});
		}

		//Inverts filehosting checkboxes selection
		function selectInvert()
		{
			var $checked = $(":checkbox:visible:checked");
			var $unchecked = $(":checkbox:visible:not(:checked)");
			
			$unchecked.prop("checked",true)
						 .each(function(index, element){GM_setValue(this.id, true)});
			$checked.prop("checked",false)
						 .each(function(index, element){GM_setValue(this.id, false)});
		}
		
		//toggles anonymizer on off
		function Enable_Anonymizer()
		{
			var $checked = $(":checkbox:visible:checked");
			var $unchecked = $(":checkbox:visible:not(:checked)");
			
			$unchecked.prop("checked",true)
						 .each(function(index, element){GM_setValue(this.id, true)});
			$checked.prop("checked",false)
						 .each(function(index, element){GM_setValue(this.id, false)});
		 
		}

		function changeRefAnonymizer(){
			GM_setValue("Ref_anonymize_service", $("#refAnonymizer").attr("value"));
		}

		
		//Sets live links color
		function changeColorLive()
		{
			var inColorLive = document.getElementById("inputColorLive");
			inColorLive.style.background = inColorLive.value;
			GM_setValue("Live_links_color", inColorLive.value);
		}

		//Sets dead links color
		function changeColorDead()
		{
			var inColorDead = document.getElementById("inputColorDead");
			inColorDead.style.background = inColorDead.value;
			GM_setValue("Dead_links_color", inColorDead.value);
		}

		//Sets temp. unavailable links color
		function changeColorTemp()
		{
			var inColorTemp = document.getElementById("inputColorTemp");
			inColorTemp.style.background = inColorTemp.value;
			GM_setValue("Temp_unavailable_links_color", inColorTemp.value);
		}

		//Sets temp. unavailable links color
		function changeColorCont()
		{
			var inColorCont = document.getElementById("inputColorCont");
			inColorCont.style.background = inColorCont.value;
			GM_setValue("Container_links_color", inColorCont.value);
		}
		
		//Sets premium. links color
		function changeColorprem()
		{
			var inColorprem = document.getElementById("inputColorprem");
			inColorprem.style.background = inColorprem.value;
			GM_setValue("Premium_links_color", inColorprem.value);
		}

		//Diagnose sites for availability
		function diagSites()
		{
			var boxes = document.getElementById("warlcsitelist1").getElementsByTagName("input");

			for (var i = 0, n = boxes.length - 1; i < n; i++)
			{
				if (boxes[i].type == "checkbox")
				{
					checkAvailability(boxes[i]);
				}
			}

			boxes = document.getElementById("warlcsitelist2").getElementsByTagName("input");

			for (var i = 0, n = boxes.length - 1; i < n; i++)
			{
				if (boxes[i].type == "checkbox")
				{
					checkAvailability(boxes[i]);
				}
			}

			function checkAvailability(cbElm)
			{
				var cb = cbElm;				
				
				GM_xmlhttpRequest(
				{
					method: 'HEAD',
					url: 'http://' + cb.nextSibling.textContent.replace(' ', ''),
					headers: {
						'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
						'Accept': 'text/xml',
						'Referer': ""
					},
					onload: function (result)
					{
						if (result.status != 200)
						{
							GM_log(cb.nextSibling.textContent + ' --- status: [' + result.status + '] ' + result.statusText + ', final url: ' + result.finalUrl);
						}
					},
					onerror: function (result)
					{
						if (result.status != 200)
						{
							GM_log(cb.nextSibling.textContent + ' --- status: [' + result.status + '] ' + result.statusText + ', final url: ' + result.finalUrl);  
						}
					}
				});
			}
		}
		
		function buildSettings()
		{
			$(".warlcsettings :checkbox").each(function(){
				$(this).prop("checked", GM_getValue($(this).attr("id")))
					.click(function(e){
						GM_setValue($(this).attr("id"), $(this).prop("checked"));
						setVariables();
					});				
			})
		}
		
		//Dynamic build of host list
		//param search 		[string]	searches for hostnames matching search substring 
		//param siteNames 	[array]		array of site names
		//param targetNode 	[DOM Node]	where the list should be built
		//								first child node is replaced
		function buildSitelist(search, siteNames, targetNode)
		{
			var searchRegex = new RegExp("\\|?([\\w\\.-]*" + search.replace(/\./g,"\\.").replace(/-/g, "\\-") + "[\\w\\.-]*)\\|?", "i");
			
			var $targetNode = $(targetNode).empty();
			
			var searchedSite = "";
			$.each(siteNames, function(i, site){
				if (searchedSite = site.match(searchRegex))
				{
					var baseSite = site.replace(/\|.+/, ""); //filehosting main domain
					
					//ensuring backward compatibility with the rest of code, to be refactored later
					var oldRSLCvalue = "Check_" + baseSite.replace(/\|.+/, "").replace(/\./g,"_dot_").replace(/-/g, "_dash_") + "_links";
					//
										
					$targetNode.append('<input type="checkbox" id="' + oldRSLCvalue +'" />\
						<label for="' + oldRSLCvalue + '">' + searchedSite[1] + '</label>' +
						((searchedSite[1] != baseSite) ? ('<div id="note"> ( ~ ' + baseSite + ' )</div>') : (""))
						);
					
					$("#" + oldRSLCvalue).prop("checked", GM_getValue(oldRSLCvalue, false))
										.change(changeConfiguration);
										
					$targetNode.append('<br />');
				}
			});
			
			$targetNode.append("<hr>");
			
			//obsolete hosts checkbox
			$targetNode.append('<input type="checkbox" id="Obsolete_file_hosts" /><label for="Obsolete_file_hosts">Obsolete file hosts</label>');		
			$("#Obsolete_file_hosts").prop("checked", GM_getValue("Obsolete_file_hosts", false))
									.change(changeConfiguration);
			
			$targetNode.append('<br />');
			
			var foundName = "";
			$.each(allObsoleteNames, function(i, site){
				if (foundName = allObsoleteNames[i].match(searchRegex))
				{
					$targetNode.append('<div id="note">' + foundName[1] + '</div>');
				}
			})
			
		}
		
		var hostSearchBox = document.getElementById("hostSearchBox");
		hostSearchBox.addEventListener('keyup', function(){buildSitelist(hostSearchBox.value, allHostNames, elmHostList);}, false);		
		
		var hostSearchBox2 = document.getElementById("hostSearchBox2");
		hostSearchBox2.addEventListener('keyup', function(){buildSitelist(hostSearchBox2.value, allContainerNames, elmContainerList);}, false);		
				
		$(".warlc-ui-select-all").click(selectAll).button();
		$(".warlc-ui-select-none").click(selectNone).button();
		$(".warlc-ui-select-invert").click(selectInvert).button();
		
		$(".warlc-ui-buttonset").buttonset();
		
		var inColorLive = document.getElementById("inputColorLive");
		inColorLive.addEventListener('keyup', changeColorLive, false);

		var inColorDead = document.getElementById("inputColorDead");
		inColorDead.addEventListener('keyup', changeColorDead, false);

		var inColorTemp = document.getElementById("inputColorTemp");
		inColorTemp.addEventListener('keyup', changeColorTemp, false);

		var inColorCont = document.getElementById("inputColorCont");
		inColorCont.addEventListener('keyup', changeColorCont, false);
		
		var inColorprem = document.getElementById("inputColorprem");
		inColorprem.addEventListener('keyup', changeColorprem, false);
		
		
		$("#refAnonymizer").change(changeRefAnonymizer);
		//buttons and edit boxes init end

		//icon sets radio buttons
		var radioButtons = document.getElementsByName("warlciconset");
		radioButtons[Icon_set].checked = "checked";

		radioButtons[0].addEventListener("change", updateIconSet);
		radioButtons[1].addEventListener("change", updateIconSet);
		radioButtons[2].addEventListener("change", updateIconSet);
		radioButtons[3].addEventListener("change", updateIconSet);
		
		function updateIconSet()
		{
			GM_setValue("Icon_set", this.value * 1);
		}
		//		
		
		
		
		$('#showCustomRulesReference').click(function(e){
			e.preventDefault();
			$('#customRulesReference').toggle();
			});
		
		$('#Custom_rules_text')
			.val(Custom_rules_text)
			.change(saveCustomRules);
		
		function saveCustomRules(e)
		{
			var cr = parseCustomRules(this.value);
			if (cr.info.length)
				alert('Custom rules saved. However, there were ' + cr.error + ' errors, ' + cr.warning + ' warnings, ' + cr.note + ' notes found.\n' + cr.rules.length + ' valid rules found.\n\n' + JSON.stringify(cr.info, null, '  '));
			GM_setValue('Custom_rules_text', this.value);
			GM_setValue('last_custom_rules_nag', ''+new Date().getTime()); //reset nag
		}
		
	}

//begin standard link checking algorithm
function start(filterId)
{
	var doNotLinkify = Do_not_linkify_DL_links;

	// USER SELECTED FILE HOSTS INITIALIZATION START
	var http_file_hosts = new Array(); //standard hostings
	var http_file_hosts_coded = new Array(); //hostings which has to be decoded to obtain real checkable link
	var http_file_hosts_obsolete = new Array(); //dead hostings
	var http_file_hosts_headers_only = new Array(); //hostings with direct download, must be handled via headers only

	initFileHosts();
	initFileHostsHeadersOnly();
	initFileHostsCustom(); //CustomRules
	// USER SELECTED FILE HOSTS INITIALIZATION END

	// LINKIFICATION START
	var totalxpath = '';
	var totalxpathcoded = '';
	var totalxpathobsolete = '';
	var totalxpathheadersonly = '';
	var totalourls = '';

	var filehostLen = http_file_hosts.length;
	var filehostCodedLen = http_file_hosts_coded.length;
	var filehostObsoleteLen = http_file_hosts_obsolete.length;
	var filehostHeadersOnlyLen = http_file_hosts_headers_only.length;

	var filehostIdx = filehostLen;
	var filehostCodedIdx = filehostCodedLen;
	var filehostObsoleteIdx = filehostObsoleteLen;
	var filehostHeadersOnlyIdx = filehostHeadersOnlyLen;

	if ((filehostIdx == 0) && (filehostCodedIdx == 0) && (filehostHeadersOnlyIdx == 0) && (filehostObsoleteIdx == 0))
		return;

	while (filehostIdx--)
	{
		totalourls += http_file_hosts[filehostIdx][0] + '|';
		totalxpath += http_file_hosts[filehostIdx][4] + '|';
	}

	while (filehostCodedIdx--)
	{
		totalourls += http_file_hosts_coded[filehostCodedIdx][0] + '|';
		totalxpathcoded += http_file_hosts_coded[filehostCodedIdx][3] + '|';
	}

	while (filehostObsoleteIdx--)
	{
		totalourls += http_file_hosts_obsolete[filehostObsoleteIdx][0] + '|';
		totalxpathobsolete += http_file_hosts_obsolete[filehostObsoleteIdx][1] + '|';
	}

	while (filehostHeadersOnlyIdx--)
	{
		totalourls += http_file_hosts_headers_only[filehostHeadersOnlyIdx][0] + '|';
		totalxpathheadersonly += http_file_hosts_headers_only[filehostHeadersOnlyIdx][3] + '|';
	}

	totalourls = totalourls.replace(/\|$/g, "");
	
	//TODO: further refactoring needed
	
	totalxpath = totalxpath.replace(/\]\|\/\/a\[/g, " or ");
	totalxpath = totalxpath.replace(/\]\|/, ')]');
	totalxpathcoded = totalxpathcoded.replace(/\]\|\/\/a\[/g, " or ");
	totalxpathcoded = totalxpathcoded.replace(/\]\|/, ')]');
	totalxpathobsolete = totalxpathobsolete.replace(/\]\|\/\/a\[/g, " or ");
	totalxpathobsolete = totalxpathobsolete.replace(/\]\|/, ')]');
	totalxpathheadersonly = totalxpathheadersonly.replace(/\]\|\/\/a\[/g, " or ");
	totalxpathheadersonly = totalxpathheadersonly.replace(/\]\|/, ')]');
				
	if (filterId != null) //insert id restriction in the xpath
	{
		totalxpath = totalxpath.replace(/\[/g, "[@class='" + filterId + "' and (");
		totalxpathcoded = totalxpathcoded.replace(/\[/g, "[@class='" + filterId + "' and (");
		totalxpathobsolete = totalxpathobsolete.replace(/\[/g, "[@class='" + filterId + "' and (");
		totalxpathheadersonly = totalxpathheadersonly.replace(/\[/g, "[@class='" + filterId + "' and (");
	}
	else
	{
		totalxpath = totalxpath.replace(/\[/, "[((not(@class)) or (@class!='alive_link' and @class!='adead_link' and @class!='unava_link')) and (");
		totalxpathcoded = totalxpathcoded.replace(/\[/, "[((not(@class)) or (@class!='alive_link' and @class!='adead_link' and @class!='unava_link')) and (");
		totalxpathobsolete = totalxpathobsolete.replace(/\[/, "[((not(@class)) or (@class!='alive_link' and @class!='adead_link' and @class!='unava_link')) and (");
		totalxpathheadersonly = totalxpathheadersonly.replace(/\[/, "[((not(@class)) or (@class!='alive_link' and @class!='adead_link' and @class!='unava_link')) and (");
	}
	
	linkify(totalourls);
	//LINKIFICATION END
	
	//ENCRYPTED LINKS PROCESSING START
	if (http_file_hosts_coded.length > 0)
	{
		var linksCoded = document.evaluate(totalxpathcoded, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

		// decrypt coded links (redirects, link protectors etc.)
		if (linksCoded.snapshotLength > 0)
		{
			var link;
			var reallinkreg;
			var reallinkcorrection;

			if (filterId == null)
			{
				cLinksTotal += linksCoded.snapshotLength;
			}

			var y = linksCoded.snapshotLength - 1;
			do
			{
				// linksCoded.snapshotItem(y).id = 'processing_link';
				link = linksCoded.snapshotItem(y);
				
				filehostIdx = filehostCodedLen;
				while (filehostIdx--)
				{
					if (link.href.match(http_file_hosts_coded[filehostIdx][0]))
					{
						link.href = link.href.replace(/http:\/\/.*?(?:\?|=)http:\/\//, 'http://');
						reallinkreg = http_file_hosts_coded[filehostIdx][1];
						reallinkcorrection = http_file_hosts_coded[filehostIdx][2];

						decurl(link, reallinkreg, reallinkcorrection);
						break;
					}
				}
			}
			while (y--);
		}
	}
	//ENCRYPTED LINKS PROCESSING END

	//STANDARD LINKCHECKING START
	if (http_file_hosts.length > 0)
	{
		var lianks = document.evaluate(totalxpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

		if (filterId == null)
		{
			cLinksTotal += lianks.snapshotLength;
		}

		if (lianks.snapshotLength > 0)
		{
			var link;

			var URL = "";
			var name = "";
			var isAliveRegex = "";
			var isDeadRegex = "";
			var isUnavaRegex = "";
			var ispremRegex = "";
			var tryLoop = false;

			var y = lianks.snapshotLength;

			while (y--)
			{
				link = lianks.snapshotItem(y);

				filehostIdx = filehostLen;
				while (filehostIdx--)
				{
					if (link.href.match(http_file_hosts[filehostIdx][0]))
					{
						link.href = link.href.replace(/http:\/\/.*?http:\/\//, 'http://'); //anonymizers
						isAliveRegex = http_file_hosts[filehostIdx][1];
						isDeadRegex = http_file_hosts[filehostIdx][2];
						isUnavaRegex = http_file_hosts[filehostIdx][3];
						ispremRegex = http_file_hosts[filehostIdx][6];
						tryLoop = http_file_hosts[filehostIdx][5];

						geturl(link, isAliveRegex, isDeadRegex, isUnavaRegex, ispremRegex, tryLoop);

						break;
					}
				}
			}
		}	
	}
	//STANDARD LINKCHECKING END
	
	//OBSOLETE FILE HOSTS PROCESSING START
	if (filehostObsoleteLen > 0)
	{
		var obsoletelinks = document.evaluate(totalxpathobsolete, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

		var obsoleteLink;

		//check links
		if (obsoletelinks.snapshotLength > 0)
		{
			var y = obsoletelinks.snapshotLength;

			if (filterId == null)
			{
				cLinksTotal += y;
			}

			while (y--)
			{
				obsoleteLink = obsoletelinks.snapshotItem(y);

				if (Display_tooltip_info)
				{
					obsoleteLink.warlc_error = 'Cause of error: <b>Obsolete filehosting.</b>';
				}
				
				displayTheCheckedLink(obsoleteLink, 'adead_link');
			}
		}
	}
	//OBSOLETE FILE HOSTS PROCESSING END

	//DIRECT LINKCHECKING START
	if (http_file_hosts_headers_only.length > 0)
	{
		var links = document.evaluate(totalxpathheadersonly, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

		//check links
		if (links.snapshotLength > 0)
		{
			var link;
			var isAliveRegex;
			var isDeadRegex;
			var ispremRegex;

			var y = links.snapshotLength;


			if (filterId == null)
			{
				cLinksTotal += y;
			}

			while (y--)
			{
				// links.snapshotItem(y).id = 'processing_link';
				link = links.snapshotItem(y);
				
				filehostIdx = filehostHeadersOnlyLen;
				while (filehostIdx--)
				{
					if (link.href.match(http_file_hosts_headers_only[filehostIdx][0]))
					{
						link.href = link.href.replace(/http:\/\/.*?(?:\?|=)http:\/\//, 'http://');
						isAliveRegex = http_file_hosts_headers_only[filehostIdx][1];
						isDeadRegex = http_file_hosts_headers_only[filehostIdx][2];
						ispremRegex = http_file_hosts_headers_only[filehostIdx][3];

						geturlHeader(link, isAliveRegex, isDeadRegex, ispremRegex);

						break;
					}
				}
			}

		}
	}
	//DIRECT LINKCHECKING END


	//finds the real url on the page, replaces link.href with it and calls geturl
	function decurl(link, reallinkreg, reallinkcorrection)
	{

		GM_xmlhttpRequest(
		{
			method: 'GET',
			url: link.href,
			headers: {
				'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
				'Accept': 'text/xml',
				'Referer': ""
			},
			onload: function (result)
			{
				// cLinksProcessed++;

				var reallink = result.responseText.match(reallinkreg)[0];
				reallink = reallink.replace(new RegExp(reallinkcorrection, "g"), "");

				link.href = reallink;

				var i = http_file_hosts.length - 1;
				do
				{
					if ((reallink.match(http_file_hosts[i][0])))
					{
						link.href = link.href.replace(/http:\/\/.*?\?http:\/\//, 'http://');
						var isAliveRegex = http_file_hosts[i][1];
						var isDeadRegex = http_file_hosts[i][2];
						var isUnavaRegex = http_file_hosts[i][3];
						var ispremRegex = http_file_hosts[i][4];

						geturl(link, isAliveRegex, isDeadRegex, isUnavaRegex, ispremRegex, 50);

						break;
					}
				}
				while (i--);
				}
		});
	}

	function randUA()
	{
		//TODO	
	}
	
	//Processes link
	//
	// [string]		link			link URL
	// [string] 	isAliveRegex	alive link regex
	// [string] 	isDeadRegex		dead link regex
	// [string] 	isUnavaRegex	unavailable link regex
	// [string] 	ispremRegex	    premium link regex
	// [boolean]	tryLoop			repeats request until succeeded	
	function geturl(link, isAliveRegex, isDeadRegex, isUnavaRegex, ispremRegex, tryLoop)
	{
		GM_xmlhttpRequest(
		{
			method: 'GET',
			url: link.href,
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
				'Accept-Charset': 'windows-1250,utf-8;q=0.7,*;q=0.7',
				'Referer': ""
			},
			onload: function (result)
			{
				var res = result.responseText;
				
				if (result.responseHeaders.match(/Content-Disposition: attachment; filename=/))//direct download, simple version
				{
					displayTheCheckedLink(link, 'alive_link');
					return;
				}

				if (res.match(isAliveRegex))
				{
					displayTheCheckedLink(link, 'alive_link');
					return;
				}

				if (res.match(isDeadRegex))
				{
					displayTheCheckedLink(link, 'adead_link');
					return;
				}

				if (isUnavaRegex && res.match(isUnavaRegex))
				{
					displayTheCheckedLink(link, 'unava_link');
					return;
				}
				
				if (res.match(ispremRegex))
				{
					displayTheCheckedLink(link, 'prem_link');
					return;
				}

				var resStatus = result.status;

				if (resStatus == 404)
				{
					displayTheCheckedLink(link, 'adead_link');
				}
				
				if (resStatus == 500 || resStatus == 503 || resStatus == 403) //not found/available/temp. unava
				{
					if (tryLoop)
					{
						//wait 1-5 seconds and repeat the request
						setTimeout(function(){geturl(link, isAliveRegex, isDeadRegex, isUnavaRegex, ispremRegex, tryLoop)}, 1000 + (Math.random() * 4000));
					}
					else
					{
						displayTheCheckedLink(link, 'unava_link');
					}

					return;
				}
			},
			onerror: function ()
			{
				displayTheCheckedLink(link, 'unava_link');
			}
		});
	}

	function geturlHeader(link, isAliveRegex, isDeadRegex, ispremRegex)
	{
		GM_xmlhttpRequest(
		{
			method: 'HEAD',
			url: link.href,
			headers: {
				'User-agent': 'Mozilla/4.0 [en] (Windows NT 6.0; U)',
				'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
				'Accept-Charset': 'windows-1250,utf-8;q=0.7,*;q=0.7',
				'Referer': ""
			},
			onload: function (result)
			{
				var resStatus = result.status;
				var resHeaders = "";
				
				if (resStatus == 403 || resStatus == 404 || resStatus == 500) //not found/available
				{
					displayTheCheckedLink(link, 'adead_link');
					return;
				}

				resHeaders = result.responseHeaders;

				if (resHeaders.match(isDeadRegex))
				{
					displayTheCheckedLink(link, 'adead_link');
					return;
				}

				if (resHeaders.match(isAliveRegex))
				{
					displayTheCheckedLink(link, 'alive_link');
					return;
				}
				
				if (resHeaders.match(ispremRegex))
				{
					displayTheCheckedLink(link, 'prem_link');
					return;
				}
			},
			onerror: function ()
			{
				displayTheCheckedLink(link, 'unava_link');
			}
		});
	}

	//Delinkfifies the <a> element object
	function delinkifyLink(link)
	{
		var spanElm = document.createElement("span");
		spanElm.className = link.className;
		spanElm.innerHTML = link.innerHTML;

		if (Display_tooltip_info)
		{
			spanElm.href = link.href;
			spanElm.warlc_error = link.warlc_error;
			
			switch (link.className){
			case "alive_link": spanElm.addEventListener("mouseover", displayTooltipInfo, false); break
			case "adead_link": spanElm.addEventListener("mouseover", displayTooltipError, false); break;
			case "unava_link": //reserved
			case "prem_link": spanElm.addEventListener("mouseover", displayTooltipError, false); break;
			default: 
			}
		}
		
		link.parentNode.replaceChild(spanElm, link);
	}

	//Assigns result status to the <a> element object and calls delinkifying eventually
	//Possible result states: adead_link, alive_link, unava_link, prem_link
	function displayTheCheckedLink(link, resultStatus)
	{
		link.className = resultStatus;
		link.href = Ref_anonymize_service + link.href;
		
		if (Display_tooltip_info)
		{
			switch (resultStatus){
			case "alive_link": link.addEventListener("mouseover", displayTooltipInfo, false); break
			case "adead_link": link.addEventListener("mouseover", displayTooltipError, false); break;
			case "unava_link": //reserved
			case "prem_link": link.addEventListener("mouseover", displayTooltipInfo, false); break
			default: 
			}
		}
		
		if (doNotLinkify)
		{
			delinkifyLink(link);
		}
		
		cLinksProcessed++;

		if (resultStatus == "alive_link")
		{
			cLinksAlive++;
			return;
		}

		if (resultStatus == "adead_link")
		{
			cLinksDead++;
			return;
		}

		if (resultStatus == "unava_link")
		{
			cLinksUnava++;
		}
		
		if (resultStatus == "prem_link")
		{
			cLinksprem++;
			return;
		}
	}


	function initFileHosts()
	{

		function addObsoleteHost(linkRegex, xpathEx)
		{
			var host = new Array(2);
			host[0] = linkRegex;
			host[1] = xpathEx;
			http_file_hosts_obsolete.push(host);
		}

		//obsolete file hosts init start
		if (Obsolete_file_hosts)
		{
			addObsoleteHost("uloz\.cz\/show\/file","//a[contains(@href,'uloz.cz')]");
			addObsoleteHost("storage\\.to\/get","//a[contains(@href,'storage.to')]");
			addObsoleteHost("iskladka\\.cz\/download","//a[contains(@href,'iskladka.cz')]");
			addObsoleteHost("file-rack\\.com\/files","//a[contains(@href,'file-rack.com')]");
			addObsoleteHost("fast-load\\.net\/(\/)?index","//a[contains(@href,'fast-load.net')]");
			addObsoleteHost("subory\\.sk\/download","//a[contains(@href,'subory.sk')]");
			addObsoleteHost("bigandfree\\.com\/\\d+","//a[contains(@href,'bigandfree.com')]");
			addObsoleteHost("fileop\\.com\/\\w+","//a[contains(@href,'fileop.com')]");
			addObsoleteHost("mujsoubor\\.cz\/file\/","//a[contains(@href,'mujsoubor.cz')]");
			addObsoleteHost("sendfile\\.to\/\\w+","//a[contains(@href,'sendfile.to')]");
			addObsoleteHost("superfastfile\\.com\/\\w+","//a[contains(@href,'superfastfile.com')]");
			addObsoleteHost("quickyshare\\.com\/\\w+","//a[contains(@href,'quickyshare.com/')]");
			addObsoleteHost("duckload\\.com\/(?:d|play)","//a[contains(@href,'duckload.com')]");
			addObsoleteHost("uploadstore\\.net\/\\w+","//a[contains(@href,'uploadstore.net')]");
			addObsoleteHost("meinupload\\.com\/dl\/\\d+","//a[contains(@href,'meinupload.com/dl')]");
			addObsoleteHost("dualshare\\.com\/\\w+","//a[contains(@href,'dualshare.com')]");
			addObsoleteHost("2xupload\\.(?:to|de)\/file\/\\w+","//a[contains(@href,'2xupload.to') or contains(@href,'2xupload.de')]");
			addObsoleteHost("oxedion\\.com\/index\\.php\/download\/\\w+","//a[contains(@href,'oxedion.com/index')]");
			addObsoleteHost("uploadline\\.com\/\\d+","//a[contains(@href,'uploadline.com')]");
			addObsoleteHost("dll\\.bz\/file\/\\d+","//a[contains(@href,'dll.bz/file')]");
			addObsoleteHost("movieshare\\.in\/\\w+","//a[contains(@href,'movieshare.in')]");
			addObsoleteHost("milledrive\\.com\/files\/\\d+","//a[contains(@href,'milledrive.com')]");
			addObsoleteHost("quickupload\\.net\/\\w+","//a[contains(@href,'quickupload.net')]");
			addObsoleteHost("safelink\\.in\/\\w+","//a[contains(@href,'safelink.in')]");
			addObsoleteHost("pyramidfiles\\.com\/\\w+","//a[contains(@href,'pyramidfiles.com/')]");
			addObsoleteHost("(?:cloudnator|shragle)\\.com\/files","//a[contains(@href,'cloudnator.com/files') or contains(@href,'shragle.com/files')]");
			addObsoleteHost("batshare\\.com\/\\w+","//a[contains(@href,'batshare.com/')]");
			addObsoleteHost("bitroad\\.net\/download","//a[contains(@href,'bitroad.net/download')]");
			addObsoleteHost("metadivx\\.com\/\\w+","//a[contains(@href,'metadivx.com')]");
			addObsoleteHost("filegaze\\.com\/\\w+","//a[contains(@href,'filegaze.com/')]");
			addObsoleteHost("bulletupload\\.com\/\\w+","//a[contains(@href,'bulletupload.com/')]");
			addObsoleteHost("sharefilehost\\.com\/\\w+","//a[contains(@href,'sharefilehost.com/')]");
			addObsoleteHost("fireuploads\\.net\/\\w+","//a[contains(@href,'fireuploads.net/')]");
			addObsoleteHost("divxlink\\.com\/\\w+","//a[contains(@href,'divxlink.com/')]");
			addObsoleteHost("bzlink\\.us\/\\w+","//a[contains(@href,'bzlink.us/')]");
			addObsoleteHost("filetechnology\\.com\/\\w+","//a[contains(@href,'filetechnology.com/')]");
			addObsoleteHost("filecosy\\.com\/\\w+","//a[contains(@href,'filecosy.com/')]");
			addObsoleteHost("fileserver\\.cc\/\\w+","//a[contains(@href,'fileserver.cc/')]");
			addObsoleteHost("shafiles\\.me\/\\w+","//a[contains(@href,'shafiles.me/')]");
			addObsoleteHost("xfileshare\\.eu\/\\w+","//a[contains(@href,'xfileshare.eu/')]");
			addObsoleteHost("uploadboost\\.com\/\\w+","//a[contains(@href,'uploadboost.com/')]");
			addObsoleteHost("uploadoz\\.com\/\\w+","//a[contains(@href,'uploadoz.com/')]");
			addObsoleteHost("ihostia\\.com\/\\w+","//a[contains(@href,'ihostia.com/')]");
			addObsoleteHost("shareupload\\.com\/\\w+","//a[contains(@href,'shareupload.com/')]");
			addObsoleteHost("ovfile\\.com\/\\w+","//a[contains(@href,'ovfile.com/')]");
			addObsoleteHost("stahuj\\.to\/\\w+","//a[contains(@href,'stahuj.to/')]");
			addObsoleteHost("gigfiles\\.net\/\\w+","//a[contains(@href,'gigfiles.net/')]");
			addObsoleteHost("vidhog\\.com\/\\w+","//a[contains(@href,'vidhog.com/')]");
			addObsoleteHost("filelaser\\.com\/\\w+","//a[contains(@href,'filelaser.com/')]");
			addObsoleteHost("holderfile\\.com\/\\w+","//a[contains(@href,'holderfile.com/')]");
			addObsoleteHost("fileduct\\.(?:com|net)\/\\w+","//a[contains(@href,'fileduct.com/') or contains(@href,'fileduct.net')]");
			addObsoleteHost("filefat\\.com\/\\w+","//a[contains(@href,'filefat.com/')]");
			addObsoleteHost("restfile\\.com\/\\w+","//a[contains(@href,'restfile.com/')]");
			addObsoleteHost("filemashine\\.com\\/download\/\\w+","//a[contains(@href,'filemashine.com/download')]");
			addObsoleteHost("cloudnxt\\.net\/\\w+","//a[contains(@href,'cloudnxt.net/')]");
			addObsoleteHost("uploadrack\\.com\/\\w+","//a[contains(@href,'uploadrack.com')]");
			addObsoleteHost("teradepot\\.com\/\\w+","//a[contains(@href,'teradepot.com')]");
			addObsoleteHost("dataup\\.to\/\\d+\/","//a[contains(@href,'dataup.to')]");
			addObsoleteHost("upit\\.to\/file:\\d+","//a[contains(@href,'upit.to/file')]");
			addObsoleteHost("badongo\\.(?:com|net)\/(?:\\w\\w\/|)(?:vid|cfile|file|pt)\/\\w+","//a[contains(@href,'badongo.com') or contains(@href,'badongo.net')]");
			addObsoleteHost("driveway\\.com\/\\w+","//a[contains(@href,'driveway.com')]");
			addObsoleteHost("eatlime\\.com\/download","//a[contains(@href,'eatlime.com/download')]");
			addObsoleteHost("a2zuploads\\.com\/id\\w+","//a[contains(@href,'a2zuploads.com/id')]");
			addObsoleteHost("friendlyfiles\\.net\/download\/\\w+\/","//a[contains(@href,'friendlyfiles.net/download')]");
			addObsoleteHost("flyfile\\.us\/\\w+","//a[contains(@href,'flyfile.us')]");
			addObsoleteHost("speedyshare\\.com\/\\w+","//a[contains(@href,'speedyshare.com')]");
			addObsoleteHost("brontofile\\.com\/download","//a[contains(@href,'brontofile.com/download')]");
			addObsoleteHost("uploadspace\\.eu\/\\w+","//a[contains(@href,'uploadspace.eu')]");
			addObsoleteHost("fooget\\.com\/\\w+","//a[contains(@href,'fooget.com/')]");
			addObsoleteHost("file-bit.net\/\\w+","//a[contains(@href,'file-bit.net/')]");
			addObsoleteHost("keepfile\\.com\/\\w+","//a[contains(@href,'http://keepfile.com')]");
			addObsoleteHost("piggyshare\\.com\/file\/\\w+","//a[contains(@href,'piggyshare.com')]");
			addObsoleteHost("filecrown\\.com\/\\w+","//a[contains(@href,'filecrown.com')]");
			addObsoleteHost("6giga\\.com\/\\w+","//a[contains(@href,'6giga.com')]");
			addObsoleteHost("uploadjockey\\.com\/download\/\\w+","//a[contains(@href,'uploadjockey.com/download')]");
			addObsoleteHost("bluehost\\.to\/dl=\\w+","//a[contains(@href,'bluehost.to')]");
			addObsoleteHost("coolshare\\.cz\/stahnout\/\\w+","//a[contains(@href,'coolshare.cz/stahnout')]");
			addObsoleteHost("filegu\\.ru\/f\/\\w+","//a[contains(@href,'filegu.ru/f')]");
			addObsoleteHost("filebase\\.to\/files\/\\d+\/","//a[contains(@href,'filebase.to/files')]");
			addObsoleteHost("kickload\\.com\/(?:file|get)\/","//a[contains(@href,'kickload.com/file') or contains(@href,'kickload.com/get')]");
			addObsoleteHost("up-file\\.com\/files\/download\/\\w+\/","//a[contains(@href,'up-file.com/download')]");
			addObsoleteHost("ezyfile\\.net\/\\w+","//a[contains(@href,'ezyfile.net/')]");
			addObsoleteHost("k2files\\.com\/files","//a[contains(@href,'k2files.com/files')]");
			addObsoleteHost("aiotool\\.net\/\\w+","//a[contains(@href,'aiotool.net/')]");
			addObsoleteHost("xvideos\\.com\/files\/\\d+\/\\w+","//a[contains(@href,'xvideos.com/files')]");
			addObsoleteHost("filebling\\.com\/dl\/\\d+\/\\d+\/\\w+","//a[contains(@href,'filebling.com/dl')]");
			addObsoleteHost("loaded\\.it\/divx\/\\w+","//a[contains(@href,'loaded.it/divx')]");
			addObsoleteHost("uploadcell\\.com\/\\w+\/\\w+","//a[contains(@href,'uploadcell.com')]");
			addObsoleteHost("jakfile\\.com\/\\w+","//a[contains(@href,'jakfile.com/')]");
			addObsoleteHost("uploadshare\\.cz\/download\/\\w+\/\\w+","//a[contains(@href,'uploadshare.cz/download')]");
			addObsoleteHost("mangoshare\\.com\/\\w+","//a[contains(@href,'mangoshare.com')]");
			addObsoleteHost("ugotfile\\.com\/file\/\\d+\/\\w+","//a[contains(@href,'ugotfile.com/file')]");
			addObsoleteHost("filestab\\.com\/\\w+","//a[contains(@href,'filestab.com')]");
			addObsoleteHost("dotavi\\.com\/\\w+\/.","//a[contains(@href,'dotavi.com/')]");
			addObsoleteHost("crazyupload\\.com\/\\w+","//a[contains(@href,'crazyupload.com')]");
			addObsoleteHost("gaiafile\\.com\/\\w+","//a[contains(@href,'gaiafile.com')]");
			addObsoleteHost("sharejunky\\.com\/\\w+","//a[contains(@href,'sharejunky.com')]");
			addObsoleteHost("fileho\\.com\/download\/\\d+","//a[contains(@href,'fileho.com/download')]");
			addObsoleteHost("(?:bigandfree|BigAndFree)\\.com\/\\d+","//a[contains(@href,'bigandfree.com') or contains(@href,'BigAndFree.com')]");
			addObsoleteHost("bigfile\\.in\/\\w+","//a[contains(@href,'bigfile.in')]");
			addObsoleteHost("bigshare\\.eu\/download\\.php\\?id=","//a[contains(@href,'bigshare.eu/download.php')]");
			addObsoleteHost("dahosting\\.org\/dl\/\\w+","//a[contains(@href,'dahosting.org/dl')]");
			addObsoleteHost("digisofts\\.net\/\\w+","//a[contains(@href,'digisofts.net')]");
			addObsoleteHost("file4save\\.com\/\\w+\/\\w+","//a[contains(@href,'file4save.com')]");
			addObsoleteHost("filereactor\\.com\/\\w+","//a[contains(@href,'filereactor.com/')]");
			addObsoleteHost("filechip\\.com\/\\w+","//a[contains(@href,'filechip.com')]");
			addObsoleteHost("filescloud\\.com\/\\w+\/\\w+","//a[contains(@href,'filescloud.com')]");
			addObsoleteHost("saveqube\\.com\/getfile\/\\w+","//a[contains(@href,'saveqube.com/getfile')]");
			addObsoleteHost("www2\\.turboshare\\.de\/v\/\\d+","//a[contains(@href,'turboshare.de/v')]");
			addObsoleteHost("z-upload\\.com\/\\w+","//a[contains(@href,'z-upload.com')]");
			addObsoleteHost("youshare\\.com\/view\\.php","//a[contains(@href,'youshare.com/view')]");
			addObsoleteHost("jiffyupload\\.com\/\\w+","//a[contains(@href,'jiffyupload.com')]");
			addObsoleteHost("gigeshare\\.com\/preview\/\\w+","//a[contains(@href,'gigeshare.com')]");
			addObsoleteHost("datenklo\\.net\/dl","//a[contains(@href,'datenklo.net')]");
			addObsoleteHost("upload\\.dj\/download\\.php\\?id=\\w+","//a[contains(@href,'upload.dj/download.php')]");
			addObsoleteHost("loadfiles\\.in\/\\w+\/","//a[contains(@href,'loadfiles.in')]");
			addObsoleteHost("upit\\.to\/file:\\w+\/","//a[contains(@href,'upit.to/file')]");
			addObsoleteHost("zshare\\.net\/(?:download|video|audio)\/\\w+","//a[contains(@href,'zshare.net/')]");
			addObsoleteHost("refile\\.net\/f\/\\?\\w+","//a[contains(@href,'refile.net/f/')]");
			addObsoleteHost("dsfileshare\\.com\/download","//a[contains(@href,'dsfileshare.com/download')]");
			addObsoleteHost("sharesimple\\.net\/\\w{2}\/download","//a[contains(@href,'sharesimple.net')]");
			addObsoleteHost("(?:s\\d+\\.|)4files\\.net\/\\d+","//a[contains(@href,'4files.net')]");
			addObsoleteHost("odsiebie\\.com\/pokaz\/\\d+","//a[contains(@href,'odsiebie.com/pokaz')]");
			addObsoleteHost("filenavi\\.com\/direct\/\\w+","//a[contains(@href,'filenavi.com/direct')]");
			addObsoleteHost("3oof\\.com\/\\w+","//a[contains(@href,'3oof.com/')]");
			addObsoleteHost("meshwaar\\.com\/\\w+","//a[contains(@href,'meshwaar.com')]");
			addObsoleteHost("maxupload\\.com\/files\/\\w+","//a[contains(@href,'maxupload.com/files')]");
			addObsoleteHost("share\\.cx\/videos\/\\d+","//a[contains(@href,'share.cx/videos')]");
			addObsoleteHost("atserver\\.eu\/(?:\\w{2}\/|)download\/\\d+","//a[contains(@href,'atserver.eu')]");
			addObsoleteHost("file2upload\\.net\/download\/\\d+","//a[contains(@href,'file2upload.net/download')]");
			addObsoleteHost("filebling\\.com\/\\w+","//a[contains(@href,'filebling.com')]");
			addObsoleteHost("turboshare\\.(?:eu|com)\/files","//a[contains(@href,'turboshare.') and contains(@href,'/files')]");
			addObsoleteHost("rarhost\\.com\/download","//a[contains(@href,'rarhost.com/download')]");
			addObsoleteHost("isharehd\\.com\/\\w+","//a[contains(@href,'isharehd.com')]");
			addObsoleteHost("datenklo\\.net\/file\\.php\\?id=\\w+","//a[contains(@href,'datenklo.net/file.php')]");
			addObsoleteHost("file2share\\.biz\/download\\.php\\?id=\\w+","//a[contains(@href,'file2share.biz/download.php')]");
			addObsoleteHost("savefiles\\.net\/d\/\\w+\\.html","//a[contains(@href,'savefiles.net/d')]");
			addObsoleteHost("bestsharing\\.com\/files\/\\w+","//a[contains(@href,'bestsharing.com/files')]");
			addObsoleteHost("filecache\\.de\/\\d+","//a[contains(@href,'filecache.de/')]");
			addObsoleteHost("i741\\.com\/files\/\\w+","//a[contains(@href,'i741.com/files')]");
			addObsoleteHost("dataup\\.de\/\\d+","//a[contains(@href,'dataup.de')]");
			addObsoleteHost("fofly\\.com\/\\w+","//a[contains(@href,'fofly.com')]");
			addObsoleteHost("shareonall\\.com\/\\w+","//a[contains(@href,'shareonall.com')]");
			addObsoleteHost("sexuploader\\.com\/(?:|..\/)\\?[d|v]=\\w{8}","//a[contains(@href,'sexuploader.com')]");
			addObsoleteHost("mega(upload|video|rotic|porn)\\.com\/(?:|..\/)\\?[d|v|f]=\\w{8}","//a[contains(@href,'megaupload.com') or contains(@href,'megavideo.com') or contains(@href,'megaporn.com') or contains(@href,'megarotic.com')]");
			addObsoleteHost("uploadhyper\\.com\/file\/","//a[contains(@href,'uploadhyper.com')]");
			addObsoleteHost("filespawn\\.com\/file\/","//a[contains(@href,'filespawn.com')]");
			addObsoleteHost("caizzii\\.com\/(?:download|\\?file=)","//a[contains(@href,'caizzii.com')]");
			addObsoleteHost("volnyweb\\.cz\/files\/get\/[\\w-_]+","//a[contains(@href,'volnyweb.cz/files')]");
			addObsoleteHost("gotupload\\.com\/\\w+","//a[contains(@href,'gotupload.com/')]");
			addObsoleteHost("mooload\\.com\/new\/file\\.php\\?file=files\/\\d+\/\\d+","//a[contains(@href,'mooload.com/new/file')]");
			addObsoleteHost("z\\d+\\.zupload\\.com\/download\\.php\\?file=getfile&filepath=\\d+","//a[contains(@href,'zupload.com/download')]");
			addObsoleteHost("mytempdir\\.com\/\\d+","//a[contains(@href,'mytempdir.com/')]");
			addObsoleteHost("usershare\\.net\/\\w+","//a[contains(@href,'usershare.net/')]");
			addObsoleteHost("qshare\\.com\/get\/\\d+\/.","//a[contains(@href,'qshare.com/get')]");
			addObsoleteHost("filescash\\.net\/file\/\\d+","//a[contains(@href,'filescash.net/file')]");
			addObsoleteHost("metahyper\\.com\/\\w+","//a[contains(@href,'metahyper.com/')]");
			addObsoleteHost("combozip\\.com\/\\w+","//a[contains(@href,'combozip.com/')]");
			addObsoleteHost("anonstream\\.com\/get_\\w+","//a[contains(@href,'anonstream.com/get_')]");
			addObsoleteHost("x7\\.to\/\\w+","//a[contains(@href,'x7.to/')]");
			addObsoleteHost("uploadbox\\.com\/files\/\\w+","//a[contains(@href,'uploadbox.com/files')]");
			addObsoleteHost("(?:flyupload\\.)?(?:enterupload|flyupload)\\.com\/[\\?\\w]+","//a[contains(@href,'enterupload.com/') or contains(@href,'flyupload.com/')]");
			addObsoleteHost("filepoint\\.de\/dl\/\\w+","//a[contains(@href,'filepoint.de/dl')]");
			addObsoleteHost("icushare\\.com\/\\w+","//a[contains(@href,'icushare.com/')]");
			addObsoleteHost("oron\\.com\/\\w+","//a[contains(@href,'oron.com/')]");
			addObsoleteHost("mystream\\.to\/file\\-\\d+","//a[contains(@href,'mystream.to/file')]");
			addObsoleteHost("x-fs\\.com\/download\\.php\\?id=\\w+","//a[contains(@href,'x-fs.com/download')]");
			addObsoleteHost("srapid\\.eu\/\\w+","//a[contains(@href,'srapid.eu/')]");
			addObsoleteHost("shareshared\\.com\/\\w+","//a[contains(@href,'shareshared.com/')]");
			addObsoleteHost("sosame\\.cz\/\\w+","//a[contains(@href,'sosame.cz/')]");
			addObsoleteHost("s\\d+\\.filesdump\\.com\/file\/\\w+","//a[contains(@href,'filesdump.com/file')]");
			addObsoleteHost("2-klicks\\.de\/\\?d=\\w+","//a[contains(@href,'2-klicks.de/?d=')]");
			addObsoleteHost("silofiles\\.com\/file\/\\d+","//a[contains(@href,'silofiles.com/file')]");
			addObsoleteHost("upfile\\.in\/\\w+","//a[contains(@href,'upfile.in/')]");
			addObsoleteHost("filehook\\.com\/\\w+","//a[contains(@href,'filehook.com/')]");
			addObsoleteHost("mojofile\\.com\/\\w+","//a[contains(@href,'mojofile.com/')]");
			addObsoleteHost("cloudcache\\.cc\/\\w+","//a[contains(@href,'cloudcache.cc/')]");
			addObsoleteHost("1hostclick\\.com\/\\w+","//a[contains(@href,'1hostclick.com/')]");
			addObsoleteHost("4bytez\\.com\/\\w+","//a[contains(@href,'4bytez.com/')]");
			addObsoleteHost("uploadking\\.com\/\\w+","//a[contains(@href,'uploadking.com/')]");
			addObsoleteHost("nahraj\\.cz\/(?:content|down)\/\\w+","//a[contains(@href,'nahraj.cz/')]");
			addObsoleteHost("megarapid\\.eu\/files\/\\d+","//a[contains(@href,'megarapid.eu/files')]");
			addObsoleteHost("(?:fileserve|uploadstation)\\.com\/(?:file|list)\/\\w+","//a[contains(@href,'fileserve.com/') or contains(@href,'uploadstation.com/')]");
			addObsoleteHost("uploadhere\\.com\/\\w+","//a[contains(@href,'uploadhere.com/')]");
			addObsoleteHost("dualshare\\.com\/\\w+","//a[contains(@href,'dualshare.com/')]");
			addObsoleteHost("yourfilehost\\.com\/media","//a[contains(@href,'yourfilehost.com/media')]");
			addObsoleteHost("ftp2share\\.com\/file\/\\w+","//a[contains(@href,'ftp2share.com/file')]");
			addObsoleteHost("storeandserve\\.com\/download\/\\d+","//a[contains(@href,'storeandserve.com/download')]");
			addObsoleteHost("mountfile\\.com\/file(?:\/\\w+){2}","//a[contains(@href,'mountfile.com/file')]");
			addObsoleteHost("save\\.am\/files\/\\w+","//a[contains(@href,'save.am/files')]");
			addObsoleteHost("transitfiles\\.com\/dl\/\\w+","//a[contains(@href,'transitfiles.com/dl')]");
			addObsoleteHost("smartuploader\\.com\/file\\.php\\?f=\\d+","//a[contains(@href,'smartuploader.com/file.php?=')]");
			addObsoleteHost("skipfile\\.com\/\\w+","//a[contains(@href,'skipfile.com/')]");
			addObsoleteHost("stahnu\\.to\/[\\w\\?]+","//a[contains(@href,'stahnu.to/')]");
			addObsoleteHost("flyshare\.cz\/(?:stahni\/|)\\d+","//a[contains(@href,'flyshare.cz/')]");
			addObsoleteHost("(?:ddlani\\.me|ddlanime\\.com)\/\\w+","//a[contains(@href,'ddlani.me/') or contains(@href,'ddlanime.com/')]");
			addObsoleteHost("loadly\\.com\/\\w+","//a[contains(@href,'loadly.com/')]");
			addObsoleteHost("groovefile\\.com\/\\w+","//a[contains(@href,'groovefile.com/')]");
			addObsoleteHost("filezlot\\.com\/\\w+","//a[contains(@href,'filezlot.com/')]");
			addObsoleteHost("shareator\\.(?:net|com)\/\\w+","//a[contains(@href,'shareator.')]");
			addObsoleteHost("yabadaba\\.ru\/files\/","//a[contains(@href,'yabadaba.ru/files/')]");
			addObsoleteHost("rapidhide\\.com\/download\\.php\\?file=\\w+","//a[contains(@href,'rapidhide.com/download.php')]");
			addObsoleteHost("filejungle\\.com\/[fl]\/\\w+","//a[contains(@href,'filejungle.com/')]");
			addObsoleteHost("kewlshare\\.com\/dl\/\\d+","//a[contains(@href,'kewlshare.com/dl')]");
			addObsoleteHost("petandrive\\.com\/file\/\\w+","//a[contains(@href,'petandrive.com/file')]");
			addObsoleteHost("onionshare\\.com\/\\w+","//a[contains(@href,'onionshare.com/')]");
			addObsoleteHost("rapidable\\.com\/\\w+\/download\\.php\\?id=","//a[contains(@href,'rapidable.com/')]");
			addObsoleteHost("filesdump\\.com\/file\/\\w+\/\\d+","//a[contains(@href,'filesdump.com/file')]");
			addObsoleteHost("file2box\\.(?:net|com)\/\\w+","//a[contains(@href,'file2box.')]");
			addObsoleteHost("(?:filesonic|sharingmatrix|wupload)(?:\\.\\w+){1,2}\/(?:file|folder)\/\\w+","//a[contains(@href,'filesonic.') or contains(@href,'sharingmatrix.com') or contains(@href,'wupload.')]");
//			addObsoleteHost("wizzupload\\.com\/\\w+","//a[contains(@href,'wizzupload.com/')]");
			addObsoleteHost("bloggerarticles\\.com\/\\w+","//a[contains(@href,'bloggerarticles.com/')]");
			addObsoleteHost("mojedata\\.sk/","//a[contains(@href,'mojedata.sk/')]");
			addObsoleteHost("sharpfile\\.com\/\\w+","//a[contains(@href,'sharpfile.com/')]");
			addObsoleteHost("upgrand\\.com\/\\w+","//a[contains(@href,'upgrand.com/')]");
			addObsoleteHost("nasdilej\\.cz\/\\w+","//a[contains(@href,'nasdilej.cz/')]");
			addObsoleteHost("mediatack\\.cz\/stahuj/\\w+","//a[contains(@href,'mediatack.cz/stahuj/')]");
			addObsoleteHost("share-it\\.to\/file/\\w+","//a[contains(@href,'share-it.to/file/')]");
			addObsoleteHost("primeupload\\.com\/file/\\w+","//a[contains(@href,'primeupload.com/file/')]");    
			addObsoleteHost("(?:uploads\\.glumbo|glumbouploads)\\.com\/\\w+","//a[contains(@href,'uploads.glumbo.com') or contains(@href,'glumbouploads.com')]");   
			addObsoleteHost("filebeer\\.info\/\\w+","//a[contains(@href,'filebeer.info/')]");      
			addObsoleteHost("baberepublic\\.com\/link\/\\w+","//a[contains(@href,'baberepublic.com/link/')]");      
			addObsoleteHost("xtu\\.me\/\\w+","//a[contains(@href,'xtu.me/')]");   
			addObsoleteHost("sharebase\\.de\/files\/\\w+","//a[contains(@href,'sharebase.de/files/')]");         
			addObsoleteHost("filerobo\\.com\/\\w+","//a[contains(@href,'filerobo.com/')]");      
			addObsoleteHost("filevelocity\\.com\/\\w+","//a[contains(@href,'filevelocity.com/')]");   
			addObsoleteHost("filezpro\\.com\/\\w+","//a[contains(@href,'filezpro.com/')]");   
			addObsoleteHost("file4sharing\\.com\/\\w+","//a[contains(@href,'file4sharing.com/')]");   
			addObsoleteHost("cing\\.be\/\\w+","//a[contains(@href,'cing.be/')]");   
			addObsoleteHost("ufile\\.eu\/\\w+","//a[contains(@href,'ufile.eu/')]"); 
			addObsoleteHost("pigsonic\\.com\/\\w+","//a[contains(@href,'pigsonic.com/')]"); 
			addObsoleteHost("fileupped\\.com\/\\w+","//a[contains(@href,'fileupped.com/')]");   
			addObsoleteHost("sharerun\\.com\/\\w+","//a[contains(@href,'sharerun.com/')]");    
			addObsoleteHost("rapidslnare\\.com\/\\w+","//a[contains(@href,'rapidslnare.com/')]");  
			addObsoleteHost("monsteruploads\\.eu\/\\w+","//a[contains(@href,'monsteruploads.eu/')]"); 
			addObsoleteHost("b9bb\\.com\/\\w+","//a[contains(@href,'b9bb.com/')]");   
			addObsoleteHost("jamber\\.info\/\\w+","//a[contains(@href,'jamber.info/')]");     
			addObsoleteHost("(?:megaftp|MegaFTP)\\.com\/\\w+","//a[contains(@href,'megaftp.com/') or contains(@href,'MegaFTP.com/')]");   
			addObsoleteHost("desiupload\\.net\/\\?d=\\w+","//a[contains(@href,'desiupload.net/')]");   
			addObsoleteHost("file27\\.com\/\\w+","//a[contains(@href,'file27.com/')]");    
			addObsoleteHost("yastorage\\.com\/\\w+","//a[contains(@href,'yastorage.com/')]"); 
			addObsoleteHost("filehost\\.ws\/\\w+","//a[contains(@href,'filehost.ws/')]");    
			addObsoleteHost("copyload\\.com\/\\w+","//a[contains(@href,'copyload.com/')]"); 
			addObsoleteHost("venusfile\\.com\/\\w+","//a[contains(@href,'venusfile.com/')]"); 
			addObsoleteHost("aieshare\\.com\/\\w+","//a[contains(@href,'aieshare.com/')]"); 
			addObsoleteHost("fileza\\.net\/\\w+","//a[contains(@href,'fileza.net/')]"); 
			addObsoleteHost("filerose\\.com\/\\w+","//a[contains(@href,'filerose.com/')]"); 
			addObsoleteHost("squillion\\.com\/\\w+","//a[contains(@href,'squillion.com/')]"); 
			addObsoleteHost("fileprohost\\.com\/\\w+","//a[contains(@href,'fileprohost.com/')]"); 
			addObsoleteHost("bitbonus\\.com\/download\/\\w+","//a[contains(@href,'bitbonus.com/')]");
			addObsoleteHost("warserver\\.cz\/\\w+","//a[contains(@href,'warserver.cz/')]");
			addObsoleteHost("uload\\.to\/\\w+","//a[contains(@href,'uload.to/')]");
      addObsoleteHost("sharedbit\\.net\/\\w+","//a[contains(@href,'sharedbit.net/')]");
      addObsoleteHost("megaload\\.it\/\\w+","//a[contains(@href,'megaload.it/')]");
      addObsoleteHost("filewinds\\.com\/\\w+","//a[contains(@href,'filewinds.com/')]");
      addObsoleteHost("uploadcore\\.com\/\\w+","//a[contains(@href,'uploadcore.com/')]");
      addObsoleteHost("syfiles\\.com\/\\w+","//a[contains(@href,'syfiles.com/')]");
      addObsoleteHost("eyesfile\\.com\/\\w+","//a[contains(@href,'eyesfile.com/')]");
      addObsoleteHost("hotfile\\.com\/\\w+","//a[contains(@href,'hotfile.com/')]");
      addObsoleteHost("superupl\\.com\/\\w+","//a[contains(@href,'superupl.com/')]");
      addObsoleteHost("oteupload\\.com\/\\w+","//a[contains(@href,'oteupload.com/')]");
      addObsoleteHost("henchfile\\.com\/\\w+","//a[contains(@href,'henchfile.com/')]");
      addObsoleteHost("HenchFile\\.com\/\\w+","//a[contains(@href,'HenchFile.com/')]");
      addObsoleteHost("filegag\\.com\/\\w+","//a[contains(@href,'filegag.com/')]");
      addObsoleteHost("filedefend\\.com\/\\w+","//a[contains(@href,'filedefend.com/')]");
      addObsoleteHost("hotfiles\\.ws\/\\w+","//a[contains(@href,'hotfiles.ws/')]");
      addObsoleteHost("share-rapid\\.com\/\\w+","//a[contains(@href,'share-rapid.com/')]");
    //addObsoleteHost("sharerapid\\.cz\/\\w+","//a[contains(@href,'sharerapid.cz/')]");
      addObsoleteHost("rapids\\.cz\/\\w+","//a[contains(@href,'rapids.cz/')]");
      addObsoleteHost("share-credit\\.cz\/\\w+","//a[contains(@href,'share-credit.cz/')]");
      addObsoleteHost("share-central\\.cz\/\\w+","//a[contains(@href,'share-central.cz/')]");
      addObsoleteHost("share-ms\\.cz\/\\w+","//a[contains(@href,'share-ms.cz/')]");
      addObsoleteHost("share-net\\.cz\/\\w+","//a[contains(@href,'share-net.cz/')]");
      addObsoleteHost("srapid\\.cz\/\\w+","//a[contains(@href,'srapid.cz/')]");
      addObsoleteHost("share-rapid\\.cz\/\\w+","//a[contains(@href,'share-rapid.cz/')]");
      addObsoleteHost("wooupload\\.com\/\\w+","//a[contains(@href,'wooupload.com/')]");
      addObsoleteHost("megabitshare\\.com\/\\w+","//a[contains(@href,'megabitshare.com/')]");
      addObsoleteHost("uploking\\.com\/\\w+","//a[contains(@href,'uploking.com/')]");
      addObsoleteHost("esnips\\.com\/\\w+","//a[contains(@href,'esnips.com/')]");
      addObsoleteHost("uplly\\.com\/\\w+","//a[contains(@href,'uplly.com/')]");
      addObsoleteHost("ufox\\.com\/\\w+","//a[contains(@href,'ufox.com/')]");
      addObsoleteHost("clz\\.to\/\\w+","//a[contains(@href,'clz.to/')]");
      addObsoleteHost("cloudzer\\.net\/\\w+","//a[contains(@href,'cloudzer.net/')]");
      addObsoleteHost("cloudzer\\.com\/\\w+","//a[contains(@href,'cloudzer.com/')]");
      addObsoleteHost("extabit\\.com\/\\w+","//a[contains(@href,'extabit.com/')]");
      addObsoleteHost("uploadwaste\\.com\/\\w+","//a[contains(@href,'uploadwaste.com/')]");
			addObsoleteHost("247upload\\.com\/\\w+","//a[contains(@href,'uploadwaste.com/')]");
			addObsoleteHost("2download\\.de\/\\w+","//a[contains(@href,'2download.de/')]");
			addObsoleteHost("4fastfile\\.com\/\\w+","//a[contains(@href,'4fastfile.com/')]");
			addObsoleteHost("asixfiles\\.com\/\\w+","//a[contains(@href,'asixfiles.com/')]");
			addObsoleteHost("berofile\\.com\/\\w+","//a[contains(@href,'berofile.com/')]");
			addObsoleteHost("bigupload\\.com\/\\w+","//a[contains(@href,'bigupload.com/')]");
			addObsoleteHost("cepzo\\.com\/\\w+","//a[contains(@href,'cepzo.com/')]");
			addObsoleteHost("czshare\\.com\/\\w+","//a[contains(@href,'czshare.com/')]");
			addObsoleteHost("clouds\\.to\/\\w+","//a[contains(@href,'clouds.to/')]");
			addObsoleteHost("cobrashare\\.sk\/\\w+","//a[contains(@href,'cobrashare.sk/')]");
			addObsoleteHost("coraldrive\\.net\/\\w+","//a[contains(@href,'coraldrive.net/')]");
			addObsoleteHost("cyberlocker\\.ch\/\\w+","//a[contains(@href,'cyberlocker.ch/')]");
			addObsoleteHost("darkport\\.org\/\\w+","//a[contains(@href,'darkport.org/')]");
			addObsoleteHost("dark-uploads\\.com\/\\w+","//a[contains(@href,'dark-uploads.com/')]");
			addObsoleteHost("davvas\\.com\/\\w+","//a[contains(@href,'davvas.com/')]");
			addObsoleteHost("enigmashare\\.com\/\\w+","//a[contains(@href,'enigmashare.com/')]");
			addObsoleteHost("erofly\\.cz\/\\w+","//a[contains(@href,'erofly.cz/')]");
			addObsoleteHost("fastsonic\\.net\/\\w+","//a[contains(@href,'fastsonic.net/')]");
			addObsoleteHost("filebox\\.com\/\\w+","//a[contains(@href,'filebox.com/')]");
			addObsoleteHost("filecity\\.net\/\\w+","//a[contains(@href,'filecity.net/')]");
			addObsoleteHost("filedap\\.com\/\\w+","//a[contains(@href,'filedap.com/')]");
			addObsoleteHost("filedino\\.com\/\\w+","//a[contains(@href,'filedino.com/')]");
			addObsoleteHost("filedownloads\\.org\/\\w+","//a[contains(@href,'filedownloads.org/')]");
			addObsoleteHost("filefolks\\.com\/\\w+","//a[contains(@href,'filefolks.com/')]");
			addObsoleteHost("fileking\\.co\/\\w+","//a[contains(@href,'fileking.co/')]");
			addObsoleteHost("filemates\\.com\/\\w+","//a[contains(@href,'filemates.com/')]");
			addObsoleteHost("files\\.to\/\\w+","//a[contains(@href,'files.to/')]");
			addObsoleteHost("files2k\\.eu\/\\w+","//a[contains(@href,'files2k.eu/')]");
			addObsoleteHost("filesector\\.cc\/\\w+","//a[contains(@href,'filesector.cc/')]");
			addObsoleteHost("filesega\\.com\/\\w+","//a[contains(@href,'filesega.com/')]");
			addObsoleteHost("filesend\\.net\/\\w+","//a[contains(@href,'filesend.net/')]");
			addObsoleteHost("filestay\\.com\/\\w+","//a[contains(@href,'filestay.com/')]");
			addObsoleteHost("filestrum\\.com\/\\w+","//a[contains(@href,'filestrum.com/')]");
			addObsoleteHost("fileuplo\\.de\/\\w+","//a[contains(@href,'fileuplo.de/')]");
			addObsoleteHost("fileupup\\.com\/\\w+","//a[contains(@href,'fileupup.com/')]");
			addObsoleteHost("forunesia\\.com\/\\w+","//a[contains(@href,'forunesia.com/')]");
			addObsoleteHost("freeuploads\\.fr\/\\w+","//a[contains(@href,'freeuploads.fr/')]");
			addObsoleteHost("uploa\\.dk\/\\w+","//a[contains(@href,'uploa.dk/')]");
			addObsoleteHost("getthebit\\.com\/\\w+","//a[contains(@href,'getthebit.com/')]");
			addObsoleteHost("getzilla\\.net\/\\w+","//a[contains(@href,'getzilla.net/')]");
			addObsoleteHost("goldfile\\.eu\/\\w+","//a[contains(@href,'goldfile.eu/')]");
			addObsoleteHost("good\\.com\/\\w+","//a[contains(@href,'good.com/')]");
			addObsoleteHost("grupload\\.com\/\\w+","//a[contains(@href,'grupload.com/')]");
			addObsoleteHost("hellfile\\.com\/\\w+","//a[contains(@href,'hellfile.com/')]");
			addObsoleteHost("hipfile\\.com\/\\w+","//a[contains(@href,'hipfile.com/')]");
			addObsoleteHost("hitfile\\.com\/\\w+","//a[contains(@href,'hitfile.com/')]");
			addObsoleteHost("hulkfile\\.eu\/\\w+","//a[contains(@href,'hulkfile.eu/')]");
			addObsoleteHost("i-filez\\.com\/\\w+","//a[contains(@href,'i-filez.com/')]");
			addObsoleteHost("ifile\\.ws\/\\w+","//a[contains(@href,'ifile.ws/')]");
			addObsoleteHost("kupload\\.org\/\\w+","//a[contains(@href,'kupload.org/')]");
			addObsoleteHost("duckfile\\.net\/\\w+","//a[contains(@href,'duckfile.net/')]");
			addObsoleteHost("packupload\\.com\/\\w+","//a[contains(@href,'packupload.com/')]");
			addObsoleteHost("terafile\\.com\/\\w+","//a[contains(@href,'terafile.com/')]");
			addObsoleteHost("terafile\\.co\/\\w+","//a[contains(@href,'terafile.co/')]");
			addObsoleteHost("fileom\\.com\/\\w+","//a[contains(@href,'fileom.com/')]");
			addObsoleteHost("luckyshare\\.net\/\\w+","//a[contains(@href,'luckyshare.net/')]");
			addObsoleteHost("lemuploads\\.com\/\\w+","//a[contains(@href,'lemuploads.com/')]");
			addObsoleteHost("limelinx\\.com\/\\w+","//a[contains(@href,'limelinx.com/')]");
			addObsoleteHost("maxshare\\.pl\/\\w+","//a[contains(@href,'maxshare.pl/')]");
			addObsoleteHost("megarelease\\.org\/\\w+","//a[contains(@href,'megarelease.org/')]");
			addObsoleteHost("megashare\\.com\/\\w+","//a[contains(@href,'megashare.com/')]");
			addObsoleteHost("minus\\.com\/\\w+","//a[contains(@href,'minus.com/')]");
			addObsoleteHost("mlfat4arab\\.com\/\\w+","//a[contains(@href,'mlfat4arab.com/')]");
			addObsoleteHost("multishare\\.cz\/\\w+","//a[contains(@href,'multishare.cz/')]");
			addObsoleteHost("nirafile\\.com\/\\w+","//a[contains(@href,'nirafile.com/')]");
			addObsoleteHost("ok2upload\\.com\/\\w+","//a[contains(@href,'ok2upload.com/')]");
			addObsoleteHost("peejeshare\\.com\/\\w+","//a[contains(@href,'peejeshare.com/')]");
			addObsoleteHost("premiuns\\.org\/\\w+","//a[contains(@href,'premiuns.org/')]");
			addObsoleteHost("przeklej\\.net\/\\w+","//a[contains(@href,'przeklej.net/')]");
			addObsoleteHost("qkup\\.net\/\\w+","//a[contains(@href,'qkup.net/')]");
			addObsoleteHost("rapidupload\\.sk\/\\w+","//a[contains(@href,'rapidupload.sk/')]");
			addObsoleteHost("rockdizfile\\.com\/\\w+","//a[contains(@href,'rockdizfile.com/')]");
			addObsoleteHost("rocketfile\\.net\/\\w+","//a[contains(@href,'rocketfile.net/')]");
			addObsoleteHost("share-now\\.net\/\\w+","//a[contains(@href,'share-now.net/')]");
			addObsoleteHost("share76\\.com\/\\w+","//a[contains(@href,'share76.com/')]");
			addObsoleteHost("sharebees\\.com\/\\w+","//a[contains(@href,'sharebees.com/')]");
			addObsoleteHost("sharefiles\\.co\/\\w+","//a[contains(@href,'sharefiles.co/')]");
			addObsoleteHost("slingfile\\.com\/\\w+","//a[contains(@href,'slingfile.com/')]");
			addObsoleteHost("sms4file\\.com\/\\w+","//a[contains(@href,'sms4file.com/')]");
			addObsoleteHost("space4file\\.com\/\\w+","//a[contains(@href,'space4file.com/')]");
			addObsoleteHost("tigershare\\.net\/\\w+","//a[contains(@href,'tigershare.net/')]");
			addObsoleteHost("toucansharing\\.com\/\\w+","//a[contains(@href,'toucansharing.com/')]");
			addObsoleteHost("ubuntuone\\.com\/\\w+","//a[contains(@href,'ubuntuone.com/')]");
			addObsoleteHost("unextfiles\\.com\/\\w+","//a[contains(@href,'unextfiles.com/')]");
			addObsoleteHost("upaj\\.pl\/\\w+","//a[contains(@href,'upaj.pl/')]");
			addObsoleteHost("upfile\\.biz\/\\w+","//a[contains(@href,'upfile.biz/')]");
			addObsoleteHost("uploadbin\\.net\/\\w+","//a[contains(@href,'uploadbin.net/')]");
			addObsoleteHost("uploadic\\.com\/\\w+","//a[contains(@href,'uploadic.com/')]");
			addObsoleteHost("uploadinc\\.com\/\\w+","//a[contains(@href,'uploadinc.com/')]");
			addObsoleteHost("uploading4u\\.eu\/\\w+","//a[contains(@href,'uploading4u.eu/')]");
			addObsoleteHost("uploadjet\\.net\/\\w+","//a[contains(@href,'uploadjet.net/')]");
			addObsoleteHost("uploadorb\\.com\/\\w+","//a[contains(@href,'uploadorb.com/')]");
			addObsoleteHost("upthe\\.net\/\\w+","//a[contains(@href,'upthe.net/')]");
			addObsoleteHost("uptorch\\.com\/\\w+","//a[contains(@href,'uptorch.com/')]");
			addObsoleteHost("vidbox\\.yt\/\\w+","//a[contains(@href,'vidbox.yt/')]");
			addObsoleteHost("videozer\\.com\/\\w+","//a[contains(@href,'videozer.com/')]");
			addObsoleteHost("vreer\\.com\/\\w+","//a[contains(@href,'vreer.com/')]");
			addObsoleteHost("wallobit\\.com\/\\w+","//a[contains(@href,'wallobit.com/')]");
			addObsoleteHost("zooupload\\.com\/\\w+","//a[contains(@href,'zooupload.com/')]");
			addObsoleteHost("xerver\\.co\/\\w+","//a[contains(@href,'xerver.co/')]");
			addObsoleteHost("privatefiles\\.com\/\\w+","//a[contains(@href,'privatefiles.com/')]");
			addObsoleteHost("bitshare\\.com\/\\w+","//a[contains(@href,'bitshare.com/')]");
			addObsoleteHost("asfile\\.com\/\\w+","//a[contains(@href,'asfile.com/')]");
			addObsoleteHost("billionuploads\\.com\/\\w+","//a[contains(@href,'billionuploads.com/')]");
			addObsoleteHost("\\*{7,100}\/[\\w\\d]+","//a[contains(@href,'*******/')]");
			addObsoleteHost("filesaur\\.com\/\\w+","//a[contains(@href,'filesaur.com/')]");
			addObsoleteHost("rapidshare\\.com\/\\w+","//a[contains(@href,'rapidshare.com/')]");
			addObsoleteHost("rapidshare\\.ru\/\\w+","//a[contains(@href,'rapidshare.ru/')]");
			addObsoleteHost("filesfrog\\.net\/\\w+","//a[contains(@href,'filesfrog.net/')]");
			addObsoleteHost("4savefile\\.com\/\\w+","//a[contains(@href,'4savefile.com/')]");
			addObsoleteHost("bayfiles\\.com\/\\w+","//a[contains(@href,'bayfiles.com/')]");
			addObsoleteHost("bayfiles\\.net\/\\w+","//a[contains(@href,'bayfiles.net/')]");
			addObsoleteHost("dodane\\.pl\/\\w+","//a[contains(@href,'dodane.pl/')]");
			addObsoleteHost("dotsemper\\.com\/\\w+","//a[contains(@href,'dotsemper.com/')]");
			addObsoleteHost("egofiles\\.com\/\\w+","//a[contains(@href,'egofiles.com/')]");
			addObsoleteHost("epicshare\\.net\/\\w+","//a[contains(@href,'epicshare.net/')]");
			addObsoleteHost("fiberupload\\.net\/\\w+","//a[contains(@href,'fiberupload.net/')]");
			addObsoleteHost("filemonkey\\.in\/\\w+","//a[contains(@href,'filemonkey.in/')]");
			addObsoleteHost("filemonster\\.net\/\\w+","//a[contains(@href,'filemonster.net/')]");
			addObsoleteHost("filepom\\.com\/\\w+","//a[contains(@href,'filepom.com/')]");
			addObsoleteHost("filesbb\\.com\/\\w+","//a[contains(@href,'filesbb.com/')]");
			addObsoleteHost("fileshareup\\.com\/\\w+","//a[contains(@href,'fileshareup.com/')]");
			addObsoleteHost("filevice\\.com\/\\w+","//a[contains(@href,'filevice.com/')]");
			addObsoleteHost("gigaup\\.fr\/\\w+","//a[contains(@href,'gigaup.fr/')]");
			addObsoleteHost("inafile\\.com\/\\w+","//a[contains(@href,'inafile.com/')]");
			addObsoleteHost("isavelink\\.com\/\\w+","//a[contains(@href,'isavelink.com/')]");
			addObsoleteHost("loombo\\.com\/\\w+","//a[contains(@href,'loombo.com/')]");
			addObsoleteHost("megafiles\\.se\/\\w+","//a[contains(@href,'megafiles.se/')]");
			addObsoleteHost("migupload\\.com\/\\w+","//a[contains(@href,'migupload.com/')]");
			addObsoleteHost("mydisc\\.net\/\\w+","//a[contains(@href,'mydisc.net/')]");
			addObsoleteHost("nitrobits\\.com\/\\w+","//a[contains(@href,'nitrobits.com/')]");
			addObsoleteHost("potload\\.com\/\\w+","//a[contains(@href,'potload.com/')]");
			addObsoleteHost("redload\\.net\/\\w+","//a[contains(@href,'redload.net/')]");
			addObsoleteHost("shareprofi\\.com\/\\w+","//a[contains(@href,'shareprofi.com/')]");
			addObsoleteHost("sharesuper\\.info\/\\w+","//a[contains(@href,'sharesuper.info/')]");
			addObsoleteHost("sinhro\\.net\/\\w+","//a[contains(@href,'sinhro.net/')]");
			addObsoleteHost("speedfile\\.cz\/\\w+","//a[contains(@href,'speedfile.cz/')]");
			addObsoleteHost("speedshare\\.org\/\\w+","//a[contains(@href,'speedshare.org/')]");
			addObsoleteHost("storage.novoro\\.net\/\\w+","//a[contains(@href,'storage.novoro.net/')]");
			addObsoleteHost("swankshare\\.com\/\\w+","//a[contains(@href,'swankshare.com/')]");
			addObsoleteHost("swatupload\\.com\/\\w+","//a[contains(@href,'swatupload.com/')]");
			addObsoleteHost("upafile\\.com\/\\w+","//a[contains(@href,'upafile.com/')]");
			addObsoleteHost("uploadmachine\\.com\/\\w+","//a[contains(@href,'uploadmachine.com/')]");
			addObsoleteHost("uploadsat\\.com\/\\w+","//a[contains(@href,'uploadsat.com/')]");
			addObsoleteHost("upshared\\.com\/\\w+","//a[contains(@href,'upshared.com/')]");
			addObsoleteHost("usefile\\.com\/\\w+","//a[contains(@href,'usefile.com/')]");
			addObsoleteHost("yourfiles\\.to\/\\w+","//a[contains(@href,'yourfiles.to/')]");
			addObsoleteHost("zomgupload\\.com\/\\w+","//a[contains(@href,'zomgupload.com/')]");
			addObsoleteHost("~[\\w\\s~]*","//a[contains(@href,'//~') or contains(@href,'//www.~')]");
			addObsoleteHost("filemup\\.com\/\\w+","//a[contains(@href,'filemup.com/')]");
			addObsoleteHost("tuxfile\\.com\/\\w+","//a[contains(@href,'tuxfile.com/')]");
			addObsoleteHost("ultramegabit\\.com\/\\w+","//a[contains(@href,'ultramegabit.com/')]");
			addObsoleteHost("uploadto\\.us\/\\w+","//a[contains(@href,'uploadto.us/')]");
      addObsoleteHost("filecore\\.co\\.nz\/\\w+","//a[contains(@href,'filecore.co.nz/')]");
			addObsoleteHost("fileshare\\.in\\.ua\/\\w+","//a[contains(@href,'fileshare.in.ua/')]");
			addObsoleteHost("firedrive\\.com\/\\w+","//a[contains(@href,'firedrive.com/')]");
			addObsoleteHost("putlocker\\.com\/\\w+","//a[contains(@href,'putlocker.com/')]");
			addObsoleteHost("lumfile\\.com\/\\w+","//a[contains(@href,'lumfile.com/')]");
      addObsoleteHost("lumfile\\.se\/\\w+","//a[contains(@href,'lumfile.se/')]");
      addObsoleteHost("lumfile\\.eu\/\\w+","//a[contains(@href,'lumfile.eu/')]");
			addObsoleteHost("shared\\.com\/\\w+","//a[contains(@href,'shared.com/')]");
			addObsoleteHost("stahovadlo\\.cz\/\\w+","//a[contains(@href,'stahovadlo.cz/')]");
			addObsoleteHost("dizzcloud\\.com\/\\w+","//a[contains(@href,'dizzcloud.com/')]");
      addObsoleteHost("ddlstorage\\.com\/\\w+","//a[contains(@href,'ddlstorage.com/')]");
      addObsoleteHost("dataport\\.cz\/\\w+","//a[contains(@href,'dataport.cz/')]");
      addObsoleteHost("daj\\.to\/\\w+","//a[contains(@href,'daj.to/')]");
			addObsoleteHost("sockshare\\.com\/\\w+","//a[contains(@href,'sockshare.com/')]");
			addObsoleteHost("2drive\\.net\/\\w+","//a[contains(@href,'2drive.net/')]");
			addObsoleteHost("bl\\.st\/\\w+","//a[contains(@href,'bl.st/')]");
			addObsoleteHost("uncapped-downloads\\.com\/\\w+","//a[contains(@href,'uncapped-downloads.com/')]");
			addObsoleteHost("freakshare\\.net\/\\w+","//a[contains(@href,'freakshare.net/')]");
			addObsoleteHost("freakshare\\.com\/\\w+","//a[contains(@href,'freakshare.com/')]");
			
			
        // obsolete start			
		}
		//obsolete file hosts init end

		function addFileHost(linkRegex, isAliveRegex, isDeadRegex, isUnavaRegex, xpathEx, tryLoop, ispremRegex)
		{
			var host = new Array(7);
			host[0] = linkRegex;
			host[1] = isAliveRegex;
			host[2] = isDeadRegex;
			host[3] = isUnavaRegex;
			host[6] = ispremRegex;
			host[4] = xpathEx;
			tryLoop ? host[5] = true : host[5] = false;
			http_file_hosts.push(host);
		}
		if (GM_getValue("Check_megafileupload_dot_com_links", false))
		{
			addFileHost(
			"megafileupload\.com\/..\/file\/",
			'downloadbtn',
			'is not found',
			'optional--',
			"//a[contains(@href,'megafileupload.com')]");		
		}
		if (GM_getValue("Check_demo_dot_ovh_dot_eu_links", false))
		{
			addFileHost(
			"demo\\.ovh\\.eu\/\\w+\/\\w+",
			'download\\.gif"',
			'p_point">',
			'optional--',
			"//a[contains(@href,'demo.ovh.eu')]");
		}
		if (GM_getValue("Check_xkeepfile_dot_com_links", false))
		{
			addFileHost(
			"xkeepfile\.com\/\\w+",
			'File has been found|Click here to download',
			'File cannot be found|class="error">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'xkeepfile.com/') or contains(@href,'Gamesena.com/')]");
		}
		if (GM_getValue("Check_safelinking_dot_net_links", false))
		{
			addFileHost(
			"safelinking\\.net\/p\/\\w+",
			'color:green;"',
			'color:(?:red|orange);"',
			'color:(?:grey|brown);"',
			"//a[contains(@href,'safelinking.net/p/')]",
			true);
		}
/*		if (GM_getValue("Check_ultramegabit_dot_com_links", false))
		{
			addFileHost(
			"ultramegabit\\.com\/file\/details\/[\\w+-]",
			'name="recaptcha_response',
			'="/folder/add"|>File (?:not found|restricted|has been deleted)|<title>ULTRAMEGABIT</title>',
			'btn-large btn-danger">|Account limitation notice|502 Bad Gateway',
			"//a[contains(@href,'ultramegabit.com/file')]",
			true);
		} */
		if (GM_getValue("Check_fastshare_dot_cz_links", false))
		{
			addFileHost(
			"fastshare\\.cz\/\\d+\/\\w*",
			'dwntable">',
			'nebyla nalezena|nebola nájdená|nie została odnaleziona|color:red;font-weight:bold;border\\-style:dashed|<i class="fa fa-copyright"></i>',
			'optional--',
			"//a[contains(@href,'fastshare.cz')]");
		}
		if (GM_getValue("Check_fastshare_dot_org_links", false))
		{
			addFileHost(
			"[fF]ast[sS]hare\\.org\/download",
			'Download ">',
			'Diese Datei wurde wegen|wurde kein Dateiname',
			'optional--',
			"//a[contains(@href,'fastshare.org/download') or contains(@href,'FastShare.org/download')]");
		}
		if (GM_getValue("Check_partage_dash_facile_dot_com_links", false))
		{
			addFileHost(
			"partage-facile\.com\/\\w+",
			'class="title"><strong>|colspan="2"',
			'Page introuvable|class="alert-message',
			'optional--',
			"//a[contains(@href,'partage-facile.com')]");
		}
		if (GM_getValue("Check_rapidgator_dot_net_links", false))
		{
			addFileHost(
			"rapidgator\\.net\/file\/\\w+",
			'/download/AjaxStartTimer|not more than 1 file at a time|your hourly downloads limit|почасовой лимит скачиваний|limite horaire de téléchargements|límite de descargas en una hora',
			'Error 404|File not found|Error 500|Файл не найден|ファイルが探せませんでした|Fichier non trouvé|Archivo no encontrado|Select your plan',
			'optional--',
			"//a[contains(@href,'rapidgator.net/file')]",
			true
			);
		}
		if (GM_getValue("Check_relink_dot_us_links", false))
		{
			addFileHost(
			"relink\\.us\/(?:f\/\\w+|go\\.php\\?id=\\d+|view\\.php\\?id=\\d+)",
			'online_detail\\.png" alt="Status',
			'(?:offline|partially)_detail\\.png" alt="Status|File deleted',
			'unknown_detail\\.png" alt="Status',
			"//a[contains(@href,'relink.us/')]"
			);
		}
		if (GM_getValue("Check_uploadstube_dot_de_links", false))
		{
			addFileHost(
			"uploadstube\\.de\/download\\.php\\?file=\\d+",
			'div id="dl"',
			'Sie haben den Link falsch',
			'optional--',
			"//a[contains(@href,'uploadstube.de/download.php?file=')]"
			);
		}
		if (GM_getValue("Check_flyfiles_dot_net_links", false))
		{
			addFileHost(
			"flyfiles\\.net\/\\w+",
			'download_button"|"Download file"',
			'File not found!|Файл не найден',
			'optional--',
			"//a[contains(@href,'flyfiles.net/')]"
			);
		}
		if (GM_getValue("Check_wikiupload_dot_com_links", false))
		{
			addFileHost(
			"wikiupload\\.com\/\\w+",
			'download-button">',
			'Sorry, File not found',
			'optional--',
			"//a[contains(@href,'wikiupload.com/')]"
			);
		}
		if (GM_getValue("Check_hostuje_dot_net_links", false))
		{
			addFileHost(
			"hostuje\\.net\/file\\.php\\?id=\\w+",
			'file\\.php">|Pobierz Plik',
			'Podany plik nie zosta',
			'optional--',
			"//a[contains(@href,'hostuje.net/file')]"
			);
		}
		if (GM_getValue("Check_gettyfile_dot_ru_links", false))
		{
			addFileHost(
			"gettyfile\\.ru\/\\d+",
			'download\\.gif border',
			'<center><font size="3">',
			'optional--',
			"//a[contains(@href,'gettyfile.ru/')]"
			);
		}
		if (GM_getValue("Check_tufiles_dot_ru_links", false))
		{
			addFileHost(
			"(?:tufiles|turbob1t|failoobmenik|filesmail|firebit|dlbit|files\\.china\\-gsm|3aka4aem|file\\.piratski|mnogofiles|links-free|turbo-bit|turbosfiles)\\.\\w+\/\\w+",
			'download\\-file">',
			'col-1">\\s*<h1>',
			'optional--',
			"//a[contains(@href,'tufiles.ru/') or contains(@href,'turbob1t.ru/') or contains(@href,'filesmail.ru/') or contains(@href,'failoobmenik.ru/')"+
			" or contains(@href,'firebit.in/') or contains(@href,'dlbit.net/') or contains(@href,'files.china-gsm.ru/') or contains(@href,'3aka4aem.ru/')"+
			" or contains(@href,'file.piratski.ru/') or contains(@href,'mnogofiles.com/') or contains(@href,'links-free.ru/')"+
			" or contains(@href,'turbo-bit.ru/') or contains(@href,'turbosfiles.ru/')]"
			);
		}
		if (GM_getValue("Check_data_dot_hu_links", false))
		{
			addFileHost(
			"data\\.hu\/get\/\\d+\/",
			'download_box_button',
			'missing\\.php',
			'optional--',
			"//a[contains(@href,'data.hu/get')]",
			true
			);
		}
		if (GM_getValue("Check_filesmelt_dot_com_links", false))
		{
			addFileHost(
			"filesmelt\\.com\/dl\/\\w+",
			'(Your download is ready|Download File)',
			'Sorry, but your',
			'optional--',
			"//a[contains(@href,'filesmelt.com/dl')]"
			);
		}
		if (GM_getValue("Check_indowebster_dot_com_links", false))
		{
			addFileHost(
			"(?:files\\.)?indowebster\\.com\/download\/\\w+\/",
			'premiumBtn"',
			'errorMessage"',
			'optional--',
			"//a[contains(@href,'indowebster.com/download')]"
			);
		}
		if (GM_getValue("Check_superload_dot_cz_links", false))
		{
			addFileHost(
			"superload\\.cz\/dl\/\\w+",
			'icon-download">',
			'soubor nebyl nalezen',
			'optional--',
			"//a[contains(@href,'superload.cz/dl')]"
			);
		}
		if (GM_getValue("Check_hulkfile_dot_eu_links", false))
		{
			addFileHost(
			"(?:w\\.hulkfile\\.com|hulkfile\\.eu)\/\\w+",
			'op" value="download',
			'class="err">|width:500px;text-align:left;">',
			'optional--',
			"//a[contains(@href,'hulkfile.')]"
			);
		}
		if (GM_getValue("Check_easybytez_dot_com_links", false))
		{
			addFileHost(
			"easybytez\\.com\/\\w+",
			'op" value="download',
			'stop_error\\.gif',
			'optional--',
			"//a[contains(@href,'easybytez.com/')]"
			);
		}
		if (GM_getValue("Check_filestore_dot_com_dot_ua_links", false))
		{
			addFileHost(
			"filestore\\.com\\.ua\/\\?d=\\w+",
			'tdrow1>',
			'class=warn',
			'optional--',
			"//a[contains(@href,'filestore.com.ua/?d=')]"
			);
		}
		if (GM_getValue("Check_netkups_dot_com_links", false))
		{
			addFileHost(
			"netkups\\.com\/\\?d=\\w+",
			'submit">Continue',
			'page">File not found|deleted due to inactivity',
			'optional--',
			"//a[contains(@href,'netkups.com/?d=')]"
			);
		}
		if (GM_getValue("Check_openfile_dot_ru_links", false))
		{
			addFileHost(
			"openfile\\.ru\/(?:video\/|)\\d+",
			'videobox_left">',
			'blog_title">|not found on this server',
			'optional--',
			"//a[contains(@href,'openfile.ru/')]"
			);
		}
    	if (GM_getValue("Check_extmatrix_dot_com_links", false))
		{
			addFileHost(
			"extmatrix\\.com\/files\/\\w+",
			'div class="success"',
			'div class="error"',
			'optional--',
			"//a[contains(@href,'extmatrix.com/files')]"
			);
		}
		if (GM_getValue("Check_sendfiles_dot_nl_links", false))
		{
			addFileHost(
			"sendfiles\\.nl\/download.aspx\\?ID=\\w+",
			'content_lnkDownload',
			'error\\.aspx\\?',
			'optional--',
			"//a[contains(@href,'sendfiles.nl/download.aspx')]"
			);
		}
/*		if (GM_getValue("Check_sockshare_dot_com_links", false))
		{
			addFileHost(
			"sockshare\\.com\/file\/\\w+",
			'choose_speed">',
			'message t_0\'>',
			'optional--',
			"//a[contains(@href,'sockshare.com/file')]"
			);
		} */
		if (GM_getValue("Check_yourfilestore_dot_com_links", false))
		{
			addFileHost(
			"yourfilestore\\.com\/download\/\\d+\/",
			'download_data">',
			'may have been deleted|<h1>Sorry!<\/h1>',
			'optional--',
			"//a[contains(@href,'yourfilestore.com/download')]"
			);
		}
		if (GM_getValue("Check_nekaka_dot_com_links", false))
		{
			addFileHost(
			"nekaka\\.com\/d\/[\\w-]+",
			'downloadForm">',
			'invalid file link',
			'optional--',
			"//a[contains(@href,'nekaka.com/d')]"
			);
		}
		if (GM_getValue("Check_filebig_dot_net_links", false))
		{
			addFileHost(
			"filebig\\.net\/files\/\\w+",
			'downloadFile">',
			'<p>File not found<\/p>',
			'optional--',
			"//a[contains(@href,'filebig.net/files')]"
			);
		}
		if (GM_getValue("Check_gamefront_dot_com_links", false))
		{
			addFileHost(
			"files\\.filefront\\.com\/\/;\\d+;;",
			'downloadLink">',
			'File not found, you',
			'optional--',
			"//a[contains(@href,'files.filefront.com')]"
			);

			addFileHost(
			"gamefront\\.com\/files\/\\d+",
			'downloadLink">',
			'File not found, you',
			'optional--',
			"//a[contains(@href,'gamefront.com/files')]"
			);
		}
		if (GM_getValue("Check_hyperfileshare_dot_com_links", false))
		{
			addFileHost(
			"(?:download\\.|)hyperfileshare\\.com\/(?:download\\.php\\?code=|d\/)\\w+",
			'dnlLnk"',
			'already been deleted',
			'optional--',
			"//a[contains(@href,'hyperfileshare.com/download') or contains(@href,'hyperfileshare.com/d')]"
			);
		}
		if (GM_getValue("Check_hellupload_dot_com_links", false))
		{
			addFileHost(
			"hellupload\\.com\/\\w+",
			'<h3>Download File<br',
			'id="podstrona">|AVOID_IE_BUG',
			'optional--',
			"//a[contains(@href,'hellupload.com/')]"
			);
		}
		if (GM_getValue("Check_free_dash_uploading_dot_com_links", false))
		{
			addFileHost(
			"free\\-uploading\\.com\/\\w+",
			'op" value="download',
			'class="err">|width:500px;text-align:left;">',
			'optional--',
			"//a[contains(@href,'free-uploading.com/')]"
			);
		}
		if (GM_getValue("Check_fileape_dot_com_links", false))
		{
			addFileHost(
			"fileape\\.com\/download\\-",
			'button_dl\\.png',
			'does not exist\\.',
			'optional--',
			"//a[contains(@href,'fileape.com/')]"
			);
		}
		if (GM_getValue("Check_uppit_dot_com_links", false))
		{
			addFileHost(
			"(?:uppit\\.com|up\\.ht)\/\\w+",
			'op" value="download',
			'class="err">|style="width:500px;text-align:left;"|fish-404\\.png"',
			'optional--',
			"//a[contains(@href,'up.ht/') or contains(@href,'uppit.com/')]",
			true
			);
		}
		if (GM_getValue("Check_nosupload_dot_com_links", false))
		{
			addFileHost(
			"nosupload\\.com\/(?:\\?d=)?\\w+",
			'op" value="download',
			'>File Not Found<',
			'optional--',
			"//a[contains(@href,'nosupload.com')]",
			true
			);
		}
		if (GM_getValue("Check_filesin_dot_com_links", false))
		{
			addFileHost(
			"filesin\\.com\/\\w+\/download\\.html",
			'download_area">',
			'error_note">',
			'optional--',
			"//a[contains(@href,'filesin.com/')]",
			true
			);
		}
		if (GM_getValue("Check_nowdownload_dot_eu_links", false))
		{
			addFileHost(
			"nowdownload\\.eu\/dl\/\\w+",
			'alert-success"',
			'This file does not exist!',
			'The file is being transfered',
			"//a[contains(@href,'nowdownload.eu/dl')]"
			);
		}
		if (GM_getValue("Check_axifile_dot_com_links", false))
		{
			addFileHost(
			"axifile\\.com(?:\/\w(2))?\/\\??\\w+",
			'Dbutton_big"',
			'download\\-error\\.php',
			'optional--',
			"//a[contains(@href,'axifile.com/')]"
			);
		}
		if (GM_getValue("Check_hulkshare_dot_com_links", false))
		{
			addFileHost(
			"hulkshare\.com\/\\w+",
			'download\.sam\.png|This is a private file|id="filename',
			'File does not exist|fingerprint protected copyright',
			'optional--',
			"//a[contains(@href,'hulkshare.com')]"
			);
		}
		if (GM_getValue("Check_turbobit_dot_net_links", false)) //folders
		{
			addFileHost(
			"turbobit\\.(?:net|pl)\/download\/folder\/\\d+",
			'col-1">\\s*<s',
			'col-1">\\s*<h',
			'optional--',
			"//a[contains(@href,'turbobit.') and contains(@href,'download/folder')]"
			);
		}
		if (GM_getValue("Check_hitfile_dot_net_links", false)) //folders
		{
			addFileHost(
			"hitfile\\.net\/download\/folder\/\\d+",
			'content">\\s*<s',
			'content">\\s*<h',
			'optional--',
			"//a[contains(@href,'hitfile.net/download/folder')]"
			);
		}
		if (GM_getValue("Check_netload_dot_in_links", false)) //folders
		{
			addFileHost(
			"netload\\.in\/folder\\.php\\?folder_id=\\w+",
			'images\/online\\.gif',
			'InPage_Error"',
			'optional--',
			"//a[contains(@href,'netload.in/folder.php')]"
			);
		}
		if (GM_getValue("Check_movshare_dot_net_links", false))
		{
			addFileHost(
			"movshare\\.net\\/video\\/\\w+",
			'optional--"',
			'no longer exists',
			'optional--',
			"//a[contains(@href,'movshare.net/video')]"
			);
		}
		if (GM_getValue("Check_plunder_dot_com_links", false))
		{
			addFileHost(
			"plunder\.com\/\\w+",
			'x\/download\\.gif',
			'404 - File or directory not found.',
			'optional--',
			"//a[contains(@href,'plunder.com')]"
			);
		}
		if (GM_getValue("Check_mafiastorage_dot_com_links", false))
		{
			addFileHost(
			"mafiastorage\\.com\/\\w+",
			'op" value="download',
			'class="err">|style="width:500px;text-align:left;"',
			'optional--',
			"//a[contains(@href,'mafiastorage.com/')]"
			);
		}
		if (GM_getValue("Check_uploadspace_dot_pl_links", false))
		{
			addFileHost(
			"uploadspace\.pl\/plik\\w+",
			'Downloading .+? \\|',
			'Downloading a file',
			'optional--',
			"//a[contains(@href,'uploadspace.pl/plik')]"
			);
		}
		if (GM_getValue("Check_uploadingit_dot_com_links", false))
		{
			addFileHost(
			"uploadingit\\.com\/file\/\\w+",
			'downloadTitle">',
			'deleteContent">',
			'optional--',
			"//a[contains(@href,'uploadingit.com/file')]"
			);
		}
   	if (GM_getValue("Check_rghost_dot_net_links", false))
		{
			addFileHost(
			"rghost\.(?:net|ru)\/(?:|private\/)\\d+",
			'download_link|btn large download"',
			'file is restricted|File is deleted|503 Service Unavailable',
			'File was deleted',
			"//a[contains(@href,'rghost.')]"
			);
		}
		if (GM_getValue("Check_xdisk_dot_cz_links", false))
		{
			addFileHost(
			"xdisk\\.cz\/(?:..\/)?download\\.php\\?id=\\w+",
			'">Staženo:\\s*<\/span>',
			'Soubor, který hledáte nenalezen',
			'optional--',
			"//a[contains(@href,'xdisk.cz/')]"
			);
		}
		if (GM_getValue("Check_expressleech_dot_com_links", false))
		{
			addFileHost(
			"expressleech\.com\/\\w+",
			'src="/img/Download.gif"|var _gaq =',
			'var rr =|403 Forbidden',
			'optional--',
			"//a[contains(@href,'expressleech.com')]");
		}
		if (GM_getValue("Check_2downloadz_dot_com_links", false))
		{
			addFileHost(
			"2downloadz\.com\/\\w+",
			'color="#848484|src="images/Download.png"|color:#238DCA',
			'color="#006DCC|File error',
			'optional--',
			"//a[contains(@href,'2downloadz.com')]");
		}
		if (GM_getValue("Check_mightyupload_dot_com_links", false))
		{
			addFileHost(
			"mightyupload\.com\/\\w+",
			'background:#ccc;text-align|CONTENT="Download File"',
			'style="background:#eee|var rr =|File Not Found',
			'error-code">1010',
			"//a[contains(@href,'mightyupload.com')]");
		}
		if (GM_getValue("Check_k2s_dot_cc_links", false))
		{
			addFileHost(
			"k2s\.cc\/file\/\\w+",
			'Click here for slow download with|class="btn" id="yw0"|onclick="download',
			'Error 404|class="errorSummary">|this file is blocked or deleted|>404 Not Found<|To avoid damaged files|This file is no longer available',
			'please try later',
			//'optional--',
			"//a[contains(@href,'k2s.cc')]");
		}
		if (GM_getValue("Check_keep2share_dot_cc_links", false))
		{
			addFileHost(
			"keep2share\.cc\/file\/\\w+",
            'Click here for slow download with|class="btn" id="yw0"|onclick="download',
			'Error 404|class="errorSummary">|this file is blocked or deleted|>404 Not Found<|To avoid damaged files|This file is no longer available',
			'please try later',
			//'premium only',
			"//a[contains(@href,'keep2share.cc')]");
		}
		if (GM_getValue("Check_keep2s_dot_cc_links", false))
		{
			addFileHost(
			"keep2s\.cc\/file\/\\w+",
			'Click here for slow download with|class="btn" id="yw0"|onclick="download',
			'Error 404|class="errorSummary">|this file is blocked or deleted|>404 Not Found<|To avoid damaged files|This file is no longer available',
			'please try later',
			//'optional--',
			"//a[contains(@href,'keep2s.cc')]");
		}
		if (GM_getValue("Check_keep2share_dot_com_links", false))
		{
			addFileHost(
			"keep2share\.com\/file\/\\w+",
            'Click here for slow download with|class="btn" id="yw0"|onclick="download',
			'Error 404|class="errorSummary">|this file is blocked or deleted|>404 Not Found<|To avoid damaged files|This file is no longer available',
			'please try later',
			//'optional--',
			"//a[contains(@href,'keep2share.com')]");
		}
		if (GM_getValue("Check_anysend_dot_com_links", false))
		{
			addFileHost(
			"anysend\.com\/\\w+",
			'var openCalled=false;|content="noindex"',
			'_trackPageview',
			'optional--',
			"//a[contains(@href,'anysend.com')]");
		}
		if (GM_getValue("Check_datafile_dot_com_links", false))
		{
			addFileHost(
			"datafile\.com\/\\w+",
			'var captchaPanel',
			'ErrorCode|ErrorCode 0: Invalid Link|btn-orange" href="#"', //class="error-msg"
			'You are downloading another file at this moment|You exceeded your free|Site Maintenance',
			//'optional--',
			"//a[contains(@href,'datafile.com')]",
			true);	
		}
		if (GM_getValue("Check_upstore_dot_net_links", false))
		{
			addFileHost(
			"upstore\.net\/\\w+",
			'style="margin-top: 20px">|style="text-align:center; margin: 20px 0 100px;">',
			'File not found|onload="redirect|class="error">',
			'optional--',
			"//a[contains(@href,'upstore.net')]");
		}
		if (GM_getValue("Check_upsto_dot_re_links", false))
		{
			addFileHost(
			"upsto\.re\/\\w+",
			'style="margin-top: 20px">|style="text-align:center; margin: 20px 0 100px;">',
			'File not found|onload="redirect|class="error">',
			'optional--',
			"//a[contains(@href,'upsto.re')]");
		}
		if (GM_getValue("Check_speedy_dot_sh_links", false))
		{
			addFileHost(
			"speedy\.sh\/\\w+",
			'bgcolor=#eeeeee|class="addthis',
			'File not found|downloadfilenamenotfound>',
			'optional--',
			"//a[contains(@href,'speedy.sh')]");
		}
		if (GM_getValue("Check_sanshare_dot_com_links", false))
		{
			addFileHost(
			"sanshare\.com\/\\w+",
			'SANSHARE_TOPBANNER|offset-1"><h3><b>Download File',
			'offset-1"><b>File Not Found<|width:500px;text-align',
			'optional--',
			"//a[contains(@href,'sanshare.com')]");
		}
		if (GM_getValue("Check_kingfiles_dot_net_links", false))
		{
			addFileHost(
			"kingfiles\.net\/\\w+",
			'img/spriteBanner.png|If you are the owner of this file',
			'var rr =|"description" CONTENT="Download File ">|<div style="width:500px;text-align:left;">|The file was removed by administrator',
			'optional--',
			"//a[contains(@href,'kingfiles.net')]");
		}
		if (GM_getValue("Check_uploadhero_dot_co_links", false))
		{
			addFileHost(
			"uploadhero\\.co\/dl\/\\w+",
			'class="nom_de_fichier"|Unlimited downloads|Estimated download time|Lien de téléchargement"',
			'not available on our server|pas disponible sur nos serveurs|Le lien du fichier est incorrect',
			'optional--',
			"//a[contains(@href,'uploadhero.co/dl')]"
			);
		}
		if (GM_getValue("Check_secureupload_dot_eu_links", false))
		{
			addFileHost(
			"secureupload\\.eu\/\\w+",
			'Downloading',
			'cannot be found|File Not Found|could not be found',
			'optional--',
			"//a[contains(@href,'secureupload.eu')]"
			);
		}
		if (GM_getValue("Check_ge_dot_tt_links", false))
		{
			addFileHost(
			"ge\.tt\/\\w+",
			'downloads pic',
			'is NOT the same as',
			'optional--',
			"//a[contains(@href,'ge.tt')]");
		}
    if (GM_getValue("Check_filefactory_dot_com_links", false))
		{
			addFileHost(
			"filefactory\.com\/\\w+",
			'div id="file_holder"|download.css',
			'File Removed|Invalid Download Link|File Unavailable|Server Failed|Datei entfernt|This file has been removed|Invalid Download Link',
			'Server Maintenance|temporarily overloaded',
			//'optional--',
			"//a[contains(@href,'filefactory.com')]");
		}
		if (GM_getValue("Check_filesflash_dot_net_links", false))
		{
			addFileHost(
			"filesflash\.net\/\\w+",
			'align:right">Filename:',
			'class="msg">',
			'optional--',
			"//a[contains(@href,'filesflash.net')]");
		}
		if (GM_getValue("Check_rapidgator_dot_net_links", false)) //folders
		{
			addFileHost(
			"rapidgator\\.net\/folder\/\\w+",
			'href="/folder/',
			'class="empty|Folder not found|Carpeta no encontrada|Dossier non trouvé|Папка не найдена',
			'optional--',
			"//a[contains(@href,'rapidgator.net/folder')]",
			true
			);
		}
		if (GM_getValue("Check_salefiles_dot_com_links", false))
		{
			addFileHost(
			"salefiles\.com\/\\w+",
			'<Title>Download|CONTENT="Download',
			'font:15px Arial|background:#eee;',
			'optional--',
			"//a[contains(@href,'salefiles.com')]");
		}
		if (GM_getValue("Check_megairon_dot_net_links", false))
		{
			addFileHost(
			"megairon\.net\/\\w+",
			'border: 5px #ffeb90 solid;',
			'CONTENT="Download File ">|var rr =',
			'optional--',
			"//a[contains(@href,'megairon.net')]");
		}
		if (GM_getValue("Check_datoid_dot_cz_links", false))
		{
			addFileHost(
			"datoid\.cz\/\\w+",
			'btn-download|class="icon-download-large"',
			'Stránka nenalezena|error-404|Soubor byl zablokován',
			'optional--',
			"//a[contains(@href,'datoid.cz')]");
		}
		if (GM_getValue("Check_stiahni_dot_si_links", false))
		{
			addFileHost(
			"stiahni\.si\/\\w+",
			'report_icon.png"|slow-download-button',
			'none.png|deleted|<h2>Error 500</h2>',
			'optional--',
			"//a[contains(@href,'stiahni.si')]");
		}
		if (GM_getValue("Check_cloudstor_dot_es_links", false))
		{
			addFileHost(
			"cloudstor\.es\/\\w+",
			'"btn_download"',
			'404: Page Not Found',
			'optional--',
			"//a[contains(@href,'cloudstor.es')]");
		}
		if (GM_getValue("Check_streamfile_dot_com_links", false))
		{
			addFileHost(
			"streamfile\.com\/\\w+",
			'class="btn',
			'class="green-btn',
			'optional--',
			"//a[contains(@href,'streamfile.com')]");
		}
		if (GM_getValue("Check_eyesfile_dot_ca_links", false))
		{
			addFileHost(
			"eyesfile\.ca\/\\w+",
			'value="Get Link',
			'var rr =',
			'optional--',
			"//a[contains(@href,'eyesfile.ca')]");
		}
		if (GM_getValue("Check_filemoney_dot_com_links", false))
		{
			addFileHost(
			"filemoney\.com\/\\w+",
			'og:title',
			'404 Not Found|<Title>FileMoney|File Not Found',
			'error-code">1010',
			"//a[contains(@href,'filemoney.com')]");
		}
		if (GM_getValue("Check_uploadboy_dot_com_links", false))
		{
			addFileHost(
			"uploadboy\.com\/\\w+",
			'width="740">|method_free',
			'var rr =|background:#ffffff|not be found|file was removed',
			'optional--',
			"//a[contains(@href,'uploadboy.com')]");
		}
		if (GM_getValue("Check_speedshare_dot_eu_links", false))
		{
			addFileHost(
			"speedshare\.eu\/\\w+",
			'favicon.png|color:#3d87c0|cross.png"',
			'var rr =|File Not Found|style="background:#eee',
			'optional--',
			"//a[contains(@href,'speedshare.eu')]");
		}
		if (GM_getValue("Check_unlimitzone_dot_com_links", false))
		{
			addFileHost(
			"unlimitzone\.com\/\\w+",
			'name="method_free',
			'var rr =|File Not Found|removed by administrator|class="err">',
			'optional--',
			"//a[contains(@href,'unlimitzone.com')]");
		}	
		if (GM_getValue("Check_rioupload_dot_com_links", false))
		{
			addFileHost(
			"rioupload\.com\/\\w+",
			'sell.jpg',
			'var rr =',
			'optional--',
			"//a[contains(@href,'rioupload.com')]");
		}
		if (GM_getValue("Check_rg_dot_to_links", false))
		{
			addFileHost(
			"rg\.to\/\\w+",
			'/download/AjaxStartTimer|not more than 1 file at a time|your hourly downloads limit|почасовой лимит скачиваний|limite horaire de téléchargements|límite de descargas en una hora',
			'Error 404|File not found|Select your plan',
			'optional--',
			//'optional--',
			"//a[contains(@href,'rg.to')]");
		}
		if (GM_getValue("Check_jumbofiles_dot_org_links", false))
		{
			addFileHost(
			"jumbofiles\.org\/\\w+",
			'H71C5.png|class="downloadtitle">',
			'var swfu|ViewSourceBIN.png',
			'optional--',
			"//a[contains(@href,'jumbofiles.org')]");
		}
		if (GM_getValue("Check_fshare_dot_vn_links", false))
		{
			addFileHost(
			"fshare\\.vn\/file\/\\w+",
			'action="#download"|left; width: 330px;">|class="bt_down"',
			'không tồn tại|class="color_red m_t_50"',
			'optional--',
			"//a[contains(@href,'fshare.vn/file')]",
			true
			);
		}
		if (GM_getValue("Check_spaceforfiles_dot_com_links", false))
		{
			addFileHost(
			"spaceforfiles\.com\/\\w+",
			'btn_slowspeed_b.jpg|value="download1|class="btn_blue',
			'var rr =|AVOID_IE_BUG',
			'optional--',
			"//a[contains(@href,'spaceforfiles.com')]");
		}
		if (GM_getValue("Check_google_dot_com_links", false))
		{
			addFileHost(
			"google\\.com\/file\/\\w+",
			'content="!">|color:#2d2d2d',
			'12pt; font-weight:|class="errorMessage"|F0F6FF',
			'optional--',
			"//a[contains(@href,'google.com/file')]",
			true
			);
		}
		if (GM_getValue("Check_google_dot_com_links", false))
		{
			addFileHost(
			"docs.google.com\/\\w+",
			'content="!">|color:#2d2d2d',
			'12pt; font-weight:|class="errorMessage"|F0F6FF|Error 404',
			'optional--',
			"//a[contains(@href,'docs.google.com')]",
			true
			);
		}
		if (GM_getValue("Check_google_dot_com_links", false))
		{
			addFileHost(
			"drive.google.com\/\\w+",
			'content="!">|color:#2d2d2d|id="uc-download-link',
			'12pt; font-weight:|class="errorMessage"|F0F6FF|Error 404',
			'optional--',
			"//a[contains(@href,'drive.google.com')]",
			true
			);
		}
		if (GM_getValue("Check_up_dot_media1fire_dot_com_links", false))
		{
			addFileHost(
			"up.media1fire\.com\/\\w+",
			'class="addthis_|value="download',
			'var rr =|AVOID_IE_BUG|<div style="width:500px;text-align:left;">',
			'optional--',
			"//a[contains(@href,'up.media1fire.com')]");
		}
		if (GM_getValue("Check_depfile_dot_com_links", false))
		{
			addFileHost(
			"depfile\.com\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|deleted by the owner|Invalid Link',
			'optional--',
			"//a[contains(@href,'depfile.com')]");
		}
		if (GM_getValue("Check_go4up_dot_com_links", false))
		{
			addFileHost(
			"go4up\.com\/\\w+",
			'style="width: 100%;">|value="Access|download_line',
			'<title>GO4UP|dmca',
			'optional--',
			"//a[contains(@href,'go4up.com')]");
		}	
		if (GM_getValue("Check_redbunker_dot_net_links", false))
		{
			addFileHost(
			"redbunker\.net\/\\w+",
			'dload.png|rowspan="3">|yep.gif',
			'CONTENT="RedBunker|#D3D3D3;|color:#d33|AVOID_IE_BUG',
			'optional--',
			"//a[contains(@href,'redbunker.net')]");
		}
		if (GM_getValue("Check_divxpress_dot_com_links", false))
		{
			addFileHost(
			"divxpress\.com\/\\w+",
			'btn_download|logo.png"',
			'AVOID_IE_BUG|var rr =',
			'optional--',
			"//a[contains(@href,'divxpress.com')]");
		}
		if (GM_getValue("Check_anafile_dot_com_links", false))
		{
			addFileHost(
			"anafile\.com\/\\w+",
			'width="881" valign="top|color="#800080"',
			'style="width:500px;text-align:left;">|file was deleted|AVOID_IE_BUG',
			'optional--',
			"//a[contains(@href,'anafile.com')]");
		}
		if (GM_getValue("Check_uploadable_dot_ch_links", false))
		{
			addFileHost(
			"uploadable\\.ch\/file\/\\w+",
			'captcha.js"|payment.js"|class="btn_download"',
			'<div class="icon_err">|<div class="errorBox">|"error_arrow">',
			'optional--',
			"//a[contains(@href,'uploadable.ch/file')]",
			true
			);
		}
		if (GM_getValue("Check_arabloads_dot_com_links", false))
		{
			addFileHost(
			"arabloads\.com\/\\w+",
			'name="method_free"|name="method_premium"',
			'background:#eee;font:15px Arial;">|AVOID_IE_BUG|Verdana;padding:3px;">Error',
			'optional--',
			"//a[contains(@href,'arabloads.com')]");
		}
		if (GM_getValue("Check_sharerepo_dot_com_links", false))
		{
			addFileHost(
			"sharerepo\.com\/\\w+",
			'name="method_free"',
			'var public_on=|The file you were looking for could not be found',
			'optional--',
			"//a[contains(@href,'sharerepo.com')]");
		}
		if (GM_getValue("Check_sfshare_dot_se_links", false))
		{
			addFileHost(
			"sfshare\.se\/\\w+",
			'id="btn_download"|class="btn btn-primary txt-bold" value="',
			'AVOID_IE_BUG|var rr =|style="width:500px;text-align:left;">|Reason for deletion|The file was removed',
			'optional--',
			"//a[contains(@href,'sfshare.se')]");
		}
		if (GM_getValue("Check_files_dot_fm_links", false))
		{
			addFileHost(
			"files\.fm\/\\w+",
			'dl.png"|background-color: transparent',
			'margin: 40px 40px|background: none;',
			'optional--',
			"//a[contains(@href,'files.fm')]");
		}
		if (GM_getValue("Check_koofile_dot_com_links", false))
		{
			addFileHost(
			"koofile\.com\/\\w+",
			'value="download1">|name="method_free"',
			'class="overview-content c_text-box ">|style="padding-top:3px;">|class="rt1 c">',
			'optional--',
			"//a[contains(@href,'koofile.com')]");
		}
		if (GM_getValue("Check_vidxden_dot_com_links", false))
		{
			addFileHost(
			"vidxden\\.com\/\\w+",
			'Continue to Video"',
			'No such file',
			'optional--',
			"//a[contains(@href,'vidxden.com')]"
			);
		}
		if (GM_getValue("Check_muchshare_dot_net_links", false))
		{
			addFileHost(
			"muchshare\\.net\/\\w+",
			'id="btn_download"',
			'File Not Found|width: 500px; text-align: left;',
			'optional--',
			"//a[contains(@href,'muchshare.net')]"
			);
		}
		if (GM_getValue("Check_daten_dash_hoster_dot_de_links", false))
		{
			addFileHost(
			"(?:daten-hoster\\.de\/file\/\\w+|filehosting\\.org\/file\/\\w+|xtraupload\\.de\/\\?d=\\w+)",
			'Details zur Datei|Details page',
			'Jetzt hochladen|upload now',
			'optional--',
			"//a[contains(@href,'daten-hoster.de/file') or contains(@href,'filehosting.org/file') or contains(@href,'xtraupload.de')]"
			);
		}
		if (GM_getValue("Check_upload_dash_il_dot_net_links", false))
		{
			addFileHost(
			"(?:upload-il|przeslij)\.net\/(?:en|he|ar|ru|)\/?\\w+",
			'downloadbtn"',
			'DL_FileNotFound',
			'optional--',
			"//a[contains(@href,'upload-il.net') or contains(@href,'przeslij.net')]"
			);
		}
		if (GM_getValue("Check_fileflyer_dot_com_links", false))
		{
			addFileHost(
			"fileflyer\.com\/view\/\\w+",
			'(?:dwl|locked)btn"',
			'error.gif"|link">Removed|removedlink">',
			'optional--',
			"//a[contains(@href,'fileflyer.com')]"
			);
		}
		if (GM_getValue("Check_filestore_dot_to_links", false))
		{
			addFileHost(
			"filestore\.to\/\\?d=\\w+",
			'"downloading"',
			'Datei wurde nicht gefunden',
			'optional--',
			"//a[contains(@href,'filestore.to')]"
			);
		}
		if (GM_getValue("Check_easy_dash_share_dot_com_links", false))
		{
			addFileHost(
			"(?:w\\d*\.|)(?:crocko|easy-share)\\.com\/.",
			'fz24">Download|class="pl15">',
			'msg-err"|the page you\'re looking for|1>400 Bad Request<|class="search_result">|Searching for file|Information is not available|name="keywords" content="">|<title>Crocko.com 404',
			'optional--',
			"//a[contains(@href,'easy-share.com') or contains(@href,'crocko.com')]"
			);
		}
		if (GM_getValue("Check_burnupload_dot_com_links", false))
		{
			addFileHost(
			"burnupload\\.(?:com\/\\?d=|ihiphop\\.com\/download\\.php\\?id=)\\w+",
			'File size:',
			'file is not found',
			'optional--',
			"//a[contains(@href,'burnupload.com') or contains(@href,'burnupload.ihiphop.com')]"
			);
		}
		if (GM_getValue("Check_datei_dot_to_links", false))
		{
			addFileHost(
			"datei\\.to\/\\??\\w+",
			'icon_downloaden\\.png|>Download starten<',
			'Datei wurde nicht gefunden|icon_deleted.png',
			'optional--',
			"//a[contains(@href,'datei.to')]"
			);
		}
		if (GM_getValue("Check_yunfile_dot_com_links", false))
		{
			addFileHost(
				"(?:yunfile|filemarkets)\\.com\/\\w+",
			'<body class="body" id="body">|value="Slow Download"',
			'<body class="body" >',
			'optional--',
			"//a[contains(@href,'yunfile.com') or contains(@href,'filemarkets.com')]"
			);
		}
/*		if (GM_getValue("Check_putlocker_dot_com_links", false))
		{
			addFileHost(
			"putlocker\\.com\/file\/\\w{16}",
			'as Free User|<a class="continue"|Continue to file|#feedback_btn|application file_standalone',
			'Welcome to PutLocker|<div class="sad_face_image">|404:',
			'undergoing scheduled maintenance',
			"//a[contains(@href,'putlocker.com/file')]"
			);
		} */
		if (GM_getValue("Check_uploadhero_dot_com_links", false))
		{
			addFileHost(
			"uploadhero\\.com\/dl\/\\w+",
			'content-dl">',
			'men_file_lost\\.jpg"',
			'optional--',
			"//a[contains(@href,'uploadhero.com/dl')]"
			);
		}
		if (GM_getValue("Check_unibytes_dot_com_links", false))
		{
			addFileHost(
			"unibytes\\.com\/[\\w\.]+",
			'trying to download|пытаетесь загрузить файл|tes entrain de tlcharger',
			'File not found|Файл не найден|',
			'optional--',
			"//a[contains(@href,'unibytes.com')]"
			);
		}
		if (GM_getValue("Check_hellshare_dot_com_links", false)) //very old type of links
		{
			addFileHost(
			"www\\.hellshare\\.com\/\\d+",
			'tab\\-details"',
			'list-purp-2"|not found on this server',
			'optional--',
			"//a[contains(@href,'www.hellshare.com')]"
			);
		}
		if (GM_getValue("Check_quickshare_dot_cz_links", false)) //folders
		{
			addFileHost(
			"quickshare\\.cz\/slozka-\\d+",
			'Počet souborů: <strong>[1-9]',
			'Počet souborů: <strong>0|Chyba! Taková složka neexistuje',
			'optional--',
			"//a[contains(@href,'quickshare.cz/slozka')]"
			);
		}
		if (GM_getValue("Check_filefactory_dot_com_links", false)) //folders
		{
			addFileHost(
			"filefactory\\.com\/f\/\\w+",
			'folderFileList">',
			'table class="items"|Pointer" class="red">',
			'optional--',
			"//a[contains(@href,'filefactory.com/f/')]"
			); 
		} 
		if (GM_getValue("Check_netload_dot_in_links", false)) //folders
		{
			addFileHost(
			"netfolder\\.in\/\\w+",
			'list" value="http',
			'InPage_Error">|list" value=""',
			'optional--',
			"//a[contains(@href,'netfolder.in')]"
			);
		}
		if (GM_getValue("Check_load_dot_to_links", false))
		{
			addFileHost(
			'(?:www\\.|\\/)load\\.to\\/(?:\\w{10}\\/.|\\?d=\\w{10})',
			'"download_table_left">Size',
			'Can\'t find file',
			'optional--',
			"//a[contains(@href,'/load.to/') or contains(@href,'www.load.to/')]"
			);
		}
/*		if (GM_getValue("Check_freakshare_dot_net_links", false))
		{
			addFileHost(
			"freakshare\\.(?:net|com)\/files\/",
			'box_heading',
			'Este archivo no existe|Esse arquivo não existe|existent pas|К сожалению, этот файл больше не существует|Plik nie istnieje|Ez a fájl nem létezik|Acest fișier nu există|Dosya bulunamadı|ไฟล์นี้ไม่มีอยู่ |Tệp này không tồn tại|ファイルをありません|이 파일은 존재하지 않습니다!|此文件不存在|This file does not exist|Dieser Download existiert nicht|الملف المطلوب غير موجود',
			'Your Traffic is used up for today',
			"//a[(contains(@href,'freakshare.net') or contains(@href,'freakshare.com')) and contains(@href,'files')]",
			true
			);
			
			//folders
			addFileHost(
			"freakshare\\.(?:net|com)\/folder\/",
			'Files: [1-9]',
			'Files: 0',
			'optional--',
			"//a[(contains(@href,'freakshare.net') or contains(@href,'freakshare.com')) and contains(@href,'folder')]",
			true
			);
		} */
		if (GM_getValue("Check_divshare_dot_com_links", false))
		{
			addFileHost(
			"divshare\\.com\/download\/",
			'download_new\.png',
			'have been removed',
			'optional--',
			"//a[contains(@href,'divshare.com')]"
			);
		}
		if (GM_getValue("Check_euroshare_dot_eu_links", false))
		{
			addFileHost(
			"euroshare\\.(?:eu|pl|sk|cz|hu)\/file\/\\d+",
			'nazev-souboru">',
			'<div id="obsah">\\s*<h1>',
			'optional--',
			"//a[contains(@href,'euroshare.eu/file')]"
			);
		}
		if (GM_getValue("Check_files_dot_mail_dot_ru_links", false))
		{
			addFileHost(
			'files\\.mail\\.ru/(?:\\w*)',
			'fileList',
			'errorMessage',
			'optional--',
			"//a[contains(@href,'files.mail.ru')]"
			);
		}
		if (GM_getValue("Check_megashares_dot_com_links", false))
		{
			addFileHost(
			"(?:d\\d+\.|)megashares\.com\/(?:dl|index\.php\\?d|\\?d\\d+=\\w+)",
			'Filesize',
			'Invalid|deleted|Could not download file',
			'slots|scheduled maintenance',
			"//a[contains(@href,'megashares.com/')]"
			);
		}
		if (GM_getValue("Check_narod_dot_ru_links", false))
		{
			addFileHost(
			'narod\\.(?:yandex\\.|)ru\/disk\/',
			'b-submit',
			'b-download-virus-note|headCode">404<',
			'Внутренняя ошибка сервиса',
			"//a[contains(@href,'narod.ru') or contains(@href,'narod.yandex.ru')]"
			);
		}
		if (GM_getValue("Check_rayfile_dot_com_links", false))
		{
			addFileHost(
			"rayfile\\.com\/",
			'FILEtitleTXT',
			'blueRow',
			'optional--',
			"//a[contains(@href,'rayfile.com/') and contains(@href,'files')]"
			);
		}
		if (GM_getValue("Check_filesmonster_dot_com_links", false))
		{
			addFileHost(
			"filesmonster\\.com\/download\\.php\\?id=\\w+",
			'button_green_body"',
			'error">',
			'optional--',
			"//a[contains(@href,'filesmonster.com/download')]"
			);
		}
		if (GM_getValue("Check_usaupload_dot_net_links", false))
		{
			addFileHost(
			'usaupload\\.net\/d\/(?:\w*)',
			'<strong>File size:</strong>',
			'is not available',
			'optional--',
			"//a[contains(@href,'usaupload.net/d/')]"
			);
		}
		if (GM_getValue("Check_sendspace_dot_com_links", false))
		{
			addFileHost(
			'sendspace\\.com\/file\/\\w+',
			'file_description',
			'msg error"',
			'optional--',
			"//a[contains(@href,'sendspace.com/file')]"
			);
		}
		if (GM_getValue("Check_sendspace_dot_pl_links", false))
		{
			addFileHost(
			'sendspace\\.pl\/file\/\\w+',
			'download_file"',
			'Podany plik nie',
			'optional--',
			"//a[contains(@href,'sendspace.pl/file')]"
			);
		}
        if (GM_getValue("Check_uploading_dot_com_links", false))
		{
			addFileHost(
			'uploading\\.com\/(?:files\/)?\\w+',
			'free_method">',
			'file_error">|error_404">|file not found|OOPS! Looks like file not found',
			'optional--',
			"//a[contains(@href,'uploading.com')]"
			);
		}
		if (GM_getValue("Check_gigasize_dot_com_links", false))
		{
			addFileHost(
			'gigasize\\.com\/get\\.php(?:\/\\d+|\\?d=\\w+)',
			'fileId"',
			'error">',
			'optional--',
			"//a[contains(@href,'gigasize.com/get')]"
			);
		}
		if (GM_getValue("Check_good_dot_com_links", false))
		{
			addFileHost(
			'good\\.net\/(?:_|dl)',
			'Free Download',
			'Not Found',
			'Forbidden',
			"//a[contains(@href,'good.net')]"
			);
		}
		if (GM_getValue("Check_2shared_dot_com_links", false))
		{
			addFileHost(
			'2shared\\.com\/(?:file|video|document|audio)\/\\w*',
			'File size',
			'File not found|is not valid|/images/important.gif',
			'optional--',
			"//a[contains(@href,'2shared.com/file/') or contains (@href,'2shared.com/audio/') or contains (@href,'2shared.com/document/') or contains (@href,'2shared.com/video/')]"
			);
		}
		if (GM_getValue("Check_turboupload_dot_com_links", false))
		{
			addFileHost(
			'turboupload\\.com\/\\w*',
			'You have requested',
			'File Not Found',
			'optional--',
			"//a[contains(@href,'turboupload.com')]"
			);
		}
		if (GM_getValue("Check_gigapeta_dot_com_links", false))
		{
			addFileHost(
			'gigapeta\\.com\/dl\/',
			'Download file|Скачать файл| Herunterzuladen|Scarica il file|Cargar el fichero|Charger le fichier',
			'404|page_error',
			'optional--',
			"//a[contains(@href,'gigapeta.com/dl')]"
			);
		}
		if (GM_getValue("Check_veehd_dot_com_links", false))
		{
			addFileHost(
			'veehd\.com\/video\/.*?',
			'No sound|Download video',
			'Featured Videos',
			'optional--',
			"//a[contains(@href,'veehd.com') and contains(@href,'video')]"
			);
		}
		if (GM_getValue("Check_vip_dash_file_dot_com_links", false))
		{
			addFileHost(
			'(?:u\\d+\\.)?vip-file\\.com\/download.*?\/(?:.*?)\/(?:.*?)\\.html',
			'fast_download_form">|submit_sms_download',
			'<p style="text-align:center">',
			'optional--',
			"//a[contains(@href,'vip-file.com/download')]"
			);
		}
		if (GM_getValue("Check_letitbit_dot_net_links", false))
		{
			addFileHost(
			'(?:u\\d+\\.)?letitbit\\.net\/download\/\\w+',
			'download\\-pnl ',
			'color:#000">|Запрашиваемый файл не найден|страница не существует|File not found|',
			'optional--',
			"//a[contains(@href,'letitbit.net/download')]"
			);
		}
		if (GM_getValue("Check_ifolder_dot_ru_links", false))
		{
			addFileHost(
			'ifolder\.ru\/\\d+',
			'file-info',
			'ui-state-error',
			'optional--',
			"//a[contains(@href,'ifolder.ru')]"
			);
		}
		if (GM_getValue("Check_fileswap_dot_com_links", false))
		{
			addFileHost(
			'fileswap\\.com\/dl\/\\w+',
			'bttnDownloadLink"',
			'rounded_block_error"',
			'is temporary unavailable|disponible en estos momentos|vorläufig unerreichbar|Файл временно недоступен',
			"//a[contains(@href,'fileswap.com/dl')]"
			);
		}
		if (GM_getValue("Check_filecloud_dot_io_links", false))
		{
			addFileHost(
			'(?:s\\d+\\.)?filecloud\\.io\/\\w+',
			'var __error         	=	0',
			'FILES__DOESNT_EXIST|removed or did not exist',
			'optional--',
			"//a[contains(@href,'filecloud.io/')]"
			);
			
			addFileHost(
			'ifile\\.it\/\\w+',
			'var __error         	=	0',
			'FILES__DOESNT_EXIST',
			'optional--',
			"//a[contains(@href,'ifile.it/')]"
			);
		}
		if (GM_getValue("Check_solidfiles_dot_com_links", false))
		{
			addFileHost(
			'solidfiles\\.com\/d\/\\w+',
			'id="download"|content="Download',
			'>Not found<|<h2>404</h2>|Page not found|<h1>404</h1>|File not available|no longer available',
			'optional--',
			"//a[contains(@href,'solidfiles.com/d')]"
			);
		}
		if (GM_getValue("Check_shareflare_dot_net_links", false))
		{
			addFileHost(
				"(?:.\\.|)shareflare\\.net",
			'download-pnl|<div class="premium-block">',
			'File not found|ĐźĐľĐ¸ŃĐş Đ·ĐµŃ€ĐşĐ°Đ»Đ° Đ˝Đ° Ń„Đ°|<div id="captcha"',
			'optional--',
			"//a[contains(@href,'shareflare.net') and contains(@href,'download')]"
			);
		}
		if (GM_getValue("Check_u18116681_dot_shareflare_dot_net_links", false))
		{
			addFileHost(
			"u18116681.shareflare\\.net",
			'download-pnl|<div class="premium-block">',
			'File not found|ĐźĐľĐ¸ŃĐş Đ·ĐµŃ€ĐşĐ°Đ»Đ° Đ˝Đ° Ń„Đ°|<div id="captcha"',
			'optional--',
			"//a[contains(@href,'shareflare.net') and contains(@href,'download')]"
			);
		}
		if (GM_getValue("Check_uloz_dot_to_links", false))
		{
			addFileHost(
			"(?:uloz|ulozto|bagruj|zachowajto)\\.(to|cz|sk|net|pl)\/\\w",
			'fileDownload">|fileSize">',
			'grayButton deletedFile">|Stránka nenalezena|upload-button"|jako soukromý.',
			'passwordProtectedFile">|frmaskAgeForm-disagree',
			"//a[contains(@href,'bagruj.cz') or contains(@href,'uloz.to') or contains(@href,'ulozto.') or contains(@href,'zachowajto.pl')]",
			true
			);
		}
		if (GM_getValue("Check_hellspy_dot_com_links", false))
		{
			addFileHost(
			"hellspy\.(?:com|cz|sk|hu|pl)\/\\w+",
			'file\\-list-orderby|section-filedetail">',
			'<\/span><\/h2>\\s*<p>|list-purp-2">|flash info sticky">',
			'optional--',
			"//a[contains(@href,'hellspy.')]"
			);
		}
		if (GM_getValue("Check_leteckaposta_dot_cz_links", false))
		{
			addFileHost(
			"(?:leteckaposta\\.cz|sharegadget\\.com)\/\\d+",
			'<body onload="">',
			'neexistuje|not exist',
			'optional--',
			"//a[contains(@href,'leteckaposta.cz') or contains(@href,'sharegadget.com')]"
			);
		}
		if (GM_getValue("Check_stahovanizasms_dot_cz_links", false))
		{
			addFileHost(
			"stahovanizasms\\.cz\/\\w+",
			'download\\.png>|font-size:11px><tr>',
			'smaz.n u.ivatelem|font-size:11px><\/table>',
			'optional--',
			"//a[contains(@href,'stahovanizasms.cz')]"
			);
		}
		if (GM_getValue("Check_share_dash_links_dot_biz_links", false))
		{
			addFileHost(
			"share-links\\.biz\/\\w*",
			'online\\.gif',
			'(?:offline|parts)\\.gif',
			'optional--',
			"//a[contains(@href,'share-links.biz')]"
			);
		}
		if (GM_getValue("Check_4shared_dot_com_links", false))
		{
			addFileHost(
			"4shared\\.com\/.+\/",
			'<input type="hidden" class="jsSocialTwDefaultText" value=',
			'class="warn\"|big red"|GetDataBack',
			'Service Unavailable',
			"//a[contains(@href,'4shared.com')]"
			);
		}
		if (GM_getValue("Check_zippyshare_dot_com_links", false))
		{
			addFileHost(
				"(?:www\\d+\.|)zippyshare\.com\/",
			'download\.png|Download Now|images/download_small.png|id="dlbutton"',
			'not exist|Status 404',
			'optional--',
			"//a[contains(@href,'zippyshare.com') and contains(@href,'file.html')]"
			);
		}
		if (GM_getValue("Check_mediafire_dot_com_links", false))
		{
			addFileHost(
			"mediafire\.com\/",
			'download_file_title|dlFileName|id="PLAY_downloadButton"',
			'error\\.php\\?|error_msg_title|<title>Simple File Sharing|No files found',
			'set to private',
			"//a[contains(@href,'mediafire.com')]"
			);
		}
		if (GM_getValue("Check_uploaded_dot_to_links", false))
		{
			addFileHost(
			'(?:uploaded\\.(?:to|net)\/(?:.id|file|folder|f|410|404))|(?:ul\\.to\/)',
			'<h2>Authentification</h2></li>| MB|1,00 GB',
			'box_red|Error: 404|Error: 410|fileList"><thead><tr><td colspan="2"><\/td><\/tr><\/thead><tbody>\\s*<tr>|<title>uploaded.net</title>',
			'optional--',
			"//a[contains(@href,'uploaded.to/') or contains(@href,'uploaded.net/') or contains(@href,'ul.to/')]"
			);
		}
		if (GM_getValue("Check_ulozisko_dot_sk_links", false))
		{
			addFileHost(
			"ulozisko\.sk\/",
			'Detaily',
			'neexistuje',
			'optional--',
			"//a[contains(@href,'ulozisko.sk')]"
			);
		}
		if (GM_getValue("Check_upnito_dot_sk_links", false))
		{
			addFileHost(
			"(?:dl.\\.|)upnito\\.sk\/(download|subor|file)",
			'download.php',
			'notfound|upload\\-suborov\\.php"',
			'optional--',
			"//a[contains(@href,'upnito.sk')]"
			);
		}
		if (GM_getValue("Check_uptobox_dot_com_links", false))
		{
			addFileHost(
			"uptobox\\.com\/\\w+",
			'Create Download Link">',
			'500px;text-align:left;">|File not found|Fichier introuvable',
			'Maintenance|not available in your country',
			"//a[contains(@href,'uptobox.com')]"
			);
		}
		if (GM_getValue("Check_sharecash_dot_org_links", false))
		{
			addFileHost(
			"sharecash\\.org\/download\\.php\\?file=\\d+",
			'FILE DOWNLOAD<',
			'File Does Not Exist',
			'optional--',
			"//a[contains(@href,'sharecash.org/download.php')]"
			);
		}
		if (GM_getValue("Check_depositfiles_dot_com_links", false)) //folders
		{
			addFileHost(
			"depositfiles\\.com\/folders\/\\w+",
			'<div class="progressContainer">',
			'<div id="files" class="files">\\s*<\/div>',
			'optional--',
			"//a[contains(@href,'depositfiles.com/folders')]"
			);
		}
		if (GM_getValue("Check_depositfiles_dot_com_links", false))
		{
			addFileHost(
			"depositfiles\\.com\/|depositfiles.org|dfiles\.eu|dfiles.ru",
			'<b>File Download</b>|File name|Nom du fichier|Nome do arquivo|speed_small\.gif',
			'Such file does not exist|<div class="no_download_msg"|This file does not exist',
			'optional--',
			"//a[contains(@href,'depositfiles') or contains(@href,'dfiles')]"
			);
		}
		if (GM_getValue("Check_rapidfileshare_dot_net_links", false))
		{
			addFileHost(
			"rapidfileshare\\.net/\\w+",
			'<div id="upload-header-bg">',
			'<div style="width:500px;text-align:left;">',
			'optional--',
			"//a[contains(@href,'rapidfileshare.net/')]"
			);
		}
		if (GM_getValue("Check_stiahnito_dot_sk_links", false))
		{
			addFileHost(
			"stiahnito\\.sk/",
			'<span class="filesize right">',
			'<ol class="list-purp-2">',
			'optional--',
			"//a[contains(@href,'stiahnito.sk/')]"
			);
		}
		if (GM_getValue("Check_rusfolder_dot_com_links", false))
		{
			addFileHost(
			"rusfolder\\.(?:com|net)",
			'"download-step-one-form"|Название: <b>|Файлы|Файлы в папке',
			'"ui-state-error ui-corner-all"|File is removed|File not found|удален',
			'optional--',
			"//a[contains(@href,'rusfolder')]"
			);
		}
		if (GM_getValue("Check_fileover_dot_net_links", false))
		{
			addFileHost(
			"fileover\\.net/\\d+",
			'id="filesize"',
			'Not found or deleted|The following file is unavailable',
			'optional--',
			"//a[contains(@href,'fileover.net/')]"
			);
		}
		if (GM_getValue("Check_catshare_dot_net_links", false))
		{
			addFileHost(
			"catshare\\.net/\\w+",
			'"icon-share',
			'alert alert-error',
			'optional--',
			"//a[contains(@href,'catshare.net/')]"
			);
		}
        if (GM_getValue("Check_anonfiles_dot_com_links", false))
		{
			addFileHost(
			"anonfiles\\.com/\\w+",
			'"download_button"',
			'<legend><b>404</b>',
			'optional--',
			"//a[contains(@href,'anonfiles.com')]"
			);
		}
		if (GM_getValue("Check_mixturecloud_dot_com_links", false))
		{
			addFileHost(
			"mixturecloud\\.com/media/\\w+",
			'"btn icon i_globe gray share_150',
			'"s_cross_close"></span> 404:',
			'optional--',
			"//a[contains(@href,'mixturecloud.com/media/')]"
			);
		}
    	if (GM_getValue("Check_akafile_dot_com_links", false))
		{
			addFileHost(
			"akafile\\.com\/\\w+",
			'download1',
			'File Not Found',
			'optional--',
			"//a[contains(@href,'akafile.com/')]"
			);
		}
		if (GM_getValue("Check_creafile_dot_net_links", false))
		{
			addFileHost(
			"creafile\\.net\/\\w+",
			'downloadblock',
			'errtitle',
			'optional--',
			"//a[contains(@href,'creafile.net/')]"
			);
		}
		if (GM_getValue("Check_hugefiles_dot_net_links", false))
		{
			addFileHost(
			"hugefiles\\.net\/\\w+",
			'download1|class="btn-create-download" value="Create Download Link">',
			'File Not Found|No such file with this filename',
			'optional--',
			"//a[contains(@href,'hugefiles.net/')]"
			);
		}
		if (GM_getValue("Check_sendmyway_dot_com_links", false))
		{
			addFileHost(
			"sendmyway\\.com\/\\w+",
			'id="btn_download"',
			'500px;text-align:left;"|<center><h3>',
			'optional--',
			"//a[contains(@href,'sendmyway.com/')]"
			);
		}
		if (GM_getValue("Check_upload_dot_ee_links", false))
		{
			addFileHost(
			"upload\\.ee\/\\w+",
			'onmouseout="document.dllink.src',
			'There is no such file.|File was deleted|Fail kustutati|Файл удалён|Такого файла нет',
			'optional--',
			"//a[contains(@href,'upload.ee/')]"
			);
		}
		if (GM_getValue("Check_shareplace_dot_org_links", false))
		{
			addFileHost(
			"shareplace\\.org\/\\?\\w+",
			'Download-Link',
			'Your requested file is not found|Select file to send',
			'optional--',
			"//a[contains(@href,'shareplace.org/?')]"
			);
		}
		if (GM_getValue("Check_uploadc_dot_com_links", false))
		{
			addFileHost(
			"uploadc\\.com\/\\w+",
			'id="prebut"',
			'File Not Found|This file has been removed due',
			'optional--',
			"//a[contains(@href,'uploadc.com/')]"
			);
		}
		if (GM_getValue("Check_remixshare_dot_com_links", false))
		{
			addFileHost(
			"remixshare\\.com\/\\w+",
			'id="dl2"',
			'<table class=\'failed\'><tr><td width=\'90%\'>|Sorry, die Datei konnte nicht gefunden werden',
			'optional--',
			"//a[contains(@href,'remixshare.com/')]"
			);
		}
		if (GM_getValue("Check_exoshare_dot_com_links", false))
		{            
			addFileHost(
			"exoshare\\.com\/download\\.php\\?uid=\\w+",
			'Last Download :',
			'img src="\\/404.jpg"',
			'optional--',
			"//a[contains(@href,'exoshare.com/download.php')]"
			);
		}
		if (GM_getValue("Check_borncash_dot_org_links", false))
		{                       
			addFileHost(
			"borncash\\.org\/download\/\\?a=\\w+",
			'class="knop_1"',
			'\/error\/er00',
			'optional--',
			"//a[contains(@href,'borncash.org/download/')]"
			);
		}
		if (GM_getValue("Check_vidplay_dot_net_links", false))
		{
			addFileHost(
			"vidplay\.net\/\\w+",
			'solvemedia puzzle widget',
			'File not found|AVOID_IE_BUG',
			'optional--',
			"//a[contains(@href,'vidplay.net')]");
		}
		if (GM_getValue("Check_storagon_dot_com_links", false))
		{
			addFileHost(
			"storagon\.com\/\\w+",
			'class="icon-cloud-download"></i>|content="Download Options',
			'content="Download Downloads|class="error-container">|class="bigger-300 bolder">404<',
			'optional--',
			"//a[contains(@href,'storagon.com')]");
		}
		if (GM_getValue("Check_filedais_dot_com_links", false))
		{
			addFileHost(
			"filedais\.com\/\\w+",
			'class="btn btn-info"|name="method_free"',
			'style="width:500px;text-align:left;">|File Not Found|AVOID_IE_BUG',
			'optional--',
			"//a[contains(@href,'filedais.com')]");
		}
		if (GM_getValue("Check_ryushare_dot_com_links", false))
		{
			addFileHost(
			"ryushare\.com\/\\w+",
			'KB|MB',
			'<div style="width:500px;text-align:left;">',
			'in maintenance mode|Software error:',
			"//a[contains(@href,'ryushare.com')]");
		}
		if (GM_getValue("Check_up_dot_4share_dot_vn_links", false))
		{
			addFileHost(
			"up.4share\.vn\/\\w+",
			'<font size="2" face="Verdana">',
			'font: 13px Tahoma; color: Brown',
			'optional--',
            //'optional--',
			"//a[contains(@href,'up.4share.vn')]");
		}
		if (GM_getValue("Check_share_dot_vnn_dot_vn_links", false))
		{
			addFileHost(
			"share.vnn\.vn\/\\w+",
			'"index,follow"|<div class="main" id="download-box">',
			'<meta name="description" content="" />|<h1>Không tìm thấy file bạn yêu cầu</h1>',
			'optional--',
            //'optional--',
			"//a[contains(@href,'share.vnn.vn')]");
		}
		if (GM_getValue("Check_upfile_dot_vn_links", false))
		{
			addFileHost(
			"upfile\.vn\/\\w+",
			'download-timer',
			'<meta name="description" content="Upload files|<meta name="description" content="Error "',
			'optional--',
            //'optional--',
			"//a[contains(@href,'upfile.vn')]");
		}
/*		if (GM_getValue("Check_firedrive_dot_com_links", false))
		{
			addFileHost(
			"firedrive\\.com\/file\/\\w{16}",
			'as Free User|<a class="continue"|Continue to file|#feedback_btn|application file_standalone',
			'Welcome to PutLocker|<div class="sad_face_image">|404:',
			'undergoing scheduled maintenance',
			"//a[contains(@href,'firedrive.com/file')]"
			);
		} */
		if (GM_getValue("Check_aisfile_dot_com_links", false))
		{
			addFileHost(
			"aisfile\.com\/\\w+",
			'<h3 style="text-align:left;">|align=right><b>Filename:',
			'<div style="width:500px;text-align:left;">|File Not Found',
			'optional--',
            //'optional--',
			"//a[contains(@href,'aisfile.com')]");
		}
		if (GM_getValue("Check_usersfiles_dot_com_links", false))
		{
			addFileHost(
			"usersfiles\.com\/\\w+",
			'class="btn btn-success|id="btn_download"  class="btn"',
			'<div style="width:500px;text-align:left;">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'usersfiles.com')]");
		}
		if (GM_getValue("Check_pan_dot_baidu_dot_com_links", false))
		{
			addFileHost(
			"pan.baidu\.com\/\\w+",
			'target="_blank" title=|share-personal-info',
			'share_notfound.png|background:#f9f9f9',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'pan.baidu.com')]");
		}
		if (GM_getValue("Check_yunpan_dot_cn_links", false))
		{
			addFileHost(
			"yunpan\.cn\/\\w+",
			'class="icon icon-download',
			'content="360|http://p5.qhimg.com/t01d1c98667df9dc6cc.jpg',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'yunpan.cn')]");
		}
        if (GM_getValue("Check_file_dash_upload_dot_net_links", false))
		{
			addFileHost(
				"(?:en\\.|)file\\-upload\\.net\/download\\-\\d+\/\\w+",
			'getElementById("downbild")|style.display',
			'hochgeladene Datei nicht gefunden werden|has not been found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'file-upload.net')]");
		}
		if (GM_getValue("Check_gulfup_dot_com_links", false))
		{
			addFileHost(
			"gulfup\.com\/",
			'<!-- Downlod template -->|download.gif',
			'<!-- Errors template -->|class="error">|<!-- form upload -->|[ رفع الملفات ]',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'gulfup.com')]");
		}
        if (GM_getValue("Check_datafilehost_dot_com_links", false))
		{
			addFileHost(
			"datafilehost\\.com\/(?:download-\\w+\\.html|d\/\\w+)",
			'dldtable">',
			'does not exist\\.',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'datafilehost.com')]");
		}
		if (GM_getValue("Check_box_dot_com_links", false))
		{
			addFileHost(
			"box\.com\/\\w+",
			'download-file-btn|id="download_button',
			'BIyMin.png| <div class="error_message|link has been removed',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'app.box.com')]");
		}
		if (GM_getValue("Check_dropbox_dot_com_links", false))
		{
			addFileHost(
			"dropbox\.com\/s\/\\w+",
			'default_content_download_button" class="freshbutton-blue">|content_download_button',
			'>Nothing Here<|>Error (404)<',
			'title>Dropbox - 509|Error (403)|Error: 429',
			"//a[contains(@href,'dropbox.com')]");
		}
		if (GM_getValue("Check_box_dot_net_links", false))
		{
			addFileHost(
			"box\.net\/\\w+",
			'download-file-btn|id="download_button',
			'BIyMin.png| <div class="error_message',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'box.net')]");
		}
		if (GM_getValue("Check_fileband_dot_com_links", false))
		{
			addFileHost(
			"fileband\.com\/\\w+",
			'value="download1">|name="id" value=',
			'<div style="width:500px;text-align:left;">|not be found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'fileband.com')]");
		}
		if (GM_getValue("Check_filedropper_dot_com_links", false))
		{
			addFileHost(
			"filedropper\.com\/\\w+",
			'background:#ddd;|width:985px; ',
			'background-color:#FFFFFF;|margin-left: -400px;',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'filedropper.com')]");
		}
		if (GM_getValue("Check_tropicshare_dot_com_links", false))
		{
			addFileHost(
			"tropicshare\\.com\/files\/\\d+",
			'MB</span>|GB</span>|KB</span>',
			'>FNF<|size: </span>',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'tropicshare.com')]");
		}
		if (GM_getValue("Check_goldbytez_dot_com_links", false))
		{
			addFileHost(
			"goldbytez\.com\/\\w+",
			'<h2>Download</h2>|<center><h2>File: <font color="red">',
			'<div style="width:500px;text-align:left;">|<h2>Error</h2>',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'goldbytez.com')]");
		}
		if (GM_getValue("Check_worldbytez_dot_com_links", false))
		{
			addFileHost(
			"worldbytez\.com\/\\w+",
			'<div class="download_type">',
			'<div style="width:500px;text-align:left;">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'worldbytez.com')]");
		}
		if (GM_getValue("Check_freefilehosting_dot_net_links", false))
		{
			addFileHost(
			"freefilehosting\.net\/\\w+",
			'Type: cbr|Type: rar|Type: jpg|Type: mkv|Type: avi|Type: mpg|Type: mpeg|Type: zip|Type: wmvType: bmpType: gifType: mp4Type: mp3',
			'175px;" value="http://www.freefilehosting.net/"|Filename:  <br>',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'freefilehosting.net')]");
		}
		if (GM_getValue("Check_ziddu_dot_com_links", false))
		{
			addFileHost(
			"ziddu\.com\/\\w+",
			'downloads.ziddu.com|downloadfilelinkicon',
			'errortracking.php|images/oops.png|fontfamilyverdana error',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'ziddu.com')]");
		}
		if (GM_getValue("Check_exclusiveloader_dot_com_links", false))
		{
			addFileHost(
			"exclusiveloader\.com\/\\w+",
			'style="padding-top:55px; padding-bottom:65px;">|<h2>Download</h2>',
			'File Not Found|width:322px;text-align:left;" class="no_file">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'exclusiveloader.com')]");
		}
		if (GM_getValue("Check_sharerapid_dot_cz_links", false))
		{
			addFileHost(
			"sharerapid\.cz\/\\w+",
			'value="Stáhnout"|soubor" style|Stahování je povoleno pouze pro přihlášené uživatele',
			'error_div">|404 - Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'sharerapid.cz')]");
		}
		if (GM_getValue("Check_sdilej_dot_cz_links", false))
		{
			addFileHost(
			"sdilej\.cz\/\\w+",
			'class="page-download"',
			'<h2 class="red">|czshare.com|sponsored listings|This domain is for sale',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'sdilej.cz')]");
		}
		if (GM_getValue("Check_lafiles_dot_com_links", false))
		{
			addFileHost(
			"lafiles\.com\/\\w+",
			'<div id="pay_modes">',
			'<b class="err"></b>',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'lafiles.com')]");
		}
		if (GM_getValue("Check_fboom_dot_me_links", false))
		{
			addFileHost(
			"fboom\.me\/file\/\\w+",
			'id="download-free" href="#"',
			'class="error-v1-title">404<|File not found or deleted',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'fboom.me')]");
		}
        if (GM_getValue("Check_fileboom_dot_me_links", false))
		{
			addFileHost(
			"fileboom\.me\/file\/\\w+",
			'id="download-free" href="#"',
			'class="error-v1-title">404<|File not found or deleted',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'fileboom.me')]");
		}
		if (GM_getValue("Check_acefile_dot_net_links", false))
		{
			addFileHost(
			"acefile\.net\/\\w+",
			'align=right nowrap><b>',
			'File Not Found|<div style="width:322px;text-align:left;" class="no_file">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'acefile.net')]");
		}
   	if (GM_getValue("Check_megarapid_dot_cz_links", false))
		{
			addFileHost(
			"megarapid\.cz\/\\w+",
			'value="Stáhnout"|soubor" style|Stahování je povoleno pouze pro přihlášené uživatele',
			'error_div">|404 - Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'megarapid.cz')]");
		}
    if (GM_getValue("Check_yadi_dot_sk_links", false))
		{
			addFileHost(
			"yadi\.sk\/\\w+",
			'twitter:site|View and download',
			'error code|Nothing found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'yadi.sk')]");
		}
    if (GM_getValue("Check_imdb_dot_com_links", false))
		{
			addFileHost(
		  "imdb\.com\/\\w+",
			'imdb.com',
			'404 Error',
			'optional--',
			"//a[contains(@href,'imdb.com')]");
		}
		if (GM_getValue("Check_hitfile_dot_net_links", false))
		{
			addFileHost(
			"hitfile\.net\/\\w+",
			'class="download-file',
			'style="width:16px;height:16px;border:0;|File not found|Файл не найден. Возможно он был удален',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'hitfile.net')]");
		}
/*		if (GM_getValue("Check_uploadto_dot_us_links", false))
		{
			addFileHost(
			"uploadto\\.us\/file\/details\/[\\w+-]",
			'name="recaptcha_response',
			'="/folder/add"|>File (?:not found|restricted|has been deleted)|<title>UPLOADTO.US</title>',
			'btn-large btn-danger">|Account limitation notice|502 Bad Gateway',
			"//a[contains(@href,'uploadto.us/file')]",
			true);
		} */
		if (GM_getValue("Check_nitroflare_dot_com_links", true))
		{
			addFileHost(
		  "nitroflare\.com\/\\w+",
			'alert.png|LowSpeedMeter.png',
			'file has been removed|id="error" style="display|Probably deleted',
			'optional--',
			"//a[contains(@href,'nitroflare.com')]");
		}
		if (GM_getValue("Check_up_dot_top4top_dot_net_links", false))
		{
			addFileHost(
		  "up.top4top\.net\/\\w+",
			'start Downlod template',
			'start err template',
			'optional--',
			"//a[contains(@href,'up.top4top.net')]");
		}
		if (GM_getValue("Check_filejoker_dot_net_links", false))
		{
			addFileHost(
		  "filejoker\.net\/\\w+",
			'button id="regular-download">Slow|method_free" value="1|<div id="download" class="download0">',
			'File Not Found|class="not_found|<div id="download" class="not_found">|"err">DMCA Complaint<',
			'optional--',
			"//a[contains(@href,'filejoker.net')]");
		}
		if (GM_getValue("Check_free_dot_fr_links", false))
		{
			addFileHost(
				"(?:dl.\\.|)free\\.fr",
			'Valider et t&eacute;l&eacute',
			'Fichier inexistant',
			'optional--',
			"//a[contains(@href,'free.fr')]");
		}
		if (GM_getValue("Check_gboxes_dot_com_links", false))
		{
			addFileHost(
		  "gboxes\.com\/\\w+",
			'You have requested|color="red">http://www.gboxes.com',
			'File Not Found|<div style="width:500px;text-align:left;">',
			'optional--',
			"//a[contains(@href,'gboxes.com')]");
		}
		if (GM_getValue("Check_1fichier_dot_com_links", false))
		{
			addFileHost(
				"(?:\\w{10}\\.(?:1fichier|dl4free)\\.com\/)|(?:(?:1fichier|dl4free)\\.com\/\\?\\w{10})|(?:www\\.)?\\w{6,}\\.1fichier\\.com",
			'<title>Download</title>|<br/>You must wait|submit" value="Download|Download without SSL encryption',
			'File not found|file could not be found|Select files to send',
			'optional--',
			"//a[contains(@href,'1fichier') or contains(@href,'dl4free.com/')]"
			);
		}
		if (GM_getValue("Check_led_dot_wf_links", false))
		{
			addFileHost(
			"led\.wf\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'led.wf')]");
		}
		if (GM_getValue("Check_lan_dot_wf_links", false))
		{
			addFileHost(
			"lan\.wf\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'lan.wf')]");
		}
		if (GM_getValue("Check_adlink_dot_wf_links", false))
		{
			addFileHost(
			"adlink\.wf\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'adlink.wf')]");
		}
		if (GM_getValue("Check_click_dot_tf_links", false))
		{
			addFileHost(
			"click\.tf\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'click.tf')]");
		}
		if (GM_getValue("Check_ssh_dot_tf_links", false))
		{
			addFileHost(
			"ssh\.tf\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'ssh.tf')]");
		}
		if (GM_getValue("Check_ssh_dot_yt_links", false))
		{
			addFileHost(
			"ssh\.yt\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'ssh.yt')]");
		}
		if (GM_getValue("Check_yep_dot_pm_links", false))
		{
			addFileHost(
			"yep\.pm\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'yep.pm')]");
		}
		if (GM_getValue("Check_kyc_dot_pm_links", false))
		{
			addFileHost(
			"kyc\.pm\/\\w+",
			'logo_0.png|downloads.gif"|verifycode',
			'border-color: #5D729B;|bgcolor="#778AAF"|Invalid Link|deleted by the owner',
			'optional--',
			"//a[contains(@href,'kyc.pm')]");
		}
		if (GM_getValue("Check_brupload_dot_net_links", false))
		{
			addFileHost(
			"brupload\.net\/\\w+",
			'Download Gratuito',
			'<div style="width:500px;text-align:left;">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'brupload.net')]");
		}
		if (GM_getValue("Check_cloudzilla_dot_to_links", false))
		{
			addFileHost(
			"cloudzilla\.to\/\\w+",
			'btn1" id="free_download|onclick="freeDownload|id="pwd_protected">',
			'File not found|/imgs/broken.png',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'cloudzilla.to')]");
		}
    if (GM_getValue("Check_fileparadox_dot_in_links", false))
		{
			addFileHost(
			"fileparadox\.in\/\\w+",
			'CONTENT="Download File|method_free_file',
			'>File Not Found<|id="no_filedownload">|FILE NOT FOUND',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'fileparadox.in')]");
		}
		if (GM_getValue("Check_clicknupload_dot_com_links", false))
		{
			addFileHost(
			"clicknupload\.com\/\\w+",
			'name="method_free',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'clicknupload.com')]");
		}
		if (GM_getValue("Check_ex_dash_load_dot_com_links", false))
		{
			addFileHost(
			"ex-load\.com\/\\w+",
			'name="method_free|<p>Download File:</p>',
			'Folder Not Found|File Not Found|Error 404',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'ex-load.com')]");
		}
		if (GM_getValue("Check_hexupload_dot_com_links", false))
		{
			addFileHost(
			"hexupload\.com\/\\w+",
			'button" value="Free|type="submit" value=""',
			'File Not Found|<div style="width:500px;text-align:left;">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'hexupload.com')]");
		}
		if (GM_getValue("Check_wizupload_dot_com_links", false))
		{
			addFileHost(
			"wizupload\.com\/\\w+",
			'btn_download|class="downloadbtn"',
			'>File Not Found<',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'wizupload.com')]");
		}
		if (GM_getValue("Check_filecloud_dot_cc_links", false))
		{
			addFileHost(
			"filecloud\.cc\/\\w+",
			'align="center"><input type="submit" name=',
			'File Not Found|<Title>FileCloud - Premium Hosting Service<',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'filecloud.cc')]");
		}
		if (GM_getValue("Check_inclouddrive_dot_com_links", false))
		{
			addFileHost(
			"inclouddrive\.com\/\\w+",
			'initfreedownload',
			'<title>Content Unavailable|The file you are trying to download is no longer available',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'inclouddrive.com')]");
		}
		if (GM_getValue("Check_radicalshare_dot_com_links", false))
		{
			addFileHost(
			"radicalshare\.com\/\\w+",
			'value="download1|name="method_free"',
			'File Not Found<|<div style="width:500px;text-align:left;">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'radicalshare.com')]");
		}
		if (GM_getValue("Check_sharemods_dot_com_links", false))
		{
			addFileHost(
			"sharemods\.com\/\\w+",
			'name="method_free"',
			'File Not Found<',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'sharemods.com')]");
		}
		if (GM_getValue("Check_hostr_dot_co_links", false))
		{
			addFileHost(
			"hostr\.co\/\\w+",
			'method="get"',
			'File not found<|error-page',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'hostr.co')]");
		}
		if (GM_getValue("Check_filepi_dot_com_links", false))
		{
			addFileHost(
			"filepi\.com\/\\w+",
			'id="button_start">',
			'File not found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'filepi.com')]");
		}
		if (GM_getValue("Check_tikfile_dot_com_links", false))
		{
			addFileHost(
			"tikfile\.com\/\\w+",
			'btn_download',
			'File Not Found|file was removed|Reason for deletion',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'tikfile.com')]");
		}
		if (GM_getValue("Check_cloudsix_dot_me_links", false))
		{
			addFileHost(
			"cloudsix\.me\/\\w+",
			'name="method_free"',
			'File Not Found|width:500px;text-align:left;">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'cloudsix.me')]");
		}
		if (GM_getValue("Check_neodrive_dot_co_links", false))
		{
			addFileHost(
			"neodrive\.co\/\\w+",
			'btn1" id="free_download|onclick="freeDownload|id="pwd_protected">',
			'File not found|/imgs/broken.png',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'neodrive.co')]");
		}
		if (GM_getValue("Check_chayfile_dot_com_links", false))
		{
			addFileHost(
			"chayfile\.com\/\\w+",
			'name="method_free"',
			'File Not Found|<h3>The file was removed by administrator</h3>',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'chayfile.com')]");
		}
		if (GM_getValue("Check_xfileload_dot_com_links", false))
		{
			addFileHost(
			"xfileload\.com\/\\w+",
			'Filename:|Имя файла:|Dateiname:|nom de fichier :|اسم الملف:|Dosya AdД±|Nazwa:|Nombre de fichero:|NamaFile:|Bestandsnaam:|שם קובץ:"',
			'The file you were looking for could not be found, sorry for any inconvenience.|Die von Ihnen angeforderte Datei konnte nicht gefunden werden..|le fichier que vous recherchiez ne pourrait pas etre trouve, désole pour aucun derangement|لم يتم إيجاد الملف المطلوب , عذراً للإزعاج|Istenen dosya bulunamadД±..|Plik ktorego szukasz nie zostal odnaleziony na naszych serwerach, przepraszamy.|El archivo que usted buscaba no podrнa ser encontrado, arrepentido para ningъn inconveniente.|File yang sedang anda cari tidak dapat ditemukan, maaf untuk ketidaknyamanan anda saat ini.|De bestand waar u naar zocht is niet gevonden, excuses voor het ongemak..|הקובץ שחיפשת לא נמצא.',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'xfileload.com')]");
		}
		if (GM_getValue("Check_rockfile_dot_eu_links", false))
		{
			addFileHost(
			"rockfile\.eu\/\\w+",
				'You have requested:',
			'The file you were looking for could not be found, sorry for any inconvenience.',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'rockfile.eu')]");
		}
		if (GM_getValue("Check_24uploading_dot_com_links", false))
		{
			addFileHost(
			"24uploading\.com\/\\w+",
			'File:|Download Speed:',
			'<b>File Not Found</b>|file was removed',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'24uploading.com')]");
		}
		if (GM_getValue("Check_tusfiles_dot_net_links", false))
		{
			addFileHost(
			"tusfiles\.net\/\\w+",
			'i/icon/dll.png"|>Start download<br',
			'no longer available<|i/ino.png"',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'tusfiles.net')]");
		}
		if (GM_getValue("Check_jumbofile_dot_net_links", false))
		{
			addFileHost(
			"jumbofile\.net\/\\w+",
			'button" class="" value="Free',
			'This File Was Deleted',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'jumbofile.net')]");
		}
		if (GM_getValue("Check_ozofiles_dot_com_links", false))
		{
			addFileHost(
			"ozofiles\.com\/\\w+",
			'button" value="Free',
			'File Not Found|width:500px;text-align:left;">|File Deleted',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'ozofiles.com')]");
		}
		if (GM_getValue("Check_loudupload_dot_net_links", false))
		{
			addFileHost(
			"loudupload\.net\/\\w+",
			'value="Get Links',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'loudupload.net')]");
		}
		if (GM_getValue("Check_rapidsonic_dot_com_links", false))
		{
			addFileHost(
			"(rapidsonic|fileparadox)\\.com\/\\w+",
			'method_free" id="submit_btn|<h4><i class="icon_document_alt"></i>Download File</h4>',
			'>File Not Found<|id="no_filedownload">|>FILE NOT FOUND<|file has been deleted|No such file with this filename',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'rapidsonic') or contains(@href,'fileparadox.com')]");
		}
		if (GM_getValue("Check_krotix_dot_net_links", false))
		{
			addFileHost(
			"krotix\.net\/\\w+",
			'btn btn-warning|btn-free',
			'pageErrors|This File has been removed',
			'content="Scheduled Maintenance',
                        //'optional--',
			"//a[contains(@href,'krotix.net')]");
		}
		if (GM_getValue("Check_userscloud_dot_com_links", false))
		{
			addFileHost(
			"userscloud\.com\/\\w+",
			'btn_download',
			'>Server OFFLINE|background:#D3D3D3;border-bottom:1px solid #BBB;font:bold 13px Verdana;padding:3px;">',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'userscloud.com')]");
		}
		if (GM_getValue("Check_kumpulbagi_dot_com_links", false))
		{
			addFileHost(
			"kumpulbagi\.com\/\\w+",
			'class="button download',
			'internal server error',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'kumpulbagi.com')]");
		}
		if (GM_getValue("Check_faststore_dot_org_links", false))
		{
			addFileHost(
			"faststore\.org\/\\w+",
			'name="method_free',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'faststore.org')]");
		}
		if (GM_getValue("Check_prefiles_dot_com_links", false))
		{
			addFileHost(
			"prefiles\.com\/\\w+",
			'id="method_free',
			'File not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'prefiles.com')]");
		}
		if (GM_getValue("Check_doraupload_dot_com_links", false))
		{
			addFileHost(
			"doraupload\.com\/\\w+",
			'btn_download',
			'class="error-code|Could Not Be Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'doraupload.com')]");
		}
		if (GM_getValue("Check_openload_dot_io_links", false))
		{
			addFileHost(
			"openload\.io\/\\w+",
			'btn btn-primary|class="count">',
			'class="jumbotron">|We are sorry',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'openload.io')]");
		}
		if (GM_getValue("Check_uploads_dot_xxx_links", false))
		{
			addFileHost(
			"uploads\.xxx\/\\w+",
			'downoadForFree',
			'File not found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'uploads.xxx')]");
		}
		if (GM_getValue("Check_zxcfiles_dot_com_links", false))
		{
			addFileHost(
			"zxcfiles\.com\/\\w+",
			'class="downloadbtn',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'zxcfiles.com')]");
		}
    if (GM_getValue("Check_up07_dot_net_links", false))
		{
			addFileHost(
			"up07\.net\/\\w+",
			'name="method_free',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'up07.net')]");
		}
		if (GM_getValue("Check_fileupload_dot_pw_links", false))
		{
			addFileHost(
			"fileupload\.pw\/\\w+",
			'value="Free"',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'fileupload.pw')]");
		}
		if (GM_getValue("Check_4upld_dot_com_links", false))
		{
			addFileHost(
			"4upld\.com\/\\w+",
			'alt="Download Now"|content="Download file">|btn-free-element',
			'<title>Error|content="error|File not found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'4upld.com')]");
		}
		if (GM_getValue("Check_newfileland_dot_com_links", false))
		{
			addFileHost(
			"newfileland\.com\/\\w+",
			'name="method_free',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'newfileland.com')]");
		}
				if (GM_getValue("Check_swoopshare_dot_com_links", false))
		{
			addFileHost(
			"(?:.swoopshare)\\.com\/\\w+",
			'Click below to start|Klicken Sie nachfolgend|Cliquez ci-après pour|Cliccate qui per iniziare|Klik hierna om het bestand|Haga ahora clic para iniciar la',
			'<input type="file" name="f"',
			'optional--',
				//'optional--',
			"//a[contains(@href,'swoopshare.com')]"
			);
		}
		if (GM_getValue("Check_cloudshares_dot_net_links", false))
		{
			addFileHost(
			"cloudshares\.net\/\\w+",
			'"method_free|"Low Speed Download|submit" name="go',
			'Not Found|"width:500px;text-align:left;">|No such file exist',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'cloudshares.net')]"
			);
		}
		if (GM_getValue("Check_allmyvideos_dot_net_links", false))
		{
			addFileHost(
			"allmyvideos\.net\/\\w+",
			'Continue to Video',
			'File Not Found|class="err">Removed for',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'allmyvideos.net')]"
			);
		}
		if (GM_getValue("Check_vodlocker_dot_com_links", false))
		{
			addFileHost(
			"vodlocker\.com\/\\w+",
			'Proceed to video',
			'Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'vodlocker.com')]"
			);
		}
		if (GM_getValue("Check_vidbull_dot_com_links", false))
		{
			addFileHost(
			"vidbull\.com\/\\w+",
			'Verifying Video Request',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'vidbull.com')]");
		}
		if (GM_getValue("Check_novamov_dot_com_links", false))
		{
			addFileHost(
			"novamov\.com\/\\w+",
			'For version detection',
			'file no longer exists',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'novamov.com')]"
			);
		}
		if (GM_getValue("Check_filehoot_dot_com_links", false))
		{
			addFileHost(
			"filehoot\.com\/\\w+",
			'Continue to watch',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'filehoot.com')]"
			);
		}
		if (GM_getValue("Check_stagevu_dot_com_links", false))
		{
			addFileHost(
			"stagevu\.com\/\\w+",
			'Video Info',
			'No video with the provided',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'stagevu.com')]"
			);
		}
		if (GM_getValue("Check_cloudtime_dot_to_links", false))
		{
			addFileHost(
			"cloudtime\.to\/\\w+",
			'Download the video',
			'no longer exists',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'cloudtime.to')]"
			);
		}
		if (GM_getValue("Check_streamin_dot_to_links", false))
		{
			addFileHost(
			"streamin\.to\/\\w+",
			'id="btn_download',
			'Not Found|Copyright Infringement|File Deleted',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'streamin.to')]"
			);
		}
		if (GM_getValue("Check_videoweed_dot_es_links", false))
		{
			addFileHost(
			"videoweed\.es\/\\w+",
			'version detection',
			'no longer exists',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'videoweed.es')]"
			);
		}
		if (GM_getValue("Check_nowvideo_dot_sx_links", false))
		{
			addFileHost(
			"nowvideo\.sx\/\\w+",
			'Download this video',
			'no longer exists',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'nowvideo.sx')]"
			);
		}
		if (GM_getValue("Check_thevideo_dot_me_links", false))
		{
			addFileHost(
			"thevideo\.me\/\\w+",
			'Upgrade your account|Proceed to video',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'thevideo.me')]"
			);
		}
		if (GM_getValue("Check_gorillavid_dot_in_links", false))
		{
			addFileHost(
			"gorillavid\.in\/\\w+",
			'Wait 5 seconds',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'gorillavid.in')]"
			);
		}
		if (GM_getValue("Check_thefile_dot_me_links", false))
		{
			addFileHost(
			"thefile\.me\/\\w+",
			'Choose free or',
			'',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'thefile.me')]"
			);
		}
		if (GM_getValue("Check_vidzi_dot_tv_links", false))
		{
			addFileHost(
			"vidzi\.tv\/\\w+",
			'video-embed-modal row',
			'File Not Found|file was deleted',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'vidzi.tv')]"
			);
		}
		if (GM_getValue("Check_filenuke_dot_com_links", false))
		{
			addFileHost(
			"filenuke\.com\/\\w+",
			'Download File',
			'Earn with us',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'filenuke.com')]"
			);
		}
		if (GM_getValue("Check_vidto_dot_me_links", false))
		{
			addFileHost(
			"vidto\.me\/\\w+",
			'Proceed to video',
			'Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'vidto.me')]"
			);
		}
				if (GM_getValue("Check_vidspot_dot_net_links", false))
		{
			addFileHost(
			"vidspot\.net\/\\w+",
			'Duration',
			'Removed for',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'vidspot.net')]"
			);
		}
		if (GM_getValue("Check_sharesix_dot_com_links", false))
		{
			addFileHost(
			"(?:sharesix\\.com|sharesix\\.net)\/\\w+",
			'Download File',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'sharesix.com') or contains(@href,'sharesix.net/')]"
			);
		}
		if (GM_getValue("Check_movpod_dot_in_links", false))
		{
			addFileHost(
			"movpod\.in\/\\w+",
			'Continue',
			'File Not Found',
			'optional--',
                        //'optional--',
			"//a[contains(@href,'movpod.in')]"
			);
		}

	}
//start here

	//hosts with direct download, so they must be requested for headers only
	function initFileHostsHeadersOnly()
	{
		function addFileHostHeadersOnly(linkRegex, isAliveRegex, isDeadRegex, xpathEx, ispremRegex)
		{
			var host = new Array(5);
			host[0] = linkRegex;
			host[1] = isAliveRegex;
			host[2] = isDeadRegex;
			host[3] = xpathEx;
			host[4] = ispremRegex;
			http_file_hosts_headers_only.push(host);
		}
		if (GM_getValue("Check_uloziste_dot_com_links", false))
		{
			addFileHostHeadersOnly(
			"(?:|files\\.)uloziste\\.com\/\\w+\/\\w+",
			'Connection: Keep-Alive',
			'Content-Length: 3857',
			"//a[contains(@href,'uloziste.com')]"
			)
		}
		if (GM_getValue("Check_adrive_dot_com_links", false))
		{
			addFileHostHeadersOnly(
			"adrive\\.com\/public\/\\w+",
			'Connection: keep-alive',
			'orig_ref=deleted',
			"//a[contains(@href,'adrive.com')]"
			)
		}
		if (GM_getValue("Check_myupload_dot_dk_links", false))
		{
			addFileHostHeadersOnly(
			"myupload\\.dk\/showfile\/\\w+",
			'Expires:',
			'squeeze1\\s+Vary',
			"//a[contains(@href,'myupload.dk/showfile')]"
			)
		}
	}
	
	
	
	
	
	//CustomRules
	
	//functions add...Host copied here
	function addObsoleteHost(linkRegex, xpathEx)
	{
		var host = new Array(2);
		host[0] = linkRegex;
		host[1] = xpathEx;
		http_file_hosts_obsolete.push(host);
	}
		
	function addFileHost(linkRegex, isAliveRegex, isDeadRegex, isUnavaRegex, xpathEx, tryLoop, ispremRegex)
	{
		var host = new Array(7);
		host[0] = linkRegex;
		host[1] = isAliveRegex;
		host[2] = isDeadRegex;
		host[3] = isUnavaRegex;
		host[4] = xpathEx;
		tryLoop ? host[5] = true : host[5] = false;
		host[6] = ispremRegex;
		http_file_hosts.push(host);
	}
	
	function addFileHostHeadersOnly(linkRegex, isAliveRegex, isDeadRegex, xpathEx, ispremRegex)
	{
		var host = new Array(5);
		host[0] = linkRegex;
		host[1] = isAliveRegex;
		host[2] = isDeadRegex;
		host[3] = xpathEx;
		host[4] = ispremRegex;
		http_file_hosts_headers_only.push(host);
	}
	
	
	//takes a fully built rules array and adds the rules to WARLC
	function applyCustomRules(customRules)
	{
		if (!customRules) return;
		var rules, r, i;
		rules = customRules.rules;
		for (i = 0 ; i < rules.length ; i++)
		{
			r = rules[i];
			if (r.enabled)
			{
				switch (r.type)
				{
					case 'single':
						addFileHost(r.urlregex, r.aliveregex, r.deadregex, r.unavaregex, r.premregex||'', r.xpath);
						break;
						
					case 'headers':
						addFileHostHeadersOnly(r.urlregex, r.aliveregex, r.deadregex, r.xpath, r.premregex);
						break;
						
					case 'obsolete':
						addObsoleteHost(r.urlregex, r.xpath)
						break;
				}
			}
		}
	}


	function initFileHostsCustom()
	{
		if (Custom_rules && Custom_rules_text)
		{
			var msg = '';
			if (newVersion) 
				msg = 'New version of W.A.R. Links Checker detected.\n\n';
				else if ((now - last_custom_rules_nag) >= 60*24*60*60*1000)
					msg = '60 or more days have passed since this notification.\n\n';
			if (msg && /^\s*@customrule(?:_obsolete)?\s/mi.test(Custom_rules_text))
			{
				GM_setValue('last_custom_rules_nag', ''+new Date().getTime()); //reset nag
				msg += 
					'Either new version of W.A.R. Links Checker detected or 60 days passed since this notify.\n'+
					'Please check that your custom rules haven\'t been built into WARLC.\n'+
					'If not, please share them with us so they can be included in the next version! Built-in rules are always preferred.\n\n'+
					'We apologize for this annoying notification, but there is a reason to this.\n'+
					'Ideally, WARLC would check which of your custom rules have been included and disable them. '+
					'Unfortunately, there is no easy way to do that, but we don\'t want everybody to just use their custom rules '+
					'forever without ever checking if the built-in ones have been added/fixed. This is currently the only way '+
					'to remind you that you should try built-in rules, report missing/non-working ones and share your custom rules.';
				setTimeout(function(){alert(msg)},0);
			}
				
			var customRules = parseCustomRules(Custom_rules_text);
			if (customRules.warning || customRules.error) 
				alert('There were ' + customRules.error + ' errors, ' + customRules.warning + ' warnings, ' + 
					customRules.note + ' notes found during Custom Rules processing.\n' + customRules.rules.length + ' valid rules found.\n\n' + 
					JSON.stringify(customRules.info, null, '  '));
			applyCustomRules(customRules);
				
		}
	}
//end of CustomRules processing



} //end of function start



function initClipBoardTools()
{
	unsafeWindow.copyToClipboard = function(text)
	{
		try
		{
			this.netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

			var str = Components.classes["@mozilla.org/supports-string;1"].
			createInstance(Components.interfaces.nsISupportsString);
			if (!str) return false;

			str.data = text;

			var trans = Components.classes["@mozilla.org/widget/transferable;1"].
			createInstance(Components.interfaces.nsITransferable);
			if (!trans) return false;

			trans.addDataFlavor("text/unicode");
			trans.setTransferData("text/unicode", str, text.length * 2);

			var clipid = Components.interfaces.nsIClipboard;
			var clip = Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);
			if (!clip) return false;

			clip.setData(trans, null, clipid.kGlobalClipboard);
		} catch (e) {
			GM_log("Error copyToClipboard : " + e);
			alert(e + "\n\nsigned.applets.codebase_principal_support must be set true in about:config")
        }
	}
}



//CustomRules

function escapeRegex(str)
{
	return str.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
}


//called internally from parseCustomRules.
//expected: rule object with array fields baseurl, alivematch etc, everything must already be checked for input errors
//returns the rule object with string fields urlregex, xpath, aliveregex etc built from the arrays
function makeCustomRule(rule)
{
	function makeMatchRegex(arrmatch)
	{
		return escapeRegex(arrmatch.join('\n'))
			.replace(/  +/g, '\\s+') //two or more spaces to any whitespace
			.replace(/\n/g,'|'); //join together
	}
	
	if (rule.alivematch) rule.aliveregex = makeMatchRegex(rule.alivematch);
	if (rule.deadmatch) rule.deadregex = makeMatchRegex(rule.deadmatch);
	if (rule.unavamatch) rule.unavaregex = makeMatchRegex(rule.unavamatch);
	if (rule.premmatch) rule.premregex = makeMatchRegex(rule.premmatch);
	
	if (rule.baseurl)
	{
		var i, m, urlregex = [], xpath = [], len = rule.baseurl.length;
		for (i = 0 ; i < len ; i++)
		{
			m = rule.baseurl[i].match(/^([a-z0-9\.-]+)(?: +([a-z \.]+) +)?(\/.*)$/);
			if (m[2]) //baseurl in the form:   example. com co.uk net /xxx
			{
				xpath = xpath.concat(m[2].replace(/([a-z\.]+)/g, m[1]+'$1'+m[3]).split(/\s+/));   //xpath = xpath.concat(['example.com/xxx', 'example.co.uk/xxx', 'example.net/xxx'])
				urlregex.push(    (m[1] + '(?:'+ m[2].replace(/\s+/g,'|') + ')').replace(/\./g,'\\.')     + escapeRegex(m[3]) + '.');   //urlregex.push('example\\.(?:com|co\\.uk|net)/xxx.')
			}
			else //baseurl in the form:   example.com/xxx
			{
				xpath.push(m[0]);
				urlregex.push(escapeRegex(m[0]) + '.');
			}
		} 
		rule.xpath = "//a[contains(@href,'"   +   xpath.join("') or contains(@href,'")   +   "')]";
		rule.urlregex = '(?:[a-z0-9\\.-]+\\.)?(?:' + urlregex.join('|') + ')';
	}
	
	return rule;
}  //function makeCustomRule


/*
Takes a string containing custom link checking rules.
Returns an object with fields:
  info - contains notes, warnings and errors found during parsing
  rules - the array of custom rules
  note, warning, error - number of each of them found during parsing
Format of the input string:
One command per line. Command format: @keyword parameter
Keywords:
  @customrule, @customrule_obsolete, @customrule_headers - begin a new custom rule. Parameter: name of the rule
  @#customrule, @#customrule_obsolete, @#customrule_headers - begin and parse this custom rule, but don't use it. Parameter: name of the rule
These keywords can be multiple (any of them will work):
  @baseurl - constant part of the url. ( d123.example.com/d/?fileid -> example.com/d/? ) - used for both xpath and urlregex (will also match anything.example...)
  @alivematch, @deadmatch, @unavamatch - what to look for in the response. No regex, literal text is used with one exception: 2 or more spaces will match \s+
  @alivelink, @deadlink - example links
@baseurl is always required, @alivematch and @deadmatch are required except for obsolete. @unavamatch is ignored for obsolete. @*link is optional.
Lines starting with // and empty lines are ignored.
Invalid parameters generate errors and those lines are skipped.
Other lines generate warnings, but are otherwise ignored (also those before the first @customrule line or inside a rule with invalid name).
Example:
@customrule filehost
@baseurl    filehost.com/download/
@baseurl    filehost2. com net /d?=
@alivematch id="download">
@deadmatch  File not found
@deadmatch  File deleted
*/
function parseCustomRules(rulesStr)
{
	var linenum, customRules = {'info': [], 'rules': [], 'note': 0, 'warning': 0, 'error': 0};
	
	function addInfo(type, msg, ln){
		customRules.info.push({'linenum':(ln===undefined ? linenum+1 : ln+1), 'type':type, 'msg':msg});
		customRules[type]++;
		}
		
	var lines = rulesStr.match(/^(.*)$/gm); //split into array of lines
	if (!lines) return null;
	lines.push('@#customrule _'); //to save the last rule
	var m, linecount = lines.length;
	var keyword, param, constr, rule, err;
	
	var TLD = '[a-z]{2,7}(?:\\.[a-z]{2,7})?';
	var TLDorTLDlist = '(?:'+TLD+'| '+TLD+'(?: '+TLD+'){0,9} )'; //TLD or space-separated list of TLDs
	var baseurlRE = new RegExp('^([a-z0-9-]{1,30}(?:\\.[a-z0-9-]{1,30}){0,2}\\.)'+TLDorTLDlist+'(/[^\'"\s\$]{0,50})$', 'i');
	
	var constraints = {
		'baseurl': {
			'single':   {'min': 1, 'max': 10, 'paramRE': baseurlRE},
			'headers':  {'min': 1, 'max': 10, 'paramRE': baseurlRE},
			'obsolete': {'min': 1, 'max': 10, 'paramRE': baseurlRE}},
		'alivematch': {
			'single':   {'min': 1, 'max': 10, 'paramRE': null},
			'headers':  {'min': 1, 'max': 10, 'paramRE': null}},
		'deadmatch': {
			'single':   {'min': 1, 'max': 10, 'paramRE': null},
			'headers':  {'min': 1, 'max': 10, 'paramRE': null}},
		'unavamatch': {
			'single':   {'min': 0, 'max': 10, 'paramRE': null}},
		'alivelink': {
			'single':   {'min': 0, 'max': 10, 'paramRE': null},
			'headers':  {'min': 0, 'max': 10, 'paramRE': null}},
		'deadlink': {
			'single':   {'min': 0, 'max': 10, 'paramRE': null},
			'headers':  {'min': 0, 'max': 10, 'paramRE': null},
			'obsolete': {'min': 0, 'max': 10, 'paramRE': null}}
		};
		
	for (linenum = 0 ; linenum < linecount ; linenum++)
	{
		//capturing groups:              1         23   4               5                                                                                  6
		m = lines[linenum].match(/^\s*(?:(\/\/.*)|@((#?)(customrule)(?:_(headers|obsolete))?|baseurl|alivematch|deadmatch|unavamatch|alivelink|deadlink)\s+(.+))?$/i);
		if (m)
		{
			if (m[1] || !m[2]) 
				continue; // ignore empty lines and lines starting with //
				
			keyword = (m[4] || m[2]).toLowerCase();
			param = m[6];
			
			if (keyword == 'customrule')
			{
				//save the current rule if all required fields are provided
				if (rule) 
				{
					err = false;
					$.each(constraints, function(kw, constraint){
						var l, constr = constraint[rule.type];
						if (constr)
						{
							l = rule[kw] ? rule[kw].length : 0;
							if (l < constr.min || l > constr.max) 
							{
								addInfo('error', 'Required at least ' + constr.min + ' and at most ' + constr.max + ' @' + kw.toUpperCase() + ' command(s) for type ' + rule.type.toUpperCase() + '. Rule skipped.', linenum-1);
								err = true;
							}
						}
					});
					if (!err)
						customRules.rules.push(makeCustomRule(rule));
				}
				
				//start a new rule
				if (/^[\w\.-]{1,30}$/.test(param)) //valid name?
				{
					rule = {
						'enabled': !m[3], 
						'type': m[5] ? m[5].toLowerCase() : 'single', 
						'name': param
						}; 
				}
				else
				{
					addInfo('error', 'Invalid rule name. Cannot start a new rule definition.');
					rule = null;
				}
			}
			else //good line format, but keyword other than customrule
			{ 
				if (!rule)
				{
					addInfo('warning', 'Command outside @CUSTOMRULE definiton. Line skipped.'); 
					continue;
				}
				
				
				if (constraints[keyword])
				{
					constr = constraints[keyword][rule.type];
					if (constr)
					{
						if (constr.paramRE && !constr.paramRE.test(param))
						{
							addInfo('warning', 'Invalid @' + keyword.toUpperCase() + ' parameter. Line Skipped.');
							continue;
						}
					}
					else
					{
						addInfo('note', '@' + keyword.toUpperCase() + ' not applicable for type ' + rule.type.toUpperCase() + '. Line skipped.');
						continue;
					}
				}
				
				//line OK, save
				rule[keyword] ? rule[keyword].push(param) : rule[keyword] = [param];
				
			}
		}  //if (m)
		else
			addInfo('warning', 'Unknown line format. Line skipped.');
	}  //for loop
	
	return customRules;
}  //function parseCustomRules
