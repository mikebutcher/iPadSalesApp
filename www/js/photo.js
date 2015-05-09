//Photo Variables Global

//Take Photo with Camera
   
   
   function processPic1()
   {
     
			// process the confirmation dialog result
			function onConfirm(button)
			{
	
				if (button == 2){
					{
				   navigator.camera.getPicture(dump_pic1, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.CAMERA, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				else
						if (button == 1 ){
					{
				   navigator.camera.getPicture(dump_pic1, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				
			}

	// Show a custom confirmation dialog
	//
	function showConfirm() {
		navigator.notification.confirm(
			'Choose source:',  // message
			onConfirm,              // callback to invoke with index of button pressed
			'Add Photo',            // title
			'Camera Roll,Camera'          // buttonLabels
		);
	}
   
   

   
   
		var temp = document.getElementById('img1').src.indexOf("img/photo.png");
		//alert(temp);
		//alert(document.getElementById('img1').src);
		
	//if (document.getElementById('img1').src == "img/photo.png")
	if(temp >= 0)
		{
	  showConfirm();

		}//end if
		else
		{
		//alert("else");
		 var r=confirm("Delete?");
	       if (r==true)
	         {
			document.getElementById('img1').src = "img/photo.png" ;
			
				//get the custid
				var unid = localStorage.getItem("unid");
				//saveReport (unid, "Photo1", '');
				
				img1Key = unid+'img1';
				Dataimg1 = localStorage.setItem(img1Key, "img/photo.png");
			

	      
	         }
	       else
	         {
	         alert("Cancelled!");
	         }
	       } //else
		

   } //end processPic1
   
   
   
   
   function processPic2()
   {
     
			// process the confirmation dialog result
			function onConfirm(button)
			{
	
				if (button == 2){
					{
				   navigator.camera.getPicture(dump_pic2, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.CAMERA, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				else
						if (button == 1 ){
					{
				   navigator.camera.getPicture(dump_pic2, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				
			}

	// Show a custom confirmation dialog
	//
	function showConfirm() {
		navigator.notification.confirm(
			'Choose source:',  // message
			onConfirm,              // callback to invoke with index of button pressed
			'Add Photo',            // title
			'Camera Roll,Camera'          // buttonLabels
		);
	}
   
   

   
   
		var temp = document.getElementById('img2').src.indexOf("img/photo.png");

		

	if(temp >= 0)
		{
	  showConfirm();

		}//end if
		else
		{
		//alert("else");
		 var r=confirm("Delete?");
	       if (r==true)
	         {
			document.getElementById('img2').src = "img/photo.png" ;
			
				//get the custid
				custid = localStorage.getItem('custid');
				//saveReport (unid, "Photo2", '');
				
				img2Key = unid+'img2';
				Dataimg2 = localStorage.setItem(img2Key, "img/photo.png");
			

	      
	         }
	       else
	         {
	         alert("Cancelled!");
	         }
	       } //else
		

   } //end processPic2
   
   
 


  function processPic3()
   {
     
			// process the confirmation dialog result
			function onConfirm(button)
			{
	
				if (button == 2){
					{
				   navigator.camera.getPicture(dump_pic3, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.CAMERA, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				else
						if (button == 1 ){
					{
				   navigator.camera.getPicture(dump_pic3, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				
			}

	// Show a custom confirmation dialog
	//
	function showConfirm() {
		navigator.notification.confirm(
			'Choose source:',  // message
			onConfirm,              // callback to invoke with index of button pressed
			'Add Photo',            // title
			'Camera Roll,Camera'          // buttonLabels
		);
	}
   
   

   
   
		var temp = document.getElementById('img3').src.indexOf("img/photo.png");

		

	if(temp >= 0)
		{
	  showConfirm();

		}//end if
		else
		{
		//alert("else");
		 var r=confirm("Delete?");
	       if (r==true)
	         {
			document.getElementById('img3').src = "img/photo.png" ;
			
				//get the custid
				custid = localStorage.getItem('custid');
				//saveReport (unid, "Photo3", '');
				
				img3Key = unid+'img3';
				Dataimg3 = localStorage.setItem(img3Key, "img/photo.png");
			

	      
	         }
	       else
	         {
	         alert("Cancelled!");
	         }
	       } //else
		

   } //end processPic3
   
   
   
function processPic4()
   {
     
			// process the confirmation dialog result
			function onConfirm(button)
			{
	
				if (button == 2){
					{
				   navigator.camera.getPicture(dump_pic4, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.CAMERA, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				else
						if (button == 1 ){
					{
				   navigator.camera.getPicture(dump_pic4, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				
			}

	// Show a custom confirmation dialog
	//
	function showConfirm() {
		navigator.notification.confirm(
			'Choose source:',  // message
			onConfirm,              // callback to invoke with index of button pressed
			'Add Photo',            // title
			'Camera Roll,Camera'          // buttonLabels
		);
	}
   
   

   
   
		var temp = document.getElementById('img4').src.indexOf("img/photo.png");

		

	if(temp >= 0)
		{
	  showConfirm();

		}//end if
		else
		{
		//alert("else");
		 var r=confirm("Delete?");
	       if (r==true)
	         {
			document.getElementById('img4').src = "img/photo.png" ;
			
				//get the custid
				custid = localStorage.getItem('custid');
				//saveReport (unid, "Photo4", '');
				
				img4Key = unid+'img4';
				Dataimg4 = localStorage.setItem(img4Key, "img/photo.png");
			

	      
	         }
	       else
	         {
	         alert("Cancelled!");
	         }
	       } //else
		

   } //end processPic4
   
   
   function processPic5()
   {
     
			// process the confirmation dialog result
			function onConfirm(button)
			{
	
				if (button == 2){
					{
				   navigator.camera.getPicture(dump_pic5, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.CAMERA, 
									allowEdit : true, 
								    targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				else
						if (button == 1 ){
					{
				   navigator.camera.getPicture(dump_pic5, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
									allowEdit : true, 
									targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				
			}

	// Show a custom confirmation dialog
	//
	function showConfirm() {
		navigator.notification.confirm(
			'Choose source:',  // message
			onConfirm,              // callback to invoke with index of button pressed
			'Add Photo',            // title
			'Camera Roll,Camera'          // buttonLabels
		);
	}
   
   

   
   
		var temp = document.getElementById('img5').src.indexOf("img/photo.png");

		

	if(temp >= 0)
		{
	  showConfirm();

		}//end if
		else
		{
		//alert("else");
		 var r=confirm("Delete?");
	       if (r==true)
	         {
			document.getElementById('img5').src = "img/photo.png" ;
			
				//get the custid
				custid = localStorage.getItem('custid');
				//saveReport (unid, "Photo5", '');
				
				img5Key = unid+'img5';
				Dataimg5 = localStorage.setItem(img5Key, "img/photo.png");
			

	      
	         }
	       else
	         {
	         alert("Cancelled!");
	         }
	       } //else
		

   } //end processPic5
   
   
   
   function processPic6()
   {
     
			// process the confirmation dialog result
			function onConfirm(button)
			{
	
				if (button == 2){
					{
				   navigator.camera.getPicture(dump_pic6, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.CAMERA, 
									allowEdit : true, 
							targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				else
						if (button == 1 ){
					{
				   navigator.camera.getPicture(dump_pic6, photofail,
						   { 
									quality : 50, 
									destinationType : Camera.DestinationType.DATA_URL, 
									sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
									allowEdit : true, 
								targetWidth: 640, 
									targetHeight: 480
							 } 
							); 
				
					}
				}//end if
				
				
			}

	// Show a custom confirmation dialog
	//
	function showConfirm() {
		navigator.notification.confirm(
			'Choose source:',  // message
			onConfirm,              // callback to invoke with index of button pressed
			'Add Photo',            // title
			'Camera Roll,Camera'          // buttonLabels
		);
	}
   
   

   
   
		var temp = document.getElementById('img6').src.indexOf("img/photo.png");

		

	if(temp >= 0)
		{
	  showConfirm();

		}//end if
		else
		{
		//alert("else");
		 var r=confirm("Delete?");
	       if (r==true)
	         {
			document.getElementById('img6').src = "img/photo.png" ;
			
				//get the custid
				custid = localStorage.getItem('custid');
				//saveReport (unid, "Photo6", '');
				
				img6Key = unid+'img6';
				Dataimg6 = localStorage.setItem(img6Key, "img/photo.png");
			

	      
	         }
	       else
	         {
	         alert("Cancelled!");
	         }
	       } //else
		

   } //end processPic6
   
   
     function dump_pic1(data)
	 {
		document.getElementById("img1").src = "data:image/jpeg;base64," + data;
		//document.getElementById("photo1").value = "data:image/jpeg;base64," + data; //store in text field
		//saveValues();
		unid = localStorage.getItem('unid');
		localStorage.setItem(unid+"img1", data);
		data = null; //free up the data
	}  
   function dump_pic11111(data)
	 {
		document.getElementById("img1").src = "data:image/jpeg;base64," + data;
		document.getElementById("photo1").value = "data:image/jpeg;base64," + data; //store in text field
		saveValues();
		//unid = localStorage.getItem('unid');
		//localStorage.setItem(unid+"img1", data);
		data = null; //free up the data
	}   
	
	function dump_pic2(data)
	 {
		document.getElementById("img2").src = "data:image/jpeg;base64," + data;
	//	document.getElementById("photo2").value = "data:image/jpeg;base64," + data; //store in text field
		saveValues();
		unid = localStorage.getItem('unid');
		localStorage.setItem(unid+"img2", data);
		data = null; //free up the data
	}

   function dump_pic3(data)
	 {
		document.getElementById("img3").src = "data:image/jpeg;base64," + data;
		//document.getElementById("photo3").value = "data:image/jpeg;base64," + data; //store in text field
		saveValues();
		unid = localStorage.getItem('unid');
		localStorage.setItem(unid+"img3", data);
		data = null; //free up the data
	}
   

      function dump_pic4(data)
	 {
		document.getElementById("img4").src = "data:image/jpeg;base64," + data;
	//	document.getElementById("photo4").value = "data:image/jpeg;base64," + data; //store in text field
		saveValues();
		unid = localStorage.getItem('unid');
		localStorage.setItem(unid+"img4", data);
		data = null; //free up the data
	}
   
      function dump_pic5(data)
	 {
		document.getElementById("img5").src = "data:image/jpeg;base64," + data;
		//document.getElementById("img5Data").src = "data:image/jpeg;base64," + data; //store in text field
		saveValues();
		unid = localStorage.getItem('unid');
		localStorage.setItem(unid+"img5", data);
		data = null; //free up the data
	}
	   function dump_pic6(data)
	 {
		document.getElementById("img6").src = "data:image/jpeg;base64," + data;
		//document.getElementById("img6Data").src = "data:image/jpeg;base64," + data; //store in text field
		saveValues();
		unid = localStorage.getItem('unid');
		localStorage.setItem(unid+"img6", data);
		data = null; //free up the data
	}
	
   
   function getPhoto() {
	       navigator.camera.getPicture(dump_picTP, photofail, 
		   { 
		   mediaType: navigator.camera.MediaType.ALLMEDIA,
		   quality: 50,
		   destinationType: Camera.DestinationType.FILE_URI,
		   sourceType :Camera.PictureSourceType.SAVEDPHOTOALBUM,
		   targetWidth: 640, 
		   targetHeight: 480
		   });   
   }
   
  
  
  
  
   

   
   

   
   
 
   
  
   


 function close()
   {
     var viewport = document.getElementById('viewport');
     viewport.style.position = "relative";
     viewport.style.display = "none";
   }

   function photofail(fail)
   {
     alert("Photo Cancelled");
   }




	
	
	
	function processPic(id){
   
	       
	       if  (document.getElementById(id).src.length <= 38){
	
	           navigator.camera.getPicture(dump_picTP, photofail, {  mediaType: navigator.camera.MediaType.ALLMEDIA, quality: 20, destinationType: Camera.DestinationType.DATA_URL, sourceType :Camera.PictureSourceType.SAVEDPHOTOALBUM });
	                
	           
	       }
	       else {
	       
	       var r=confirm("Delete?");
	       if (r==true)
	         {
	    document.getElementById(id).src = "data:image/jpeg;base64,null" ;
	 //          document.getElementById(id).src = "" ;
//	         var photocount = 0;
	           localStorage.setItem('photocount', 0 );
	          //display the key
//alert("id: "+id);

	           theString = id.substr(8,1);
//alert(theString);
//blank out the photo
var custid1 = document.getElementById('customer_templates').value;
//alert("custid:" +custid1 + "  Photo"+theString)
//alert("Blank out the pic in the db on the phone");
saveReport (custid1, "Photo"+theString, '');

	      
	         
	         
	         
	         }
	       else
	         {
	         alert("Cancelled!");
	         }
	       } //else
	    
	   }
	
	
	
	function hide(obj) {
	console.log("hide "+ obj);
	var el = document.getElementById(obj);
//	el.style.display = (el.style.display != 'none' ? 'none' : '' );
el.style.display = (el.style.display != 'none' ? 'none' : 'none');
}

function show(obj) {
	var el = document.getElementById(obj);
	el.style.display = (el.style.display != 'none' ? '' : '' );
}


