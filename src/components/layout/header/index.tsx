import React from 'react';
import './styles.scss';
import Logo from 'assets/images/common/logo.svg';
import RecordIcon from 'assets/images/headers/icon_my_record.svg';
import ChallengeIcon from 'assets/images/headers/icon_challenge.svg';
import InfoIcon from 'assets/images/headers/icon_info.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="menu">
          <Link to="/my_record">
            <div className="menu_item">
              <img src={RecordIcon} alt="" />
              <span>自分の記録</span>
            </div>
          </Link>
          <div className="menu_item">
            <img src={ChallengeIcon} alt="" />
            <span>チャレンジ</span>
          </div>
          <div className="menu_item">
            <img src={InfoIcon} alt="" />
            <span>お知らせ</span>
          </div>
          <div className="menu_item">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
