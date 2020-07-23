<script>
  import Topic from "./Topic.svelte";
  export let projectName;
  export let repoImg;
  export let demoUrl;
  export let repoUrl;
  export let description;
  export let topics;
</script>

<style>
  @media only screen and (max-width: 1023px) {
    .project-container {
      height: 55vh;
      overflow: hidden;
      border-radius: 10px;
      background-color: #333;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-flow: column;
      min-width: 28vh;
      max-width: 28vh;
      margin-right: 3vh;
    }
    .project-header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: rgb(212, 212, 212);
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
    }
    .project-img {
      display: flex;
      justify-content: center;
      height: 20%;
      width: 90%;
      overflow: hidden;
      margin: 0 auto;
      border-radius: 4px;
    }
    .project-img > img {
      width: 100%;
    }
    .project-urls {
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
      font-weight: 700;
      font-size: 0.4em;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
      font-size: 1.5em;
    }
    .project-description {
      height: 20%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 0.6em;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      /* border-bottom: 1px solid gray; */
      font-weight: 900;
      font-size: 0.5em;
    }

    .project-description > .description-wrapper {
      min-height: 85%;
      max-height: 85%;
      width: 85%;
      display: flex;
      flex-flow: column;
      align-content: center;
      overflow: hidden;
    }
    .project-description > .description-wrapper > p {
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

    .project-topics {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      justify-self: center;
      align-items: center;
      align-self: center;
      width: 90%;
      height: 20%;
      margin: 0;
      padding: 0;
      scroll-snap-type: x mandatory;
    }
  }

  @media only screen and (min-width: 1024px) {
    .project-container {
      min-width: 17vw;
      max-width: 17vw;
      height: 60vh;
      margin-right: 2em;
      font-size: 10px;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 10px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      /* border: 1px solid rgba(100, 100, 100, 0.5); */
      background-color: rgb(34, 34, 34);
    }
    .project-img > img {
      width: 90%;
      height: 90%;
      border-radius: 10px;
    }
    .project-header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: rgb(212, 212, 212);
      min-height: 10%;
      max-height: 10%;
      width: 100%;
      align-content: center;
      font-size: 1.5em;
    }
    .project-container > .project-header > .header-wrapper {
      height: 85%;
      width: 85%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      /* border-bottom: 1px solid gray; */
      font-weight: 900;
    }
    .project-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      height: 35%;
      /* background-color: red; */
      width: 100%;
    }
    .project-urls {
      height: 10%;
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
      width: 100%;
      align-content: center;
      font-weight: 700;
    }
    .project-container > .project-urls > a {
      text-decoration: none;
      font-size: 1.5em;
    }
    .project-description {
      height: 20%;
      /* background-color: blue; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 1.3em;
    }
    .project-description > .description-wrapper {
      min-height: 85%;
      max-height: 85%;
      width: 85%;
      display: flex;
      flex-flow: column;
      align-content: center;
      overflow: hidden;
    }
    .project-description > .description-wrapper > p {
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
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
      height: 20%;
      margin: 0;
      padding: 0;
      /* overflow-x: scroll; */
      scroll-snap-type: x mandatory;
      /* background-color: chartreuse; */
    }
  }
</style>

<div class="project-container">
  <div class="project-header">
    <div class="header-wrapper">
      <p>{projectName}</p>
    </div>
  </div>
  <div class="project-img">
    <img src={repoImg} alt="" />
  </div>
  <div class="project-urls">
    <a href={demoUrl}>Demo</a>
    <a href={repoUrl}>Repository</a>
  </div>
  <div class="project-description">
    <div class="description-wrapper">
      <p>{description}</p>
    </div>
  </div>
  <div class="project-topics">
    {#each topics as tag}
      <Topic {tag} />
    {/each}
  </div>
</div>
