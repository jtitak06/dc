import React from 'react';
import GridItem from './GridItem';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselDisplay.css';

export default function CarouselDisplay() {
    const {data: searchResults} = useSelector(state => state.searchResults);

    const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1150 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1149, min: 860 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 859, min: 0 },
        items: 2,
    }
    };
    
    return (
      <>
        <Carousel className="wrapper" responsive={responsive} infinite={true}>
          {searchResults.map((item, index) => {
            return (
              <GridItem className="carousel-list-item" key={index} item={item} />
            )
          })}
        </Carousel>
      </>
    );
}