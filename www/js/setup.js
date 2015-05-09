function doDominoLogin(username, password) {

    var logReq = createXHTMLHttpRequest();
    var poststring = "RedirectTo=" + escape('ereportv4.nsf/login.html') + "&Username=" + username + "&password=" + password;
    logReq.open("POST", "http://www.chardonlabs.com/names.nsf?Login", false);
    logReq.send(poststring);


    if (logReq.status == 200) {

        lastposition = logReq.responseText.lastIndexOf("###");


        if (lastposition == -1) {
            alert("Invalid Password");
            //initial_setup1();
            return (false);
        }

        // I am looking for a specific page:  ereportv4.nsf/login.html
        //All of the parsing values are based on this - it will need to be modified if the login.html changes

        daLength = lastposition - 600;
        username = logReq.responseText.substr(617, 150);
        namelength = username.indexOf("###");
        //alert(namelength);

        username = logReq.responseText.substr(617, namelength - 29);

        localStorage.setItem("Tech", username);
		localStorage.setItem("Salesman", username);

        //alert("Username: "+ username);

        roleStart = logReq.responseText.indexOf("$$WebClient,");
        //alert("roleStart: "+ roleStart);
        //roleStart = logReq.responseText.indexOf(username);
        //alert("roleStart: "+ roleStart);
        roleEnd = logReq.responseText.lastIndexOf("###");
        //alert("roleEnd: "+ roleEnd);
        RolesChunk = logReq.responseText.substr(roleStart, roleEnd - roleStart - 29);

        //RolesChunk = logReq.responseText.lastIndexOf("$$WebClient,");
        localStorage.setItem("Roles", RolesChunk);

        //alert("Roles : "+ RolesChunk );
        //alert("end " +roleEnd);
        console.log(logReq.responseText);

        //alert("You are logged in as: "+ username);
        //document.getElementById('TechName').innerHTML = username;
        return (true);
    }
    else {
        alert("Network Unreachable!");
        return (false);
    };
}

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

//alert("setup.js Loaded");

window.onload= function () {


$("#initial_setup").click(function() {
//alert("Handler for .click() called.");
  

	
	
   initial_setup_new();
});


}
  


		
		function initial_setup_new()
		{

	//alert('here');
  
			 //$('body').append("<div id='progress'> <img align='middle' src='img/downloading.gif'>&nbsp;&nbsp;&nbsp;&nbsp;Authenticating</div>");
					
//				setTimeout(a,1500);

		
	//2/1/12 Commented out Authenticating
	
	//alert('Athenticating ...'); 
		 //$('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;Authenticating</div>');

		
	
		//alert(document.getElementById('Username').value);
		 //alert(document.getElementById('Password').value);
		
			name = document.getElementById('Username').value;
			//alert("name:" + name);
			pw = document.getElementById('Password').value;
			//alert("pw: " + pw);
		
		
		if (name!=null && name!="" && pw!="")
		  {
						
			daLogin = doDominoLogin(name, pw); // ajaxLogin.js
			
			if (daLogin){
			
			roles = localStorage.getItem("Roles");
			//$("#progress").remove();
			//alert("Login succeeded: " + roles);
			 $('body').append('<div id="progress"><img align="middle" src="img/downloading.gif">&nbsp;&nbsp;Authenticating</div>');

			 //setTimeout("$('#progress').remove()",500);
			
       			
		tech = localStorage.getItem("Salesman");
		console.log("the tech is: " + tech);
		
		
		
		document.getElementById('TechNameOptions').innerHTML = tech;
		
		localStorage.setItem("tech", tech);
		//Set as current logged in user	
			
		lastposition = roles.indexOf("[DroidAdmin]");
		
		//alert(lastposition);
		if (lastposition > -1){
			//alert("Your Admin");
			
			//alert(lastposition);
		
		//	if (lastposition <> -1){
			//alert("Your Admin");
			
			document.getElementById('userSetup').style.display = "none";
			
			document.getElementById('CustomerDownload').style.display = "block";
			
		}
			//document.getElementById('actAs').style.display = "";
			//getTechnicianTemplates(); //fill the list of Techs added 7-29-11
			//alert("Your an Admin");
			var t=setTimeout(function(){$("#progress").remove();},10000)
			
		}
			
		
		//setTimeout("$('#progress').remove()",1000);
			
			
			
			//Set the tech name based on who is logged in
			localStorage.setItem("username", name);
			localStorage.setItem("password", pw);
			localStorage.setItem("Salesman", tech);
			
			// Get the Customers for the Salesman
			//alert('here');
		getCustomers();
	

			}
			
			//$("#progress").remove();

		  }	
		
			
		
		
		
		
		
		
		
		
	
  