<script>
  import { onMount } from "svelte";
  import RefindLink from "../components/RefindLink.svelte";
  import SpotifyItem from "../components/SpotifyItem.svelte";
  import Spinner from "../components/Spinner.svelte";

  const proxyUrl = process.env.FING_CORS;

  const spotifyHandler = process.env.SPOTIFY_BACKEND;
  export let spotifyList = [];
  $: spotifyList;
  onMount(async () => {
    const res = await fetch("https://niche-joke.now.sh/spotify", {
      headers: {
        Origin: "https://pamelazoe.now.sh",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((x) => (spotifyList = x));
    console.log(spotifyList);
  });
  export let pocketList = [];
  $: pocketList;
  onMount(async () => {
    const res = await fetch("https://niche-joke.now.sh/pocket")
      .then((data) => data.json())
      .then((x) => (pocketList = x))
      .catch((err) => console.log(err));

    console.log(pocketList);
  });
</script>

<div class="lists">
  <div class="list-header">
    <p>Things I've been reading/listening...</p>
  </div>
  <div class="refind-list">
    {#each pocketList as h}
      <RefindLink
        imgSrc="{!h.image && !h.top_image_url
          ? 'icons/icons8-pocket.svg'
          : h.image
          ? h.image['src']
          : h.top_image_url}"
        href="{h.given_url}"
        title="{(!h.given_title && !h.resolved_title) ||
        (h.given_title && h.resolved_title === '')
          ? h.given_url
          : h.resolved_title}"
      />
    {:else}
      <div class="loader">
        <Spinner loading="{1}" />
      </div>
    {/each}
  </div>
  <div class="spotify-list">
    {#each spotifyList as h}
      <SpotifyItem
        querySearch="{`https://www.youtube.com/results?search_query=${
          h.track + ' ' + h.artist.map((x) => x).join(' ')
        }`}"
        artistImg="{h.image[0].url}"
        nameTrack="{h.track}"
        artistName="{h.artist.map((x) => x).join(' · ')}"
        albumName="{h.album}"
      />
    {:else}
      <div class="loader">
        <Spinner loading="{1}" />
      </div>
    {/each}
  </div>
</div>

<style>
@media  screen and (min-width: 320px) and (max-width: 480px) {
    .lists {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .refind-list,
    .spotify-list {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .spotify-list > .loader,
    .refind-list > .loader {
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-self: center;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .list-header > p {
      font-size: 2.5vh;
    }
    ::-webkit-scrollbar {
      /* -webkit-appearance: none; */
      height: 5px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb:double-button {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    ::-webkit-scrollbar-button {
      color: white;
      background-color: #bbbbbb;
      display: block;
      border-style: solid;
      height: 13px;
      width: 16px;
    }
    ::-webkit-scrollbar-track:double-button {
      background: rgb(0, 0, 0);
      border: 4px solid transparent;
      background-clip: content-box; /* THIS IS IMPORTANT */
    }
    ::-webkit-scrollbar-track-piece {
      border-bottom: 4px dotted gray;
      margin: 0 10em;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: rgba(23, 23, 23, 0.8);
    }
  }
@media  screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
    .lists {
      width: 85%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .refind-list{
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    
    .spotify-list {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .list-header > p {
      font-size: 2.2vh;
    }
    .spotify-list > .loader,
    .refind-list > .loader {
    width: 100%;
    align-self: center;
    }
  }
@media  screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
    .lists {
      width: 85%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .refind-list{
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    
    .spotify-list {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .list-header > p {
      font-size: 2.2vh;
    }
    .spotify-list > .loader,
    .refind-list > .loader {
    width: 100%;
    align-self: center;
    }
  }
@media  screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    .lists {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-self: center;
    }
    .refind-list,
    .spotify-list {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-y: hidden;
      overflow-x: scroll;
    }
    .spotify-list > .loader,
    .refind-list > .loader {
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-self: center;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .list-header > p {
      font-size: 2.5vh;
    }
    ::-webkit-scrollbar {
      /* -webkit-appearance: none; */
      height: 5px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb:double-button {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    ::-webkit-scrollbar-button {
      color: white;
      background-color: #bbbbbb;
      display: block;
      border-style: solid;
      height: 13px;
      width: 16px;
    }
    ::-webkit-scrollbar-track:double-button {
      background: rgb(0, 0, 0);
      border: 4px solid transparent;
      background-clip: content-box; /* THIS IS IMPORTANT */
    }
    ::-webkit-scrollbar-track-piece {
      border-bottom: 4px dotted gray;
      margin: 0 10em;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: rgba(23, 23, 23, 0.8);
    }
  }
@media  screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    .lists {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-self: center;
    }
    .refind-list,
    .spotify-list {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-y: hidden;
      overflow-x: scroll;
    }
    .spotify-list > .loader,
    .refind-list > .loader {
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-self: center;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .list-header > p {
      font-size: 2.5vh;
    }
    ::-webkit-scrollbar {
      /* -webkit-appearance: none; */
      height: 5px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb:double-button {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    ::-webkit-scrollbar-button {
      color: white;
      background-color: #bbbbbb;
      display: block;
      border-style: solid;
      height: 13px;
      width: 16px;
    }
    ::-webkit-scrollbar-track:double-button {
      background: rgb(0, 0, 0);
      border: 4px solid transparent;
      background-clip: content-box; /* THIS IS IMPORTANT */
    }
    ::-webkit-scrollbar-track-piece {
      border-bottom: 4px dotted gray;
      margin: 0 10em;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: rgba(23, 23, 23, 0.8);
    }
  }
@media  screen and (min-width: 1025px) and (max-width: 1200px) {
  .lists {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-self: center;
    }
    .refind-list,
    .spotify-list {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-y: hidden;
      overflow-x: scroll;
    }
    .spotify-list > .loader,
    .refind-list > .loader {
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-self: center;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .list-header > p {
      font-size: 2.5vh;
    }
    ::-webkit-scrollbar {
      /* -webkit-appearance: none; */
      height: 5px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb:double-button {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    ::-webkit-scrollbar-button {
      color: white;
      background-color: #bbbbbb;
      display: block;
      border-style: solid;
      height: 13px;
      width: 16px;
    }
    ::-webkit-scrollbar-track:double-button {
      background: rgb(0, 0, 0);
      border: 4px solid transparent;
      background-clip: content-box; /* THIS IS IMPORTANT */
    }
    ::-webkit-scrollbar-track-piece {
      border-bottom: 4px dotted gray;
      margin: 0 10em;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: rgba(23, 23, 23, 0.8);
    }
}
@media screen and (min-width: 1201px) {
  .lists {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-self: center;
    }
    .refind-list,
    .spotify-list {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-direction: row;
      overflow-y: hidden;
      overflow-x: scroll;
    }
    .spotify-list > .loader,
    .refind-list > .loader {
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-self: center;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .list-header > p {
      font-size: 2.5vh;
    }
    ::-webkit-scrollbar {
      /* -webkit-appearance: none; */
      height: 5px;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb:double-button {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    ::-webkit-scrollbar-button {
      color: white;
      background-color: #bbbbbb;
      display: block;
      border-style: solid;
      height: 13px;
      width: 16px;
    }
    ::-webkit-scrollbar-track:double-button {
      background: rgb(0, 0, 0);
      border: 4px solid transparent;
      background-clip: content-box; /* THIS IS IMPORTANT */
    }
    ::-webkit-scrollbar-track-piece {
      border-bottom: 4px dotted gray;
      margin: 0 10em;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: rgba(23, 23, 23, 0.8);
    }
}
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

</style>
