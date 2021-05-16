import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Header,
    Icon,
    Image,
    Grid,
    Divider
} from 'semantic-ui-react';
import LocalizedStrings from 'react-localization';


let strings = new LocalizedStrings({
    en: {
        numbersgame: "Numbers Game",
        numbersgame2: "Numbers Game 2",
        givefeedback: "Give feedback",
        supportme: "Support me",
        supportmetext: "Support me",
        supportmesmall: "Small support",
        supportmemediun: "Medium support",
        supportmebig: "Big support",
    },
    de: {
        numbersgame: "Zahlenspiel",
        numbersgame2: "Zahlenspiel 2",
        givefeedback: "Feedback geben",
        supportme: "Unterstützen",
        supportmetext: "In dem du meine Apps bewertest, im besten Fall natürlich mit 5 Sternen, kannst du unterstützen. Für eine finanzielle All diese Links leiten dich zum Google Play Store zu Apps mit drei verschiedenen Preisen weiter. Diese Apps haben keinerlei Funktionalität, sie dienen ausschließlich dazu, mir eine Kleinigkeit zu spenden und mich bei der Entwicklung zu unterstützen.",
        supportmesmall: "Kleine Unterstützung",
        supportmemediun: "Mittlere Unterstützung",
        supportmebig: "Große Unterstützung",
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
                        {/* <Grid.Column>
                            <Modal trigger={<Button size='big'>
                                <Icon name='chat' />
                                {strings.givefeedback}
                            </Button>}>
                                <Modal.Header>{strings.supportme}</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        <h2>{strings.supportme}</h2>
                                        <p>{strings.supportmetext}</p>
                                        <a href="https://play.google.com/store/apps/details?id=com.kila.donationappsmall.lars" target='_blank' rel="noopener noreferrer">
                                            <Button size='big'>
                                                <Icon name='google play' />
                                                {strings.supportmesmall}
                                            </Button>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.kila.donationappmedium.lars" target='_blank' rel="noopener noreferrer">
                                            <Button size='big'>
                                                <Icon name='google play' />
                                                {strings.supportmemedium}
                                            </Button>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.kila.donationapplarge.lars" target='_blank' rel="noopener noreferrer">
                                            <Button size='big'>
                                                <Icon name='google play' />
                                                {strings.supportmebig}
                                            </Button>
                                        </a>
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        </Grid.Column> */}
                    </Grid>
                </Header>

                <div
                    style={{
                        marginTop: mobile ? '1em' : '3em',
                    }}>
                </div>
                <Divider />
                <div
                    style={{
                        marginTop: mobile ? '1em' : '3em',
                    }}>
                </div>

                <Grid columns='equal' stackable divided style={{ marginTop: '2em', marginBottom: '2em' }}>
                    <Grid.Column>
                        <AppIcon icon='zahlenspiel2.png' link='https://play.google.com/store/apps/details?id=com.kila.zahlenspiel2.lars' />
                        <AppLink name={strings.numbersgame2} link='https://play.google.com/store/apps/details?id=com.kila.zahlenspiel2.lars' />
                        <br />
                        <IosAppLink name={strings.numbersgame2} link='https://apps.apple.com/de/app/numbers-game-2/id1556116590' />
                    </Grid.Column>
                    <Grid.Column>
                        <AppIcon icon='zahlenspiel.png' link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars' />
                        <AppLink name={strings.numbersgame} link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars' />
                    </Grid.Column>
                    <Grid.Column>
                        <AppIcon icon='notifyme.png' link='https://play.google.com/store/apps/details?id=com.kila.addnotification.lars' />
                        <AppLink name='Notify me' link='https://play.google.com/store/apps/details?id=com.kila.addnotification.lars' />
                    </Grid.Column>
                </Grid>
                <Divider />
            </Container>
        )
    }

    handleMouseHover() {
        console.log(this.state.hovering);
        this.setState({ hovering: !this.state.hovering });
    }
}

const AppIcon = ({ icon, link }) => (
    <div>
        <Image centered
            as='a'
            href={link}
            target='_blank'
            src={require('./resources/' + icon)} />
    </div>
)

const AppLink = ({ name, link }) => (
    <a href={link} target='_blank' rel="noopener noreferrer" style={{ paddingTop: '5px' }}>
        <br />
        <Button size='small'>
            <Icon name='google play' />
            {name}
        </Button>
    </a>
)

const IosAppLink = ({ name, link }) => (
    <a href={link} target='_blank' rel="noopener noreferrer" style={{ paddingTop: '5px' }}>
        <br />
        <Button size='small'>
            <Icon name='apple' />
            {name}
        </Button>
    </a>
)

Content.propTypes = {
    mobile: PropTypes.bool,
}

export default Content;