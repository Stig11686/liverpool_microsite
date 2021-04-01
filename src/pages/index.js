import React from 'react';

import Layout from '../components/Layout';

import cassietech from '../assets/images/cassie-tech.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';
import lccLogo from '../assets/images/lcrca-logo.jpeg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Successful End to Liverpool Digital Skills Bootcamp 2021
            <br />
          </h1>
          <p>
          The main purpose of this programme is to make jobs in tech more accessible for
          people in the BAME community, female candidates, and those who have recently been
          made redundant or unemployed due to lockdown. But we’re also looking to help people
          currently in entry-level tech roles progress up the ladder more quickly and easily,
          as well as introducing people from non-technical backgrounds to the wonderful world
          of coding.
          </p>
          <img src={lccLogo} alt="" />
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={cassietech} alt="" />
            </span>
            <Link to="/Cassie">
              <h2>Cassie</h2>
              <div className="content">
                <p>
                  "Quote from Cassie?"
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Lorem</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Feugiat</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Tempus</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Aliquam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Veroeros</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={cassietech} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Ipsum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Dolor</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style1">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Nullam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Ultricies</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Dictum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Pretium</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
