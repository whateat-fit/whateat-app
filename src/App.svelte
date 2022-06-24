<script lang="ts">
  import logo from './assets/svelte.png';
  import Counter from './lib/Counter.svelte';

  import './global.scss';
</script>

<main class="flex items-center justify-center p-4 flex-col">
  <img class="h-40 w-40 mx-auto" src="{logo}" alt="Svelte Logo" />
  <h1 class="text-[#ff3e00] uppercase text-6xl my-8 mx-auto max-w-[14rem]">Hello Typescript!</h1>
  <Counter />
  <p class="max-w-[14rem] my-4 mx-auto">
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
  </p>
  <p class="max-w-[14rem] my-4 mx-auto">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for the officially supported
    framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
