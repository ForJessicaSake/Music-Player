import { RiHeartLine, RiTwitterLine, RiPlayLine} from 'react-icons/ri';
import { AiOutlineSearch, AiOutlineInstagram } from 'react-icons/ai'
import { IoMusicalNotesOutline, IoFolder } from 'react-icons/io5';

function Sidebar() {

    
    return (

        <section className="sidebar-container">
            <section className="sidebar-icons-one">
                <div className='icon same'><AiOutlineSearch/></div>
                <div className='icon'><IoMusicalNotesOutline/></div>
                <div className='icon'><IoFolder/></div>
                <div className='icon'><RiHeartLine /></div>
            </section>
            <section className="sidebar-icons-two">
                <div className='icon instagram'> <AiOutlineInstagram /></div>
                <div className='icon twitter'><RiTwitterLine /></div>
                <div className='icon same'><RiPlayLine /></div>
            </section>


        </section>
    )
}

export default Sidebar