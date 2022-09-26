import React, { Component, Fragment } from "react";
import Images from "./images";
import Footer from "./footer";
import $ from "jquery";
export default class Catagory extends Component {
  state = {
    urls: {
      ALL: {
        background:
          "url('./static/frontend/images/ims/IMG_20200602_030627_329.jpg') 50% -200px / cover no-repeat fixed",
      },
      AM: {
        background:
          "url('./static/frontend/images/ims/IMG_20200602_030520_683.jpg') 50% -200px / cover no-repeat fixed",
      },
      LN: {
        background:
          "url('./static/frontend/images/ims/IMG_20200602_105946_927.jpg') 50% -200px / cover no-repeat fixed",
      },
      PO: {
        background:
          "url('./static/frontend/images/ims/IMG_20200602_030129_143.jpg') 50% -200px / cover no-repeat fixed",
      },
      FB: {
        background:
          "url('./static/frontend/images/ims/IMG_20200602_030314_427.jpg') 50% -200px / cover no-repeat fixed",
      },
      AR: {
        background:
          "url('./static/frontend/images/ims/IMG_20200602_105950_690.jpg') 50% -200px / cover no-repeat fixed",
      },
      OT: {
        background:
          "url('./static/frontend/images/ims/IMG_20200602_110909_901.jpg') 50% -200px / cover no-repeat fixed",
      },
    },
    optionCa: {
      LN: "Landscape & Nature",
      AM: "Arial & Macro",
      PO: "Portrait",
      AR: "Arhitectural",
      FB: "Fashion & Beauty",
      OT: "Others",
    },
  };

  componentDidMount() {
    this.props.headTitle(1);
  }

  changebg = () => {
    const styles = {
      background: "none",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPositionY: "-300px",
      backgroundPositionX: "center",
      backgroundRepeat: "no-repeat",
    };
    return styles;
  };
  render() {
    return (
      <Fragment>
        <div>
          <section id="page-header">
            <div
              className="row cat-row"
              style={
                this.state.urls[this.props.match.params.type.toUpperCase()]
              }
            >
              <h1>
                {this.props.match.params.type.toUpperCase() != "ALL"
                  ? this.state.optionCa[
                      this.props.match.params.type.toUpperCase()
                    ]
                  : this.props.match.params.type.toUpperCase()}
              </h1>
            </div>
          </section>
          <section id="bricks" className="with-top-sep">
            <div className="row masonry">
              <div className="bricks-wrapper">
                <div className="grid-sizer"></div>
                <Images
                  view={this.props.match.params.type.toUpperCase()}
                  dispacc={this.props.dispacc}
                />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
