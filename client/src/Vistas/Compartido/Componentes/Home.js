import NavBar from './Header/NavBar'
import SearchBar from './Header/SearchBar'
import Banner from './Main/Banner'
import Footer from './Footer/Footer'
import ListDoctors from './TopDoctors/ListDoctors'
export default function Home (){
    return(
        <div className= " h-screen bg-[#E7EFFD] w-screen overflow-x-hidden">
            <NavBar/>
            <SearchBar/>
            <Banner/>
            <ListDoctors/>
             <Footer/>
        </div>
    )
}