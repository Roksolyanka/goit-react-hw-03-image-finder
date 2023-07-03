import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderContainer.styled';

export const Loader = () => {
  return (
    <LoaderContainer className="loader">
      <ThreeCircles
        height="80"
        width="80"
        color="#215f00"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderContainer>
  );
};
