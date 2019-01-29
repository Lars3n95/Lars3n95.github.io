import React, { Component } from 'react';
import Content from './Content';
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
                        <Content />
                        <Footer />
                </Segment>
            </Responsive>
        )
    }
}

export default DesktopContainer;