				
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
				 alert(unid);
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
					
					//Clear the cookie ??
					
				
					var r=confirm("Remove from Device?");
						if (r==true)
						  {
						 localStorage.unid = "";
						  alert('Removed');
						  }
						else
						  {
						  alert('Cancelled');
						  }
						 
						localStorage.setItem(unid+"Status", "SENT");
					
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
									$('#Status').append('Front Page Document Successfully sent to Chardon ' );
									
								

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
							   alert("Report NOT SENT. Error Communicating with Server.  Please try again when you have a connection." );
							 
							
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
					  success: requestSuccess,
					  error: requestError
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
					  success: requestSuccess,
					  error: requestError
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
					  success: requestSuccess,
					  error: requestError
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
					  success: requestSuccess,
					  error: requestError
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
					  success: requestSuccess,
					  error: requestError
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
					  success: requestSuccess,
					  error: requestError
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
					  success: requestSuccess,
					  error: requestError
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
				
				
			
				httpBU.open("post", URL, true);
				
				//Add the photos from local storage
					photo1 = localStorage.getItem(unid+"img1");
					photo2 = localStorage.getItem(unid+"img2");
					photo3 = localStorage.getItem(unid+"img3");
					photo4 = localStorage.getItem(unid+"img4");
				//var params = params +"&photo1="+photo1
				var paramsPhotos = "&photo1="+photo1 +"&photo2="+photo2+"&photo3="+photo3+"&photo4="+photo4 ;
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
									$('#Status').append('Present Condition Successfully sent to Chardon ' );
								

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
				console.log("unid "+ unid);
				
				var params = localStorage.getItem(unid+"Survey");
				//alert("Parameters "+params);
				
				
				var URL = "http://www.chardonlabs.com/iPadSales.nsf/Survey?createDocument";
				//alert(URL);
				
				
			
				httpBU.open("post", URL, true);
				
		
				var params = "&"+params;
				//alert(params);
				
				
				
			
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
									  $('#Status').append('Survey Successfully sent to Chardon ' );
									
								

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
									$('#Status').append('FSO Successfully sent to Chardon ' );
								

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

			function requestSuccess( data, textStatus, jqXHR ) {
				console.log(textStatus);
				//$('#Status').append('Document Successfully sent to Chardon ' );
			}

			function requestError( jqXHR, textStatus, errorThrown ) {
				console.log(textStatus);
			}