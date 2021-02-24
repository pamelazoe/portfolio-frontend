<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
@media only screen and (min-width: 320px) and (max-width: 480px) {
    .cont {
      min-height: 80%;
      max-height: 80%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.2vw;
      font-size: 6.5vw;
    }
    .cont > .int-cont {
      /* height: 100%; */
      height: 69vh; /* For Safari :( */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
    }
  }
@media screen and (min-width: 481px) and (max-width: 768px) {
  .cont {
      min-height: 80%;
      max-height: 80%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.2vw;
      font-size: 6.5vw;
    }
    .cont > .int-cont {
      /* height: 100%; */
      height: 69vh; /* For Safari :( */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      align-items: center;
    }
}
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    .cont {
      height: 65vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.2vw;
      font-size: 6.5vw;
    }
    .cont > .int-cont {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    .cont {
      min-height: 80%;
      max-height: 80%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.2vw;
      font-size: 6.5vw;
    }
    .cont > .int-cont {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

@media only screen and (min-width: 1024px) {
    .cont {
      position: absolute;
      left: 0;
      width: 100%;
      height: 80%;
      text-align: center;
      flex-direction: column;
      z-index: 5;
    }
    .int-cont {
      width: 100%;
      height: 100%;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Inconsolata";
      font-style: normal;
      font-weight: 300;
      font-size: 1.7vw;
      line-height: 160%;
    }
  }
</style>

<Header />
<div class="cont">
  <div class="int-cont">
    <slot />
  </div>
</div>
<Footer />
