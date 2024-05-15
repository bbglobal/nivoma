import './style.css'
import { Container } from 'react-bootstrap'

const AGB = () => {
    return (
        <main className='agb'>

            <section className="agb-hero">
                <h1>Allgemeine Geschäftsbedingungen</h1>
            </section>

            <section className="agb-sec-content">

                <Container>
                    <p>Mit dem Zugriff auf diese Website akzeptieren Sie als Kunde oder potenzieller Kunde, auf dieser Website Informationen in mehreren Sprachen zu erhalten.</p>

                    <p>Bitte lesen Sie diese Seite zu Ihrem Schutz, bevor Sie fortfahren, da sie bestimmte gesetzliche Beschränkungen für die Verbreitung dieser Informationen enthält sowie Informationen darüber, in welchen Staaten unsere Dienstleistungen verfügbar sind. Sie sind dafür verantwortlich, sich über sämtliche Gesetze und Vorschriften der jeweils anwendbaren Rechtsordnung zu informieren und diese zu beachten.</p>

                    <p>Die auf dieser Website beschriebenen Dienstleistungen werden von der NIVOMA GmbH erbracht und können je nach Standort und Gesetzgebung variieren. Bitte beachten Sie, dass diese Dienstleistungen möglicherweise nicht in allen Ländern verfügbar sind.</p>

                    <p>Die vorliegenden Informationen stellen keine Anlage- noch sonstige Beratung dar und sind kein Angebot oder keine Werbung zum Erwerb bestimmter Produkte oder Dienstleistungen, sofern dies gesetzlich nicht zulässig ist. Wir empfehlen Ihnen, sich bei Interesse an unseren Dienstleistungen direkt an uns zu wenden, um weitere Informationen zu erhalten.</p>

                    <p>Die auf dieser Website enthaltenen Informationen richten sich ausschließlich an Personen in Gerichtsbarkeiten, in denen die Veröffentlichung oder der Zugang zu dieser Website gesetzlich zulässig und nicht verboten ist. Personen, die von solchen Verboten betroffen sind, wird es ausdrücklich untersagt, diese Website zu nutzen.</p>

                    <p>Bitte beachten Sie, dass die Nutzung dieser Website den rechtlichen Hinweisen und Nutzungsbedingungen unterliegt. Durch die weitere Nutzung dieser Website stimmen Sie diesen Bedingungen zu.</p>
                </Container>

            </section>
        </main>
    )
}

export default AGB