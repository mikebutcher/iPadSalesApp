				
				function Authenticate(username, password){
				
					
						var logReq = createXHTMLHttpRequest() ; 
						var poststring = "RedirectTo=" + escape('iPadSales.nsf') + 
						"&Username=" + username + "&password=" + password; 
						//alert(poststring);
						
						logReq.open("POST", "http://www.chardonlabs.com/names.nsf?Login" , false); 
						logReq.send(poststring); 

						//alert(logReq.status);

						//alert(logReq.responseText);


						if (logReq.status == 200)
							{
							return(true);
							} 
						else 
							{ 
							return(false);
							}; 
						
			} //End Authenticate

			function createXHTMLHttpRequest() {
			try { return new ActiveXObject("Msxml2.XMLHTTP") ; } catch (e) {}
			try { return new ActiveXObject("Microsoft.XMLHTTP") ; } catch (e) {}
			try { return new XMLHttpRequest() ; } catch (e) {}
			alert("XMLHttpRequest is not supported on this browser!");
			return null;
			}
					
								
				
				
		function SendAllData(){
		//alert("SendAllData");
		
			auth = Authenticate(localStorage.username, localStorage.password);
			//auth = Authenticate("test", "test");
			//alert("auth " +auth);
			if (auth) {
				
					//Contract Calc Sheet
					SendContractCalcSheet();
					
					//Schedule 11
					SendForm11();
					
					//Schedule 12
					SendForm12();
					
					//Schedule 13
					SendForm13();
					
					//Schedule 14
					SendForm14();
					
					//Schedule 17
					SendForm17();
					//Schedule 18
					SendForm18();
					
					//Schedule 19
					SendForm19();
					
					//SendPresentCondition
					SendPresentCondition();
					
					
					//Send Survey
					SendSurvey();
					
					
					//alert(Datime);
					
					var unid = localStorage.getItem("unid");
				//	alert("unid " + unid);
						localStorage.setItem(unid+"Status", "SENT");
						
					//Find the Draft Proposal and change the Status to Sent
				var unidList=new Array();
				 unidList = localStorage.getItem("MyProposals").split(',');
			
			//alert("array length " +unidList.length);
			
			for (var i=0;i<unidList.length;i++)
				{ 
				temp = unidList[i];
				var search = temp.search(unid);
				//alert("search " + search);
							
							if (search > -1 ){
							//	alert('Found it at:'+i);
								//alert(unidList[i]);
								
								 Datime = new Date();
								 Datime = Datime+""; //convert to string
								var place = Datime.indexOf("G");
								Datime = Datime.substring(0, place-1)
								
								//console.log(Datime);
								
								
								
								//change the Sent Date
								var place2 = temp.indexOf("-");
								temp = temp.substring(0, place2-1);
								
								//alert("new temp:" +temp);
								
								
									//var updated = temp.replace("DRAFT","SENT :"+Datime);
									var updated = temp + " - SENT :"+Datime+"</option>";
									unidList[i] = updated;
								//alert(unidList[i]);
								
							
							}
					//alert("unidList[i]: "+ unidList[i]);
					localStorage.setItem("MyProposals", unidList);		//Save the updated options list to LocalStorage
				}
							
			
		
						
						
						
						
						
						
						
						
						
						
						
						//Clear the cookie ??
				
					var r=confirm("Remove from Device?");
						if (r==true)
						  {
						 localStorage.unid = "";
						  alert('Removed')
						  }
						else
						  {
						  alert('Cancelled')
						  }
						
					
				} // end if auth
	
		}
		
		
				
		function SendContractCalcSheet() {
				
								
	
		
		
		var httpBU = createXMLHttpRequest();


				function createXMLHttpRequest() {
				  try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
				  try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
				  try { return new XMLHttpRequest(); } catch(e) {}
				  alert("XMLHttpRequest not supported");
				  return null;
				}
					
						
					
				
				var unid = localStorage.getItem("unid");
				var params = localStorage.getItem(unid+"ContractCalc");
				//alert("Parameters "+params);
				
				
					var URL = "http://www.chardonlabs.com/iPadSales.nsf/ContractCalcSheet?createDocument&"+params;
				//alert(URL);
				
				
			
				httpBU.open("post", URL, true);
				
				var unid = localStorage.getItem("unid");
				var params = localStorage.getItem(unid+"ContractCalc");
				//alert("Parameters "+params);
			
				console.log("Contract Calculation Data:");
				console.log("URL = "+ URL+" "+params);
			
					var rawSigData =  localStorage.getItem(unid+'ContractCalc_Signature1');
					var rawSigData2 =  localStorage.getItem(unid+'ContractCalc_Signature2');
					
					//alert("rawSigData"+ rawSigData);
					
					var paramsSignature = "&"+params+"&RawSignature="+rawSigData+"&RawSignature2="+rawSigData2 ;
					
					//alert(paramsSignature);
			
			
				httpBU.send(paramsSignature);
				
				
				
					
				
						
				

			
					//clear out localStorage
			
				
		
		httpBU.onreadystatechange =   function()
					{ 
					if(httpBU.readyState  == 2)
					{
					//		$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Sent</div>');
					
					}
					
					if(httpBU.readyState  == 3)
					{
						//	$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Received - OK</div>');
							$('#progress').remove();
					}
					
						 if(httpBU.readyState  == 4)
						 {
									  if(httpBU.status  == 200) {
								 //   	  $('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;eReport Successfully Sent</div>');
									$('#Status').append('Front Page - Document Successfully sent to Chardon<br>' );
									
								

							/*
								 var r=confirm("Remove from Device?");
								if (r==true)
									 {
									  //removeReport(CustID, ListType);
									  }
									  else
								  {
								  alert("You pressed Cancel!");
								  }
							*/					
								  
								
								  } 
							  
						
							   //   alert("Received:"  + http.responseText); 
							  else 
								 $('#progress').remove();
							 // alert("success"+ httpBU.status);
						 
							  if (httpBU.status == 0){
							  $('#Status').append('Front Page - Error NOT sent to Chardon<br>' );
							   alert("Front Page NOT SENT. Error Communicating with Server.  Please try again when you have a connection." );
							 
							
							  }
						 
						 }
					   
					}; 
		
		
		
			
			}
			
			
				function SendForm11() {
				
								
					
					var unid = localStorage.getItem("unid");
					var data = localStorage.getItem(unid+"form11");
					
					var url = "http://www.chardonlabs.com/iPadSales.nsf/Form11?createDocument&"+data;
					//alert(url);
					$.ajax({
					  type: 'POST',
					  url: url,
					  data:data,
					  success: requestSuccess11,
					  error: requestError11
					});
				
			
			}
			
			function SendForm12() {
								
					var unid = localStorage.getItem("unid");
					var data = localStorage.getItem(unid+"form12");
					
					var url = "http://www.chardonlabs.com/iPadSales.nsf/Form12?createDocument&"+data;
					//alert(url);
					$.ajax({
					  type: 'POST',
					  url: url,
					  data:data,
					  success: requestSuccess12,
					  error: requestError12
					});
				
			
			}
			
				function SendForm13() {
									
					var unid = localStorage.getItem("unid");
					var data = localStorage.getItem(unid+"form13");
					
					var url = "http://www.chardonlabs.com/iPadSales.nsf/Form13?createDocument&"+data;
					//alert(url);
					$.ajax({
					  type: 'POST',
					  url: url,
					  data:data,
					  success: requestSuccess13,
					  error: requestError13
					});
			}
			
			
			function SendForm14() {
									
					var unid = localStorage.getItem("unid");
					var data = localStorage.getItem(unid+"form14");
					
					var url = "http://www.chardonlabs.com/iPadSales.nsf/Form14?createDocument&"+data;
					//alert(url);
					$.ajax({
					  type: 'POST',
					  url: url,
					  data:data,
					  success: requestSuccess14,
					  error: requestError14
					});
			}
			
				function SendForm17() {
									
					var unid = localStorage.getItem("unid");
					var data = localStorage.getItem(unid+"form17");
					
					var url = "http://www.chardonlabs.com/iPadSales.nsf/Form17?createDocument&"+data;
					//alert(url);
					$.ajax({
					  type: 'POST',
					  url: url,
					  data:data,
					  success: requestSuccess17,
					  error: requestError17
					});
			}
			
			
				function SendForm18() {
									
					var unid = localStorage.getItem("unid");
					var data = localStorage.getItem(unid+"form18");
					
					var url = "http://www.chardonlabs.com/iPadSales.nsf/Form18?createDocument&"+data;
					//alert(url);
					$.ajax({
					  type: 'POST',
					  url: url,
					  data:data,
					  success: requestSuccess18,
					  error: requestError18
					});
			}
			
			
				function SendForm19() {
									
					var unid = localStorage.getItem("unid");
					var data = localStorage.getItem(unid+"form19");
					
					var url = "http://www.chardonlabs.com/iPadSales.nsf/Form19?createDocument&"+data;
					//alert(url);
					$.ajax({
					  type: 'POST',
					  url: url,
					  data:data,
					  success: requestSuccess19,
					  error: requestError19
					});
			}
			
			
		
		function SendPresentCondition() {
									
						var httpBU = createXMLHttpRequest();


				function createXMLHttpRequest() {
				  try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
				  try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
				  try { return new XMLHttpRequest(); } catch(e) {}
				  alert("XMLHttpRequest not supported");
				  return null;
				}
					
						
					
				
				var unid = localStorage.getItem("unid");
				var params = localStorage.getItem(unid+"PresentCondition");
				//alert("Parameters "+params);
				
				
					var URL = "http://www.chardonlabs.com/iPadSales.nsf/PresentCondition?createDocument&"+params;
				//alert(URL);
				console.log("Present Condition:");
				console.log("URL = "+ URL+" "+params);
				
			
				httpBU.open("post", URL, true);
				
				//Add the photos from local storage
					photo1 = localStorage.getItem(unid+"img1");
					photo2 = localStorage.getItem(unid+"img2");
					photo3 = localStorage.getItem(unid+"img3");
					photo4 = localStorage.getItem(unid+"img4");
				//var params = params +"&photo1="+photo1
				var paramsPhotos = "&"+params+"&photo1="+photo1 +"&photo2="+photo2+"&photo3="+photo3+"&photo4="+photo4 ;
				//alert(params);
				
				
				
			
				//httpBU.send(params);
				httpBU.send(paramsPhotos);
				
				//Second Photo
				//var paramsPhotos2 = "&photo2="+photo2 ;
				//httpBU.send(paramsPhotos2);
				
				
				

			
					//clear out localStorage
				try{
				localStorage.setItem(unid+"img1", "");
				localStorage.setItem(unid+"img2", "");
				localStorage.setItem(unid+"img3", "");
				localStorage.setItem(unid+"img4", "");
				}
				catch(e){
				}
				
		
		httpBU.onreadystatechange =   function()
					{ 
					if(httpBU.readyState  == 2)
					{
					//		$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Sent</div>');
					
					}
					
					if(httpBU.readyState  == 3)
					{
						//	$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Received - OK</div>');
							$('#progress').remove();
					}
					
						 if(httpBU.readyState  == 4)
						 {
									  if(httpBU.status  == 200) {
								 //   	  $('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;eReport Successfully Sent</div>');

									//  alert("Document Successfully sent to Chardon " );
									$('#Status').append('Present Condition - Successfully sent to Chardon<br> ' );
								

							/*
								 var r=confirm("Remove from Device?");
								if (r==true)
									 {
									  //removeReport(CustID, ListType);
									  }
									  else
								  {
								  alert("You pressed Cancel!");
								  }
							*/					
								  
								
								  } 
							  
						
							   //   alert("Received:"  + http.responseText); 
							  else 
								 $('#progress').remove();
							 // alert("success"+ httpBU.status);
						 
							  if (httpBU.status == 0){
								$('#Status').append('Present Condition - Error NOT sent to Chardon<br>' );
							   alert("Report NOT SENT. Error Communicating with Server.  Please try again when you have a connection." );
							 
							
							  }
						 
						 }
					   
					}; 
		
		
			}
			
			
			
	function SendSurvey(){
			
				var httpBU = createXMLHttpRequest();


				function createXMLHttpRequest() {
				  try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
				  try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
				  try { return new XMLHttpRequest(); } catch(e) {}
				  alert("XMLHttpRequest not supported");
				  return null;
				}
					
						
					
				
				var unid = localStorage.getItem("unid");
				console.log("User: "+ localStorage.username)
				console.log("Unid "+ unid);
				
				var params = localStorage.getItem(unid+"Survey");
				//alert("Parameters "+params);
				
				
				var URL = "http://www.chardonlabs.com/iPadSales.nsf/Survey?createDocument";
				//alert(URL);
				
				
			
				httpBU.open("post", URL, true);
				
		
				var params = "&"+params;
				console.log("Survey Data:");
				console.log("URL = "+ URL+" "+params);
				
				
				
			
				//httpBU.send(params);
				httpBU.send(params);
				
			
				
				
				

		
				
		
		httpBU.onreadystatechange =   function()
					{ 
					if(httpBU.readyState  == 2)
					{
					//		$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Sent</div>');
					
					}
					
					if(httpBU.readyState  == 3)
					{
						//	$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Received - OK</div>');
							$('#progress').remove();
					}
					
						 if(httpBU.readyState  == 4)
						 {
									  if(httpBU.status  == 200) {
								 //   	  $('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;eReport Successfully Sent</div>');

									  //alert("Document Successfully sent to Chardon " );
									  $('#Status').append('Contract Calculation - Successfully sent to Chardon<br> ' );
									console.log('Contract Calculation - Successfully sent to Chardon');
								

							/*
								 var r=confirm("Remove from Device?");
								if (r==true)
									 {
									  //removeReport(CustID, ListType);
									  }
									  else
								  {
								  alert("You pressed Cancel!");
								  }
							*/					
								  
								
								  } 
							  
						
							   //   alert("Received:"  + http.responseText); 
							  else 
								 $('#progress').remove();
							 // alert("success"+ httpBU.status);
						 
							  if (httpBU.status == 0){
							  $('#Status').append('Contract Calculation - Error NOT sent to Chardon<br>' );
							   alert("Report NOT SENT. Error Communicating with Server.  Please try again when you have a connection." );
							 
							
							  }
						 
						 }
					   
					}; 
			}//end SendSurvey
			
						
		function SendFSO() {
				
				
				
				
			var httpBU = createXMLHttpRequest();


				function createXMLHttpRequest() {
				  try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
				  try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
				  try { return new XMLHttpRequest(); } catch(e) {}
				  alert("XMLHttpRequest not supported");
				  return null;
				}
					
						
				var URL = "http://www.chardonlabs.com/iPadSales.nsf/FSO?createDocument";
		
				//alert(backupURL);
				
				
			
				httpBU.open("post", URL, true);
					
			
				//var unid = localStorage.getItem("unid");
				
				//ajaxFSO is the UNID on FSO Document
				var unid = localStorage.getItem("ajaxFSO");
				var params = localStorage.getItem(unid+"FSO");
				//alert("Parameters "+params);
			
				httpBU.send(params);
		
					httpBU.onreadystatechange =   function()
					{ 
					if(httpBU.readyState  == 2)
					{
					//		$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Sent</div>');
					
					}
					
					if(httpBU.readyState  == 3)
					{
						//	$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;Data Received - OK</div>');
							$('#progress').remove();
					}
					
						 if(httpBU.readyState  == 4)
						 {
									  if(httpBU.status  == 200) {
								 //   	  $('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;&nbsp;&nbsp;eReport Successfully Sent</div>');

									  //alert("FSO Document Successfully sent to Chardon " );
									$('#Status').append('FSO - Successfully sent to Chardon<br> ' );
									console.log('FSO - Successfully sent to Chardon');

							/*
								 var r=confirm("Remove from Device?");
								if (r==true)
									 {
									  //removeReport(CustID, ListType);
									  }
									  else
								  {
								  alert("You pressed Cancel!");
								  }
								*/				
								  
								
								  } 
							  
						
							   //   alert("Received:"  + http.responseText); 
							  else 
								 $('#progress').remove();
							 // alert("success"+ httpBU.status);
						 
							  if (httpBU.status == 0){
							  $('#Status').append('FSO - Error NOT sent to Chardon<br>' );
							   alert("Report NOT SENT. Error Communicating with Server.  Please try again when you have a connection." );
							 
							
							  }
						 
						 }
					   
					}; 
			
			}
			
			

			function onCancelClick( event ) {
				clearForm();
			}

			function clearForm() {
				$("#email").val( "" );
				sigCapture.clear();
				$("#feedback").html( "" );
			}

			function requestSuccess11( data, textStatus, jqXHR ) {
				console.log('Schedule 11 - Successfully sent to Chardon');
				console.log(textStatus);
				$('#Status').append('Schedule 11 - Successfully sent to Chardon<br>' );
			}
			function requestError11( jqXHR, textStatus, errorThrown ) {
				console.log('Schedule 11 - Error NOT sent to Chardon');
				$('#Status').append('Schedule 11 - Error NOT sent to Chardon<br>' );
			}
			
			
			function requestSuccess12( data, textStatus, jqXHR ) {
				console.log('Schedule 12 - Successfully sent to Chardon');
				$('#Status').append('Schedule 12 - Successfully sent to Chardon<br>' );
			}
			function requestError12( jqXHR, textStatus, errorThrown ) {
				console.log('Schedule 12 - Error NOT sent to Chardon');
				$('#Status').append('Schedule 12 - Error NOT sent to Chardon<br>' );
			}
			
			
			
			function requestSuccess13( data, textStatus, jqXHR ) {
				console.log('Schedule 13 - Successfully sent to Chardon');
				$('#Status').append('Schedule 13 - Successfully sent to Chardon<br>' );
			}
			
			function requestError13( jqXHR, textStatus, errorThrown ) {
				console.log('Schedule 13 - Error NOT sent to Chardon');
				$('#Status').append('Schedule 13 - Error NOT sent to Chardon<br>' );
			}
			
			function requestSuccess14( data, textStatus, jqXHR ) {
				console.log('Schedule 14 - Successfully sent to Chardon');
				$('#Status').append('Schedule 14 - Successfully sent to Chardon<br>' );
			}
			function requestError14( jqXHR, textStatus, errorThrown ) {
				console.log('Schedule 14 - Error NOT sent to Chardon');
				$('#Status').append('Schedule 14 - Error NOT sent to Chardon<br>' );
			}
			function requestSuccess17( data, textStatus, jqXHR ) {
				console.log('Schedule 17 - Successfully sent to Chardon');
				$('#Status').append('Schedule 17 - Successfully sent to Chardon<br>' );
			}
			function requestError17( jqXHR, textStatus, errorThrown ) {
				console.log('Schedule 17 - Error NOT sent to Chardon');
				$('#Status').append('Schedule 17 - Error NOT sent to Chardon<br>' );
			}
			function requestSuccess18( data, textStatus, jqXHR ) {
				console.log('Schedule 18 - Sent to Chardon');
				$('#Status').append('Schedule 18 - Successfully sent to Chardon<br>' );
			}
			function requestError18( jqXHR, textStatus, errorThrown ) {
				console.log('Schedule 18 - Error NOT sent to Chardon<br>');
				$('#Status').append('Schedule 18 - Error NOT sent to Chardon<br>' );
			}
			function requestSuccess19( data, textStatus, jqXHR ) {
				console.log('Schedule 19 - Sent to Chardon');
				$('#Status').append('Schedule 19 - Successfully sent to Chardon<br>' );
			}
			function requestError19( jqXHR, textStatus, errorThrown ) {
				console.log('Schedule 19 - Error NOT sent to Chardon');
				$('#Status').append('Schedule 19 - Error NOT sent to Chardon<br>' );
			}

			function requestError( jqXHR, textStatus, errorThrown ) {
				console.log(textStatus);
			}