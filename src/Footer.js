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
<p>Angaben gemäß §5 TMG</p>

<div>Lars Feßen</div>
<div>Muster strasse</div>
<div>123 Musterort</div>

<br/>
<b>Verteten durch:</b>
<div>Lars Feßen</div>

<br/>
<b>Kontakt:</b>
<div>Telefon: ____</div>
<div>E-Mail: kilaapps@gmail.com</div>

<p>In Arbeit...</p>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>Datenschutzerklärung</h4>}>
                            <Modal.Header>Datenschutzerklärung (Stand 29.01.2019)</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
<b>Geltungsbereich</b>
<div>Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten in von dem Anbieter (Lars Feßen) entwickelten Apps auf.</div>

<br/>
<b>Verantwortliche Stelle</b>
<div>Lars Feßen</div>
<div>Muster strasse</div>
<div>123 Musterort</div>

<br/>
<b>Kontakt:</b>
<div>Telefon: ____</div>
<div>E-Mail: kilaapps@gmail.com</div>

<br/>
<b>Kontaktaufnahme</b>
<div>Bei der Kontaktaufnahme per Mail mit dem Anbieter werden die Angaben des Nutzers zwecks Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen entstehen, gespeichert.
Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
Weitere personenbezogene Daten werden nicht erfasst.
Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. 
Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</div>

<br/>
<b>Download und Kauf/In-App Kauf</b>
<div>In den Apps selbst werden keine personenbezogenen Daten durch einen Download/Kauf/In-App Kauf erhoben. 
Diese Daten werden jedoch möglicherweise vom Anbieter der Handelsplattform und dem zuständigen Zahlungsabwickler erhoben und verarbeitet.
Bitte beachten Sie die entsprechende Datenschutzerklärung unter: "https://policies.google.com/privacy"
Wir haben keinen Einfluss auf die Erhebung personenbezogener Daten der oben genannten Parteien.</div>

<br/>
<b>App</b>
<div>Die Nutzung der Apps ist ohne Angabe personenbezogener Daten möglich. Von dem Anbieter selbst werden während der Nutzung keine personenbezogene Daten erhoben.
Die App bietet die Möglichkeit sich mit den Google Play Spiele Services zu verbinden. Dabei werden von diesen Services möglicherweise personenbezogene Daten erhoben.
Um die App zu verbessern wird Firebase verwendet, womit Absturzberichte an den Entwickler gesendet werden. Diese enthalten keine personenbezogenen Daten.
Die Datenschutzerklärung beider Services erhalten Sie unter: "https://policies.google.com/privacy"
<br/>
Durch die Nutzung dieser App und ihrer Dienste bringen Sie Ihr Einverständnis zu dieser Richtlinie und der Verarbeitung Ihrer Daten gemäß dieser Richtlinie, insbesondere Ihrer personenbezogenen Daten, zum Ausdruck. 
Bitte nutzen Sie die App und ihre Dienste nicht, wenn Sie mit diesen Bestimmungen nicht einverstanden sind.</div>

<br/>
<b>Berechtigungen</b>
<div>Im Folgenden werden die teilweise von den Apps geforderten Berechtigungen aufgelistet und ihr Verwendungszweck erläutert:</div>
<ul>
    <li>Ruhezustand deaktivieren: Wird von den Google Play Services und Firebase Crash Reporting verwendet</li>
    <li>Netzwerkverbindungen abrufen: Wird von den Google Play Services und Firebase Crash Reporting verwendet</li>
    <li>Voller Netzwerkzugriff: Wird von den Google Play Services und Firebase Crash Reporting verwendet</li>
    <li>Beim Start ausführen (Notify me): Um die Benachrichtigungen auch nach einem Neustart anzuzeigen</li>
    <li>Vibrationsalarm steuern (Notify me): Damit die Benachrichtigungen bei Bedarf auch vibrieren</li>
</ul>

<br/>
<b>Rechte des Nutzers</b>
<p>Sie haben das Recht auf eine Auskunft, welche personenbezogenen Daten über Sie gespeichert wurden.
Sie haben außerdem das Recht auf Berichtigung falscher Daten und auf die Verarbeitungseinschränkung oder Löschung Ihrer personenbezogenen Daten.
Außerdem haben Sie das Recht auf Einschränkung, Widerspruch und Datenübertragbarkeit. Zusätzlich besteht das Recht auf Beschwerde bei einer Aufsichtsbehörde.</p>
<br/>
<p>Sie haben ein Anrecht auf Löschung Ihrer Daten, sofern dies nicht mit einer gesetzlichen Pflicht zur Aufbewahrung der Daten (z. B. Vorratsdatenspeicherung) kollidiert.
Von uns gespeicherte Daten werden, sollten sie für ihren Verwendungszweck nicht mehr vonnöten sein und es keine gesetzlichen Aufbewahrungsfristen geben, gelöscht. </p>

<br/>
<div>Stand 29.01.2019</div>
<div>Die Datenschutzerklärung kann sich von Zeit zu Zeit ändern. Sie wird hier auf der Webseite aktuell gehalten.</div>
                                </Modal.Description>
                            </Modal.Content >
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal trigger={<h4 style={{textAlign: 'center', cursor: 'pointer'}}>Informationen zu (In-)App-Verkäufen</h4>}>
                            <Modal.Header>Informationen zu (In-)App-Verkäufen</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <p>Gemäß § 19 UStG wird vom Anbieter keine Umsatzsteuer berechnet. Der Händler (App Store) kann jedoch unabhängig davon Umsatzsteuer berechnen und abführen.</p>
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