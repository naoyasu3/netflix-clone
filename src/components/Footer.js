import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

class Footer extends Component {
  state = {
    langContent: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };
  render(props) {
    return (
      <FooterContainer>
        <SiteFooterWrapper>
          <SiteFooter>
            <FooterTop>
              ご質問ですか? お問い合せはこちらまで: <Link>0120-996-012</Link>
            </FooterTop>
            <FooterLinks>
              <FooterLinkItem>
                <Link>よくあるご質問</Link>
              </FooterLinkItem>
            </FooterLinks>

            <div
              className="lang-selection-container"
              onClick={this.handleToggle}
            >
              <Icon icon={iosWorld} size={20} />
              日本語
              <Icon icon={arrowSortedDown} />
            </div>
            {/*toggle language content*/}
            {this.state.langContent && (
              <div className="lang-toggle">
                <ul>
                  <li>日本語</li>
                </ul>
                <ul>
                  <li>English</li>
                </ul>
              </div>
            )}
            <p>Netflix 日本</p>
          </SiteFooter>
        </SiteFooterWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding: 70px 40px;
  position: relative;
  margin-bottom: 0;

  li {
    list-style: none;
  }

  a {
    color: #757575;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .lang-selection-container {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
  }

  .lang-toggle {
    position: absolute;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 128px;
    height: 57.78px;
    border: 1px solid #333;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .lang-toggle li {
    cursor: pointer;
  }

  .lang-toggle ul:hover {
    background-color: #0041a2;
  }
`;

const SiteFooterWrapper = styled.div`
  margin-top: 0;
  min-width: 190px;
  width: 100%;
  padding-bottom: 20px;
  font-size: 1em;
  color: #757575;
  position: relative;
`;

const SiteFooter = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const FooterTop = styled.span`
  padding: 0;
  margin: 0 0 30px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

const FooterLinks = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 1000px;
  font-size: 13px;
  box-sixing: border-box;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

const FooterLinkItem = styled.li`
  margin-left: 0;
  box-sizing: border-box;
  padding: 0;
  margin-bottom: 16px;
  display: inline-block;
  min-width: 100px;
  width: 25%;
  padding-right: 12px;
  vertical-align: top;

  a {
    color: #757575;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;
