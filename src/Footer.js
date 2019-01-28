import React, { Component } from 'react';

class Footer extends Component {
    state = {}
  
    render() {  
        return (    
        <div class="ui vertical footer segment">
            <div class="ui center aligned container">
                <h4 class="ui inverted header">Impressum</h4>
                <h4 class="ui inverted header">Datenschutzerklärung</h4>
                <h4 class="ui inverted header">Informationen zu App-Verkäufen</h4>
            </div>
        </div>
        )
    }
}

export default Footer;