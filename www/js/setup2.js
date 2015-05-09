









///Customer 2 Database Customer list




function createXHTMLHttpRequest() {


    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {}
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
    try {
        return new XMLHttpRequest();
    } catch (e) {}
    alert("XMLHttpRequest is not supported on this browser!");
    return null;
}




function getCustomers() {	
 //$('body').append("<div id='progress'> <img align='middle' src='img/downloading.gif'>&nbsp;&nbsp;&nbsp;&nbsp;Downloading Customers</div>");

//Reset The list
document.getElementById('custList').innerHTML ="";
document.getElementById('custList2').innerHTML ="";

var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
var domain = localStorage.getItem("domain");
var Salesname = localStorage.getItem("Salesman");


alert("Retreiving customers for: "+ Salesname); 
console.log("Retreiving customers for: "+ Salesname); 

//alert(typeof(Salesname));
if (Salesname == null )
		{	
		//alert( 'in if');
		Salesname="Vince Resor";
		}

		
		if (Salesname == 'Mike Butcher' )
		{	
		alert( 'Acting as: Nels Cutchall');
		Salesname="Nels Cutchall";
		}	
		
		
		if (Salesname == 'Vince Resor' )
		{	
		alert( 'Acting as: Nels Cutchall');
		Salesname="Nels Cutchall";
		}	
		
		if (Salesname == 'Chris Mace' )
		{	
		alert( 'Acting as: Nels Cutchall');
		Salesname="Nels Cutchall";
		}	
		
		if (Salesname == 'Rob Butt' )
		{	
		alert( 'Acting as: Mike Chaffee');
		Salesname="Mike Chaffee";
		}	
		
 var RB =   encodeURIComponent(Salesname);

//var dominoDatabase = localStorage.getItem("dominoDatabase");
//var dominoDatabase =  "Customer2.nsf/AjaxCustomerBySalesman?ReadViewEntries&count=2000&RestrictToCategory=" + Salesname + "&outputformat=json";

	
var logReq = createXHTMLHttpRequest() ;	



var poststring = "RedirectTo=Customer2.nsf/AjaxCustomerBySalesman?ReadViewEntries&count=1&RestrictToCategory=" + RB + "&outputformat=json&Username=ereport&password=pingisgood";  
//alert(poststring);

logReq.open("POST", "http://www.chardonlabs.com/names.nsf?Login" , false);	
logReq.send(poststring);

// Here is the line to set the number of customers to pull down

var sURL = "http://www.chardonlabs.com/Customer2.nsf/AjaxCustomerBySalesman?ReadViewEntries&count=500&RestrictToCategory=" + RB + "&outputformat=json";
//6-22-13 Point to Development Customer2 database
//var sURL = "http://www.chardonlabs.com/development/Customer2.nsf/AjaxCustomerBySalesman?ReadViewEntries&count=500&RestrictToCategory=" + RB + "&outputformat=json";


getCommandAsync(sURL, "", "customerJSON");

//alert(logReq.status);
//alert(logReq.responseText);

		if (logReq.status == 200){ 
			lastposition = logReq.responseText.lastIndexOf("?xml");
			
		//	alert('lastposition' + lastposition);
			
			//if success
			//getCommandAsync(sURL, "", "customerJSON");

					if (lastposition == -1){
					alert("Invalid Password");

					return(false);
					}
		}
		
	
		
}





function getCommandAsync(sURL, sParms, sResponseHandler){
	var sPassedParms = "";
	var iArgCount = getCommandAsync.arguments.length;
	var aArgs;
	if (iArgCount > 3){
	aArgs = getCommandAsync.arguments;
	for (var i = 3; i < iArgCount; i++){
	sPassedParms += ", aArgs[" + i + "]";
	}
	}
	var objHTTP = initXMLHttpRequest();
	try{
	objHTTP.onreadystatechange = function() {
	if(objHTTP.readyState == 4) {
	if(typeof objHTTP.status == 'undefined' || objHTTP.status == 200 || objHTTP.status == 304){
	eval(sResponseHandler + "(eval('(' + objHTTP.responseText + ')')" + sPassedParms + ")");
	}
	//See what is being sent back from Domino via AJAX
	//alert(objHTTP.responseText);
	
	}
	};
	objHTTP.open("GET", sURL, true);
	objHTTP.setRequestHeader("Content-Type", "text/javascript");
	objHTTP.send(sParms);
	}catch(e){}
	}
			
	<!--End Get CommandAsync -->


