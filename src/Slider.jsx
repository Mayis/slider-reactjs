import React from "react";
import "./css/slider.css";
const sliders = [
  {
    id: 0,
    img: "https://wallpaperset.com/w/full/4/3/e/402954.jpg",
    name: "Paris",
  },
  {
    id: 1,
    img: "https://free4kwallpapers.com/uploads/originals/2020/09/02/live-wallpaper-london-city.jpg",
    name: "London",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/photos/yerevan-capital-of-armenia-in-front-of-mt-ararat-picture-id1144776438?b=1&k=20&m=1144776438&s=170667a&w=0&h=27PSjM3Nobev4Lz26rF-z0Rgzwndhueux-FKpUqVRQc=",
    name: "Erevan",
  },
  {
    id: 3,
    img: "https://images2.alphacoders.com/693/693223.jpg",
    name: "Moscow City",
  },
];

class Slider extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      id: 0,
      img: "https://wallpaperset.com/w/full/4/3/e/402954.jpg",
      name: "Paris",
    };
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }
  nextClick() {
    this.setState(
      this.state.id === sliders.length - 1
        ? sliders[0]
        : sliders[this.state.id + 1]
    );
  }
  prevClick() {
    this.setState(
      this.state.id === 0
        ? sliders[sliders.length - 1]
        : sliders[this.state.id - 1]
    );
  }
  render() {
    console.log(this.state.id);
    return (
      <div id="mainDiv">
        <button className="btn" onClick={this.prevClick}>
          P
        </button>
        <Swiper src={this.state.img} name={this.state.name} />
        <button className="btn" onClick={this.nextClick}>
          N
        </button>
      </div>
    );
  }
}
export default Slider;
class Swiper extends React.Component {
  render() {
    return (
      <div id="swipper">
        <div className="imgDiv">
          <img src={this.props.src} alt={`img_${this.props.name}`} />
        </div>
        <div className="textDiv">
          <h1 className="nameH1">{this.props.name}</h1>
        </div>
      </div>
    );
  }
}
