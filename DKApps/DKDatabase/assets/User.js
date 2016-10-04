var USE_CEF = false;
DKCreate("DKWindow");
DKCreate("DKRocket");
DKCreate("DKWidget");

if(DK_GetBrowser() == "DigitalKnob"){
	DKCreate("DKDebug/DKDebug.js", function(){});
}

if(DK_GetBrowser() == "DigitalKnob" && USE_CEF){
	var url = "file:///C:/digitalknob/USER/DKApps/DKDatabase/assets/index.html";
	//var url = "http://digitalknob.com/DKDatabase";
	var iframe = DKWidget_CreateElement("body", "iframe", "DKCef_frame");
	DKWidget_SetProperty(iframe, "position", "absolute");
	DKWidget_SetProperty(iframe, "top", "0rem");
	DKWidget_SetProperty(iframe, "left", "0rem");
	DKWidget_SetProperty(iframe, "width", "100%");
	DKWidget_SetProperty(iframe, "height", "100%");
	DKCef_SetUrl(iframe, url, DKCef_GetCurrentBrowser(iframe));
	DKCef_SetFocus(iframe);
	
	DKCreate("DKGoogleAd/DKGoogleAd.js", function(){
		var id = DKGoogleAd_CreateAd("body", "100%", "100rem");
		DKWidget_RemoveProperty(id, "top");
		DKWidget_SetProperty(id, "bottom", "0rem");
	});
}
else{
	DKCreate("DKScale/DKScale.js", function(){});
	DKCreate("DKDatabase/DKDatabase.js", function(){
		if(DK_GetBrowser() != "CEF"){
			/*
			DKCreate("DKGoogleAd/DKGoogleAd.js", function(){
				var id = DKGoogleAd_CreateAd("body", "100%", "100rem");
				DKWidget_RemoveProperty(id, "top");
				DKWidget_SetProperty(id, "bottom", "0rem");
			});
			*/
		}
	});
}


