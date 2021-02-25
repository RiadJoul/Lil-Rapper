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
                    <a href="#try">Try it</a>
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
    </header>
    <!-- End header -->

    <!-- Screenshot -->
    <section class="sec-pad-lg grdnt-yellow light">
      <div class="container">
        <div class="section-text text-center wow animated fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
          <h3 v-if="this.ButtonText === '...'">Listening</h3>
          <h3 v-else>Press start and spit some 🔥</h3>
          <br>
          <button @click="startSpeechToText" class="rap">{{ this.ButtonText }}</button>
          <span v-if="transcription_">
            <h4>{{ getLines() }}</h4>
          </span>
        </div>
      </div>
    </section>
    <!-- End Screenshot -->

    <br>
    <!-- Feature -->
    <section id="feature" class="bg-memphis sec-pad-lg pt-0">
      <div class="container">
        <div class="row">
          <div class="items row">
            <div class="text-center col-feat shad-item">
              <span v-if="this.rhymes.length > 0">
                <div v-for="rhyme in this.rhymes" :key="rhyme[0]"
                  class="col-md-3 col-sm-6 res-margin wow animated fadeInUp" data-wow-duration="1.2s"
                  data-wow-delay=".2s">
                  <span v-if="rhyme.score >= 300">
                    <div class="item">
                      <div class="spce"></div>
                      <h5>{{ rhyme.word.toString()}}</h5>
                    </div>
                  </span>
                </div>
              </span>
              <div v-else>
                <h2>rhymes will appear here!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End feature -->

  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Rap mounted')
    },
    data() {
      return {
        runtimeTranscription_: "",
        transcription_: [],
        //API
        api_url: 'https://rhymebrain.com/talk?function=getRhymes&word=',
        rhymes: [],
        valid: false,
        ButtonText: 'start',
        word: []
      };
    },
    methods: {
      startSpeechToText() {

        this.ButtonText = '...'
        // initialisation of voicereco
        window.SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new window.SpeechRecognition();
        recognition.lang = "en-EN";
        recognition.interimResults = true;
        // event current voice reco word
        recognition.addEventListener("result", event => {
          const text = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");
          this.runtimeTranscription_ = text;
        });
        // end of transcription
        recognition.addEventListener("end", () => {
          this.transcription_.push(this.runtimeTranscription_);
          this.runtimeTranscription_ = "";
          recognition.stop();
          this.valid = true;
          this.ButtonText = 'rap'
        });
        recognition.start();
      },
      getLines() {
        this.getRyhmes();
        return this.transcription_.toString();
      },
      getRyhmes() {
        if (this.valid === true) {
          this.valid = false
          fetch(`${this.api_url}${this.transcription_[this.transcription_.length - 1]}&lang=en`)
            .then(res => {
              return res.json();
            }).then(this.setResults)
        }
      },
      setResults(results) {
        this.rhymes = results;
      },

    }
  };
</script>