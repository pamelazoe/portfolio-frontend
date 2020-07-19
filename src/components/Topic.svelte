<script>
  export let tag;
</script>

<style>
  @media only screen and (max-width: 1023px) {
    .topic-wrapper {
      background-color: rgb(65, 65, 65);
      border-radius: 5px;
      padding: 0.5em;
      margin: 0.3em;
      display: flex;
      justify-content: center;
      align-content: center;
      color: white;
      font-weight: 400;
      align-items: center;
      font-size: 0.5em;
      width: -moz-fit-content;
    }
  }
  @media only screen and (min-width: 1024px) {
    .topic-wrapper {
      background-color: rgb(65, 65, 65);
      border-radius: 5px;
      padding: 0.5em;
      margin: 0.3em;
      display: flex;
      justify-content: center;
      align-content: center;
      color: white;
      font-weight: 400;
    }
  }
</style>

<div class="topic-wrapper">
  <p>{tag}</p>
</div>
