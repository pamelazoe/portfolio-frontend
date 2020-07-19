<script>
  export let artistImg;
  export let nameTrack;
  export let albumName;
  export let artistName;
  export let querySearch;
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Space+Mono&display=swap");
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
      /* object-fit: cover; */
      /* height: 100%; */
      box-sizing: border-box;
      height: 100%;
      width: auto;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 0.4em;
      /* overflow-y: scroll; */
    }
    .single-item > .track-data > a > p {
      font-size: 0.8vw;
      line-height: 2.3vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > a > p.artist-name {
      color: white;
    }
  }
  @media only screen and (max-width: 1023px) {
    .single-item {
      display: flex;
      flex-direction: column;
      height: 40vw;
      min-width: 40vw;
      max-width: 40vw;
      margin-right: 4vh;
      overflow: hidden;
      border-radius: 7px;
    }
    .single-item > .artist-image {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      width: 100%;
    }
    .single-item > .track-data {
      color: white;
      position: sticky;
      bottom: 0;
      font-size: 0.5em;
      overflow: hidden;
      min-height: 100% !important;
      z-index: 2;
      max-height: 100% !important;
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-content: center;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 0 10% 0 10%;
    }
    .single-item > .track-data > a {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
      text-decoration: none;
    }
  }
</style>

<div class="single-item">
  <div class="artist-image">
    <a href={querySearch} target="_blank">
      <img src={artistImg} alt="" />
    </a>
  </div>
  <div class="track-data">
    <a href={querySearch} target="_blank">
      <p>{nameTrack}</p>
      <p class="artist-name">{artistName}</p>
      <p>{albumName}</p>
    </a>

  </div>
</div>
