<script>
  import { isActive, url } from "@sveltech/routify";
  import { afterUpdate } from "svelte";
  // Mobile menu
  let narrow;
  let windowWidth;
  handleResize();
  function handleResize() {
    windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
      narrow = true;
    } else {
      narrow = false;
    }
  }
  let mobileNavOpen = false;
  function toggleMenu() {
    mobileNavOpen = !mobileNavOpen;
    if (mobileNavOpen) {
      document.documentElement.classList.add("u-kill-scroll");
      document.body.classList.add("u-kill-scroll");
    } else {
      document.documentElement.classList.remove("u-kill-scroll");
      document.body.classList.remove("u-kill-scroll");
    }
  }
  // Main nav
  let links = [];
  $: links = [
    ["/about", "about"],
    ["/skills", "skills"],
    ["/lists", "lists"],
    ["/projects", "projects"]
  ].map(([path, name]) => {
    return {
      name,
      href: $url(path),
      active: $isActive(path),
      activex: $isActive(path)
    };
  });
</script>

<style>
  .activex > a {
    color: rgb(255, 255, 255) !important;
    font-weight: 800;
  }
  .int-skills {
    border-right: solid 1px transparent;
  }
  .int-about {
    border-top: solid 1px transparent;
  }
  .int-skills > a {
    font-size: 2.5vh;
    text-decoration: none;
    color: rgb(184, 184, 184);
    letter-spacing: 0.4em;
    margin-top: -0.4em;
    z-index: 10;
  }
  .int-lists {
    border-left: solid 1px transparent;
  }
  .int-lists > a {
    font-size: 2.2vh;
    text-decoration: none;
    color: rgb(184, 184, 184);
    letter-spacing: 0.4em;
    margin-bottom: -0.4em;
    z-index: 10;
  }
  .int-about > a,
  .int-projects > a {
    font-size: 2.2vh;
    text-decoration: none;
    color: rgb(184, 184, 184);
    letter-spacing: 0.4em;
    margin-right: -0.4em;
  }
  .c-mobile-header {
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1000;
    width: 100%;
  }

  .o-container button {
    color: rgb(184, 184, 184);
  }

  .web-menu {
    display: flex;
    justify-content: center;
  }
  button {
    background-color: black;
    border: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 959px) {
    .c-nav-toggle > button {
      font-size: 7vh;
    }
  }
  @media only screen and (min-width: 1024px) {
    .web-nav {
      height: 100%;
      width: 100%;
      position: relative;
    }
    .about {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4vh;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .projects {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 4vh;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .skills {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 4vh;
      height: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
    .lists {
      position: absolute;
      top: 0;
      right: 0;
      width: 4vh;
      height: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
    .int-skills {
      height: fit-content;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2.9em 0;
    }
    .int-lists {
      height: fit-content;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2.9em 0;
    }
    .int-about,
    .int-projects {
      height: 100%;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.7em;
    }
    .skills > .int-skills > a {
      transform: rotate(270deg);
    }
    .lists > .int-lists > a {
      transform: rotate(90deg);
    }
  }
</style>

<svelte:window on:resize={handleResize} />

{#if !narrow}
  <div class="web-nav">
    {#each links as { name, href, active, activex }}
      <div class={name}>
        <div class="int-{name}" class:activex>
          <a {href} class:active>{name}</a>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div class="c-mobile-header">
    <div class="o-container">
      <div class="c-nav-logo-holder">
        <div class="c-nav-toggle">
          {#if mobileNavOpen}
            <button on:click={toggleMenu}>
              <span class="u-sr-only" style="display:none">Close menu</span>
              ~/
            </button>
          {:else}
            <button on:click={toggleMenu}>
              <span class="u-sr-only" style="display:none">Open menu</span>
              ~/
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
  {#if mobileNavOpen}
    <nav class="nav-mobile">
      {#each links as { name, href, active }}
        <a {href} class="mobile-{name}" class:active on:click={toggleMenu}>
          /{name}
        </a>
      {/each}
    </nav>
  {/if}
{/if}
