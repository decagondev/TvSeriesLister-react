import React from 'react';
import styled from 'styled-components';
import loaderSrc from '../../assets/loader.gif';

const StyledLoaderImage = styled.image`
  width: 200px;
`;

const Loader = props => (
  <div>
    <StyledLoaderImage src={loaderSrc} alt="Loader Icon"/>
  </div>
);

export default Loader;