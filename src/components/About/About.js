import React from 'react';

const About = () => {
     return (
      <section id="main-container" class="main-container">
      <div class="container ">
        <div class="row ">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6  align-items-center justify-content-center d-flex  ">
            <div class="p-3  ">
              <img
                src="http://themazine.com/unify/farm/images/blog/blog1.jpg"
                alt=""
                className="img-fluid rounded-2 border"
              />
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6  ">
            <h3 class="column-title mt-2" style={{ color: "#CE2B22" }}>
              Who We Are
            </h3>
            <p>
              when Gregor Samsa woke from troubled dreams, he found himself
              transformed in his bed into a horrible vermin.
            </p>
            <blockquote>
              <p>
                Semporibus autem quibusdam et aut officiis debitis aut rerum
                est aut optio cumque nihil necessitatibus autemn ec tincidunt
                nunc posuere ut
              </p>
            </blockquote>
            <p>
              He lay on his armour-like back, and if he lifted. ultrices
              ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. If you are going to
              use a passage of Lorem Ipsum, you need to be sure there isn’t
              anything embarrassing.
            </p>
          </div>
        </div>
      </div>
    </section>
 
           
     );
};

export default About;