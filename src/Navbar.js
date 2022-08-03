import { RiPlayListLine, RiSettings5Line, RiUser3Line } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io'

function Navbar() { 
    
    return(
    <nav className = "navbar">
            <RiPlayListLine/>
        <section className='nav-icons'>
                <RiSettings5Line/>
                <IoIosNotificationsOutline/>
                <RiUser3Line/>
        </section>
   
    </nav>
    )
}
export default Navbar;