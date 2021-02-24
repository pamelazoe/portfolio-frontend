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
      min-width: 50%;
      max-width: 50%;
      padding-right: 5%;
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
      min-width: 100%;
      max-width: 100%;
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
      width: -webkit-fill-available;
      border-radius: 7px;
    }
    .single-item > .track-data {
      overflow-y: scroll;
      min-height: 30%;
  max-height: 30%;
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
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
    .single-item {
      display: flex;
      flex-direction: column;
      height: 100%;
      /* min-width: 22vw;
      max-width: 22vw;
      padding-right: 10%; */
      min-width: 27vw;
	    max-width: 27vw;
      padding-right: 2vw;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .artist-image {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      /* min-height: 55%;
      max-height: 55%; */
      padding: 0;
      box-sizing: border-box;
      /* width: 100%; */
	    height: 25vw;
      min-width: 25vw;
      max-width: 25vw;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 0.4em;
      overflow-y: scroll;
    }
    .single-item > .track-data > p {
      font-size: 1.5vw;
      line-height: 1.4vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > p.artist-name {
      color: white;
    }
    }
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
    .single-item {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-width: 9vw;
	    max-width: 9vw;
      padding-right: 2vw;
      margin-bottom: 10px;
    }
    .artist-image {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      /* min-height: 55%;
      max-height: 55%; */
      padding: 0;
      box-sizing: border-box;
      /* width: 100%; */
	    height: 9vw;
      min-width: 9vw;
      max-width: 9vw;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 0.1em;
      overflow-y: hidden;
    }
    .single-item > .track-data > p {
      font-size: 1vw;
      line-height: 2vh;
      color: rgb(165, 165, 165);
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .single-item > .track-data  {
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .single-item > .track-data > p.artist-name {
      font-size: 1vw;
      line-height: 2vh;
      color: white;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .single-item > .track-data > p.album-name {
      display: none;
    }
    }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    .single-item {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 20vh;
      padding-right: 3vw;
      margin-top: 10px;
      margin-bottom: 10px;
      /* overflow-x: scroll; */
    }
    .artist-image {
      display: flex;
      justify-content: center;
      align-content: center;
      align-self: center;
      padding: 0;
      box-sizing: border-box;
      width: 20vw;
      min-height: 20vw;
      max-height: 20vw;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 1vh;
      overflow-y: scroll;
      height: 6vh;
    }
    .single-item > .track-data > p {
      font-size: 1.4vw;
      line-height: 1.5vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > p.artist-name {
      color: white;
    }
  }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    .single-item {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 20vh;
      padding-right: 3vw;
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
      width: 20vh;
      height: 20vh;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 1vh;
      overflow-y: scroll;
      height: 6vh;
    }
    .single-item > .track-data > p {
      font-size: 0.9vw;
      line-height: 2.3vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > p.artist-name {
      color: white;
    }
  }
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .single-item {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 20vh;
      padding-right: 3vw;
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
      width: 20vh;
      height: 20vh;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 0.4em;
      overflow-y: scroll;
      height: 6vh;
    }
    .single-item > .track-data > p {
      font-size: 0.9vw;
      line-height: 2.3vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > p.artist-name {
      color: white;
    }
}
@media screen and (min-width: 1201px) {
  .single-item {
      display: flex;
      flex-direction: column;
      /* max-width: 45%; */
      /* min-width: 45%; */
      height: 100%;
      /* min-width: 15vw;
      max-width: 15vw; */
      width: 20vh;
      padding-right: 3vw;
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
      width: 20vh;
      height: 20vh;
    }
    .artist-image > a {
      width: 100%;
    }
    .single-item > .artist-image > a > img {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: 7px;
    }
    .single-item > .track-data {
      padding-top: 0.4em;
      overflow-y: scroll;
      height: 16vh;
    }
    .single-item > .track-data > p {
      font-size: 0.9vw;
      line-height: 2.3vh;
      color: rgb(165, 165, 165);
    }
    .single-item > .track-data > p.artist-name {
      color: white;
    }
}
</style>
