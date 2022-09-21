import React,{useEffect} from "react";
import axios from "axios";
const API_KEY = 'd79d92e140e62ddd296f0c1bf031f2b5';

const Mapa = async(address,country) => {
console.log('entre en el Mapa')
const adds= localStorage.getItem('address');
//const country = localStorage.getItem('country');
  // window.localStorage.setItem('latitude',null)
  // window.localStorage.setItem('longitude',null)
    // const number = '168'
    // const street = 'St Fenchurch Street'
    // const city = 'London UK'
    //console.log("ENTRO EN POSTMAP => ", number, street, city)
    let dataMap = await axios({
      method: "GET",
      url: `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address}`,
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
      // window.localStorage.setItem('latitude',filterData)
      // window.localStorage.setItem('longitude',filterData1)
      //console.log('filter data',filterData)
    let  finalData = {filterData, filterData1}
    //console.log('llegue al return')
    return finalData;
}

export default Mapa;