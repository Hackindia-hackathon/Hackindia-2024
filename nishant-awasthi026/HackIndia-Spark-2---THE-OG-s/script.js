 // Get the checkbox element
 const checkbox1 = document.getElementById('temp-btn');
 const checkbox2 = document.getElementById('gas-btn');
 var tmpdata = document.getElementById('temp-data');
 var gasdata = document.getElementById('gas-data');
 var tmpstatus =document.getElementById('tep-status');
 var gasstatus =document.getElementById('gas-status');
 const cursor = document.querySelector('#cursor');
 var FlagGas=1;
 var FlagTmp=1;

 const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
     
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
   
  }
  
  window.addEventListener('mousemove', moveCursor)

 // Add an event listener for the change event
 checkbox1.addEventListener('change', function() {
     // Check if the checkbox is checked
     if (checkbox1.checked) {
         console.log('The checkbox is checked.');
         tmpdata.innerHTML = `33<sup>°C</sup>`;
         document.getElementById('temp').style.backgroundColor='white';
         document.getElementById('temp').style.color='#000000';
        (FlagTmp=1)?tmpstatus.innerHTML=`normal`: tmpstatus.innerHTML=`danger`; 
        

     } else {
         console.log('The checkbox is not checked.');
         tmpdata.textContent = 'NA';
         document.getElementById('temp').style.backgroundColor='#ccc';
         document.getElementById('temp').style.color='#000000';
         tmpstatus.innerHTML=`!`;
        
     }
 });

 checkbox2.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (checkbox2.checked) {
        console.log('The checkbox is checked.');
        gasdata.innerHTML = `<iframe width="200" height="90" style=" " src="https://thingspeak.com/channels/2618136/widgets/902597"></iframe>`;
        document.getElementById('gas').style.backgroundColor='white';
        document.getElementById('gas').style.color='#000000';
        (FlagGas=1)?gasstatus.innerHTML=`normal`: gasstatus.innerHTML=`danger`; 

    } else {
        console.log('The checkbox is not checked.');
        gasdata.textContent = 'NA';
        document.getElementById('gas').style.backgroundColor='#ccc';
        document.getElementById('gas').style.color='#000000';
        gasstatus.innerHTML=`!`;
       
    }
});




document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        selectedFile = file; // Store the selected file
        console.log('File selected:', selectedFile.name);
    }
});

document.getElementById('sendEmailBtn').addEventListener('click', function() {
    if (flaggas !== 1 && selectedFile) {
        sendEmailWithFile(selectedFile);
    } else {
        console.log('Condition not met or no file selected.');
    }
});

function sendEmailWithFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    // Replace with your backend endpoint
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to send email');
        }
    })
    .then(data => {
        console.log('Email sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
}