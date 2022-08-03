function fetch(url, cb) {
    let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          cb(data);
          console.log(data) // Remove later
        } else {
          console.log("Error in fetch" + xhr.status);
        }
      }
    };
  
    xhr.open("GET", url);
    xhr.send();
  }
  

  // Example request: fetch(url, cb(data)) then you use the data you fetched.