//JSON Stuff
var g_XMLHttpRequest_ActiveX;
var g_XMLDomDocument_ActiveX;

function initXMLHttpRequest(){
	var objHTTP = null;
	if(window.ActiveXObject && !window.XMLHttpRequest){ //IE
		if(g_XMLHttpRequest_ActiveX){
		objHTTP = new ActiveXObject(g_XMLHttpRequest_ActiveX);
		}else{
		var xmlhttp = new Array('Msxml2.XMLHTTP.7.0',
		'Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.5.0','Msxml2.XMLHTTP.4.0',
		'MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP','Microsoft.XMLHTTP');
		for(var i = 0; i < xmlhttp.length; i++){
			try{
			objHTTP = new ActiveXObject(xmlhttp[i]);
			if(objHTTP != null){
			g_XMLHttpRequest_ActiveX = xmlhttp[i];
			break;
			}
			}catch(e){}
			}
	}
	}else{ //Mozilla
	try{
	objHTTP = new XMLHttpRequest();
	}catch(e){}
	}
	return objHTTP;
}


function returnJSONValue(obj){
	var aReturn = [];
	for(var a in obj) {
	switch(a){
	case "text":
	case "number":
	case "datetime":
	if(obj[a].constructor.toString().indexOf("Array") == -1){
	aReturn.push(obj[a][0]);
	}else{
	for(var i=0; i<obj[a].length; i++){
	aReturn.push(obj[a][i][0]);
	}
	}
	break;
	case "textlist":
	case "numberlist":
	case "datetimelist":
	aReturn = returnJSONValue(obj[a]);
	break;
	default:
	break;
	}
	}
	return aReturn;
}

	
  
