import React from 'react';
import Header from 'components/layout/header';
import BannerFood from 'assets/images/topPages/d01.jpg';
import Food1 from 'assets/images/topPages/m01.jpg';
import Food2 from 'assets/images/topPages/l03.jpg';
import Food4 from 'assets/images/topPages/l01.jpg';
import Food7 from 'assets/images/topPages/d02.jpg';
import Food8 from 'assets/images/topPages/s01.jpg';
import MenuMorning from 'assets/images/topPages/top_page1.png';
import MenuLunch from 'assets/images/topPages/top_page2.png';
import MenuDinner from 'assets/images/topPages/top_page3.png';
import MenuSnack from 'assets/images/topPages/top_page4.png';
import './styles.scss';
import Footer from 'components/layout/footer';
import { ChartDemo } from 'pages/ChartDemo';
function TopPage() {
  return (
    <>
      <div className="top-page">
        <div className="banner">
          <div className="banner_left">
            <img src={BannerFood} alt="" />
          </div>
          <div className="banner_chart">
            <ChartDemo/>
          </div>
        </div>
        <div className="menu">
          <div className="menu_item">
            <img src={MenuMorning} alt="" />
          </div>
          <div className="menu_item">
            <img src={MenuLunch} alt="" />
          </div>
          <div className="menu_item">
            <img src={MenuDinner} alt="" />
          </div>
          <div className="menu_item">
            <img src={MenuSnack} alt="" />
          </div>
        </div>
        <div className="foods">
          <div className="foods_item">
            <img src={Food1} alt="" />
            <div className="timer">05.21.Morning</div>
          </div>
          <div className="foods_item">
            <img src={Food2} alt="" />
            <div className="timer">05.21.Lunch</div>
          </div>
          <div className="foods_item">
            <img src={BannerFood} alt="" />
            <div className="timer">05.21.Dinner</div>
          </div>
          <div className="foods_item">
            <img src={Food4} alt="" />
            <div className="timer">05.21.Snack</div>
          </div>
          <div className="foods_item">
            <img src={Food1} alt="" />
            <div className="timer">05.20.Morning</div>
          </div>
          <div className="foods_item">
            <img src={BannerFood} alt="" />
            <div className="timer">05.20.Lunch</div>
          </div>
          <div className="foods_item">
            <img src={Food7} alt="" />
            <div className="timer">05.20.Dinner</div>
          </div>
          <div className="foods_item">
            <img src={Food8} alt="" />
            <div className="timer">05.20.Snack</div>
          </div>
        </div>
        <div className="btn">
          <button className="btn_view-more">記録をもっと見る</button>
        </div>
      </div>
    </>
  );
}

export default TopPage;
