import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeSvg from '../components/svgs/HomeSvg';
import ReportSvg from '../components/svgs/ReportSvg';
import { useNavigate } from 'react-router-dom';
import CardsGrid from '../components/Cards';

const Landing = ({ handleLogout }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Container>
                <Row className="py-5 d-flex align-items-center ">
                    <Col xs={12} md={6}>
                        <h1>Streamline Your Soil Testing Activities with Our Monitoring System.</h1>
                        <p>Experience the Power of Data-Driven Soil Testing Management</p>
                        <Button variant="secondary" size="lg" style={{ backgroundColor: '#ff725e', border: 'none' }} onClick={() => navigate('/work')}>
                            Place a Work Order
                        </Button>
                    </Col>
                    <Col>
                        <HomeSvg />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-light rounded p-5">
                <Container>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col md={6} className="p-5">
                            <h3>How It Works?</h3>
                            <p className="p-subtitle">
                                Our digital monitoring system simplifies the soil testing management process, from start to finish. With our easy-to-use dashboard, you can track
                                soil testing activities, monitor project timelines, and analyze results in real-time. Our system also provides insights into equipment usage, soil
                                quality, and contractor performance, allowing you to optimize your workflow and achieve greater efficiency.
                            </p>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </Container>
            <CardsGrid />
        </div>
    );
};

export default Landing;
