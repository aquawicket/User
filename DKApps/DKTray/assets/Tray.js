/////////////////////
function Tray_Init()
{
	DKCreate("DKTray");
	DKCreate("DKTrayJS");
	DKCreate("DKFileJS");
	DKCreate("DKAssetsJS");
	DKRegisterEvent("DKTray", "click", Tray_OnEvent);
	DKRegisterEvent("DKTray", "Restore", Tray_OnEvent);
	DKRegisterEvent("DKTray", "Minimize", Tray_OnEvent);
	DKRegisterEvent("DKTray", "Exit", Tray_OnEvent);
	Tray_On();
}

////////////////////////////
function Tray_OnEvent(event)
{
	//DKLog("DKTray_OnEvent("+event+") \n");
	if(DK_Type(event, "click")){
		Tray_ToggleIcon();
	}
}

//////////////////////////
function Tray_ToggleIcon()
{
	var icon = DKTray_GetIcon();
	var file = DKFile_GetFilename(icon);
	//DKLog(file+"\n");
	
	if(file == "touchON.ico"){
		Tray_Off();
	}
	else{
		Tray_On();
	}
}

//////////////////
function Tray_On()
{
	DKLog("ON \n");
	var datapath = DKAssets_GetDataPath();
	DKTray_SetIcon(datapath+"touchON.ico");
}

///////////////////
function Tray_Off()
{
	DKLog("OFF \n");
	var datapath = DKAssets_GetDataPath();
	DKTray_SetIcon(datapath+"touchOFF.ico");
}
