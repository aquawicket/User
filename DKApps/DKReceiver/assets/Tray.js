/////////////////////
function Tray_Init()
{
	DKCreate("DKTray");
	DKAddEvent("DKTray", "Restore", Tray_OnEvent);
	DKAddEvent("DKTray", "Minimize", Tray_OnEvent);
	DKAddEvent("DKTray", "Exit", Tray_OnEvent);
	
	//Test
	DKTray_AddItem("Test", 1005); //Not Working
	DKTray_SetTooltip("DKReceiver");
}

////////////////////////////
function Tray_OnEvent(event)
{
	//DKLog("DKTray_OnEvent("+event+") \n");
	if(DK_Type(event, "Restore")){
		DKCreate("DKWindowJS");
		DKWindow_Show();
	}
	if(DK_Type(event, "Minimize")){
		DKCreate("DKWindowJS");
		DKWindow_Hide();
	}
	if(DK_Type(event, "Exit")){
		DK_Exit();
	}
}
