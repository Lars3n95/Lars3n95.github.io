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
import style from './SiteHeader.css';

class SiteHeader extends Component {
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
            <Message>Under construction...</Message>
            <Header
                as='h1'
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    marginTop: mobile ? '2em' : '2em',
                    marginBottom: '0.5em'
                }}>
                <Label size='big'>Lars Feßen</Label>
            </Header>

            <br/>

            <a href="https://play.google.com/store/apps/dev?id=7164132871186129488">
                <Button size='big'>
                    <Icon name='google play' />
                    Google Play
                </Button>
            </a>

            <Grid columns='equal' stackable divided style={{marginTop: '2em'}}>
                <Grid.Column>
                    <AppIcon name='zahlenspiel.png'/>
                    <AppLink value='Zahlenspiel' text='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars' />
                </Grid.Column>
                <Grid.Column>
                    <AppIcon name='notifyme.png'/>
                    <AppLink value='Notify me' text='https://play.google.com/store/apps/details?id=com.kila.addnotification.lars' />
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

const AppIcon = ({name}) => (
    <div>
        <Image centered src={require('./resources/'+name)}/>
    </div>
)

const AppLink = ({text, value}) => (
    <Statistic inverted>
        <a href={value}>{text}</a>
        <br/>
    </Statistic>
)
  
SiteHeader.propTypes = {
    mobile: PropTypes.bool,
}

export default SiteHeader;