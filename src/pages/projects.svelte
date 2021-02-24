<script>
  import { onMount } from "svelte";
  import ProjectInfo from "../components/ProjectInfo.svelte";
  import Spinner from "../components/Spinner.svelte";

  const proxyUrl = process.env.FING_CORS;
  export let projectList = [];
  $: projectList;
  onMount(async () => {
    const res = await fetch("https://niche-joke.now.sh/github", {
      headers: {
        Origin: "https://pamelazoe.now.sh",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((x) => {
        projectList = x;
        console.log(projectList);
        return projectList;
      })
      .catch((err) => console.log(err));
  });
</script>

<div class="canvas">
  <div class="project-wrapper">
    {#each projectList as project}
      <ProjectInfo
        projectName="{project.name}"
        repoImg="{project.image}"
        demoUrl="{project.demoUrl}"
        repoUrl="{project.url}"
        description="{project.description}"
        topics="{project.topics}"
      />
      {:else}
      <div class="loader">
        <Spinner loading="{1}" />
      </div>
    {/each}
  </div>
</div>

<style>
      /* 320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV */

@media only screen and (min-width: 320px) and (max-width: 480px) {
    .canvas {
      width: 100%;
      height: 100%;
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
      justify-content: flex-start;
    }
    .canvas > .project-wrapper > .loader {
      display: flex;
      width: 100%;
      justify-content: center;
  }
  }
@media only screen and (min-width: 481px) and (max-width: 768px) {
    .canvas {
      width: 100%;
      height: 100%;
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
      justify-content: flex-start;
    }
    .canvas > .project-wrapper > .loader {
      display: flex;
      width: 100%;
      justify-content: center;
  }
  }
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
    .canvas {
      height: 100%;
      width: 80vw;
      /* padding: 6vh 10vh; */
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
      justify-content: flex-start;
    }
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    .canvas > .project-wrapper > .loader {
      display: flex;
      width: 100%;
      justify-content: center;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    .canvas {
      height: 100%;
      width: 85vw;
      padding: 2vh 2vh;
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
      justify-content: flex-start;
    }
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    .canvas > .project-wrapper > .loader {
      display: flex;
      width: 100%;
      justify-content: center;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .canvas {
      height: 100%;
      width: 80vw;
      padding: 6vh 10vh;
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
      justify-content: flex-start;
    }
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    .canvas > .project-wrapper > .loader {
      display: flex;
      width: 100%;
      justify-content: center;
  }
}
@media screen and (min-width: 1201px) {
  .canvas {
    height: 100%;
    width: 85vw;
    padding: 2vh 2vh;
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
      justify-content: flex-start;
    }
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgb(55, 55, 55);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
    .canvas > .project-wrapper > .loader {
      display: flex;
      width: 100%;
      justify-content: center;
  }
}
</style>
