<style>
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

@media screen and (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
  .footer-x {
    display: none;
  }
  .about{
    width: 75%;
    font-size: 5vw;
    display: flex;
    align-self: center;
    line-height: 4vh;
  }
}
@media screen and (min-width: 320px) and (max-width: 480px) and (orientation: landscape) {
  .footer-x {
    display: none;
  }
  .about{
    width: 75%;
    font-size: 5vw;
    display: flex;
    align-self: center;
    line-height: 6vh;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) and (orientation:portrait) {
  .footer-x {
    display: none;
  }
  .about{
    width: 75%;
    font-size: 5vw;
    display: flex;
    align-self: center;
    line-height: 5vh;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
    .about {
      width: 75%;
      font-size: 2.5vw;
      display: flex;
      align-self: center;
      line-height: 6vh;
    }
    .footer-x {
      display: none;
    }
}
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape){
  .footer-x {
      display: none;
    }
    .about {
      width: 70%;
      font-size: 2.5vw;
      display: flex;
      align-self: center;
      line-height: 6vh;
    }
}
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait){
  .footer-x {
      display: none;
    }
    .about {
      width: 70%;
      font-size: 4vw;
      display: flex;
      align-self: center;
      line-height: 6vh;
    }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .footer-x {
      font-family: "Inconsolata";
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 13vh;
      width: 100%;
    }
    .footer-x > .icons > a > img {
      height: 4vh;
      padding: 3vh 1vh;
    }
    .about {
      width: 60%;
      font-size: 3vh;
      display: flex;
      align-self: center;
      line-height: 4vh;
    }
    .email {
      font-size: 3vh;
    }
}
@media screen and (min-width: 1201px) {
  .footer-x {
      font-family: "Inconsolata";
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 13vh;
      width: 100%;
    }
    .footer-x > .icons > a > img {
      height: 4.5vh;
      padding: 3vh 1vh;
    }
    .about {
      width: 60%;
      line-height: 5vh;
      font-size: 3.5vh;
    }
    .email {
      font-size: 3vh;
    }
}
/* @media only screen and (max-width: 1023px) {
    .footer-x {
      display: none;
    }
  } */
/* @media only screen and (min-width: 1024px) {
    .footer-x {
      font-family: "Inconsolata";
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 13vh;
      width: 100%;
    }
    .footer-x > .icons > a > img {
      height: 5vh;
      padding: 4vh 3vh;
    }
    .about {
      width: 60%;
    }
  } */
</style>

<div class="about">
  <p>
    Hi! My name is Pamela, a frontend developer and infosec enthusiast. I'm
    constantly trying to learn new things and improve my skills.
  </p>
</div>

<p style="color:transparent">Jump line</p>
<div class="footer-x">
  <div class="email">
    <p>pmlzoe@gmail.com</p>
  </div>
  <div class="icons">
    <a
      href="https://www.linkedin.com/in/pamelazoe/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="icons/linkedin-white.png" alt="" />
    </a>
    <a
      href="https://github.com/pamelazoe?tab=repositories"
      target="_blank"
      rel="noopener noreferrer">
      <img src="icons/github-white.png" alt="" />
    </a>
  </div>
</div>
