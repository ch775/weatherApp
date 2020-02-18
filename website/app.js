/* Global Variables */
let baseURL = `api.openweathermap.org/data/2.5/weather?zip=`
let apiKey = '&appid=39067274dbce3644a3b8ef7c8c34939b';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//Ask Jeff -modified animal example

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newZip =  document.getElementById('zip').value;
getZip(baseURL,newZip, apiKey)

.then(
    updateUI()
  )
}
const getZip = async (baseURL, zip, key)=>{

  const res = await fetch(baseURL+zip+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = allData[0].date;
      document.getElementById('temp').innerHTML = allData[0].temp;
      document.getElementById('content').innerHTML = allData[0].content;
  
    }catch(error){
      console.log("error", error);
    }
  }
