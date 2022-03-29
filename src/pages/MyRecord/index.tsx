import React from 'react';
import Header from 'components/layout/header';
import './styles.scss';
import Footer from 'components/layout/footer';
import MyRecommend1 from 'assets/images/myRecord/MyRecommend-1.jpg';
import MyRecommend2 from 'assets/images/myRecord/MyRecommend-2.jpg';
import MyRecommend3 from 'assets/images/myRecord/MyRecommend-3.jpg';
import { ChartDemo } from 'pages/ChartDemo';
const data = Array.from({ length: 12 }, () => 0);
function MyRecord() {
  return (
    <>
      <div className="my-record">
        <div className="exercise">
          <div className="exercise_item" style={{ backgroundImage: `url(${MyRecommend1})` }}>
            <div className="content">
              <h3>BODY RECORD</h3>
              <h4>自分のカラダの記録</h4>
            </div>
          </div>
          <div className="exercise_item" style={{ backgroundImage: `url(${MyRecommend2})` }}>
            <div className="content">
              <h3>MY EXERCISE</h3>
              <h4>自分のカラダの記録</h4>
            </div>
          </div>
          <div className="exercise_item" style={{ backgroundImage: `url(${MyRecommend3})` }}>
            <div className="content">
              <h3>MY DIARY</h3>
              <h4>自分のカラダの記録</h4>
            </div>
          </div>
        </div>
        <div className="chart">
          <ChartDemo />
        </div>
        <div className="exercise-info">
          <div className="exercise-info_title">
            <h3>MY EXERCISE</h3>
            <h2>2021.05.21</h2>
          </div>
          {data.map((item, index) => {
            return (
              <div className="exercise-info_list" key={index}>
                <div className="index">
                  <div className="index_kcal">
                    <h6>
                      <span>.</span>家事全般（立位・軽い）
                    </h6>
                    <p>26kcal</p>
                  </div>
                  <div className="index_time">
                    <p>10 min</p>
                  </div>
                </div>
                <div className="index">
                  <div className="index_kcal">
                    <h6>
                      <span>.</span>家事全般（立位・軽い）
                    </h6>
                    <p>26kcal</p>
                  </div>
                  <div className="index_time">
                    <p>10 min</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-diary">
          <div className="my-diary_title">MY DIARY</div>
          <div className="my-diary_list">
            {data.map((item, index) => {
              return (
                <div className="info">
                  <h3>2021.05.21</h3>
                  <h4>23:25</h4>
                  <p>
                    私の日記の記録が一部表示されます。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="btn">
          <button className="btn_view-more">記録をもっと見る</button>
        </div>
      </div>
    </>
  );
}

export default MyRecord;
