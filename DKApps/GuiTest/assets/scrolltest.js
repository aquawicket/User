DKCreate("DKWidgetJS");
DKCreate("scrolltest.html");
DKCreate("scrolltest1.html");
DKCreate("scrolltest2.html");
DKCreate("DKMessage/DKMessage.js");

//////////////////////////
function scrolltest_Init()
{
	DKAddEvent("bottomdiv", "mousedown", scrolltest_OnEvent);
}

//////////////////////////////////
function scrolltest_OnEvent(event)
{
	//DKLog("scrolltest_OnEvent\n");
	DKMessageBox(0, "ShowMessage", "bottomdiv clicked");
}