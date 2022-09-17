import React from "react";
import axios from "axios";
const API_KEY = 'd79d92e140e62ddd296f0c1bf031f2b5';
const adds= localStorage.getItem('address');
const country = localStorage.getItem('country');
const Mapa = async(address) => {
//console.log(address)
    // const number = '168'
    // const street = 'St Fenchurch Street'
    // const city = 'London UK'
    //console.log("ENTRO EN POSTMAP => ", number, street, city)
    let dataMap = await axios({
      method: "GET",
      url: `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${adds}`,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("Error en la peticion", error);
      });
      
      const dataMapFilter = await dataMap.data.data.filter(
        (e) => e.country === country
      );
      //console.log( 'cont',dataMap.data.data[0].country)
      //console.log('ESTE ES EL FILTER ',dataMapFilter)
      let filterData = await dataMapFilter[0].latitude
      let filterData1 = await dataMapFilter[0].longitude
      localStorage.setItem('latitude',filterData)
      localStorage.setItem('longitude',filterData1)
      //console.log('filter data',filterData)
    let  finalData = [filterData, filterData1]
    return finalData;
}

export default Mapa;