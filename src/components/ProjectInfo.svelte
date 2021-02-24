<script>
  import Topic from "./Topic.svelte";
  export let projectName;
  export let repoImg;
  export let demoUrl;
  export let repoUrl;
  export let description;
  export let topics;
</script>

<div class="project-container">
  <div class="project-header">
    <div class="header-wrapper">
      <p>{projectName}</p>
    </div>
  </div>
  <div class="project-img">
    <img src="{repoImg}" alt="" />
  </div>
  <div class="project-urls">
    <a href="{demoUrl}">Demo</a>
    <a href="{repoUrl}">Repository</a>
  </div>
  <div class="project-description">
    <div class="description-wrapper">
      <p>{description}</p>
    </div>
  </div>
  <div class="project-topics">
    {#each topics as tag}
      <Topic tag="{tag}" />
    {/each}
  </div>
</div>

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
@media only screen and (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
    .project-container {
      min-width: 85%;
      max-width: 85%;
      /* min-height: 90%;
      max-height: 90%; */
      height: 58vh;
      margin-right: 4vw;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
      
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 3vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 35%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 3vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
      padding: 3vw 5vw;
    }
    .project-description {
      height: 25%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }
    .project-description > .description-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      flex-direction: column;
      align-content: center;
      overflow-y: scroll;
      font-size: 3vw;
      align-items: center;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
    .project-description > .description-wrapper > p {
      display: -webkit-box;
      max-width: 90%;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
  }
@media only screen and (min-width: 320px) and (max-width: 480px) and (orientation: landscape) {
    .project-container {
      min-width: 70%;
      max-width: 70%;
      height: 45vh;
      margin-right: 4vw;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-header {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 3vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 55%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
      margin: 2vh 0;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 3vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
      padding: 3vw 5vw;
    }
    .project-description {
      display:none
    }
    .project-topics {
      display: none
    }
  }
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
    .project-container {
      min-width: 60%;
      max-width: 60%;
      height: 90%;
      margin-right: 4vw;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
      justify-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 3vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 35%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 3vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
      padding: 3vw 5vw;
    }
    .project-description {
      height: 25%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }
    .project-description > .description-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      flex-direction: column;
      align-content: center;
      overflow-y: scroll;
      font-size: 2vw;
      align-items: center;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
    .project-description > .description-wrapper > p {
      display: -webkit-box;
      max-width: 90%;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 95%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
  }
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
    .project-container {
      min-width: 55%;
      max-width: 55%;
      height: 90%;
      margin-right: 4vw;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
      justify-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 2.5vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 60%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
      margin: 3vh 0;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 2.5vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
      /* padding: 3vw 5vw; */
    }
    .project-description {
      display: none;
    }
    .project-topics {
      display: none;
    }
  }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    .project-container {
      min-width: 45vw;
      max-width: 45vw;
      height: 60vh;
      margin-right: 6vw;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 2.2vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 35%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 2vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
    }
    .project-description {
      height: 25%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }
    .project-description > .description-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      flex-direction: column;
      align-content: center;
      overflow-y: scroll;
      font-size: 1.7vw;
      align-items: center;
    }
    .project-description > .description-wrapper > p {
      display: -webkit-box;
      max-width: 90%;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
  }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    .project-container {
      min-width: 30vw;
      max-width: 30vw;
      height: 55vh;
      margin-right: 4vw;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 1.2vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 50%;
      margin: 4vh 0;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 1.4vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
    }
    .project-description {
      display:none;
    }
    .project-topics {
      display:none;

    }
  }
@media screen and (min-width: 1025px) and (max-width: 1200px) and (orientation: portrait) {
  .project-container {
      /* min-width: 25%;
      max-width: 25%; */
      /* height: 65vh; */
      min-width: 26vw;
	    max-width: 26vw;
      height: 60vh;
      margin-right: 2em;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-header {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 1vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 35%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 0.9vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
    }
    .project-description {
      height: 25%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }
    .project-description > .description-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      flex-direction: column;
      align-content: center;
      overflow-y: scroll;
      font-size: 0.7vw;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) and (orientation:landscape) {
  .project-container {
      min-width: 26vw;
	    max-width: 26vw;
      height: 60vh;
      margin-right: 2em;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 1.3vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 35%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 1.3vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
    }
    .project-description {
      height: 25%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }
    .project-description > .description-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      flex-direction: column;
      align-content: center;
      overflow-y: scroll;
      font-size: 1.2vw;
      align-items: center;
    }
    .project-description > .description-wrapper > p{
      display: -webkit-box;
      max-width: 90%;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
}
@media screen and (min-width: 1201px) {
  .project-container {
      min-width: 23vw;
	    max-width: 23vw;
      height: 70vh;
      margin-right: 2em;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: #0f0f13;
    }
    .project-img > img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .project-header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: white;
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      font-size: 1.3vw;
      font-weight: 500;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 35%;
      overflow: hidden;
      width: 90%;
      border-radius: 10px;
    }
    .project-urls {
      font-size: 1.3vw;
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
    }
    .project-description {
      height: 25%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }
    .project-description > .description-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      flex-direction: column;
      align-content: center;
      overflow-y: scroll;
      font-size: 1.1vw;
      align-items: center;
    }
    .project-description > .description-wrapper > p{
      display: -webkit-box;
      max-width: 90%;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 100%;
      height: 15%;
      margin: 0;
      padding: 0;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      font-size: 0.7vw;
    }
}
</style>
