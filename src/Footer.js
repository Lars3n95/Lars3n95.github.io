import React, { Component } from 'react';
import {
    Grid,
    Modal,
    Image
} from 'semantic-ui-react';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en: {
        about: "About",
        abouttext: "The following information (Impressum) is required under German law.",
        no_packages: "No packages or parcels - refusal of acceptance!",
        purchasesheader: "",
        purchasetext: "",
        privacypolicyheader: "Privacy Policy (from 19.11.2023)",
        privacypolicy: "\
<div>This Privacy Policy informs the user about what data is collected, why it is collected, and what is done with it.</div><br/> \
<b>About</b><br/> \
If you write an email to the developer all information you sent will be collected and saved for processing and further support reasons. The information will not be transferred to third parties.<br/> \
We draw your attention to the fact that data transmission over the Internet (e.g. when communicating by e-mail) may involve gaps in security.<br/><br/> \
 \
<b>Download and Purchase/In-App Purchase</b><br/> \
In the apps itself, no personal data is collected through a download/purchase/in-app purchase. \
However, this data may be collected and processed by the provider of the trading platform and the responsible payment processor. \
Please refer to the corresponding data protection declaration below:<br/> \
Android: <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a> <br/> \
iOS: <a href=\"https://www.apple.com/legal/privacy/en-ww/\">https://www.apple.com/legal/privacy/en-ww/</a> <br/> \
We have no control over the collection of personal information from the above parties.<br/><br/> \
 \
<b>App</b><br/> \
You can use the apps without providing any personal data. The apps itself do not collect personal data at any time.<br/> \
Android: <br/>\
The app offers the possibility to connect with the Google Play Games Services. By doing this it might be that personal data is collected by the services.<br/> \
You can find the corresponding privacy policy at: <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a><br/> \
The only data Numbers Game 2 collects and sends to Amazon Web Services (AWS) is the information what level you solved and how many coins you had in that moment. \
The only data Word Game collects and sends to Amazon Web Services (AWS) after solving a word of the day is the information how many days the app is installed and how many coins you have at that moment. \
That data is used to better balance the games and does not contain any personal information. \
By using the Apps you agree to this privacy policy. If you do not agree to this privacy policy please do not use the Apps<br/><br/> \
\
<b>Google AdMob - Ads</b><br/> \
<div>In some apps it is possible to watch ads in order to receive in-game rewards. For this we use Google AdMob.<br/> \
Google AdMob is an online advertising program from Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043.<br/> \
Before you decide to watch the ads, you must agree that (personal) data may be collected and processed for this purpose. \
We use the Google Consent Management Platform so that you can set this. There you can choose for which purposes and which vendors may process the data. Depending on which settings are made, it may not be possible to display ads. \
You can change your ad consent at any time in the settings of the specific app. \
<br/><br/> \
Under the \"Google\" settings you can also get more information about what information Google LLC. has collected from you. \
More details on the use of personal data by Google LLC. and on the possibilities of revocation can also be found in the privacy policy at <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a> and specifically for the area of advertising at <a href=\"https://policies.google.com/technologies/ads\">https://policies.google.com/technologies/ads</a>.</div><br/> \
\
<b>UserReport</b><br/> \
Some apps and the website use UserReport to collect feedback and feature/bug reports from users. You do not have to use this feature as you can always can contact me via e-mail.<br/> \
The only information I get from UserReport is the feature/bug report, your name (you can choose any name you want) and your e-mail address.<br/> \
UserReport might collect further data. You can find the privacy policy at: <a href=\"https://privacy.userreport.com/en-US/for-users/privacy-policy\">https://privacy.userreport.com/en-US/for-users/privacy-policy</a><br/><br/> \
\
<b>Website</b><br/> \
The website <a href=\"https://lars3n95.github.io/\">https://lars3n95.github.io</a> can be used without providing any personal data. \
The website itself does not collect personal data at any time.<br/> \
The website is hosted at GitHub. By doing this it might be that personal data is collected by the service.<br/> \
You can find the corresponding privacy policy of the service at: <a href=\"https://help.github.com/en/articles/github-privacy-statement\">https://help.github.com/en/articles/github-privacy-statement</a><br/> \
In addition a random unique id is generated from <a href=\"https://www.freevisitorcounters.com\">https://www.freevisitorcounters.com</a> and saved as cookie to be able to see how many users visit the webiste. \
The cookie/id will be deleted when the browser is closed. \
<br/> \
By using the website you agree to this privacy policy. If you do not agree to this privacy policy please do not use the website<br/><br/> \
 \
<b>Permissions</b><br/> \
Android: <br/> \
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
        about: "Impressum",
        abouttext: "Angaben gemäß §5 TMG",
        no_packages: "Keine Pakete oder Päckchen - Annahme wird verweigert!",
        purchasesheader: "Informationen zu (In-)App-Verkäufen",
        purchasetext: "Gemäß § 19 UStG wird vom Anbieter keine Umsatzsteuer berechnet. Der Händler (App Store) kann jedoch unabhängig davon Umsatzsteuer berechnen und abführen.",
        privacypolicyheader: "Datenschutzerklärung (Stand 19.11.2023)",
        privacypolicy: "\
<b>Geltungsbereich</b> \
<div>Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten in von dem Anbieter (Lars Feßen-Fallsehr) entwickelten Apps und Webseiten auf.</div><br/>\
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
Bitte beachten Sie die entsprechende Datenschutzerklärung unter: <br/> \
Android: <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a> <br/> \
iOS: <a href=\"https://www.apple.com/legal/privacy/de-ww/\">https://www.apple.com/legal/privacy/de-ww/</a> <br/> \
Wir haben keinen Einfluss auf die Erhebung personenbezogener Daten der oben genannten Parteien.</div> \
 \
<br/> \
<b>App</b> \
<div>Die Nutzung der Apps ist ohne Angabe personenbezogener Daten möglich. Von dem Anbieter selbst werden während der Nutzung keine personenbezogene Daten erhoben. <br/> \
Android: <br/>\
Die App bietet die Möglichkeit sich mit den Google Play Spiele Services zu verbinden. Dabei werden von diesen Services möglicherweise personenbezogene Daten erhoben. \
Die Datenschutzerklärung erhalten Sie unter: <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a> \
Die einzigen Daten, die in der App Zahlenspiel 2 gesammelt und an Amazon Web Services (AWS) gesendet werden, ist die Information, welches Level Sie gelöst haben und wie viele Münzen Sie in dem Moment besaßen. \
Die einzigen Daten, die in der App Wortspiel gesammelt und an Amazon Web Services (AWS) gesendet werden wenn ein Wort des Tages gelöst wird, ist die Information, wie lange die App bereits installiert ist und wie viele Münzen Sie in dem Moment besaßen. \
Diese Informationen werden dafür benutzt, die Spiele zu optimieren und beinhalten keinerlei personenbezogene Daten. \
<br/> \
Durch die Nutzung dieser Apps und ihrer Dienste bringen Sie Ihr Einverständnis zu dieser Richtlinie und der Verarbeitung Ihrer Daten gemäß dieser Richtlinie, insbesondere Ihrer personenbezogenen Daten, zum Ausdruck.  \
Bitte nutzen Sie die Apps und ihre Dienste nicht, wenn Sie mit diesen Bestimmungen nicht einverstanden sind.</div> \
\
<br/> \
<b>Google AdMob - Werbung</b> \
<div>In manchen Apps ist es möglich, Werbung zu schauen, um dafür eine Ingame-Belohnung zu erhalten. Dafür nutzen wir Google AdMob.<br/> \
Google AdMob ist ein Online-Werbeprogramm von Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043.<br/> \
Bevor Sie die Werbung anschauen, müssen Sie zustimmen, dass dafür ggf. personenbezogene Daten erfasst und verarbeitet werden. \
Wir nutzen die Google Consent Management Platform, womit Sie diese Einstellungen treffen können. Dort können Sie auswählen für welche Zwecke und welche Anbieter die Daten verarbeiten dürfen. Je nachdem welche Einstellungen getroffen werden, kann es sein, dass trotzdem keine Werbung angezeigt werden kann. \
In den Einstellungen der jeweiligen App können Sie Ihre Werbungs-Zustimmung jederzeit anpassen. \
<br/><br/> \
Unter den \"Google\" Einstellungen können Sie auch weitere Informationen dazu erhalten welche Informationen Google LLC. über Sie gespeichert hat. \
Genauere Details zur Verwendung personenbezogener Daten von Google LLC. und zur Möglichkeit des Widerrufs finden Sie auch in der Datenschutzerklärung unter <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a> und konkret für den Bereich Werbung unter <a href=\"https://policies.google.com/technologies/ads\">https://policies.google.com/technologies/ads</a>. </div> \
\
<br/> \
<b>UserReport</b> \
<div>Manche Apps und die Webseite nutzen UserReport, um Featurewünsche oder Fehlermeldungen zu sammeln. Sie müssen UserReport nicht nutzen, sondern können uns immer auch per E-Mail kontaktieren. \
Die einzigen Informationen, die wir von UserReport erhalten, sind der Featurewunsch/die Fehlermeldung, Ihr eingegebener Name und Ihre E-Mail Adresse. \
UserReport sammelt zusätzlich möglicherweise noch weitere Daten. Die Datenschutzerklärung von UserReport finden Sie hier: <a href=\"https://privacy.userreport.com/de-DE/for-users/privacy-policy\">https://privacy.userreport.com/de-DE/for-users/privacy-policy</a> </div> \
\
<br/> \
<b>Webseite</b> \
<div>Die Nutzung der Webseite <a href=\"https://lars3n95.github.io/\">https://lars3n95.github.io</a> ist ohne Angabe personenbezogener Daten möglich. Von dem Anbieter selbst werden während der Nutzung keine personenbezogene Daten erhoben. \
Die Webseite wird bei GitHub gehostet. Dabei werden von diesem Service möglicherweise personenbezogene Daten erhoben. \
Die Datenschutzerklärung des Services erhalten Sie unter: <a href=\"https://help.github.com/en/articles/github-privacy-statement\">https://help.github.com/en/articles/github-privacy-statement</a> \
<br/> \
Zusätzlich wird eine eindeutige zufällige ID von <a href=\"https://www.freevisitorcounters.com\">https://www.freevisitorcounters.com</a> als Cookie gespeichert, um einsehen zu können, wie viele Nutzer die Webseite besuchen. \
Die ID wird spätestens gelöscht, sobald Sie den Browser verlassen. \
<br/> \
Durch die Nutzung der Webseite bringen Sie Ihr Einverständnis zu dieser Richtlinie und der Verarbeitung Ihrer Daten gemäß dieser Richtlinie, insbesondere Ihrer personenbezogenen Daten, zum Ausdruck.  \
Bitte nutzen Sie die Webseite nicht, wenn Sie mit diesen Bestimmungen nicht einverstanden sind.</div> \
 \
<br/> \
<b>Berechtigungen</b> <br/> \
Android: <br/> \
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
<div>Stand 19.11.2023</div> \
<div>Die Datenschutzerklärung kann sich von Zeit zu Zeit ändern. Sie wird hier auf der Webseite aktuell gehalten.</div> "
    }
});

