# Svelte Smoothscroll
This Svelte smoothscrolling library is only compatible with Svelte 5. It uses the LocomotiveScroll V5 for smooth scrolling and parallex effect

## Features
* **SSR Compatible**: This library is loaded after the DOM is mounted and is SSR-friendly. The normal Locomotivescroll library is client-side, but I modified it to make it work in SSR application, therefore making it also SEO-friendly.

## Getting started
1. First install the libary.
2. Go to your `+layout.svelte` file and import Library and wrapping it around your content you want smooth scrolling and parallex on:
```svelte
<script>
  import ScrollWrapper from "$lib/src/ScrollWrapper.svelte";
  const {
    children
  } = $props();
</script>

<ScrollWrapper settings={{smoothWheel: true}}>
  {@render children()}
</ScrollWrapper>
```
3. You can find more additional Lenis settings. Just pass it as an object to the settings prop (like in the example): https://scroll.locomotive.ca/docs/#/options

4. Inside a `+page.svelte` you can add smoothscroll and parallex just like you normally would:
```svelte
<div data-scroll data-scroll-section class="wrapper"
>
  <h1 data-scroll data-scroll-speed="0.2">
    Welcome to your library project
  </h1>
  <p>
    Create your package using @sveltejs/package and preview/showcase your work
    with SvelteKit
  </p>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
</div>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 200vh;
  }
</style>
```