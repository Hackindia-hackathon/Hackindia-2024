export const CurrentDate=()=>{
   
    return  new Date().toLocaleDateString();

}

export const fetchDataFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  // Function to store data in local storage
  export const storeDataInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  