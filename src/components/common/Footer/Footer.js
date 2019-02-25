import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  position: fixed;
  padding: 0.5em;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #aeaeae;
  text-align: center;
`;

FooterBar.displayName = 'FooterBar';

const Footer = () => (
  <FooterBar>
      ©2019 Carolyn Ulfe
  </FooterBar>
)


export default Footer;
