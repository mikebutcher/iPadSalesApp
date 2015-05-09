		function initial_setup()
			{
			var domain = prompt("Setup -  Please enter your Domain",localStorage.getItem("domain"));
			var dominoDatabase = prompt("Setup -  Please enter your Domino Database name",localStorage.getItem("dominoDatabase"));
			var name=prompt("Setup -  Please enter your Username",localStorage.getItem("username"));
			var pw=prompt("Setup -  Please enter your Domino Password",localStorage.getItem("password"));

			alert("Setup Complete!");

			if (name!=null && name!="" && pw!="")
			  {
				//Save the user Preferences to the localStorage
				localStorage.setItem("dominoDatabase", dominoDatabase);
				localStorage.setItem("domain", domain);
				localStorage.setItem("username", name);
				localStorage.setItem("password", pw);

			  }
			}
	
	
    $(document).ready(function() {
		var canvas = null,
        context = null,
        buttonDown = 0;
		
		$(window).bind("resize", resetCanvas).bind("reorient", resetCanvas);
		
		function showImage(id)	{
			var canvas  = document.getElementById(id);
			var ImgData = canvas.toDataURL();
				//save it to the Signature field which is hidden
				
				$("#Signature")[0].value = ImgData;	

			  var myImage = canvas.toDataURL("image/png");                   // Get the data as an image.
		      var imageElement = $("#signatureimage")[0];	  // Get the img object.
			  imageElement.src = myImage;                     // Set the src to data from the canvas.
			
			
			//Save the Signature data
			sigData =  localStorage.setItem("signature", ImgData);
				
		} //end showImage
		
		
		
		function resetCanvas() {
						
			//use jQuery instead
			//var div = document.getElementById("Container");
			//canvas = document.getElementById("simple");
			//use jQuery instead
			var div = $("#Container")[0];	 
				
			canvas = $("#simple")[0];	 
			// set the canvas height to the DIV Container height and width
			canvas.height = div.offsetHeight;
			canvas.width  = div.offsetWidth;

			// get a reference to our drawing context
			context = canvas.getContext("2d");
			
			
		} // resetCanvas
	
	
	//The Setup Button
		  $("#Setup").click(function(){
			initial_setup();
	     });
	
	
	//The Done Button
		 $("#done").click(function(){
		 
		 $('#Container').hide(); // Hide the Canvas for the Signature
			$("#signatureimage").show(100); // slowly show signature
			showImage("simple");
		 });
			 
	//The Reset Button
		  $("#reset").click(function(){
			  $('#Container').show();
			  $('#signatureimage').hide();
		  resetCanvas();
	     });
		 
		 
		 
		 var formMap = $.map($('form :input'), function(el, idx) {
				return {
					name: el.name,
					value: el.value
					
				};
			})
		 
		 
		 
		 function showValues() {
			  var str = $("form").serialize();
			  alert(str);
			  //$("#results").text(str);
			}
		 
		 
		  //the Send Button
		  $("#send").click(function(){
		  //showValues();
		  
		  
		 //Authenticate to Domino using values from localStorage that were set in the Intial_Setup function 
						
			var domain = localStorage.getItem("domain");
			var dominoDB = localStorage.getItem("dominoDatabase");
			var uName = localStorage.getItem("username");
			var pw = localStorage.getItem("password");
		  
		  var url = "http://"+domain+"/"+dominoDB+"?login";
		  //alert (url);
		  params = "&username="+uName+"&password="+pw
			//alert (params);
			
		   $.post(url, params, function(data,status, xhr){
			//alert(data);
				if (data.indexOf( "invalid" ) > -1){
					console.log('login failed');
					alert("Login Failed, Please check your settings");
					initial_setup();
					return;
					}
					else
					{
			
					alert('success');
					 var url = "http://"+domain+"/"+dominoDB+"/Signature?create";
					alert (url);
					   $.post(url, $('#form1').serialize(), function(data,status, xhr){
	
						alert(data);
						alert(status);
				
					}); 
								
					
					}
			}); 
		 
		
		 });
		 
		 
	
	
	
        window.scrollTo(0, 1);
        resetCanvas();
        
		//Subtract the height of the Header Section
		var offset = 255;
		
        document.body.addEventListener("mousedown", function(evt) {
            if (buttonDown === 0) {
			
			  var x = evt.x;
			  var y = evt.y;

			  var canvas = document.getElementById("simple");

			  x -= canvas.offsetLeft;
			  y -= canvas.offsetTop;
			   context.moveTo(x, y);
		 
            } // if

            ++buttonDown;
        }, false);
		
	


		
        
        document.body.addEventListener("mousemove", function(evt) {
            if (buttonDown > 0) {
			
			  var x = evt.x;
			var y = evt.y;

			  var canvas = document.getElementById("simple");

			  x -= canvas.offsetLeft;
			 // y -= canvas.offsetTop;

			  console.log("x:" + x + " y:" + y);
			
					
                context.lineTo(x, y);
                context.stroke();
            } // if
        }, false);
        
        document.body.addEventListener("mouseup", function(evt) {
            --buttonDown;
				canX = evt.pageX - canvas.offsetLeft;
			    canY = evt.pageY - canvas.offsetTop;
			console.log("mouse up" +canX +", " + canY);
        }, false);
    
		//Added the Touch Events
		 document.body.addEventListener("touchstart", function(evt) {
				context.beginPath();
				context.moveTo(evt.touches[0].pageX, evt.touches[0].pageY-offset);
				
				//evt.preventDefault(); <!-- This prevents the screen from scrolling ->
			}, false);
			
			document.body.addEventListener("touchmove", function(evt) {
				context.lineTo(evt.touches[0].pageX, evt.touches[0].pageY-offset);
				context.stroke();
			}, false);
			
			document.body.addEventListener("touchend", function(evt) {
			}, false);
		
	});

function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
	else{
		alert("Geolocation is not supported by this browser.")
		}
  }
function showPosition(position)
  {

	 $('#lat').val(position.coords.latitude);
	$('#long').val(position.coords.longitude);

  }