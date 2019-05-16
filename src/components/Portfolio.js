import React, { Component } from 'react';
export default class Porfolio extends Component {




  render() {

    return (
      <section id="portfolio">
        <h1>A few of my websites.</h1>
        <div className="row portfolio">

          {/* Portfolio One */}
          <div className="four columns header-col">
            <div class="card" id="Cards">
              <a href="https://stevegarrison.github.io/Project1/" target="_blank">
                <img id="portfolio-images" src="images/eventsearch.png" class="card-img-top" alt="..."></img>
              </a>
              <div class="card-body">
                <h5 class="card-title">EventSearch</h5>
                <hr></hr>
                <p class="card-text">Search for events of all kinds using Google Maps and Ticket Master APIs! Try out the authentication use Googles FireBase to log in and save events.</p>
              </div>
            </div>
          </div>

          {/* Portfolio Two */}
          <div className="four columns header-col">
            <div class="card" id="Cards">
              <a href="https://sgkppong.herokuapp.com/" target="_blank">
                <img id="portfolio-images" src="images/pong.png" class="card-img-top" alt="..."></img>
              </a>
              <div class="card-body">
                <h5 class="card-title">PONG!</h5>
                <hr></hr>
                <p class="card-text">Pong the video game developed entirely with react! Settings are persistent utilizing MongoDB.</p>
              </div>
            </div>
          </div>

          {/* Portfolio Three */}
          <div className="four columns header-col">
            <div class="card" id="Cards">
              <a href="https://dry-wave-69554.herokuapp.com/index.handlebars" target="_blank">
                <img id="portfolio-images" src="images/estore.png" class="card-img-top" alt="..."></img>
              </a>
              <div class="card-body">
                <h5 class="card-title">eStore</h5>
                <hr></hr>
                <p class="card-text">An eCommerce platform in which users can post, update, save and delete items. (STILL IN DEVELOPMENT)</p>
              </div>
            </div>
          </div>





        </div>
      </section>
    );
  }
}