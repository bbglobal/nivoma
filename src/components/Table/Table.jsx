import './style.css'
import { Container, Row, Col } from 'react-bootstrap'

const Table = () => {
    return (

        <section className="ref-sec-three-wrapper pb-5">
            <Container>
                <div className="ref-sec-three-txt-wrapper">
                    <h2 className='text-center py-5'>Unsere Solarinvestments - <br /> Jetzt Top Rendite sichern</h2>
                </div>

                <table className='ref-table'>
                    <thead className='ref-thead'>
                        <tr>
                            <th>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Name
                            </th>
                            <th>Leistung in kWp</th>
                            <th>Projektaufnahme</th>
                            <th>Ortschaft</th>
                            <th>Unverbindliche Anfrage</th>
                        </tr>
                    </thead>
                    <tbody className='ref-body'>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />&nbsp;
                                Solarpark Passau Brentzau</td>
                            <td>99.09 kWp</td>
                            <td>24 April 2024</td>
                            <td>Passau, Bayern</td>
                            <td className='last'>Anfrage senden</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </section>
    )
}

export default Table