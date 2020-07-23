<script>
  export let href;
  export let title;
  // export let excerpt;
  export let imgSrc;
  // export let authors;
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Space+Mono&display=swap");
  @media only screen and (min-width: 1024px) {
    .single-article {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      min-width: 15vw;
      max-width: 15vw;
      padding-right: 2%;
      margin-top: 10px;
      margin-bottom: 10px;
      /* overflow-x: scroll; */
    }
    .refind-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      min-height: 55%;
      max-height: 55%;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
    }
    .refind-url {
      width: 100%;
      /* min-width: 85%; */
      /* max-width: 85%; */
      text-align: left;
      font-size: 0.5em;
      padding-right: 4%;
      padding-left: 2%;
      /* overflow-y: scroll; */
      padding-top: 0.4em;
      /* height: 100%; */
    }
    .refind-url > .url > a {
      text-decoration: none;
      /* overflow-x: scroll; */
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
      /* overflow-y: scroll; */
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
  @media only screen and (max-width: 1023px) {
    .single-article {
      display: flex;
      flex-direction: column;
      height: 40vw;
      min-width: 40vw;
      max-width: 40vw;
      margin-right: 4vh;
      margin-bottom: 2vh;
      overflow: hidden;
      border-radius: 7px;
    }
    .single-article > .refind-icon {
      height: 100%;
    }
    .single-article > .refind-icon > .svg-icon {
      height: 100%;
      display: flex;
      justify-content: center;
    }
    .single-article > .refind-icon > .svg-icon > a > img {
      height: 100%;
    }
    .single-article > .refind-url {
      color: white;
      position: sticky;
      bottom: 0;
      font-size: 0.5em;
      overflow: hidden;
      min-height: 100%;
      z-index: 2;
      max-height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: end;
    }
    .single-article > .refind-url > .url {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 9999;
      color: white;
      display: flex;
      justify-content: center;
      padding: 10% 10% 20% 10%;
      flex-flow: column;
    }
    .single-article > .refind-url > .url > a {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      outline: none;
      text-decoration: none;
    }
    .single-article > .refind-url > .url > a,
    a:hover,
    a:click,
    a:visited {
      border: none;
      outline: none;
      text-decoration: none;
      color: inherit;
      -webkit-tap-highlight-color: white;
    }
  }
</style>

<div class="single-article">
  <div class="refind-icon">
    <div class="svg-icon">
      <a {href} target="_blank">
        <img src={imgSrc} alt="" />
      </a>
    </div>
  </div>
  <div class="refind-url">
    <div class="url">
      <a {href} target="_blank">{title}</a>
      <!-- <p>{authors}</p> -->
    </div>
    <!-- <div class="tags">
      <p>{excerpt}</p>
    </div> -->

  </div>

</div>
