<script>
  export let artistImg;
  export let nameTrack;
  export let albumName;
  export let artistName;
  export let querySearch;
</script>

<div class="single-item">
  <div class="artist-image">
    <a href="{querySearch}" target="_blank">
      <img src="{artistImg}" alt="" />
    </a>
  </div>
  <div class="track-data">
    <p>{nameTrack}</p>
    <p class="artist-name">{artistName}</p>
    <p class="album-name">{albumName}</p>
  </div>
</div>

<style>
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .single-item {
      display: flex;
      justify-content: center;
      flex-flow: column;
      min-width: 80%;
      padding-right: 10%;
    }
    .artist-image {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      min-height: 70%;
      max-height: 70%;
      padding: 0;
      box-sizing: border-box;
      width: 70%;
      overflow: hidden;
      border-radius: 10px;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }
    .single-item > .track-data {
      overflow-y: scroll;
    }
    .single-item > .track-data > p.album-name {
      display: none;
    }
    .single-item > .track-data > p {
      font-size: 2.3vw;
      line-height: 2.3vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > p.artist-name {
      color: white;
    }
  }
  @media only screen and (min-width: 1024px) {
    .single-item {
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
    .artist-image {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      min-height: 60%;
      max-height: 50%;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 0.4em;
      overflow-y: scroll;
    }
    .single-item > .track-data > p {
      font-size: 0.8vw;
      line-height: 2.3vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > p.artist-name {
      color: white;
    }
  }
</style>
