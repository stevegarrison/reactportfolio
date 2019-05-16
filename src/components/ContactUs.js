import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to reach out if you would like to chat about finance, web-development or anything else!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <h4><i class="fas fa-map-marker-alt fa-2x"></i>   Salt Lake City, UT
                </h4>
                <h4>Email me: steve.gra.garrison@gmail.com
                </h4>
                <h4>Text me: (720) 438-1112
                </h4>
              
              </div>
            </aside>
          </div>
        </section>
        );
  }
}