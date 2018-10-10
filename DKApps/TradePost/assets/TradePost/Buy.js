var buyItems = []; //items stored here, for use with json
var buySettings = {}; //new object
var queueSize = 0;

 
///////////////////
function Buy_Init()
{
	DKLog("Buy_Init()\n", DKDEBUG);
	DKCreate("TradePost/Buy.html");
	DKCreate("TradePost/Helper.js", function(){});
	
	DKAddEvent("Buy_ScrapCraigslist", "click", Buy_OnEvent);
	DKAddEvent("Buy_ScrapLetGo", "click", Buy_OnEvent);
	DKAddEvent("Buy_ScrapOfferUp", "click", Buy_OnEvent);
	DKAddEvent("Buy_ScrapFacebook", "click", Buy_OnEvent);
	DKAddEvent("Buy_ScrapEbay", "click", Buy_OnEvent);
	DKAddEvent("Buy_Settings", "click", Buy_OnEvent);
	DKAddEvent("Buy_Clear", "click", Buy_OnEvent);
	
	Buy_LoadSettings();
	Buy_LoadData();
	Buy_Update();
}

//////////////////
function Buy_End()
{
	DKLog("Buy_End()\n", DKDEBUG);
	DKRemoveEvents(Buy_OnEvent);
	DKClose("TradePost/Buy.html");
}

