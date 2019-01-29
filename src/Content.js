import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Grid,
  Statistic,
  Label,
  Message,
  Progress
} from 'semantic-ui-react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            hovering: false,
        };
    }

    render() {
        let mobile = this.props.mobile;
        return (
        <Container>
            <Header
                as='h1'
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    marginTop: mobile ? '2em' : '2em',
                    marginBottom: '0.5em'
                }}>
                <a href="https://play.google.com/store/apps/dev?id=7164132871186129488" target='_blank'>
                    <Button size='big'>
                        <Icon name='google play' />
                        Google Play
                    </Button>
                </a>
            </Header>


            <Grid columns='equal' stackable divided style={{marginTop: '2em', marginBottom: '2em'}}>
                <Grid.Column>
                    <AppIcon icon='zahlenspiel.png' link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars'/>
                    <AppLink name='Zahlenspiel' link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars'/>
                </Grid.Column>
                <Grid.Column>
                    <AppIcon icon='notifyme.png' link='https://play.google.com/store/apps/details?id=com.kila.addnotification.lars'/>
                    <AppLink name='Notify me' link='https://play.google.com/store/apps/details?id=com.kila.addnotification.lars'/>
                </Grid.Column>
            </Grid>
        </Container>
        )
    }

    handleMouseHover() {
        console.log(this.state.hovering);
        this.setState({hovering: !this.state.hovering});
    }
}

const AppIcon = ({icon, link}) => (
    <div>
        <Image centered 
            as='a'
            href={link}
            target='_blank'
            src={require('./resources/'+icon)}/>
    </div>
)

const AppLink = ({name, link}) => (
    <Statistic inverted>
        <a href={link}>{name}</a>
        <br/>
    </Statistic>
)
  
Content.propTypes = {
    mobile: PropTypes.bool,
}

export default Content;