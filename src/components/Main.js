import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  margin-top: 70px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 8px 15px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
  }

  button {
    margin-left: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;

    border: none;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
  }
`;

const MainWrapper = styled.main`
  width: 100%;
  height: 50vh;
  padding: 40px;
  background-color: #4536;

  margin: 0;
  padding: 0;
  left: 0;
  top: 0;

  div {
    margin-bottom: 40px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Main = () => {
  return (
    <BodyWrapper>
      <Header>
        <Menu>
          <MenuItem>인기뉴스</MenuItem>
          <MenuItem>장르별</MenuItem>
          <MenuItem>최신작</MenuItem>
          <MenuItem>랭킹</MenuItem>
          <MenuItem>더보기+</MenuItem>
        </Menu>
        <Search>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </Search>
      </Header>
      <MainWrapper>
        <div></div>
      </MainWrapper>
    </BodyWrapper>
  );
};

export default Main;
