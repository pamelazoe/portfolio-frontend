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
  @media only screen and (min-width: 1024px) {
    .project-container {
      min-width: 16vw;
      max-width: 16vw;
      height: 60vh;
      margin-right: 2em;
      font-size: 10px;
      line-height: normal;
      overflow: hidden;
      background-color: black;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      align-content: center;
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
      color: red;
      min-height: 10%;
      max-height: 10%;
      background-color: pink;
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
      overflow-x: scroll;
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
