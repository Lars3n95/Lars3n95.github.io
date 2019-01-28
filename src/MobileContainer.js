import React, { Component } from 'react';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import {
  Responsive,
  Segment
} from 'semantic-ui-react';

class MobileContainer extends Component {
    state = {}
  
    render() {    
        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Segment
                    inverted
                    textAlign='center'
                    className='site-segment'>
                        <SiteHeader mobile/>
                </Segment>
                <Footer />
            </Responsive>
        )
    }
}
export default MobileContainer;