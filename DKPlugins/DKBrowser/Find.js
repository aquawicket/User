////////////////////
function Find_Init()
{
	DKCreate("DKBrowser/Find.html");
	DKAddEvent("FindNext", "click", Find_OnEvent);
	DKAddEvent("FindCancel", "click", Find_OnEvent);
}

///////////////////
function Find_End()
{
	DKRemoveEvents(Find_OnEvent);
	DKCef_Find("DKBrowser_cef", ""); //FIXME: not working
	DKClose("DKBrowser/Find.html");
}

////////////////////////////
function Find_OnEvent(event)
{
	//DKLog("Find_OnEvent("+DK_GetId(event)+","+DK_GetType(event)+","+DK_GetValue(event)+")\n");
	
	if(DK_Id(event, "FindNext")){
		DKCef_Find("DKBrowser_cef", DKWidget_GetValue("FindInput"));
	}
	if(DK_Id(event, "FindCancel")){
		DKFrame_Close("DKBrowser/Find.html"); //FIXME: not working
		return;
	}
}