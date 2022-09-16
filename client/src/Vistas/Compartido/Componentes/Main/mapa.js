import React from "react";
import axios from "axios";
const API_KEY = 'd79d92e140e62ddd296f0c1bf031f2b5';
const Mapa = async(address) => {
//console.log(address)
    const number = '168'
    const street = 'St Fenchurch Street'
    const city = 'London UK'
    //const numberEntero = Number(number);
    console.log("ENTRO EN POSTMAP => ", number, street, city)
    let dataMap = await axios({
      method: "GET",
      url: `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${number} ${street},${city}`,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("Error en la peticion", error);
      });
      console.log(dataMap)
      let filterData = dataMap.data.data[0].latitude
      let filterData1 = dataMap.data.data[0].longitude
      //console.log(filterData)
    let  finalData = {latitude: filterData, longitude: filterData1}
    return finalData;
}

export default Mapa;