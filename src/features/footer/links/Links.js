import './Links.css';
// Componenet
import WhiteHeading from '../heading/Heading';
import WhitePara from '../productPara/ProductPara';
import SocialIcon from '../socialIcon/SocialIcon';
import LinkList from '../linkList/LinkList';

export default function Links() {
    return (
        <div id="linkSection" className="uniPadding ">
            <div id="titleHere" className='container'>
                <WhiteHeading heading="Title Here" />
                <WhitePara />
                <SocialIcon />
            </div>
            <LinkList heading={<WhiteHeading heading="About" />}
                item="History"
                item1="Our Team"
                item2="Brand Guidelines"
                item3="Terms & Condition"
                item4="Privacy Policy" />

            <LinkList heading={<WhiteHeading heading="Services" />}
                item="How to Order"
                item1="Our Product"
                item2="Order Status"
                item3="Promo"
                item4="Payment Method" />

            <LinkList heading={<WhiteHeading heading="Other" />}
                item="Contact Us"
                item1="Help"
                item2="Privacy" />
        </div>
    )
}