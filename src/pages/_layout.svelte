<script>
  import { isActive, url } from "@sveltech/routify";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Space+Mono&display=swap");
  @media only screen and (max-width: 1023px) {
    .cont {
      height: 80%;
      width: 90%;
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
