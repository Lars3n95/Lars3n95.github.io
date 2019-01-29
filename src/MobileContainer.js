import React, { Component } from 'react';
import Content from './Content';
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
                        <Content mobile/>
                        <Footer mobile />
                </Segment>
            </Responsive>
        )
    }
}
export default MobileContainer;