import React, { Component } from 'react';
import {
  Grid,
  Modal
} from 'semantic-ui-react';

class Footer extends Component {
    state = {}
  
    render() {
        let mobile = this.props.mobile;
        let classNames = "ui vertical inverted site-footer";
        if(mobile) {
            classNames = "ui vertical inverted segment";
        }
        return (
            <div className={classNames}>
                <Grid columns='equal' stackable divided>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>Impressum</h4>}>
                            <Modal.Header>Impressum</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                                    <p>Is it okay to use this photo?</p>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>Datenschutzerklärung</h4>}>
                            <Modal.Header>Datenschutzerklärung</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                                    <p>Is it okay to use this photo?</p>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>Informationen zu (In-)App-Verkäufen</h4>}>
                            <Modal.Header>Informationen zu (In-)App-Verkäufen</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                                    <p>Is it okay to use this photo?</p>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Footer;