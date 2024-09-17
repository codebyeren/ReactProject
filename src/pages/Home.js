import React from 'react';
import './Home.css'; 
import heroImage from '../assets/images/hero-bg.jpg'; 

const Home = () => {
  const exploreDestinations = () => {
    alert("Khám phá những điểm đến hấp dẫn trên toàn thế giới!");
  };

  return (
    <div>
      <header>
        <nav>
          <h1>Travel Smart</h1>
          <ul>
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#destinations">Điểm Đến</a></li>
            <li><a href="#services">Dịch Vụ</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h2>Khám phá thế giới cùng Travel Smart</h2>
        <p>Chúng tôi giúp bạn lên kế hoạch chuyến đi thông minh và tiết kiệm</p>
        <button onClick={exploreDestinations}>Khám Phá Ngay</button>
      </section>

      <section id="destinations">
        <h3>Điểm Đến Hàng Đầu</h3>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="/assets/vietnam.jpg" alt="Việt Nam" />
            <h4>Việt Nam</h4>
          </div>
          <div className="destination-card">
            <img src="/assets/japan.jpg" alt="Nhật Bản" />
            <h4>Nhật Bản</h4>
          </div>
          <div className="destination-card">
            <img src="/assets/france.jpg" alt="Pháp" />
            <h4>Pháp</h4>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 Travel Smart. Tất cả các quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default Home;
