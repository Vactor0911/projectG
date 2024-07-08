import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;

  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  text-align: ${(props) => props.align || "left"};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <p>(주) Project-G</p>
          <p>Inven</p>
          <p>Address: 서울특별시 강남구 강남대로</p>
        </FooterSection>
        <FooterSection align="center">
          <p>Contact</p>
          <p>Tel: 02-6393-7700</p>
          <p>Email: help@inven.co.kr</p>
        </FooterSection>
        <FooterSection align="right">
          <p>사업자 등록번호 : 14523-94-03562</p>
          <p>통신판매업신고번호 : 제 2020-54-1002호</p>
          <p> 직업정보제공사업 신고번호 : H7305724692620</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
