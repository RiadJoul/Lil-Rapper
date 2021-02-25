<template>
  <div>
    <!-- header -->
    <header>
      <!-- navbar -->
      <nav id="navbar" class="navbar navbar-custom navbar-fixed-top" data-spy="affix" data-offset-top="70">
        <div class="container">
          <div class="row">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
                <i class="fa fa-bars"></i>
              </button>
            <h3 @click="$router.push('/')" class="logo">lil rapper</h3>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div class="right-nav text-right">
                <ul class="nav navbar-nav menu">
                  <li>
                    <a @click="$router.push('/')">Home</a>
                  </li>
                  <li>
                    <a href="#rap">Try it</a>
                  </li>
                </ul>
                <div class="nav-btn">
                  <a @click="$router.push('/github')" class="btn btn-border">Github</a>
                </div>
              </div>
            </div>
            <!-- /.navbar-collapse -->
          </div>
        </div>
      </nav>
      <!-- End navbar -->

      <!-- banner -->
      <div id="home" class="hero style-flat">
        <div class="container">
          <div class="row hero-content">
            <div class="row">
              <div class="col-sm-6">
                <div class="intro-text light">
                  <h1>WHO IS LIL RAPPER?</h1>
                  <div class="spce"></div>
                  <p class="large">Lil rapper is an AI that provides  words that rhyme with your lines, Try it Now!</p>
                  <div class="btn-holder">
                    <button @click="$router.push('/rap')" class="rap">try</button>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 img-pre">
                <div class="slide-side text-center">
                  <img class="phone" alt="" src="image/giphy.gif">
                </div>       
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Banner -->
    </header>
    <!-- End header -->
    <br>
    <br>
      <!-- cta -->
    <section id="try" class="cta sec-pad-lg pt-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center  wow animated fadeInUp" data-wow-duration="1s"
            data-wow-delay=".2s">
            <img alt="tupac" src="image/tupac.png">
            <div class="spce"></div>
            <h6><strong>“Sporadic thoughts will pop into my head and I’ll have to go write something down, and the next thing you know I’ve written a whole song in an hour.”</strong>  <br>– Eminem</h6>
            <div class="spce"></div>
            <button @click="$router.push('/rap')" class="rap">rap</button>
          </div>
        </div>
      </div>
    </section>
    <!-- End cta -->


  
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Home mounted')
    },
  };
</script>