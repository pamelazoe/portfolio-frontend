<script>
  export let loading = 0; // spinner is activate when this number is non-zero
</script>

<style>

@media only screen and (min-width: 481px) and (max-width: 768px) {
  
  /* display: flex;
align-items: center;
justify-content: center; */
}
  .spinner {
    display: inline-block;
    border: 0.3em solid var(--color-spinner-border, rgb(72, 72, 72));
    background-color: var(--color-spinner-bg, transparent);
    border-radius: 50%;
    width: 0.7em;
    height: 0.7em;
  }

  .spinner.loading {
    border-top-color: var(--color-spinner-border-loading, rgb(128, 128, 128));
    background-color: var(
      --color-spinner-bg-loading,
      var(--color-spinner-bg, transparent)
    );
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="spinner" class:loading={!!loading} />