function customerJSON(oObject){
	

	localStorage.setItem('custList', ''); // clear the customer list on localStorage
	
    var viewentries = oObject.viewentry;
    var n_viewentries = viewentries.length;
	//alert("Downloading " + n_viewentries + " customers");
	
		for (var i = 0; i < n_viewentries; i++){

			var entrydata = viewentries[i].entrydata;
//CustId, BillName, BillAddr1, BillAddr2,  BillZip, BillPhone, BillCell, BillEmail, ShipName, ShipAddr1, ShipAddr2, ShipCity, ShipState, ShipZip, SHIPPHONE, SHIPCELL, ServiceName

			var CustId = returnJSONValue(entrydata[0]);  
			
			var BillName  = returnJSONValue(entrydata[1]);  
			var BillAddr1   = returnJSONValue(entrydata[2]);  
			var BillAddr2  = returnJSONValue(entrydata[3]);  
			var BillCity  = returnJSONValue(entrydata[4]); 
//alert("city" +BillCity);			
			var BillState  = returnJSONValue(entrydata[5]); 
				
			
			var BillZip  = returnJSONValue(entrydata[6]);  
			var BillPhone  = returnJSONValue(entrydata[7]);  
			var BillCell  = returnJSONValue(entrydata[8]);
			var BillEmail  = returnJSONValue(entrydata[9]);
			var ShipName  = returnJSONValue(entrydata[10]); 
			
			var ShipAddr1  = returnJSONValue(entrydata[11]);  
			var ShipAddr2  = returnJSONValue(entrydata[12]);
			var ShipCity  = returnJSONValue(entrydata[13]);
			var ShipState  = returnJSONValue(entrydata[14]);
			var ShipZip  = returnJSONValue(entrydata[15]);
			
			var SHIPPHONE  = returnJSONValue(entrydata[16]);
			var SHIPCELL  = returnJSONValue(entrydata[17]);
			var ServiceName  = returnJSONValue(entrydata[18]);
			var ShipEmail  = returnJSONValue(entrydata[19]);
			console.log(ShipEmail);
			
		//	alert(CustId +" " + BillName +" " +BillAddr1 +" " +BillAddr2 +" "+ BillZip + " " + BillPhone);
			
			
			//alert(BillCell +" " + BillEmail +" " +ShipName +" " +ShipName +" "+ ShipAddr1 + " " + ShipAddr2);
			
		//	alert(ShipCity +" " + ShipState +" " +ShipZip +" " +SHIPPHONE +" "+ SHIPCELL + " " + ServiceName);
			
			
			
			//alert("email "+ email);
			
		//Write the values to the WEBSQL Table
		//addCustomer (CustId, BillName, BillAddr1, BillAddr2,  BillCity, BillState, BillZip, BillPhone, BillCell, BillEmail, ShipName, ShipAddr1, ShipAddr2, ShipCity, ShipState, ShipZip, SHIPPHONE, SHIPCELL, ServiceName);
			
		//Build a Big ASS String	
			
		//var CustomerInfo = CustId +"~"+ BillName+"~"+  BillAddr1+"~"+  BillAddr2+"~"+   BillCity+"~"+  BillState+"~"+  BillZip+"~"+  BillPhone+"~"+  BillCell+"~"+  BillEmail+"~"+  ShipName+"~"+  ShipAddr1+"~"+  ShipAddr2+"~"+  ShipCity+"~"+  ShipState+"~"+  ShipZip+"~"+  SHIPPHONE+"~"+  SHIPCELL+"~"+  ServiceName;	
		//Added Ship Email 4-4-13	
		var CustomerInfo = CustId +"~"+ BillName+"~"+  BillAddr1+"~"+  BillAddr2+"~"+   BillCity+"~"+  BillState+"~"+  BillZip+"~"+  BillPhone+"~"+  BillCell+"~"+  BillEmail+"~"+  ShipName+"~"+  ShipAddr1+"~"+  ShipAddr2+"~"+  ShipCity+"~"+  ShipState+"~"+  ShipZip+"~"+  SHIPPHONE+"~"+  SHIPCELL+"~"+  ServiceName +"~"+  ShipEmail;	
			
			
		console.log(CustomerInfo);
		
		//populate the dropdown
		
			document.getElementById('custList2').innerHTML +=   '<option value ="'+ CustomerInfo +'">'+ BillName+' : '+ CustId+'</option>';
		
		//	if (ShipName != ''){
			
		//		document.getElementById('custList2').innerHTML +=   '<option value ="'+ CustomerInfo +'">'+ ShipName+'</option>';
		//	}
		   
		} //EndFor Loop
		
		var daCustList = document.getElementById('custList2').innerHTML;
		//alert(daCustList);
		
		//Store the Downloaded Customers into localStorage
		localStorage.setItem('custList', daCustList);
		console.log("Customer List"+ daCustList);
		//alert('Customers Download Complete');
		
		function ShowStatus(){
		
		$('body').append("<div id='progress'> <img align='middle' src='img/downloading.gif'>&nbsp;&nbsp;&nbsp;&nbsp;Downloading Customers</div>");
		
		}
		
		//Show the busy icon for 20 seconds
		ShowStatus();
		
		var t=setTimeout(function(){alert("Customers Download Complete");$("#progress").remove();window.location='index.html';},20000)
		
		//setTimeout(window.location='index.html',100);
		
		//document.getElementById('custList2').innerHTML = localStorage.getItem('custList');
		
		

		
		
		
		
		function errorHandler(transaction, error) {
    // error.message is a human-readable string.
    // error.code is a numeric error code
  //  alert(' Error was '+error.message+' (Code '+error.code+')');
    // Handle errors here
    var we_think_this_error_is_fatal = true;
    if (we_think_this_error_is_fatal) return true;
    return false;
}
		

}
