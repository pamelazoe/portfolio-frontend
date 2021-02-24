<style>
    /* .footer-x {
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
    font-size: 4vw;
    letter-spacing: 2px;
  }
  .icons {
    width: 13vw;
    display: flex;
    justify-content: space-between;
  } */
    /* 320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV */


@media screen and (min-width: 320px) and (max-width: 480px) {
}
@media screen and (min-width: 481px) and (max-width: 768px) {
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
}
@media screen and (min-width: 1201px) {
}


@media screen and (min-width: 320px) and (max-width: 480px) {
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
  .email {
    width: 70%;
    font-size: 4vw;
    letter-spacing: 2px;
  }
  .icons {
    width: 19vw;
    display: flex;
    justify-content: space-between;
  }
  img {
    height: 4.5vh;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
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
    font-size: 4vw;
    letter-spacing: 2px;
  }
  .icons {
    width: 15vw;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
  .footer-x {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
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
    font-size: 2vw;
    letter-spacing: 2px;
  }
  .icons {
    width: 7vw;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation:portrait) {
  .footer-x {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 8vh;
    font-size: 2vh;
    z-index: 500;
    width: 100%;
    align-self: flex-end;
  }
  img{
    height: 4vh;
  }
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
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation:landscape) {
    .footer-x {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: baseline;
    height: 8vh;
    font-size: 2vh;
    z-index: 500;
    width: 100%;
    align-self: flex-end;
  }
    .email {
      width: 80%;
      font-size: 2.5vw;
    }
    .icons {
      width: 10%;
      display: flex;
      justify-content: space-between;
    }
    img {
    height: 4.5vh;
  }
  }

@media only screen and (min-width: 1025px) {
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
