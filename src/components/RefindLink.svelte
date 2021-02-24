<script>
  export let href;
  export let title;
  // export let excerpt;
  export let imgSrc;
  // export let authors;
</script>

<div class="single-article">
  <div class="refind-icon">
    <div class="svg-icon">
      <a href="{href}" target="_blank">
        <img src="{imgSrc}" alt="" />
      </a>
    </div>
  </div>
  <div class="refind-url">
    <div class="url">
      <a href="{href}" target="_blank">{title}</a>
    </div>
  </div>
</div>

<style>
      /* 320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV */

@media only screen and (min-width: 320px) and (max-width: 480px) {
    .single-article {
      min-width: 80%;
      padding-right: 10%;
    }
    .single-article > .refind-icon > .svg-icon > a {
      display: flex;
    }
    .single-article > .refind-icon > .svg-icon > a > img {
      flex-shrink: 0;
      min-width: 100%;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .single-article > .refind-icon > .svg-icon {
      min-height: 100%;
      min-width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .refind-icon {
      min-height: 70%;
      max-height: 70%;
      width: 100%;
      overflow: hidden;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }

    .refind-url > .url > a {
      display: flex;
      text-decoration: none;
      text-align: center;
    }

    .refind-url {
      width: 100%;
      font-size: 0.5em;
      padding-right: 4%;
      padding-left: 2%;
      text-align: center;
      padding-top: 0.4em;
      overflow-y: scroll;
    }

    .refind-url > .url {
      overflow-y: scroll;
      display: flex;
      justify-content: center;
    }
  }
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
    .single-article {
      min-width: 50%;
      max-width: 50%;
      padding-right: 10%;
      height: 100%;
    }
    .single-article > .refind-icon > .svg-icon > a {
      display: flex;
    }
    .single-article > .refind-icon > .svg-icon > a > img {
      flex-shrink: 0;
      min-width: 100%;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .single-article > .refind-icon > .svg-icon {
      min-height: 100%;
      min-width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .refind-icon {
      min-height: 70%;
      max-height: 70%;
      width: 100%;
      overflow: hidden;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }

    .refind-url > .url > a {
      display: flex;
      text-decoration: none;
      text-align: center;
    }

    .refind-url {
      width: 100%;
      font-size: 0.3em;
      padding-right: 4%;
      padding-left: 2%;
      text-align: center;
      padding-top: 0.4em;
      overflow-y: scroll;
    }

    .refind-url > .url {
      overflow-y: scroll;
      display: flex;
      justify-content: center;
    }
  }
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
  .single-article {
      min-width: 25vw;
      max-width: 25vw;
      padding-right: 3vw;
      height: 100%;
      overflow-y: hidden;
    }
    .single-article > .refind-icon > .svg-icon > a {
      display: flex;
    }
    .single-article > .refind-icon > .svg-icon > a > img {
      flex-shrink: 0;
      min-width: 100%;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .single-article > .refind-icon > .svg-icon {
      min-height: 100%;
      min-width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .refind-icon {
      min-height: 70%;
      max-height: 70%;
      width: 100%;
      overflow: hidden;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }

    .refind-url > .url > a {
      display: flex;
      text-decoration: none;
      text-align: center;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .refind-url {
      width: 100%;
      font-size: 1.2vw;
      padding-right: 4%;
      padding-left: 2%;
      text-align: center;
      padding-top: 0.4em;
      overflow-y: scroll;
    }

    .refind-url > .url {
      overflow-y: scroll;
      display: flex;
      justify-content: center;
    }
  }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    .single-article {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      min-width: 39vw;
      max-width: 39vw;
      padding-right: 5vw;
      margin-top: 10px;
      margin-bottom: 10px;
      /* overflow-x: scroll; */
    }

    .refind-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      /* min-height: 55%;
      max-height: 55%; */
      height: 18vh;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
    }

    .refind-url {
      width: 100%;
      /* min-width: 85%; */
      /* max-width: 85%; */
      text-align: left;
      font-size: 2vw;
      padding-right: 4%;
      padding-left: 2%;
      overflow-y: scroll;
      padding-top: 0.4em;
      /* height: 100%; */
      text-overflow: ellipsis;
      overflow-x: hidden;
      height: 10vh;
    }

    .refind-url > .url > a {
      text-decoration: none;
      overflow-x: scroll;
      text-align: center;
    }

    .single-article > .refind-icon > .svg-icon > a > img {
      /* object-fit: cover; */
      /* height: 100%; */
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }

    .single-article > .refind-url > .url {
      color: rgb(165, 165, 165);
      line-height: 2.3vh;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      /* word-wrap: break-word; */
      display: flex;
      align-content: center;
      justify-items: center;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      text-align: center;
      overflow-y: scroll;
      padding-top: 0.4em;
    }

    .single-article > .refind-icon > .svg-icon {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 7px;
    }
  }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    .single-article {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 23vw;
      padding-right: 5vw;
      margin-top: 10px;
      margin-bottom: 10px;
      /* overflow-x: scroll; */
    }

    .refind-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      /* min-height: 55%;
      max-height: 55%; */
      height: 18vh;
      padding: 0;
      box-sizing: border-box;
      width: 23vw;
    }

    .refind-url {
      width: 100%;
      /* min-width: 85%; */
      /* max-width: 85%; */
      text-align: left;
      font-size: 1.2vw;
      padding-right: 4%;
      padding-left: 2%;
      overflow-y: scroll;
      padding-top: 0.4em;
      /* height: 100%; */
      text-overflow: ellipsis;
      overflow-x: hidden;
      height: 10vh;
    }

    .refind-url > .url > a {
      text-decoration: none;
      overflow-x: scroll;
      text-align: center;
    }

    .single-article > .refind-icon > .svg-icon > a > img {
      /* object-fit: cover; */
      /* height: 100%; */
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }

    .single-article > .refind-url > .url {
      color: rgb(165, 165, 165);
      line-height: 2.3vh;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      /* word-wrap: break-word; */
      display: flex;
      align-content: center;
      justify-items: center;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      text-align: center;
      overflow-y: scroll;
      padding-top: 0.4em;
    }

    .single-article > .refind-icon > .svg-icon {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 7px;
    }
  }
@media screen and (min-width: 1025px) and (max-width: 1200px) and (orientation: portrait) {
  .single-article {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 23vw;
      padding-right: 5vw;
      margin-top: 10px;
      margin-bottom: 10px;
      /* overflow-x: scroll; */
    }

    .refind-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      /* min-height: 55%;
      max-height: 55%; */
      height: 18vh;
      padding: 0;
      box-sizing: border-box;
      width: 23vw;
    }

    .refind-url {
      width: 100%;
      /* min-width: 85%; */
      /* max-width: 85%; */
      text-align: left;
      font-size: 2vh;
      padding-right: 4%;
      padding-left: 2%;
      overflow-y: scroll;
      padding-top: 0.4em;
      /* height: 100%; */
      text-overflow: ellipsis;
      overflow-x: hidden;
      height: 10vh;
    }

    .refind-url > .url > a {
      text-decoration: none;
      overflow-x: scroll;
      text-align: center;
    }

    .single-article > .refind-icon > .svg-icon > a > img {
      /* object-fit: cover; */
      /* height: 100%; */
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }

    .single-article > .refind-url > .url {
      color: rgb(165, 165, 165);
      line-height: 2.3vh;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      /* word-wrap: break-word; */
      display: flex;
      align-content: center;
      justify-items: center;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      text-align: center;
      overflow-y: scroll;
      padding-top: 0.4em;
    }

    .single-article > .refind-icon > .svg-icon {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 7px;
    }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) and (orientation: landscape) {
  .single-article {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 23vw;
      padding-right: 5vw;
      margin-top: 10px;
      margin-bottom: 10px;
      /* overflow-x: scroll; */
    }

    .refind-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      /* min-height: 55%;
      max-height: 55%; */
      height: 18vh;
      padding: 0;
      box-sizing: border-box;
      width: 23vw;
    }

    .refind-url {
      width: 100%;
      /* min-width: 85%; */
      /* max-width: 85%; */
      text-align: left;
      font-size: 2vh;
      padding-right: 4%;
      padding-left: 2%;
      overflow-y: scroll;
      padding-top: 0.4em;
      /* height: 100%; */
      text-overflow: ellipsis;
      overflow-x: hidden;
      height: 10vh;
    }

    .refind-url > .url > a {
      text-decoration: none;
      overflow-x: scroll;
      text-align: center;
    }

    .single-article > .refind-icon > .svg-icon > a > img {
      /* object-fit: cover; */
      /* height: 100%; */
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }

    .single-article > .refind-url > .url {
      color: rgb(165, 165, 165);
      line-height: 2.3vh;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      /* word-wrap: break-word; */
      display: flex;
      align-content: center;
      justify-items: center;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      text-align: center;
      overflow-y: scroll;
      padding-top: 0.4em;
    }

    .single-article > .refind-icon > .svg-icon {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 7px;
    }
}
@media screen and (min-width: 1201px) {
  .single-article {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 23vw;
      padding-right: 5vw;
      margin-top: 10px;
      margin-bottom: 10px;
      /* overflow-x: scroll; */
    }

    .refind-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      /* min-height: 55%;
      max-height: 55%; */
      height: 18vh;
      padding: 0;
      box-sizing: border-box;
      width: 23vw;
    }

    .refind-url {
      width: 100%;
      /* min-width: 85%; */
      /* max-width: 85%; */
      text-align: left;
      font-size: 2vh;
      padding-right: 4%;
      padding-left: 2%;
      overflow-y: scroll;
      padding-top: 0.4em;
      /* height: 100%; */
      text-overflow: ellipsis;
      overflow-x: hidden;
      height: 10vh;
    }

    .refind-url > .url > a {
      text-decoration: none;
      overflow-x: scroll;
      text-align: center;
    }

    .single-article > .refind-icon > .svg-icon > a > img {
      /* object-fit: cover; */
      /* height: 100%; */
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }

    .single-article > .refind-url > .url {
      color: rgb(165, 165, 165);
      line-height: 2.3vh;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      /* word-wrap: break-word; */
      display: flex;
      align-content: center;
      justify-items: center;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      text-align: center;
      overflow-y: scroll;
      padding-top: 0.4em;
    }

    .single-article > .refind-icon > .svg-icon {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 7px;
    }
}
</style>
