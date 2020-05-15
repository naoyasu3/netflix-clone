import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={logo} alt="logo" />
          <NavLink to="#" className="signIn-btn">
            ログイン
          </NavLink>
        </div>
        <div className="header-content">
          <Title>
            映画やTV番組、 <br />
            アニメが見放題
          </Title>
          <SubTitle>
            映画やドラマをもっと自由に。
            <br />
            いつでもキャンセルOK。
          </SubTitle>
          <Link className="main-offer-btn" to="#">
            メンバー登録する
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
          </Link>
          <EmailFormTitle>
            まもなくご視聴いただけます!メールアドレスを入力してアカウントを作成またはログインしてください。
          </EmailFormTitle>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

//Logo
const Logo = styled.img`
  fill: var(--main-red);
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 7%;
  transform: translate(-50%, -50%);
`;

// Header Container
const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  // Header Content
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
  }

  // Main Offer Btn
  .main-offer-btn {
    min-height: 60px;
    display: inline-block;
    width: auto;
    background: var(--main-red);
    text-transform: uppercase;
    border: none;
    outline: none;
    margin: 0 33% 10px 33%;
    padding: 5.6px 52px 5.6px 25.8px;
    border-radius: 0.1875rem;
    font-size: 1.625rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  .Icon svg {
    vertical-align: bottom;
    margin-left: 1.5rem;
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 1.1em;
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: normal;
  max-width: 640px;
  font-size: 1.625rem;
  margin: 1rem auto;
`;

const EmailFormTitle = styled.h3`
  margin: 0 auto;
  font-size: 1.2rem;
`;
