import React, { Component } from 'react';
import {
  Grid,
  Modal,
  Image
} from 'semantic-ui-react';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
        about:"About",
        abouttext:"The following information (Impressum) is required under German law.",
        purchasesheader:"",
        purchasetext:"",
        privacypolicy:"Privacy Policy",
        privacypolicyheader:"Privacy Policy (from 14.04.2019)",
        privacypolicy:"\
<div>This Privacy Policy informs the user about what data is collected, why it is collected, and what is done with it.</div><br/> \
<b>About</b><br/> \
If you write an email to the developer all information you sent will be collected and saved for processing and further support reasons. The information will not be transferred to third parties.<br/> \
We draw your attention to the fact that data transmission over the Internet (e.g. when communicating by e-mail) may involve gaps in security.<br/><br/> \
 \
<b>Download and Purchase/In-App Purchase</b><br/> \
In the app itself, no personal data is collected through a download/purchase/in-app purchase. \
However, this data may be collected and processed by the provider of the trading platform and the responsible payment processor. \
Please refer to the corresponding data protection declaration below: https://policies.google.com/privacy <br/> \
We have no control over the collection of personal information from the above parties.<br/><br/> \
 \
<b>App</b><br/> \
You can use the app without providing any personal data. The app itself does not collect personal data at any time.<br/> \
The app offers the possibility to connect with the Google Play Games Services. By doing this it might be that personal data is collected by the services.<br/> \
The app is using Firebase. A software which helps to improve the app by sending crash reports. The crash reports do not collect personal data.<br/> \
You can find the corresponding privacy policy of both services at: https://policies.google.com/privacy<br/> \
By using the App you agree to this privacy policy. If you do not agree to this privacy policy please do not use the App<br/><br/> \
 \
<b>UserReport</b><br/> \
The app and the website use UserReport to collect feedback and feature/bug reports from users. You do not have to use this feature as you can always can contact me via e-mail.<br/> \
The only information I get from UserReport is the feature/bug report, your name (you can choose any name you want) and your e-mail address.<br/> \
UserReport might collect further data. You can find the privacy policy at: https://privacy.userreport.com/en-US/for-users/privacy-policy/<br/><br/> \
\
<b>Website</b><br/> \
The website https://lars3n95.github.io/ can be used without providing any personal data. \
The website itself does not collect personal data at any time.<br/> \
The website is hosted at GitHub. By doing this it might be that personal data is collected by the service.<br/> \
You can find the corresponding privacy policy of the service at: https://help.github.com/en/articles/github-privacy-statement<br/> \
By using the website you agree to this privacy policy. If you do not agree to this privacy policy please do not use the website<br/><br/> \
 \
<b>Permissions</b><br/> \
Hereinafter the user is informed about the necessary permissions and for what they are used:<br/> \
<ul> \
    <li>Prevent phone from sleeping: Used by the Google Play Services</li> \
    <li>Full Internet access: Used by the Google Play Services</li> \
    <li>View Network status / WiFi state: Used by the Google Play Services</li> \
</ul> \
 \
<b>Rights of the user</b><br/> \
You have the right to be informed as to which personal data about you has been stored.<br/> \
You also have the right to have false data corrected and to have your personal data limited or deleted.<br/> \
In addition, you have the right to restriction, objection and data transfer. In addition, you have the right to lodge a complaint with a supervisory authority.<br/><br/> \
You have the right to have your data deleted unless this conflicts with a legal obligation to store the data (e.g. data retention). \
Data stored by us will be deleted if they are no longer required for their intended use and there are no legal retention periods.<br/><br/> \
 \
<b>Right of objection</b><br/> \
You have the right to object to the processing of your personal data.<br/><br/> \
 \
The basis for data processing is Art. 6 para. 1 lit. b GDPR, which permits the processing of data for the fulfilment of a contract or pre-contractual measures.<br/><br/> \
 \
The Privacy Policy may change from time to time during the futures services updates. We will always keep this Policy up to date.<br/><br/> "
    },
    de: {
        about:"Impressum",
        abouttext:"Angaben gemäß §5 TMG",
        purchasesheader:"Informationen zu (In-)App-Verkäufen",
        purchasetext:"Gemäß § 19 UStG wird vom Anbieter keine Umsatzsteuer berechnet. Der Händler (App Store) kann jedoch unabhängig davon Umsatzsteuer berechnen und abführen.",
        privacypolicy:"Datenschutzerklärung",
        privacypolicyheader:"Datenschutzerklärung (Stand 14.04.2019)",
        privacypolicy:"\
<b>Geltungsbereich</b> \
<div>Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten in von dem Anbieter (Lars Feßen-Fallsehr) entwickelten Apps auf.</div><br/>\
\
<br/> \
<b>Kontaktaufnahme</b> \
<div>Bei der Kontaktaufnahme per Mail mit dem Anbieter werden die Angaben des Nutzers zwecks Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen entstehen, gespeichert. \
Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. \
Weitere personenbezogene Daten werden nicht erfasst. \
Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.  \
Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</div> \
 \
<br/> \
<b>Download und Kauf/In-App Kauf</b> \
<div>In den Apps selbst werden keine personenbezogenen Daten durch einen Download/Kauf/In-App Kauf erhoben.  \
Diese Daten werden jedoch möglicherweise vom Anbieter der Handelsplattform und dem zuständigen Zahlungsabwickler erhoben und verarbeitet. \
Bitte beachten Sie die entsprechende Datenschutzerklärung unter: https://policies.google.com/privacy \
Wir haben keinen Einfluss auf die Erhebung personenbezogener Daten der oben genannten Parteien.</div> \
 \
<br/> \
<b>App</b> \
<div>Die Nutzung der Apps ist ohne Angabe personenbezogener Daten möglich. Von dem Anbieter selbst werden während der Nutzung keine personenbezogene Daten erhoben. \
Die App bietet die Möglichkeit sich mit den Google Play Spiele Services zu verbinden. Dabei werden von diesen Services möglicherweise personenbezogene Daten erhoben. \
Um die App zu verbessern wird Firebase verwendet, womit Absturzberichte an den Entwickler gesendet werden. Diese enthalten keine personenbezogenen Daten. \
Die Datenschutzerklärung beider Services erhalten Sie unter: https://policies.google.com/privacy \
<br/> \
Durch die Nutzung dieser App und ihrer Dienste bringen Sie Ihr Einverständnis zu dieser Richtlinie und der Verarbeitung Ihrer Daten gemäß dieser Richtlinie, insbesondere Ihrer personenbezogenen Daten, zum Ausdruck.  \
Bitte nutzen Sie die App und ihre Dienste nicht, wenn Sie mit diesen Bestimmungen nicht einverstanden sind.</div> \
 \
<br/> \
<b>UserReport</b> \
<div>Die App und die Webseite nutzen UserReport, um Featurewünsche oder Fehlermeldungen zu sammeln. Sie müssen UserReport nicht nutzen, sondern können uns immer auch per E-Mail kontaktieren. \
Die einzigen Informationen, die wir von UserReport erhalten, sind der Featurewunsch/die Fehlermeldung, Ihr eingegebener Name und Ihre E-Mail Adresse. \
UserReport sammelt zusätzlich möglicherweise noch weitere Daten. Die Datenschutzerklärung von UserReport finden Sie hier: https://privacy.userreport.com/de-DE/for-users/privacy-policy/ </div> \
\
<br/> \
<b>Webseite</b> \
<div>Die Nutzung der Webseite https://lars3n95.github.io/ ist ohne Angabe personenbezogener Daten möglich. Von dem Anbieter selbst werden während der Nutzung keine personenbezogene Daten erhoben. \
Die Webseite wird bei GitHub gehostet. Dabei werden von diesem Service möglicherweise personenbezogene Daten erhoben. \
Die Datenschutzerklärung des Services erhalten Sie unter: https://help.github.com/en/articles/github-privacy-statement \
<br/> \
Durch die Nutzung der Webseite bringen Sie Ihr Einverständnis zu dieser Richtlinie und der Verarbeitung Ihrer Daten gemäß dieser Richtlinie, insbesondere Ihrer personenbezogenen Daten, zum Ausdruck.  \
Bitte nutzen Sie die Webseite nicht, wenn Sie mit diesen Bestimmungen nicht einverstanden sind.</div> \
 \
<br/> \
<b>Berechtigungen</b> \
<div>Im Folgenden werden die von den Apps geforderten Berechtigungen aufgelistet und ihr Verwendungszweck erläutert:</div> \
<ul> \
    <li>Ruhezustand deaktivieren: Wird von den Google Play Services und Firebase Crash Reporting verwendet</li> \
    <li>Netzwerkverbindungen abrufen: Wird von den Google Play Services und Firebase Crash Reporting verwendet</li> \
    <li>Voller Netzwerkzugriff: Wird von den Google Play Services und Firebase Crash Reporting verwendet</li> \
    <li>Beim Start ausführen (Notify me): Um die Benachrichtigungen auch nach einem Neustart anzuzeigen</li> \
    <li>Vibrationsalarm steuern (Notify me): Damit die Benachrichtigungen bei Bedarf auch vibrieren</li> \
</ul> \
 \
<br/> \
<b>Rechte des Nutzers</b> \
<p>Sie haben das Recht auf eine Auskunft, welche personenbezogenen Daten über Sie gespeichert wurden. \
Sie haben außerdem das Recht auf Berichtigung falscher Daten und auf die Verarbeitungseinschränkung oder Löschung Ihrer personenbezogenen Daten. \
Außerdem haben Sie das Recht auf Einschränkung, Widerspruch und Datenübertragbarkeit. Zusätzlich besteht das Recht auf Beschwerde bei einer Aufsichtsbehörde.</p> \
<br/> \
<p>Sie haben ein Anrecht auf Löschung Ihrer Daten, sofern dies nicht mit einer gesetzlichen Pflicht zur Aufbewahrung der Daten (z. B. Vorratsdatenspeicherung) kollidiert. \
Von uns gespeicherte Daten werden, sollten sie für ihren Verwendungszweck nicht mehr vonnöten sein und es keine gesetzlichen Aufbewahrungsfristen geben, gelöscht. </p> \
<br/> \
 \
<b>Widerspruchsrecht</b> \
<p>Sie haben das Recht der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.</p> \
<br/> \
 \
<p>Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p> \
 \
<br/> \
<br/> \
<div>Stand 14.04.2019</div> \
<div>Die Datenschutzerklärung kann sich von Zeit zu Zeit ändern. Sie wird hier auf der Webseite aktuell gehalten.</div> "
    }
   });

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
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>{strings.about}</h4>}>
                            <Modal.Header>{strings.about}</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
<p>{strings.abouttext}</p>
<Image src={require('./resources/impressum.png')}/>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>{strings.privacypolicyheader}</h4>}>
                            <Modal.Header>{strings.privacypolicyheader}</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
<Image src={require('./resources/impressum.png')}/>
<div dangerouslySetInnerHTML={{ __html: strings.privacypolicy }}></div>
                                </Modal.Description>
                            </Modal.Content >
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>{strings.purchasesheader}</h4>}>
                            <Modal.Header>{strings.purchasesheader}</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <p>{strings.purchasetext}</p>
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

//TODO: Datenschutz: WAs ist mit inApp Käufen?