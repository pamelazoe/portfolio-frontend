<script>
  export let tag;
</script>

<div class="topic-wrapper">
  <p>{tag}</p>
</div>

<style>
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .topic-wrapper {
      font-size: 2.8vw;
      background-color: rgb(0, 0, 0);
      border-radius: 5px;
      padding: 0.5em;
      margin: 0.3em;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .topic-wrapper {
      font-size: 1.7vw;
      background-color: rgb(0, 0, 0);
      border-radius: 5px;
      padding: 0.5em;
      margin: 0.3em;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
  @media only screen and (min-width: 1024px) {
    .topic-wrapper {
      background-color: rgb(0, 0, 0);
      border-radius: 5px;
      padding: 0.5em;
      margin: 0.3em;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
</style>
