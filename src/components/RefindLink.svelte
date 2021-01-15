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
      overflow-y: scroll;
      padding-top: 0.4em;
      /* height: 100%; */
      text-overflow: ellipsis;
      overflow-x: hidden;
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
