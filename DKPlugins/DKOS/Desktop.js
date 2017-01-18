///////////////////////
function Desktop_Init()
{
	DKCreate("DKOS/Desktop.html");
	DKAddEvent("Background", "contextmenu", Desktop_OnEvent);
}

//////////////////////
function Desktop_End()
{
	DKClose("Desktop.html");
}

///////////////////////////////
function Desktop_OnEvent(event)
{
	DKLog("Desktop_OnEvent("+DK_GetId(event)+","+DK_GetType(event)+","+DKWidget_GetValue(event)+")\n", DKDEBUG);
	
	if(DK_Id(event, "Background") && DK_Type(event, "contextmenu")){
		DKCreate("DKOS/DesktopMenu.js", function(){});
	}
}