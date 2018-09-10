import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIntro = styled.div`
  margin-top: 30px;
`;

const Intro = props => (
  <StyledIntro>
    {props.message}
  </StyledIntro>
);

Intro.propTypes = {
  message: PropTypes.string
};

export default Intro;