///////////////////////////
function Buy_OnEvent(event)
{
	DKLog("Buy_OnEvent("+DK_GetId(event)+","+DK_GetType(event)+","+DK_GetValue(event)+")\n", DKDEBUG);
	
	if(DK_Id(event, "Buy_ScrapCraigslist")){
		document.getElementById("Buy_Container").scrollTo(0,0);
		/*
		Helper_Queue( function(){
			Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?", function(){ Buy_Update(); })
		});
		Helper_Queue( function(){
			Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=120", function(){ Buy_Update(); })
		});
		Helper_Queue( function(){
			Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=240", function(){ Buy_Update(); })
		});
		Helper_Queue( function(){
			Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=360", function(){ Buy_Update(); })
		});
		Helper_Queue( function(){
			Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=480", function(){ Buy_Update(); })
		});
		*/
		Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?", function(){       
		Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=120", function(){  
		Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=240", function(){
		Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=360", function(){
		Buy_CraigslistToArry("https://inlandempire.craigslist.org/search/sss?s=480", function(){
			Buy_Update();
			return;
		})
		})
		})
		})
		})
	}
	if(DK_Id(event, "Buy_ScrapLetGo")){
		document.getElementById("Buy_Container").scrollTo(0,0);
		Buy_LetGoToArry("https://us.letgo.com/en/category/cars", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/housing", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/free-stuff", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/electronics", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/cars-motors", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/sports-leisure-games", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/home-garden", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/movies-books-music", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/fashion-accessories", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/baby-child", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/other", function(){
		Buy_LetGoToArry("https://us.letgo.com/en/category/services", function(){
		Buy_LetGoToArry("https://us.letgo.com", function(){
			Buy_Update();
			return;
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
	}
	if(DK_Id(event, "Buy_ScrapOfferUp")){
		document.getElementById("Buy_Container").scrollTo(0,0);	
		Buy_OfferUpToArry("https://offerup.com/explore/k/antiques", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/appliances", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/arts-crafts", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/audio-equipment", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/auto-parts", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/baby-kids", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/beauty-health", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/bicycles", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/boats-marine", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/books-magazines", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/business-equipment", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/campers-rvs", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/cars-trucks", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/cds-dvds", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/cell-phones", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/clothing-shoes", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/collectibles", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/computer-equipment", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/electronics", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/exercise", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/free", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/furniture", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/games-toys", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/general", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/home-garden", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/household", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/jewelry-accessories", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/motorcycles", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/musical-instruments", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/pet-supplies", function(){	
		Buy_OfferUpToArry("https://offerup.com/explore/k/photography", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/software", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/sports-outdoors", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/tickets", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/tools-machinery", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/tvs", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/video-equipment", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/video-games", function(){
		Buy_OfferUpToArry("https://offerup.com/explore/k/wedding", function(){
		Buy_OfferUpToArry("https://offerup.com", function(){
			Buy_Update();
			return;
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
		})
	}
	if(DK_Id(event, "Buy_ScrapFacebook")){
		document.getElementById("Buy_Container").scrollTo(0,0);
		Buy_FacebookToArry("https://www.facebook.com/marketplace", function(){ 
			Buy_Update(); 
			return;
		})
	}
	if(DK_Id(event, "Buy_Settings")){
		DKCreate("TradePost/BuySettings.js", function(){
			DKCreate("DKGui/DKFrame.js", function(){
				DKFrame_Widget("TradePost/BuySettings.html");
				return;
			});
		});
	}
	if(DK_Id(event, "Buy_Clear")){
		buyItems = []; //clear json
		Buy_Update();
		Buy_SaveData();
		return;
	}
	
	if(DK_IdLike(event, "itemurl")){
		var num = DK_GetId(event).replace("itemurl","");
		window.open(buyItems[num].link, "_blank", "top=0,left=0,width=800,height=600");
		return;
	}
	if(DK_IdLike(event, "hide")){
		DK_StopPropagation(event);
		var num = DK_GetId(event).replace("hide","");
		buyItems[num].hidden = true;
		Buy_Update();
		return;
	}
	if(DK_IdLike(event, "searchEbay")){
		DK_StopPropagation(event);
		var num = DK_GetId(event).replace("searchEbay","");
		//Open a new ebay popup searching for the title
		var title = buyItems[num].title.replace(" ","+");
		var link = "https://www.ebay.com/sch/i.html?_from=R40&_nkw="+title; //Search
		link += "&_sop=15"; //Sort by price lowest first
		link += "&LH_BIN=1"; //Buy It Now
		link += "&LH_Sold=1"; //Show only sold items
		
		window.open(link, "_blank", "top=0,left=0,width=800,height=600");
		return;
	}
	return;
}

///////////////////////////////////////
function Buy_CheckForDuplicate(itemUrl)
{
	for(var i=0; i<buyItems.length; i++){
		if(itemUrl == buyItems[i].link){
			//DKLog("Buy_CheckForDuplicate(): found duplicate\n");
			return true;
		}
	}
	return false;
}

//////////////////////////////////
function Buy_GetFirstAvailableId()
{
	DKLog("Inventory_GetFirstAvailableId()\n", DKDEBUG);
	if(!buyItems){ return false; }
	var id = 0;
	for(var i = 0; i<buyItems.length; i++){
		if(buyItems[i].id == id){
			id++; i=0;
		}
	}
	return id;
}

////////////////////////////////////////////
function Buy_CraigslistToArry(url, callback)
{
	DKLog("Buy_CraigslistToArry("+url+", callback)\n", DKDEBUG);
	Buy_GetUrlString(url, function(rstring){
		if(!rstring){ 
			DKLog("Buy_CraigslistToArry(): rstring invalid\n", DKWARN); 
			return;
		}
				
		var div = document.createElement('div');
		div.innerHTML = rstring;
			
		var items = div.getElementsByClassName("result-row");
		for(var i=0; i<items.length; i++){
			//DKLog(items[i].innerHTML+"\n");
			
			//check for duplicate
			if(items[i].getElementsByClassName("result-image gallery")[0].href.indexOf("https://") == -1){
				if(Buy_CheckForDuplicate("https://inlandempire.craigslist.org"+items[i].getElementsByClassName("result-image gallery")[0].href)){
					continue;
				}
			}
			else{
				if(Buy_CheckForDuplicate(items[i].getElementsByClassName("result-image gallery")[0].href)){
					continue;
				}
			}
			
			buyItems.push({}); //new object
			buyItems[buyItems.length-1].id = Buy_GetFirstAvailableId(); //id
			buyItems[buyItems.length-1].date = new Date().toJSON();
			buyItems[buyItems.length-1].providerImg = "TradePost/craigslist.png"; //host banner
			buyItems[buyItems.length-1].title = items[i].getElementsByClassName("result-title hdrlnk")[0].innerHTML;  //title
			if(items[i].getElementsByClassName("result-hood")[0]){
				buyItems[buyItems.length-1].loc = items[i].getElementsByClassName("result-hood")[0].innerHTML; //location
			}
			var img = items[i].getElementsByClassName("result-image gallery")[0].getAttribute("data-ids");
			if(img){
				img = img.replace("0:", "");
				img = img.replace("1:", "");
				var arry = img.split(",");
				buyItems[buyItems.length-1].img = "https://images.craigslist.org/"+arry[0]+"_300x300.jpg"; //image
			}
			else{
				//buyItems[buyItems.length-1].img = "https://www.craigslist.org/images/peace.jpg"; //no image
			}	
			if(items[i].getElementsByClassName("result-image gallery")[0].href.indexOf("https://") == -1){
				buyItems[buyItems.length-1].link = "https://inlandempire.craigslist.org"+items[i].getElementsByClassName("result-image gallery")[0].href; //url
			}
			else{
				buyItems[buyItems.length-1].link = items[i].getElementsByClassName("result-image gallery")[0].href;  //url
			}
			buyItems[buyItems.length-1].link = buyItems[buyItems.length-1].link.replace("file:///C:",""); //url fix
			buyItems[buyItems.length-1].link = buyItems[buyItems.length-1].link.replace("http://digitalknob.com",""); //url fix
			if(items[i].getElementsByClassName("result-price")[0]){
				buyItems[buyItems.length-1].price = Number(items[i].getElementsByClassName("result-price")[0].innerHTML.replace("$","")); //price
			}
			//else{
				//buyItems[buyItems.length-1].price = "$0"; //price
			//}
		}	
		callback();
	});
}

///////////////////////////////////////
function Buy_LetGoToArry(url, callback)
{
	Buy_GetUrlString(url, function(rstring){
		if(!rstring){ 
			DKLog("Buy_LetGoToArry(): rstring invalid\n", DKWARN);
			return;
		}
		
		var div = document.createElement('div');
		div.innerHTML = rstring;
				
		var items = div.querySelectorAll('div[class*="feed-item"]');
		for(var i=0; i<items.length; i++){
			//DKLog(items[i].innerHTML+"\n");
			var div1 = items[i].firstChild.firstChild.firstChild; // <div class="sc-...">
			if(!div1){ DKLog("div1 invalid\n"); continue; }
			var div2 = div1.firstChild; // <div>
			if(!div2){ DKLog("div2 invalid\n"); continue; }
			var inner = div2.firstChild; //<div class="inner">
			if(!inner){ DKLog("inner invalid\n"); continue; }
			var img = inner.firstChild.firstChild; //<img>
			if(!img){ DKLog("img invalid\n"); continue; }
			var footer = div2.childNodes[1]; //<div class="footer">
			if(!footer){ DKLog("div3 invalid\n"); continue; }
			var div4 = footer.firstChild; // <div class="sc-...">
			if(!div4){ DKLog("div4 invalid\n"); continue; }
			var p = div4.firstChild; //<p class="sc-..."> //url, title
			if(!p){ DKLog("p invalid\n"); continue; }
			var p2 = div4.childNodes[1]; //<p class="sc-..."> //location
			if(!p2){ DKLog("p2 invalid\n"); continue; }
			var a = p.firstChild; //< a href="url">
			if(!a){ DKLog("a invalid\n"); continue; }
			
			var link = a.href; //url
			if(!link){ DKLog("link invalid\n"); continue; }
			link = link.replace("file:///C:", "https://us.letgo.com");
			var title = a.title; //title
			if(!title){ DKLog("title invalid\n"); continue; }
			var loc = p2.innerHTML; //location
			if(!loc){ DKLog("loc invalid\n"); continue; }
			var img = img.src;
			if(!img){ DKLog("img invalid\n"); continue; }
			
			if(Buy_CheckForDuplicate(link)){ continue; }
			
			/*
			DKLog("##########################\n");
			DKLog("url = "+link+"\n");
			DKLog("title = "+title+"\n");
			DKLog("img = "+img+"\n");
			DKLog("loc = "+loc+"\n");
			DKLog("price = "+price+"\n");
			*/
			
			buyItems.push({}); //new object
			buyItems[buyItems.length-1].id = Buy_GetFirstAvailableId(); //id	
			buyItems[buyItems.length-1].date = new Date().toJSON();
			buyItems[buyItems.length-1].providerImg = "TradePost/letgo.png"; //host banner
			buyItems[buyItems.length-1].title = title;
			buyItems[buyItems.length-1].loc = loc;
			buyItems[buyItems.length-1].img = img;
			buyItems[buyItems.length-1].link = link;
		}				
		callback();
	});
}



/////////////////////////////////////
function Buy_LetGoGetPriceTrigger(id)
{
	DKLog("Buy_LetGoGetPriceTrigger("+id+")\n", DKDEBUG);
	
	queueSize++;
	
	setTimeout(function(){
		Buy_LetGoGetPrice(id, function(rval){ 
			queueSize--;
			if(rval){
				Buy_SaveData();
			}
		});
	}, 5000*queueSize);
}

////////////////////////////////////////
function Buy_LetGoGetPrice(id, callback)
{
	DKLog("Buy_LetGoGetPrice("+id+",callback)\n", DKDEBUG);
	
	//get item number
	var num = -1;
	for(var i=0; i<buyItems.length; i++){
		if(id == buyItems[i].id){
			num = i;
		}
	}
	if(num == -1){ 
		DKLog("Buy_LetGoGetPrice("+id+", "+callback+"): could not find item with matching id\n", DKERROR);
		return false; 
	}
	
	if(buyItems[num].price){
		DKLog("Buy_LetGoGetPrice("+id+"): already has a price\n", DKWARN);
		callback(false);
		return; 
	}
	var url = buyItems[num].link;
	Buy_GetUrlString(url, function(rstring){
		if(!rstring){ 
			DKLog("Buy_LetGoToArry(): rstring invalid\n", DKWARN); 
			callback(false);
			return;
		}
		var div = document.createElement('div');
		div.innerHTML = rstring;
		
		var element = div.querySelector('div[class="price"][data-test="price"]');
		if(!element){ DKLog("element invalid\n"); }
	
		var price = element.innerHTML;
		price = price.replace("<span>", "");
		price = price.replace("</span>", "");
		
		for(var i=0; i<buyItems.length; i++){
			if(buyItems[i].link == url){
				buyItems[i].price = price.replace("$","");
				var ele = document.getElementById("itemprice"+i);
				if(!ele){ DKLog("can't find itemprice"+i+"\n"); continue; }
				ele.innerHTML = "$"+buyItems[i].price;
			}
		}
		
		callback(true);
	});
}

/////////////////////////////////////////
function Buy_OfferUpToArry(url, callback)
{
	DKLog("Buy_OfferUpToArry("+url+",callback)\n");
	
	Buy_GetUrlString(url, function(rstring){
		if(!rstring){ 
			DKLog("Buy_LetGoToArry(): rstring invalid\n", DKWARN); 
			return;
		}
	
		var div = document.createElement('div');
		div.innerHTML = rstring;
		
		var items = div.querySelectorAll('a[class*="db-item-tile"]');
		for(var i=0; i<items.length; i++){
			//DKLog(items[i].innerHTML+"\n");
			var div1 = items[i].firstChild; //<div class="_b31be13">
			if(!div1){ DKLog("div1 invalid\n"); continue; }
			var div2 = div1.firstChild; //<div class="_178faes">
			if(!div2){ DKLog("div2 invalid\n"); continue; }
			var sub_div1 = div1.childNodes[1]; //<div class="_1g9xn5a">
			if(!sub_div1){ DKLog("sub_div1 invalid\n"); continue; }
			var price_div_par = sub_div1.childNodes[1]; //
			if(!price_div_par){ DKLog("price_div_par invalid\n"); continue; }
			var price_div = price_div_par.firstChild; //<span class="_1hwuc5f4">
			if(!price_div){ DKLog("price_div invalid\n"); continue; }
			var loc_div = sub_div1.childNodes[2].firstChild; //<span class="_19rx43s2">
			if(!loc_div){ DKLog("loc_div invalid\n"); continue; }
			var div3 = div2.firstChild; //<div class="_1pq2fo4">
			if(!div3){ DKLog("div3 invalid\n"); continue; }
			var img1 = div3.firstChild; //<img>
			if(!img1){ DKLog("img1 invalid\n"); continue; }
			
			var link = items[i].href;
			link = link.replace("file:///C:", "https://offerup.com");
			var img = img1.src;
			var title = img1.alt;
			var price = Number(price_div.innerHTML.replace("$",""));
			var loc = loc_div.innerHTML.replace(", CA","");
			title = title.replace(" for Sale in "+loc, "");
			
			if(Buy_CheckForDuplicate(link)){ continue; }
			
			DKLog("##########################\n");
			DKLog("url = "+link+"\n");
			DKLog("title = "+title+"\n");
			DKLog("loc = "+loc+"\n");
			DKLog("img = "+img+"\n");
			DKLog("price = "+price+"\n");

			buyItems.push({}); //new object
			buyItems[buyItems.length-1].id = Buy_GetFirstAvailableId(); //id	
			buyItems[buyItems.length-1].date = new Date().toJSON();
			buyItems[buyItems.length-1].providerImg = "TradePost/offerup.png"; //host banner
			buyItems[buyItems.length-1].title = title;
			buyItems[buyItems.length-1].loc = loc;
			buyItems[buyItems.length-1].img = img;
			buyItems[buyItems.length-1].link = link;
			buyItems[buyItems.length-1].price = price;
		}
		callback();
	});
}

//////////////////////////////////////////
function Buy_FacebookToArry(url, callback)
{
	DKLog("Buy_FacebookToArry("+url+",callback)\n");
	
	Buy_GetUrlString(url, function(rstring){
		if(!rstring){ 
			DKLog("Buy_FacebookToArry(): rstring invalid\n", DKWARN); 
			return;
		}
		//DKLog(rstring+"\n");
		//var div = document.createElement('div');
		//div.innerHTML = rstring;
		
		//We have to extract the items through raw text
		//TODO
		DKFile_StringToFile(rstring, "facebookMarket.html", true);
		
		var first_link = rstring.indexOf("share_uri");
		DKLog("first_link found at "+first_link+"\n");
		/*
		for(var i=0; i<items.length; i++){
			DKLog("Item Found\n");
			//TODO
		}
		*/
		
		callback();
	});
}

////////////////////////////////////////
function Buy_GetUrlString(url, callback)
{
	DKLog("Buy_GetUrlString("+url+", callback)\n", DKDEBUG);
	try {
        request = new XDomainRequest();
    }catch(e){}
	try {
        request = new XMLHttpRequest();
    }catch(e){}
    try {
        request = new ActiveXObject("Msxml3.XMLHTTP");
    }catch(e){}
    try {
        request = new ActiveXObject("Msxml2.XMLHTTP.6.0");
    }catch(e){}
    try {
        request = new ActiveXObject("Msxml2.XMLHTTP.3.0");
    }catch(e){}
    try {
        request = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){}
    try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(e){}

	if(!request){
		DKLog("AJAX ERROR: Error creating request object", DKERROR);
		return false;
	}
	
	request.open("GET",url,true);
	request.send(); 

	request.onload=function(){
		DKLog("SUCCESS: "+url+"\n", DKINFO);
		callback(request.responseText);
	}
	request.ontimeout=function(){
		DKLog("TIMEOUT: "+url+"\n", DKWARN);
		callback();
	}
	request.onerror=function(){
		DKLog("ERROR: "+url+"\n", DKWARN);
		callback();
	}
}

/////////////////////
function Buy_Update()
{
	DKLog("Buy_Update()\n", DKDEBUG);
	
	if(buySettings.sortBy == "Date"){
		Buy_SortItems('date', false); //newest to oldest
	}
	if(buySettings.sortBy == "Price: Low to High"){
		Buy_SortItems('price', true);
	}
	if(buySettings.sortBy == "Price: High to Low"){
		Buy_SortItems('price', false);
	}
	if(buySettings.sortBy == "Title"){
		Buy_SortItems('title', true);
	}
	
	DKWidget_SetInnerHtml("Buy_ItemCount", "Items: "+buyItems.length);
	var shown = 0;
	DKWidget_SetInnerHtml("Buy_Container", "");
	for(var i=0; i<buyItems.length; i++){
		if(buySettings.hideNoImage && !buyItems[i].img){
			continue;
		}
		if(buyItems[i].hidden){
			continue;
		}
		if(buySettings.lowPrice && buyItems[i].price){
			if(buyItems[i].price < buySettings.lowPrice){ continue; }
		}
		if(buySettings.highPrice && buyItems[i].price){
			if(buyItems[i].price > buySettings.highPrice){ continue; }
		}
		shown++;
		var itemdiv = document.createElement('div');
		itemdiv.id = "itemdiv"+i;
		itemdiv.style.display = "inline-block";
		itemdiv.style.width = "230px";
		itemdiv.style.width = "230rem";
		itemdiv.style.height = "390px";
		itemdiv.style.height = "390rem";
		itemdiv.style.textAlign = "center";
		itemdiv.style.margin = "4px";
		itemdiv.style.margin = "4rem";
		//itemdiv.style.borderStyle = "solid";
		//itemdiv.style.borderWidth = "1rem";
		//itemdiv.style.borderColor = "red";
		itemdiv.style.background = "white";
		itemdiv.style.overflow = "hidden";
		
		var imgdiv = document.createElement('div');
		imgdiv.id = "imgdiv"+i;
		imgdiv.style.position = "relative";
		imgdiv.style.display = "block";
		imgdiv.style.width = "230px";
		imgdiv.style.width = "230rem";
		imgdiv.style.height = "300px";
		imgdiv.style.height = "300rem";
		//imgdiv.style.borderStyle = "solid";
		//imgdiv.style.borderWidth = "1rem";
		//imgdiv.style.borderColor = "blue";
		itemdiv.appendChild(imgdiv);
		
		var itemurl = document.createElement('div');
		itemurl.id = "itemurl"+i;
		//itemurl.href = buyItems[i].link;
		itemurl.style.display = "block";
		itemurl.style.width = "230px";
		itemurl.style.width = "230rem";
		itemurl.style.height = "300px";
		itemurl.style.height = "300rem";
		//itemurl.target = "_blank";
		imgdiv.appendChild(itemurl);
		
		var itemimg = document.createElement('img');
		itemimg.id = "itemimg"+i;
		itemimg.src = buyItems[i].img;
		itemimg.style.display = "block";
		itemimg.style.maxWidth = "230px";
		itemimg.style.maxWidth = "230rem";
		itemimg.style.maxHeight = "300px";
		itemimg.style.maxHeight = "300rem";
		itemimg.style.margin = "auto";
		if(itemimg.width < itemimg.height){
			itemimg.style.height = "100%";
		}
		else{
			itemimg.style.width = "100%";
		}

		itemurl.appendChild(itemimg);
				
		var host = document.createElement('img');
		host.id = "host"+i;
		host.src = buyItems[i].providerImg;
		host.style.position = "absolute";
		host.style.top = "0px";
		host.style.top = "0rem";
		host.style.right = "0px";
		host.style.right = "0rem";
		host.style.width = "100px";
		host.style.width = "100rem";
		itemurl.appendChild(host);
		
		var hide = document.createElement('img');
		hide.id = "hide"+i;
		hide.src = "TradePost/hide.png";
		hide.style.position = "absolute";
		hide.style.top = "265px";
		hide.style.top = "265rem";
		hide.style.left = "0px";
		hide.style.left = "0rem";
		hide.style.width = "40px";
		hide.style.width = "40rem";
		itemurl.appendChild(hide);
		
		var searchEbay = document.createElement('img');
		searchEbay.id = "searchEbay"+i;
		searchEbay.src = "TradePost/searchEbay.png";
		searchEbay.style.position = "absolute";
		searchEbay.style.top = "260px";
		searchEbay.style.top = "260rem";
		searchEbay.style.right = "0px";
		searchEbay.style.right = "0rem";
		searchEbay.style.width = "40px";
		searchEbay.style.width = "40rem";
		itemurl.appendChild(searchEbay);
		
		var infodiv = document.createElement('div');
		infodiv.id = "infodiv"+i;
		infodiv.style.display = "block";
		infodiv.style.width = "230px";
		infodiv.style.width = "230rem";
		infodiv.style.height = "49px";
		infodiv.style.height = "49rem";
		//infodiv.style.borderStyle = "solid";
		//infodiv.style.borderWidth = "1rem";
		//infodiv.style.borderColor = "green";
		infodiv.style.margin = "auto";
		infodiv.style.overflow = "hidden";
		itemdiv.appendChild(infodiv);
		
		var itemtitle = document.createElement('div');
		itemtitle.id = "itemtitle"+i;
		itemtitle.innerHTML = buyItems[i].title;
		itemtitle.style.display = "block";
		itemtitle.style.fontWeight = "bold";
		itemtitle.style.fontSize = "20px";
		itemtitle.style.fontSize = "20rem";
		itemtitle.style.overflow = "hidden";
		//itemtitle.style.userSelect = "text";
		infodiv.appendChild(itemtitle);
		
		if(buyItems[i].providerImg == "TradePost/letgo.png"){
			if(!buyItems[i].price){
				Buy_LetGoGetPriceTrigger(buyItems[i].id);
			}
		}
		
		var itemprice = document.createElement('span');
		itemprice.id = "itemprice"+i;
		if(buyItems[i].price){
			itemprice.innerHTML = "$"+buyItems[i].price;
		}
		itemprice.style.display = "block";
		itemprice.style.fontSize = "18px";
		itemprice.style.fontSize = "18rem";
		itemdiv.appendChild(itemprice);
		
		var itemloc = document.createElement('span');
		itemloc.id = "itemloc"+i;
		if(buyItems[i].loc){
			itemloc.innerHTML = buyItems[i].loc;
		}
		itemloc.style.display = "block";
		itemloc.style.fontSize = "15px";
		itemloc.style.fontSize = "15rem";
		itemdiv.appendChild(itemloc);
		
		document.getElementById("Buy_Container").appendChild(itemdiv);
		
		DKAddEvent(itemurl.id, "click", Buy_OnEvent);
		DKAddEvent(hide.id, "click", Buy_OnEvent);
		DKAddEvent(searchEbay.id, "click", Buy_OnEvent);
	}
	
	DKWidget_SetInnerHtml("Buy_ItemsShown", "Shown: "+shown);
	Buy_SaveData();
}

///////////////////////
function Buy_LoadData()
{
	if(!DKFile_Exists(DKAssets_LocalAssets()+"buyItems.json")){
		DKLog("Buy_LoadData(): buyItems.json does not exist\n");
		return;
	}
	var json = DKFile_FileToString(DKAssets_LocalAssets()+"buyItems.json");
	if(json){
		buyItems = JSON.parse(json);
	}
}

///////////////////////
function Buy_SaveData()
{
	var json = JSON.stringify(buyItems);
	DKFile_StringToFile(json, DKAssets_LocalAssets()+"buyItems.json");
}

///////////////////////////
function Buy_LoadSettings()
{
	DKLog("Buy_LoadSettings()\n", DKDEBUG);
	if(!DKFile_Exists(DKAssets_LocalAssets()+"buySettings.json")){
		DKLog("Buy_LoadData(): buySettings.json does not exist\n");
		return;
	}
	var json = DKFile_FileToString(DKAssets_LocalAssets()+"buySettings.json");
	if(json){
		buySettings = JSON.parse(json);
	}
}

///////////////////////////
function Buy_SaveSettings()
{
	DKLog("Buy_SaveSettings()\n", DKDEBUG);
	var json = JSON.stringify(buySettings);
	DKFile_StringToFile(json, DKAssets_LocalAssets()+"buySettings.json");
}

//////////////////////////////////////////
function Buy_SortItems(property, acending)
{
	buyItems = buyItems.sort(function(a, b){
        if(acending){
            return (a[property] > b[property]) ? 1 : ((a[property] < b[property]) ? -1 : 0);
        } 
		else{
            return (b[property] > a[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0);
        }
    });
}