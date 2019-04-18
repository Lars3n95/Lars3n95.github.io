import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Grid,
  Divider,
  Message,
  Embed,
  Card
} from 'semantic-ui-react';
import LocalizedStrings from 'react-localization';


let strings = new LocalizedStrings({
    en:{
        numbersgame:"Numbers Game",
        numbersgame2:"Numbers Game 2",
        givefeedback:"Give feedback"
    },
    de: {
        numbersgame:"Zahlenspiel",
        numbersgame2:"Zahlenspiel 2",
        givefeedback:"Feedback geben"
    }
   });

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
                    marginTop: mobile ? '2em' : '0em',
                    marginBottom: '0.5em'
                }}>
                <Grid columns='equal' stackable>
                    <Grid.Column>
                        <a href="mailto:kilaapps@gmail.com">
                            <Button size='big'>
                                <Icon name='mail' />
                                E-Mail
                            </Button>
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://play.google.com/store/apps/dev?id=7164132871186129488" target='_blank' rel="noopener noreferrer">
                            <Button size='big'>
                                <Icon name='google play' />
                                Google Play
                            </Button>
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://twitter.com/lars_kila" target='_blank' rel="noopener noreferrer">
                            <Button size='big'>
                                <Icon name='twitter' />
                                Twitter
                            </Button>
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://feedback.userreport.com/e391f3e4-d46d-4beb-b930-264b8a564697/ " target='_blank' rel="noopener noreferrer">
                            <Button size='big'>
                                <Icon name='chat' />
                                {strings.givefeedback}
                            </Button>
                        </a>
                    </Grid.Column>
                </Grid>
            </Header>

            <div 
                style={{
                    marginTop: mobile ? '1em' : '3em',
                }}>
            </div>
            <Divider/>
            <div 
                style={{
                    marginTop: mobile ? '1em' : '3em',
                }}>
            </div>

            <Grid columns='equal' stackable divided style={{marginTop: '2em', marginBottom: '2em'}}>
                <Grid.Column>
                    <Card>
                        <Embed id='eTmWGOHRtw4' placeholder='/video_thumbnail_en.png' source='youtube' />
                        <Card.Content>
                            <Card.Header>{strings.numbersgame2}</Card.Header>
                            <Card.Description>Coming soon</Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <AppIcon icon='zahlenspiel.png' link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars'/>
                    <AppLink name={strings.numbersgame} link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars'/>
                </Grid.Column>
                <Grid.Column>
                    <AppIcon icon='notifyme.png' link='https://play.google.com/store/apps/details?id=com.kila.addnotification.lars'/>
                    <AppLink name='Notify me' link='https://play.google.com/store/apps/details?id=com.kila.addnotification.lars'/>
                </Grid.Column>
            </Grid>
            <Divider/>
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
    <a href={link} target='_blank' rel="noopener noreferrer" style={{paddingTop: '5px'}}>
        <br/>
        <Button size='small'>
            <Icon name='google play' />
            {name}
        </Button>
    </a>
)
  
Content.propTypes = {
    mobile: PropTypes.bool,
}

export default Content;