<script>
  import { onMount } from "svelte";
  import ProjectInfo from "../components/ProjectInfo.svelte";
  const proxyUrl = process.env.FING_CORS;
  export let projectList = [];
  $: projectList;
  onMount(async () => {
    const res = await fetch(
      proxyUrl + "https://niche-joke.now.sh/github"
      // , {
      //   headers: {
      //     "Content-Type": "application/json; text/html",
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // }
    )
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
  @media only screen and (min-width: 1024px) {
    .canvas {
      /* display: flex;
      flex-flow: row;
      justify-content: space-evenly;
      align-items: center;
      align-content: center; */
      height: 100%;
      width: 80vw;
      padding: 6vh 10vh;
      /* background-color: rgb(23, 23, 23); */
      border-radius: 20px;
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
    }
    /* .canvas > .project-wrapper::-webkit-scrollbar {
      width: 5px;
    } */
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
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
    {/each}
  </div>
</div>
