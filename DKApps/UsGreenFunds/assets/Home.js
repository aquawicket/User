DKCreate("DKWidget,Home.html");

////////////////////
function Home_Init()
{
	DKRegisterEvent("login", "click", Home_OnEvent);
	DKRegisterEvent("GLOBAL", "keydown", Home_OnEvent);
}

////////////////////////////
function Home_OnEvent(event)
{
	//DKLog(event);
	
	var password = DKWidget_GetValue("password");
	if(password == "million"){
		DKLog("Yup \n");
		DKWidget_Hide("Home.html");
		DKCreate("DKJavascript,Admin.js");
	}
	else{
		DKLog("Nope \n");
	}
}