<script>

</script>

<style>
  .footer-x {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: baseline;
    height: 8vh;
    font-size: 2vh;
    z-index: 500;
    width: 100%;
  }
  img {
    height: 4.5vh;
  }
  .email {
    width: 70%;
    font-size: 4.5vw;
    letter-spacing: 2px;
  }
  .icons {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    .email {
      width: 80%;
      font-size: 4.5vw;
    }
    .icons {
      width: 20%;
      display: flex;
      justify-content: space-between;
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1023px) {
    .email {
      width: 80%;
      font-size: 4.5vw;
    }
    .icons {
      width: 20%;
      display: flex;
      justify-content: space-between;
    }
  }
  @media only screen and (min-width: 1024px) {
    .footer-x {
      display: none;
    }
  }
</style>

<div class="footer-x">
  <div class="email">
    <p>pmlzoe@gmail.com</p>
  </div>
  <div class="icons">
    <a href="https://www.linkedin.com/in/pamelazoe/">
      <img src="icons/linkedin-white.png" alt="" />
    </a>
    <a href="https://github.com/pamelazoe?tab=repositories">
      <img src="icons/github-white.png" alt="" />
    </a>
  </div>
</div>
