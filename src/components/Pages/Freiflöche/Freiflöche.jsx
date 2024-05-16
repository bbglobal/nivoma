import { Container, Row, Col } from "react-bootstrap"
import poster from '../Uberuns/img/poster.webp'
import uberVedio from '../Home/img/hero.mp4'
import { Bullets, Connector, Hero, SliderProgressBar, SliderTwo, TeamSlider, Testimonial } from '../../../components'
import './style.css'

const Freiflöche = () => {
    return (
        <main className="freiflöche">
            <Hero
                bgColor="bg-sec"

                title="Profitieren Sie von Ihrer ungenutzten Dachfläche"

                content="Die Verpachtung bietet Eigentümern die Möglichkeit, ihre ungenutzten Dachflächen für die Installation von Solaranlagen zu vermieten. Durch diese Form der Nutzung können sie zur Förderung erneuerbarer Energien beitragen und gleichzeitig passive Einkommensströme generieren."

                vedio={<video src={uberVedio} poster={poster}></video>}
            />

            <Bullets />

            <section className='py-5'>
                <Container>
                    <SliderTwo />
                </Container>
            </section>

            <section className='py-5'>
                <SliderProgressBar />
            </section>

            <section className='py-5'>
                <TeamSlider />
            </section>

            <Testimonial />

            <Connector />

        </main>
    )
}

export default Freiflöche