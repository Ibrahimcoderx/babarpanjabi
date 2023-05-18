import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


// Css
import style from './menubar.module.css';

const MenubarLeft = (props) => {


  return (


    <>

        <section className={style.Menubar}>

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className={style.MenubarContent}>

                            <div className={style.LogoLeft}>
                                <Image src={props.logoImageLeft} />
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
      
    </>

  )
}

export default MenubarLeft
