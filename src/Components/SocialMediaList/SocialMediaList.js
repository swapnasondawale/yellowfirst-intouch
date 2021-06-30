import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import './SocialMediaList.css'
class SocialMediaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='social-container'>
                <a
                href='https://www.facebook.com/yellowfirstuxui'
                className='facebook-social'>
                <FacebookIcon color='inherit' style={{margin:'auto', width:'30px', height:'30px'}}/>
                </a>
                <a
                href='https://www.linkedin.com/company/yellowfirstuxui/'
                className='linkedin-social'>
                    <i class="fab fa-google"></i>
                <LinkedInIcon color='inherit' style={{margin:'auto', width:'30px', height:'30px'}} />
                </a>
                <a
                href='https://www.instagram.com/yellowfirstuxui/'
                className='insta-social'>
                <InstagramIcon color="inherit" style={{margin:'auto', width:'30px', height:'30px'}} />
                </a>
                <a
                href='https://twitter.com/yellowfirstuxui'
                className='twitter
                -social'>
                <TwitterIcon color='inherit' style={{margin:'auto', width:'30px', height:'30px'}} />
                </a>
            </div>
        );
    }
}
export default SocialMediaList;