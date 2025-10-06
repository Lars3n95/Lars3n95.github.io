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
        wordgame: "Word Game",
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
        wordgame: "Wortspiel",
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
                        <AppIcon icon='wordgame.png' link='https://play.google.com/store/apps/details?id=com.kila.wordgame.lars' />
                        <AppLink name={strings.wordgame} link='https://play.google.com/store/apps/details?id=com.kila.wordgame.lars' />
                    </Grid.Column>
                    <Grid.Column>
                        <AppIcon icon='zahlenspiel.png' link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars' />
                        <AppLink name={strings.numbersgame} link='https://play.google.com/store/apps/details?id=com.kila.zahlenspielpro.lars' />
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
