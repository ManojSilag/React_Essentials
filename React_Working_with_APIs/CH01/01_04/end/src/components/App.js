import React from "react";
import News from "./News";
import SideNews from "./SideNews";

const App = () => {
  const news = "top-headlines?country=in&category=business";
  const news1 = "top-headlines?country=us&category=business";
  const news3 = "top-headlines?country=in&category=entertainment";

  return (
    <div className='container-fluid'>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper indigo lighten-4'>
            <a href='/' className='bran-logo center'>
              My Feed
            </a>
          </div>
        </nav>
      </div>
      <div className='row'>
        <div className='col s8'>
          <News newsFeed={news} />
          <News newsFeed={news1} />
        </div>
        <div className='col s4'>
          <SideNews newsFeed={news3} />
        </div>
      </div>
    </div>
  );
};

export default App;
