var USE_CEF = 0;     //Desktop
var USE_WEBVIEW = 0; //Android, iOS?
var USE_SDL = 1;     //Use with caution
var USE_ROCKET = 1;  //Use with caution

DKCreate("DK/init.js", function(){});

//////////////////////////
function app_LoadPlugins()
{

}

///////////////////////
function app_LoadPage()
{
	DKLog("app_LoadPage()\n");
	
	DKCreate("DKWindow/DKWindow.js", function(){
	DKCreate("DKTray/DKTray.js", function(){
	DKCreate("DKDebug/DKDebug.js", function(){
	DKCreate("DKPaint/DKPaint.js", function(){
		var height = DKWindow_GetHeight();
		DKWidget_SetProperty("DKPaint/DKPaint.html", "height", "100rem");
		var assets = DKAssets_LocalAssets();
		DKPaint_Open(assets+"DKOcr/test.png");
	DKCreate("DKNotepad/DKNotepad.js", function(){
		DKWidget_SetProperty("DKNotepad/DKNotepad.html", "top", "500px");
	});
	});
	});
	});
	});
}