class Footer extends Component {
    state = {}

    render() {
        let mobile = this.props.mobile;
        let classNames = "ui vertical inverted site-footer";
        if (mobile) {
            classNames = "ui vertical inverted segment";
        }
        return (
            <div className={classNames}>
                <Modal open={window.location.hash === "#pp"}>
                    <Modal.Header>{strings.privacypolicyheader}</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Image src={require('./resources/impressum_address.png')} size="medium" />
                            <div>{strings.no_packages}</div>
                            <Image src={require('./resources/impressum_email.png')} size="medium" />
                            <div dangerouslySetInnerHTML={{ __html: strings.privacypolicy }}></div>
                        </Modal.Description>
                    </Modal.Content >
                </Modal>
                <Grid columns='equal' stackable divided>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{ textAlign: 'center', cursor: 'pointer' }}>{strings.about}</h4>}>
                            <Modal.Header>{strings.about}</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <p>{strings.abouttext}</p>
                                    <Image src={require('./resources/impressum_address.png')} size="medium" />
                                    <div>{strings.no_packages}</div>
                                    <Image src={require('./resources/impressum_email.png')} size="medium" />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{ textAlign: 'center', cursor: 'pointer' }}>{strings.privacypolicyheader}</h4>}>
                            <Modal.Header>{strings.privacypolicyheader}</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <Image src={require('./resources/impressum_address.png')} size="medium" />
                                    <div>{strings.no_packages}</div>
                                    <Image src={require('./resources/impressum_email.png')} size="medium" />
                                    <div dangerouslySetInnerHTML={{ __html: strings.privacypolicy }}></div>
                                </Modal.Description>
                            </Modal.Content >
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{ textAlign: 'center', cursor: 'pointer' }}>{strings.purchasesheader}</h4>}>
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