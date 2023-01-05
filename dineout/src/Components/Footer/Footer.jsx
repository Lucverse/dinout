import Available from './Available';
import MoreOptions from './MoreOptions';
import Socials from './Socials';
import Splitter from './Splitters';
import './Footer.css'
function Footer(){
    return(
        <div className='footer'>
            <Available/>
            <Splitter/>
            <MoreOptions/>
            <Splitter/>
            <Socials/>
        </div>
    )
}
export default Footer;