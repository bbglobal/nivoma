import { Container, Row, Col } from "react-bootstrap"
import poster from '../Uberuns/img/poster.webp'
import uberVedio from '../Home/img/hero.mp4'
import { Bullets, Connector, Hero, SlideTwo, SliderProgressBar, SliderTwo, TeamSlider, Testimonial } from '../../../components'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Verpachtung = () => {

  const labels = ["Kundenbewertungen", "Wirtschaftlichkeit", "Umweltschutz"];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + labels[index] + '</span>';
    },
  };


  return (
    <>
      <main className="verpachtung">
        <Hero
          bgColor="bg-pr"

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

        <section className='ver-sec-six-wrapper'>
          <Swiper
            pagination={pagination}
            grabCursor={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>

            <SwiperSlide>
              <SlideTwo
                title="Wirtschaftlichkeit der Verpachtung"

                p="Die Freiflächenverpachtung bietet nicht nur ökologische Vorteile, sondern ist auch wirtschaftlich äußerst attraktiv. Landbesitzer können passive Einkommensströme generieren, indem sie ihre ungenutzten Flächen für die Installation von Solaranlagen vermieten."

                pTwo="Diese regelmäßigen Einnahmen können eine stabile und langfristige Einkommensquelle darstellen. Darüber hinaus ermöglichen verschiedene staatliche Anreize und Förderprogramme zusätzliche finanzielle Vorteile für Landbesitzer, die in erneuerbare Energien investieren."

                pThree="Durch die Senkung der Energiekosten und potenzielle Steuervorteile können Landbesitzer auch langfristig von der Freiflächenverpachtung profitieren."

                img="img-sl-two"
              />
            </SwiperSlide>

            <SwiperSlide>
              <SlideTwo
                title="Nachhaltigkeit & Umweltschutz"

                p="Durch die Umstellung auf saubere und erneuerbare Energiequellen können wir einen bedeutenden Beitrag zum Schutz unserer Umwelt leisten. Die Nutzung von Sonnenenergie reduziert nicht nur unsere Abhängigkeit von fossilen Brennstoffen, sondern trägt auch zur Verringerung von Treibhausgasemissionen bei."

                pTwo="Darüber hinaus fördert die Solarenergie die Nachhaltigkeit, indem sie Ressourcen schonender nutzt und die Umweltbelastung im Vergleich zu herkömmlichen Energiequellen reduziert."

                img="img-sl-three"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <Connector />

      </main>
    </>
  )
}

export default Verpachtung