import React from 'react';
import { Carousel, } from 'react-bootstrap';
import { Image,  } from 'semantic-ui-react';
import Yellowstone from '../../assets/images/Yellowstone.png';
import YellowstoneGeysers from '../../assets/images/YellowstoneGeysers.png';
import GrandCanyonoftheYellowstone from '../../assets/images/GrandCanyonoftheYellowstone.png';
import { withNamespaces } from 'react-i18next';
import {   Title, Title2, WhiteLine, } from '../../styles/AppStyles';

class MainCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: 'next',
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    const { t } = this.props;
    return (
      <div>
      <Carousel
      slide='true'
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        >
        <Carousel.Item>
          <Image
            width='10000'
            height={500}
            alt="900x500"
          src={GrandCanyonoftheYellowstone} />
            <Carousel.Caption>
            <Title> {t("Welcome to Terra Nova Cabins")}</Title>
            <Title2><WhiteLine/> HOTELS & RESORTS </Title2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            width='10000'
            height={500}
            alt="900x500"
            src={Yellowstone} />
            <Carousel.Caption>
            <Title> {t("Welcome to Terra Nova Cabins")}</Title>
            <Title2><WhiteLine/> HOTELS & RESORTS </Title2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            width='10000'
            height={500}
            alt="900x500"
            src={YellowstoneGeysers} />
            <Carousel.Caption>
            <Title> {t("Welcome to Terra Nova Cabins")}</Title>
            <Title2><WhiteLine/> HOTELS & RESORTS </Title2>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
          </div>
    );
  }
}

export default withNamespaces()(MainCarousel);