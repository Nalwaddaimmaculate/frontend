import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import { useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import SearchedHouse from './components/SearchedHouse';
import SearchResults from './components/SearchResults';
import axios from 'axios'; //https://www.npmjs.com/package/axios
import Login from './components/Login';
import SignUp from './components/Signup';
import InquiryList from './components/InquiryList';


function App() {
  let [allHouses, setAllHouses] = useState([])
  useEffect(() => {
    async function getHousesInfo(){
      try {
        //const response = await axios.get('http://localhost:3002/');
      //console.log(process.env.REACT_APP_LINKTOBACKEND+'/race')
      const response = await axios.get(process.env.REACT_APP_LINKTOBACKEND)
      let data = await response.data;
      //console.log(data);
      setAllHouses(data);
      }  catch (error) {
         console.error(error);
      
      }
  
    }
    getHousesInfo();
},[]);
  return (
    <div className="App bg-secondary">    
     <Header/>
     <SearchFilter houses={allHouses}/>
   
    <Routes>
          <Route path ="/" element={<House houses={allHouses}/>} />
          <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
          <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
         
          <Route path="login" element={<Login/>} />
          <Route path="inquiries" element={<InquiryList/>} />      
   
    </Routes>


    </div>
  );
}


export default App;
