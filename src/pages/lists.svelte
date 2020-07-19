<script type="module">
  import { onMount } from "svelte";
  import RefindLink from "../components/RefindLink.svelte";
  import SpotifyItem from "../components/SpotifyItem.svelte";
  import Spinner from "../components/Spinner.svelte";

  // const config = {
  //   consumer_key: process.env.POCKET_CONSUMER_KEY,
  //   access_token: process.env.POCKET_ACCESS_TOKEN,
  //   detailType: "complete"
  // };
  // const postData = async (url = "", data = {}) => {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: "GET", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json"
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     // body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // };
  const proxyUrl = process.env.FING_CORS,
    targetUrl = "https://niche-joke.now.sh/pocket";
  // postData(proxyUrl + targetUrl, config)
  //   .then(data => data)
  //   .catch(err => console.log(err));

  // *********************************
  const spotifyHandler = process.env.SPOTIFY_BACKEND;
  export let spotifyList = [];
  $: spotifyList;
  onMount(async () => {
    const res = await fetch(proxyUrl + spotifyHandler)
      .then(data => data.json())
      .then(x => (spotifyList = x));
    console.log(spotifyList);
    // spotifyList = await res.json();
    // console.log(spotifyList);
  });
  export let pocketList = [];
  $: pocketList;
  onMount(async () => {
    const res = await fetch(proxyUrl + targetUrl)
      .then(data => data.json())
      .then(x => (pocketList = x))
      .catch(err => console.log(err));

    console.log(pocketList);
    // spotifyList = await res.json();
    // console.log(spotifyList);
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Space+Mono&display=swap");
  .lists {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .refind-list,
  .spotify-list {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-direction: row;
    overflow: hidden;
    overflow-x: scroll;
    scrollbar-color: #2c2c2c #0e0e0e;
    scrollbar-width: thin;
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

  /* ::-webkit-scrollbar {
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
    background-clip: content-box; 
  }
  ::-webkit-scrollbar-track-piece {
    border-bottom: 4px dotted gray;
    margin: 0 10em;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: rgba(23, 23, 23, 0.8);
  } */
  @media only screen and (min-width: 1024px) {
    ::-webkit-scrollbar {
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
      background-clip: content-box;
    }
    ::-webkit-scrollbar-track-piece {
      border-bottom: 4px dotted gray;
      margin: 0 10em;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: rgba(23, 23, 23, 0.8);
    }
  }
  @media only screen and (max-width: 1023px) {
    .list-header > p {
      font-size: 2.2vh;
    }
    .lists {
      width: 100%;
    }
    ::-webkit-scrollbar {
      height: 5px;
      width: 10px;
    }

    /* ::-webkit-scrollbar-thumb:double-button {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    } */
    /* ::-webkit-scrollbar-button {
      color: white;
      background-color: #bbbbbb;
      display: block;
      border-style: solid;
      height: 13px;
      width: 16px;
    } */
    ::-webkit-scrollbar-track {
      background: rgba(23, 23, 23, 0.8);
      border: 4px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:horizontal {
      background: rgb(85, 85, 85);
    }
  }
</style>

<div class="lists">
  <div class="list-header">
    <p>Things I've been reading/listening...</p>
  </div>
  <div class="refind-list">

    {#each pocketList as h}
      <RefindLink
        imgSrc={!h.image && !h.top_image_url ? 'icons/icons8-pocket.svg' : h.image ? h.image['src'] : h.top_image_url}
        href={h.given_url}
        title={(!h.given_title && !h.resolved_title) || (h.given_title && h.resolved_title === '') ? h.given_url : h.resolved_title} />
    {:else}
      <div class="loader">
        <!-- <SyncLoader size="2" color="gray" unit="em" /> -->
        <Spinner loading={1} />
      </div>
    {/each}

  </div>
  <div class="spotify-list">
    {#each spotifyList as h}
      <SpotifyItem
        querySearch={`https://www.youtube.com/results?search_query=${h.track + ' ' + h.artist
            .map(x => x)
            .join(' ')}`}
        artistImg={h.image[0].url}
        nameTrack={h.track}
        artistName={h.artist.map(x => x).join(' · ')}
        albumName={h.album} />
    {:else}
      <div class="loader">
        <!-- <SyncLoader size="2" color="gray" unit="em" /> -->
        <Spinner loading={1} />
      </div>
    {/each}
  </div>
</div>
<!-- <div class="footer-x">
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
</div> -->

<!-- authors={h
          .map(y => y.authors)
          .map(u => (u === undefined ? [[]] : Object.entries(u)))
          .reduce((a, b) => a.concat(b), [])
          .map(t => (t[1] ? t[1].name : ''))} -->
