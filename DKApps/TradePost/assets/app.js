DKCreate("DKWindow");
DKCreate("DKRocket");
DKCreate("DKGui/DKFrame.js");
DKCreate("DKBrowser/DKBrowser.js");
DKWidget_SetProperty("DKBrowser.html", "width", "100%");
DKWidget_SetProperty("DKBrowser.html", "height", "100%");
DKCreate("DKTray/DKTray.js");
DKCreate("DKDebug/DKDebug.js");
DKCreate("DKAdmin/DKAdmin.js");
DKWidget_SetProperty("body", "background-color", "rgb:(120,120,120)");

//DKCreate("DKSDLText");
//DK_SetFramerate(120);
//DKCreate("DKUpdate");

DKCef_SetUrl("DKBrowser_cef", DKCef_GetCurrentBrowser("DKBrowser_cef"), DKAssets_LocalAssets()+"TradePost_index.html");

DK_RunDuktape("DKLog('Test');");
DK_RunDuktape("DKCef_SetFocus('DKBrowser_cef');");


//DK_RunDuktape("DKBrowser_NewTab();");
//DK_RunDuktape("DKCef_SetUrl('DKBrowser_cef', DKCef_GetCurrentBrowser('DKBrowser_cef'), 'https://inlandempire.craigslist.org/d/for-sale/search/sss');");
//DK_RunDuktape("DKBrowser_SelectTab(0);");


/*
DKBrowser_NewTab();
DKCef_SetUrl("DKBrowser_cef", DKCef_GetCurrentBrowser("DKBrowser_cef"), "https://inlandempire.craigslist.org/d/for-sale/search/sss");
DKBrowser_NewTab();
DKCef_SetUrl("DKBrowser_cef", DKCef_GetCurrentBrowser("DKBrowser_cef"), "https://us.letgo.com/en");
DKBrowser_NewTab();
DKCef_SetUrl("DKBrowser_cef", DKCef_GetCurrentBrowser("DKBrowser_cef"), "https://offerup.com/");
DKBrowser_SelectTab(0);
*/