//////////////////////////
function DKGoogleAd_Init()
{

}

/////////////////////////
function DKGoogleAd_End()
{

}

//////////////////////////////////
function DKGoogleAd_OnEvent(event)
{
	DKLog("DKGoogleAd_OnEvent("+DK_GetId(event)+","+DK_GetType(event)+","+DKWidget_GetValue(event)+")\n", DKDEBUG);
}

///////////////////////////////////////////////////
function DKGoogleAd_CreateAd(parent, width, height)
{
	DKLog("DKGoogleAd_CreateAd("+parent+","+width+","+height+") \n", DKDEBUG);
	DKLog("Browser = "+DK_GetBrowser()+"\n", DKDEBUG);
	//DKLog("protocol = "+DKAssets_Protocol()+"\n", DKINFO);
	
	//if(DK_GetBrowser() != "Rocket"){
	if(DKAssets_Protocol() != "file:"){
		var id = DKWidget_CreateElement(parent, "div", "DKAdd");
		DKWidget_SetProperty(id, "position", "absolute");
		DKWidget_SetProperty(id, "width", width);
		DKWidget_SetProperty(id, "height", height);
		DKWidget_SetProperty(id, "text-align", "center");
	
		var px_width = document.getElementById(id).clientWidth;
		var px_height = document.getElementById(id).clientHeight;
	
		//don't let size go over 1200px
		px_width = Math.min(px_width, 1200);
		px_height = Math.min(px_height, 1200);
		window.google_ad_client = "ca-pub-4839505278360003";
		window.google_ad_slot = "8269654670";
		window.google_ad_width = px_width;
		window.google_ad_height = px_height;
		//window.google_adtest = "on";

		var container = document.getElementById(id);
		var w = document.write;
		document.write = function (content) {
			container.innerHTML = content;
			document.write = w;	
		};

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://pagead2.googlesyndication.com/pagead/show_ads.js';
		document.body.appendChild(script);
	
		return id;
	}
	//else if(DK_GetOS() == "Win32" || DK_GetOS() == "Win64"){
	else{
		var id = DKWidget_CreateElement(parent, "div", "DKAdd");
		DKWidget_SetProperty(id, "position", "absolute");
		DKWidget_SetProperty(id, "width", width);
		DKWidget_SetProperty(id, "height", height);
		DKWidget_SetProperty(id, "bottom", "0px");
		//DKWidget_SetProperty(id, "text-align", "center");
		
		//Don't let size go over 1200px
		var px_width = DKWidget_GetClientWidth(id);
		var px_height = DKWidget_GetClientHeight(id);
		px_width = Math.min(parseInt(px_width), 1200);
		px_height = Math.min(parseInt(px_height), 1200);
		DKLog("px_width = "+String(px_width)+"\n", DKINFO);
		DKLog("px_height = "+String(px_height)+"\n", DKINFO);
		
		DKWidget_SetProperty(id, "width", String(px_width)+":rem");
		//DKWidget_SetProperty(id, "width", "100%");
		DKWidget_SetProperty(id, "height", String(px_height)+":rem");
		
		//var iframe = "<iframe id=\"DKBrowser_cef\" style=\"position:absolute;width:"+String(px_width)+":rem;"+String(px_height)+":rem;\" width=\""+String(px_width)+"\" height=\""+String(px_height)+"\" src=\"http://digitalknob.com/Digitalknob/AdTest.html\"></iframe>";
		
		//DKWidget_SetInnerHtml(id, iframe);

		var url = "http://digitalknob.com/Digitalknob/AdTest2.html";
		var iframe = DKWidget_CreateElement(id, "iframe", "DKAdd_cef");
		DKWidget_SetAttribute(iframe, "src", url);
		//DKWidget_SetAttribute(iframe, "width", String(px_width));
		DKWidget_SetAttribute(iframe, "width", "100%");
		//DKWidget_SetAttribute(iframe, "height", String(px_height));
		DKWidget_SetAttribute(iframe, "height", "100%");
		DKWidget_SetProperty(iframe, "position", "absolute");
		DKWidget_SetProperty(iframe, "border", "0");
		//DKWidget_SetProperty(iframe, "width", String(px_width)+"rem");
		//DKWidget_SetProperty(iframe, "height", String(px_width)+"rem");
		var currentBrowser = DKCef_GetCurrentBrowser(iframe);
		DKCef_SetUrl(iframe, url, currentBrowser);
		return id;
	}
}