import React, { Component } from 'react';

class Footer extends Component {
    state = {}
  
    render() {  
        return (    
        <div class="ui inverted pink vertical footer segment">
            <div class="ui center aligned container">
                <h4 class="ui inverted header">&copy; Copyright 2017 | All rights reserved | Blahhh</h4>
                <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
                <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
                <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon big"></i></a>
            </div>
        </div>
        )
    }
}

export default Footer;