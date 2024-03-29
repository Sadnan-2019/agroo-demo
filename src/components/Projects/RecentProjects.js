import React from 'react';

const RecentProjects = () => {
     return (
          <section id="news" class="news">
          <div class="container">
            <div class="row text-center">
                <div class="col-12">
                  <h2 class="section-title" style={{color:"#CE2B22"}}>Work of Excellence</h2>
                  <h3 class="section-sub-title" style={{color:"#CE2B22"}}>Recent Product</h3>
                </div>
            </div>
           
        
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="latest-post">
                      <div class="latest-post-media">
                        <a href="/" class="latest-post-img">
                            <img loading="lazy" class="img-fluid" src="images/news/news1.jpg" alt="img"/>
                        </a>
                      </div>
                      <div class="post-body">
                        <h4 class="post-title">
                            <a href="/" class="d-inline-block">We Just Completes $17.6 million Medical Clinic in Mid-Missouri</a>
                        </h4>
                        <div class="latest-post-meta">
                            <span class="post-item-date">
                              <i class="fa fa-clock-o"></i> July 20, 2017
                            </span>
                        </div>
                      </div>
                  </div>
                </div>
        
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="latest-post">
                      <div class="latest-post-media">
                        <a href="/" class="latest-post-img">
                            <img loading="lazy" class="img-fluid" src="images/news/news2.png" alt="img"/>
                        </a>
                      </div>
                      <div class="post-body">
                        <h4 class="post-title">
                            <a href="/" class="d-inline-block">Thandler Airport Water Reclamation Facility Expansion Project Named</a>
                        </h4>
                        <div class="latest-post-meta">
                            <span class="post-item-date">
                              <i class="fa fa-clock-o"></i> June 17, 2017
                            </span>
                        </div>
                      </div>
                  </div>
                </div>
        
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="latest-post">
                      <div class="latest-post-media">
                        <a href="/" class="latest-post-img">
                            <img loading="lazy" class="img-fluid" src="images/news/news3.jpg" alt="img"/>
                        </a>
                      </div>
                      <div class="post-body">
                        <h4 class="post-title">
                            <a href="/" class="d-inline-block">Silicon Bench and Cornike Begin Construction Solar Facilities</a>
                        </h4>
                        <div class="latest-post-meta">
                            <span class="post-item-date">
                              <i class="fa fa-clock-o"></i> Aug 13, 2017
                            </span>
                        </div>
                      </div>
                  </div> 
                </div> 
            </div>
        
        
            {/* <div class="general-btn text-center mt-4">
                <a class="btn btn-primary" href="news-left-sidebar.html">See All Posts</a>
            </div> */}
        
          </div>
     
        </section>
     );
};

export default RecentProjects;