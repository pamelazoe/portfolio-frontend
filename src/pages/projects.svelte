<script>
  import { onMount } from "svelte";
  import ProjectInfo from "../components/ProjectInfo.svelte";
  import Spinner from "../components/Spinner.svelte";
  const proxyUrl = process.env.FING_CORS;
  export let projectList = [];
  $: projectList;
  onMount(async () => {
    const res = await fetch(proxyUrl + "https://niche-joke.now.sh/github")
      .then(data => data.json())
      .then(x => {
        projectList = x;
        console.log(projectList);
        return projectList;
      })
      .catch(err => console.log(err));
  });
</script>

<style>
  @media only screen and (max-width: 1023px) {
    .canvas {
      height: 100%;
    }
    .canvas > .project-wrapper {
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow-x: scroll;
    }
  }
  @media only screen and (min-width: 1024px) {
    .canvas {
      height: 100%;
      width: 80vw;
      padding: 6vh 10vh;
      /* background-color: rgb(23, 23, 23); */
      border-radius: 20px;
      scrollbar-color: #0e0e0e #2c2c2c;
      scrollbar-width: thin;
    }
    .canvas > .project-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      align-content: center;
      overflow-x: scroll;
      overflow: -moz-scrollbars-horizontal;
      scrollbar-color: #2c2c2c #0e0e0e;
      scrollbar-width: thin;
    }
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
      background-clip: content-box; /* THIS IS IMPORTANT */
    }
    ::-webkit-scrollbar-track-piece {
      border-bottom: 4px dotted gray;
      margin: 0 10em;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: rgba(23, 23, 23, 0.8);
    }
    .canvas > .project-wrapper > .loader {
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
  }
</style>

<div class="canvas">
  <div class="project-wrapper">
    {#each projectList as project}
      <ProjectInfo
        projectName={project.name}
        repoImg={project.image}
        demoUrl={project.demoUrl}
        repoUrl={project.url}
        description={project.description}
        topics={project.topics} />
    {:else}
      <div class="loader">
        <Spinner loading={1} />
      </div>
    {/each}
  </div>
</div>
