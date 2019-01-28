import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveLayout = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveLayout.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveLayout />
)

export default HomepageLayout;
