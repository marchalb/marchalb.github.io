<template>
 <div class="col-xl-4 col-lg-4">
      <div class="blog__sidebar">
            <div class="sidebar__widget mb-50">
                  <div class="sidebar__widget-content">
                              <div class="search">
                                 <form action="#">
                                    <input type="text" placeholder="Search...">
                                    <button type="submit"><i class="far fa-search"></i></button>
                                 </form>
                           </div>
                     </div>
                  </div>
                     <div class="sidebar__widget sidebar__widget-padding mb-75 grey-bg">
                        <div class="sidebar__widget-title mb-25">
                              <h4>Recent News</h4>
                        </div>
                        <div class="sidebar__widget-content">
                           <div class="rc-post">
                              <ul>
                                 <li class="d-flex align-items-center mb-20">
                                       <div class="rc-thumb mr-15">
                                          <router-link to="/blog-details">
                                             <img src="../../assets/img/blog/rc/rc-1.jpg" alt="rc-post">
                                          </router-link>
                                       </div>
                                       <div class="rc-text">
                                          <h6>
                                             <router-link to="/blog-details">
                                                   Best website traffice Booster with great tools.
                                             </router-link>
                                          </h6>
                                          <span class="rc-meta"><i class="fal fa-clock"></i> 23 JUN</span>
                                       </div>
                                 </li>
                                 <li class="d-flex align-items-center mb-20">
                                       <div class="rc-thumb mr-15">
                                          <router-link to="/blog-details">
                                             <img src="../../assets/img/blog/rc/rc-2.jpg" alt="rc-post">
                                          </router-link>
                                       </div>
                                       <div class="rc-text">
                                          <h6>
                                                <router-link to="/blog-details">
                                                   Google take latest step & Catch the black SEO
                                             </router-link>
                                          </h6>
                                          <span class="rc-meta"><i class="fal fa-clock"></i> 22 JUN</span>
                                       </div>
                                 </li>
                                 <li class="d-flex align-items-center">
                                       <div class="rc-thumb mr-15">
                                             <router-link to="/blog-details">
                                             <img src="../../assets/img/blog/rc/rc-3.jpg" alt="rc-post">
                                          </router-link>
                                       </div>
                                       <div class="rc-text">
                                          <h6>
                                             <router-link to="/blog-details">
                                                How to become a best sale marketer in a year!
                                             </router-link>
                                             </h6>
                                          <span class="rc-meta"><i class="fal fa-clock"></i> 20 JUN</span>
                                       </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="sidebar__widget sidebar__widget-padding mb-75 grey-bg">
                        <div class="sidebar__widget-title mb-25">
                              <h4>Categories</h4>
                        </div>
                        <div class="sidebar__widget-content">
                              <div class="cat-link">
                                 <ul>
                                    <li>
                                       <router-link to="/blog-details">Web Design (6)</router-link>
                                    </li>
                                    <li>
                                       <router-link to="/blog-details"> Web Development (14)</router-link>
                                    </li>
                                    <li>
                                       <router-link to="/blog-details">Graphics (12)</router-link>
                                    </li>
                                    <li>
                                       <router-link to="/blog-details">IOS/Android Design (10)</router-link>
                                    </li>
                                    <li>
                                       <router-link to="/blog-details">App & Saas (4)</router-link>
                                    </li>
                                    <li>
                                       <router-link to="/blog-details">Fresh Products (9)</router-link>
                                    </li>
                                    <li>
                                       <router-link to="/blog-details">Saas Design (8)</router-link>
                                    </li>
                                 </ul>
                              </div>
                        </div>
                     </div>
                     <div class="sidebar__widget sidebar__widget-padding mb-60 grey-bg">
                        <div class="sidebar__widget-title mb-25">
                              <h4>Recent Comments</h4>
                        </div>
                        <div class="sidebar__widget-content">
                              <div class="rc__comments">
                                 <ul>
                                    <li class="d-flex mb-25">
                                          <div class="rc__comments-icon mr-30">
                                             <i class="fas fa-comment"></i>
                                          </div>
                                          <div class="rc__comments-content">
                                             <h6>Justin Case</h6>
                                             <p>My lady mush hanky panky young delinquent.!</p>
                                          </div>
                                    </li>
                                    <li class="d-flex mb-25">
                                          <div class="rc__comments-icon mr-30">
                                             <i class="fas fa-comment"></i>
                                          </div>
                                          <div class="rc__comments-content">
                                             <h6>Eric Widget</h6>
                                             <p>My lady mush hanky panky young delinquent.!</p>
                                          </div>
                                    </li>
                                    <li class="d-flex">
                                          <div class="rc__comments-icon mr-30">
                                             <i class="fas fa-comment"></i>
                                          </div>
                                          <div class="rc__comments-content">
                                             <h6>Penny Tool</h6>
                                             <p>My lady mush hanky panky young delinquent.!</p>
                                          </div>
                                    </li>
                                 </ul>
                              </div>
                        </div>
                     </div>
                     <div class="sidebar__widget sidebar__widget-padding mb-50 grey-bg">
                        <div class="sidebar__widget-title mb-15">
                              <h4>Popular Tags</h4>
                        </div>
                        <div class="sidebar__widget-content">
                              <div class="tags">
                                 <router-link to="/blog-details">The Saas,</router-link>
                                 <router-link to="/blog-details">Pix Saas Blog,</router-link>
                                 <router-link to="/blog-details">Landing,</router-link>
                                 <router-link to="/blog-details">UI/UX Design,</router-link>
                                 <router-link to="/blog-details">Branding,</router-link>
                                 <router-link to="/blog-details">Animation,</router-link>
                                 <router-link to="/blog-details">Design,</router-link>
                                 <router-link to="/blog-details">Ideas</router-link>
                              </div>
                        </div>
                  </div>
             </div>
         </div>
</template>

<script>
export default {
  name: "BlogRightSide",
};
</script>