import './slider.css'

import arrowUp from '../assets/icons/Arrow_Up.svg'
import arrowDown from '../assets/icons/Arrow_Down.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const SliderTwo = () => {
    return (
        <>
            <Swiper
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    380: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1600: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="sec-four-box-wrapper">
                        <div className="box-wrapper">
                            <h2 className='box-font'>
                                <img src={arrowUp} alt='icon' />
                                89 MW
                            </h2>
                            <p>An Projekten in der Umsetzung</p>
                        </div>
                        <p className='slider-txt'>
                            Mit über 322 installierten Solaranlagen <br />
                            haben wir bereits einen bedeutenden <br />
                            Beitrag zur Förderung von sauberer <br />
                            Energie und zum Umweltschutz <br />
                            geleistet. <br />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sec-four-box-wrapper odd">
                        <div className="box-wrapper">
                            <h2 className='box-font'>
                                <img src={arrowUp} alt='icon' />
                                89 MW
                            </h2>
                            <p>An Projekten in der Umsetzung</p>
                        </div>

                        <p className='slider-txt'>
                            Mit über 322 installierten Solaranlagen <br />
                            haben wir bereits einen bedeutenden <br />
                            Beitrag zur Förderung von sauberer <br />
                            Energie und zum Umweltschutz <br />
                            geleistet. <br />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sec-four-box-wrapper">
                        <div className="box-wrapper">
                            <h2 className='box-font'>
                                <img src={arrowDown} alt='icon' />
                                38
                            </h2>
                            <p>Berater vor Ort</p>
                        </div>

                        <p className='slider-txt'>
                            Mit über 322 installierten Solaranlagen <br />
                            haben wir bereits einen bedeutenden <br />
                            Beitrag zur Förderung von sauberer <br />
                            Energie und zum Umweltschutz <br />
                            geleistet. <br />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sec-four-box-wrapper odd">
                        <div className="box-wrapper">
                            <h2 className='box-font'>
                                <img src={arrowUp} alt='icon' />
                                89 MW
                            </h2>
                            <p>An Projekten in der Umsetzung</p>
                        </div>

                        <p className='slider-txt'>
                            Mit über 322 installierten Solaranlagen <br />
                            haben wir bereits einen bedeutenden <br />
                            Beitrag zur Förderung von sauberer <br />
                            Energie und zum Umweltschutz <br />
                            geleistet. <br />
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SliderTwo