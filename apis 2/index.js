function clearTextBox(){
  url.value = '';
  document.getElementById("myH2").innerText = '';
}


function enter(event){
  if (event.key === 'Enter' || event.keyCode === 13) {
    // event.preventDefault(); 
    getp();
 }
}





function getp() {
  
  window.urll = url.value;
  if(urll === '' || urll[0] === ' ')
  {
    // alert("Enter a valid url");
    document.getElementById("myH2").innerText = 'Enter a valid URL';
    urll.value = '';
    return ;
  }
  
// }
// function getz(){
var data1;
var ID;




getId(); 

 function getId() {
  const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({ url: urll })
};

fetch('https://www.virustotal.com/api/v3/urls', options)
    .then(response => response.json())
    .then(response => {
      if (response) {
        // url.value = null;
        data1 = response.data;
        if(data1 == undefined){
          document.getElementById("myH2").innerText = 'Error!!!';
          return;
        }
        ID = data1.id;
        getData(ID);
        ID = 0;
      }
      
    })
    .catch(err => console.error(err));

// }






function getData(id) {
  var analysis;

const options2 = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502'
  }
};

  fetch(`https://www.virustotal.com/api/v3/analyses/${id}`, options2)
    .then(response1 => response1.json())
    .then(response1 => {
      analysis = response1.data;
      printData(analysis);
      if (analysis.attributes.status == 'queued') {
        document.getElementById("myH2").innerText = 'Scanning...';
        document.getElementById("myH2").style.background= "red";
        getId();
        return;
      } 
       console.log(analysis)
      
     
    })
    .catch(err => console.error(err));
}


function printData(urlData) {
  harmless = urlData.attributes.stats.harmless;
  malicious = urlData.attributes.stats.malicious;

  if ((harmless !== 0 || malicious !== 0) && harmless > malicious) {
    document.getElementById("myH2").innerHTML = 'URL is SAFE!!, checked by ' + harmless + '  parameteres' + malicious;
  }
  else if( (harmless !== 0 || malicious !== 0) && harmless < malicious)  {
    document.getElementById("myH2").innerHTML = 'URL is UNSAFE!!, checked by ' + malicious + ' parameters' + harmless;
  }
  // else{
  //   document.getElementsByTagName("h2")[0].innerHTML = 'SCANNING......';
  // }
}

// }



// function getResult(){
  



// function getData(ID) {
  
// // 
  
// }

// function getId() {
  

//   // document.write(urll);
    

// }

// getId();

// }


// ------------------------------------------------------------------------------------------------------

  // document.getElementsByTagName("h2")[0].innerHTML = ID;

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502'
  //   }
  // };

  // fetch('https://www.virustotal.com/api/v3/urls/' + ID, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));




  // const options = {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502',
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: new URLSearchParams({url: 'hghgh'})
  // };

  // fetch('https://www.virustotal.com/api/v3/urls', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

 }
}