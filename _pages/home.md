---
permalink: /
hidden: true
layout: splash
classes: wide
author_profile: false
# header:
# overlay_color: "#000"
# overlay_filter: "0.5"
# overlay_image: /assets/images/banner-rupesh.png
# actions:
# - label: "Download"
# url: "https://github.com/mmistakes/minimal-mistakes/"

header:
  overlay_filter: '0.5'
  image: https://imgur.com/zipiW93.png
  actions:
    - label: 'Fullstack Master'
      url: 'https://fullstackmaster.net/'
---

   <meta name="viewport" content="width=device-width, initial-scale = 0.86, maximum-scale=3.0, minimum-scale=0.86">
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/css/style.css" rel="stylesheet">

<!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
          <h1>Rupesh Tiwari</h1>
          <h2>I help students and professionals to become Full Stack Software Developer in less than a year.</h2>
        </div>
      </div>
      <div class="text-center">
        <a href="/about" class="btn-get-started scrollto">Read More</a>
      </div>
       <div class="section-title">
          <h2>Recent Technical blogs for developers</h2>
          <p>Visit recent JavaScript, Angular, Azure and Coding blogs</p>
        </div>
      <div class="grid__wrapper">
        {% for post in site.posts limit:4 %}
          {% include blog-grid.html type="grid" %}
        {% endfor %}
      </div>  
      <div class="row icon-boxes container">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="ri-stack-line"></i></div>
            <h4 class="title"><a>Full Stack Master</a></h4>
            <p class="description">Learn from a true expert as Rupesh being a Pluralsight author and he only teaches
              industry best practices from his 15 years of experiences.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="ri-palette-line"></i></div>
            <h4 class="title"><a>Professional Training</a></h4>
            <p class="description">My goal is to make you understand why behind the code. So that you build good
              theoretical knowledge while working on practical projects.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><i class="ri-command-line"></i></div>
            <h4 class="title"><a>Deep Learning</a></h4>
            <p class="description">Learn JavaScript, Angular from the beginning. Both front-end & back-end coding with
              JavaScript. Hence you will become a true full stack master.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="ri-fingerprint-line"></i></div>
            <h4 class="title"><a>Prepare For Interview</a></h4>
            <p class="description">You want to crack interview and get your dream job. Hence our courses are designed
              with real world projects. Hence you get ready for your next technical interviews.</p>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End Hero -->
  <main id="main">
    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts section-bg">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-toggle="counter-up">500</span>
              <p>Happy Online Students</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-toggle="counter-up">150</span>
              <p>Projects</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-toggle="counter-up">17</span>
              <p>Years of experience</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-toggle="counter-up">100</span>
              <p>Happy Offline Students</p>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Counts Section -->
    
    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients section-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">
          </div>

        </div>

      </div>
    </section><!-- End Clients Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>What other Says about Rupesh</h2>
          <p>Rupesh Provides Paid & Free Courses Both. Paid & Free courses are both are cost worthy. After getting
            learnt from Rupesh, what people says!</p>
        </div>

        <div class="owl-carousel testimonials-carousel">

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Rupesh is hard working, innovative and always up-to date with technology. I have had a pleasure of working
              with Rupesh for more than a year
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-1.jpeg" class="testimonial-img" alt="">
            <h3>Rishabh Ajmera</h3>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Rupesh provided .Net software development expertise on a number of projects on the team that I managed.
              Rupesh possesses a depth and breadth of technical
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-2.jpeg" class="testimonial-img" alt="">
            <h3>Satish Kale</h3>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Rupesh is an excellent addition to any team. He is dependendable, competent and, worked on several
              challenging projects on my team. I would highly recommend
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-3.jpeg" class="testimonial-img" alt="">
            <h3>Anu Prasad</h3>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Rupesh came in to the team at a time of rapid transition and development, he showed his excellent caliber
              by coming up to speed very
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-4.jpeg" class="testimonial-img" alt="">
            <h3>Mural Takalpati</h3>
          </div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

   

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>What are you waiting for?</h3>
          <p> Go Now & Subscribe the Course Now! Having Doubt? Go and Check FAQ Section.</p>
          <a class="cta-btn" href="https://www.udemy.com/user/rupesh-k-tiwari/">Subscribe Now</a>
        </div>
      </div>
    </section><!-- End Cta Section -->

   

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Hi There,
            I am looking forward to hearing from you. Please feel free to get in touch via the form below, I will get
            back to you as soon as possible</p>
        </div>

        <div>
          <iframe style="border:0; width: 100%; height: 270px;"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563314.4640318328!2d-75.84543403208112!3d40.0676364343419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1593868333449!5m2!1sen!2sus"
            frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>USA</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>roopkt@gmail.com</p>
              </div>

            </div>

          </div>

             <div class="col-lg-4">

  <img src="https://imgur.com/tcH3UJu.png" width="450" height="250" />
             </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Rupesh Tiwari</h3>
            <strong>
              USA, India </strong>
              <p>
                Become a software developer. <a href="https://fullstackmaster.net/">Fullstack Master</a> is an innovative software development training school
              </p> <br>
              <strong>Email</strong> <br> rupesh.tiwari.info@gmail.com<br>

          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="https://rupeshtiwari.com/posts">Blogs</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://fullstackmaster.net/">Fullstack Master</a></li>
            
               
              <li><i class="bx bx-chevron-right"></i> <a href="./terms.html">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="./privacy.html">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a>Online Angular Training</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Group Angular Training</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Mentoring</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>24/7 Help</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Course Certification</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Get latest Course information in your email.</p>
            <form
              action="https://rupeshtiwari.us19.list-manage.com/subscribe/post?u=05bd81a6160dc05d867637e69&amp;id=7b700ea727"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
              target="_blank" novalidate>
              <input type="email" name="email" style="border:0px none"><input type="submit" value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="mr-md-auto text-center text-md-left">
        <div class="copyright">
          &copy; Copyright <strong><span>Rupesh Tiwari</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          Designed by <a href="https://induni.tech">Induni Technologies &#153;</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://twitter.com/rupeshtiwari_co" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/fullstackmaster1" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.youtube.com/fullstackmaster" class="youtube"><i class="bx bxl-youtube"></i></a>
        <a href="https://medium.com/@rupesh-tiwari" class="medium"><i class="bx bxl-medium"></i></a>

        <a href="https://dev.to/rupeshtiwari">
          <i class="bx bxl-dev-to" title="rupeshtiwari's DEV Community Profile"></i>
        </a>

        <a href="https://www.linkedin.com/in/rupesh-tiwari/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>


    </div>

  </footer>
  <!-- End Footer -->

<a href="#" class="back-to-top"><i class="ri-arrow-up-line"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>

  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
