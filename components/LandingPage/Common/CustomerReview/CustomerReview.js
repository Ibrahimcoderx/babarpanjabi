import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Css
import style from './customer-review.module.css';

const CustomerReview = () => {

    return (

        <div className="CustomerReview">

            <section className={style.CustomerReviewContent}>

                <Container>

                    <Row>

                        <Col lg={12}>
                            
                            <h2>আমাদের কাস্টমার রিভিউ</h2>

                        </Col>

                        <Col lg={6}>

                            <div className={style.CustomerReviewImg}>
                                <img src="/images/customer-review/customer-review1.png" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className={style.CustomerReviewImg}>
                                <img src="/images/customer-review/customer-review2.png" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className={style.CustomerReviewImg}>
                                <img src="/images/customer-review/customer-review3.png" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className={style.CustomerReviewImg}>
                                <img src="/images/customer-review/customer-review1.png" alt="" />
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
        
        </div>
        
    )

}

export default CustomerReview
