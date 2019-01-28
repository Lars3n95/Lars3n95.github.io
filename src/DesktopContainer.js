import React, { Component } from 'react';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import {
  Responsive,
  Segment
} from 'semantic-ui-react';

class DesktopContainer extends Component {
    state = {}
  
    render() {  
        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Segment
                    inverted
                    textAlign='center'
                    className='site-segment'>
                        <SiteHeader />
                </Segment>
                <Footer />
            </Responsive>
        )
    }
}

export default DesktopContainer;