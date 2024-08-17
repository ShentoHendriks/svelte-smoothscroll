# Svelte Smoothscroll

A Svelte 5 compatible smooth scrolling library using LocomotiveScroll V5 for smooth scrolling and parallax effects.

## Features

- **Svelte 5 Compatibility**: Designed specifically for use with Svelte 5.
- **Smooth Scrolling**: Implements smooth scrolling functionality.
- **Parallax Effects**: Enables parallax effects for enhanced visual appeal.
- **SSR Compatible**: Modified to work in SSR applications, ensuring SEO-friendliness.

## Installation

```bash
npm install @shentohendriks/svelte-smoothscroll
```

## Usage

### 1. Wrap your content in `+layout.svelte`

Import the `ScrollWrapper` component and wrap it around the content where you want smooth scrolling and parallax effects:

```svelte
<script>
  import { ScrollWrapper } from '@shentohendriks/svelte-smoothscroll';
  const { children } = $props();
</script>

<ScrollWrapper settings={{smoothWheel: true}}>
  {@render children()}
</ScrollWrapper>
```

### 2. Apply smooth scroll and parallax in `+page.svelte`

Use data attributes to control scrolling behavior:

```svelte
<div data-scroll data-scroll-section class="wrapper">
  <p data-scroll data-scroll-speed="0.10">This moves slow</p>
  <h1 data-scroll data-scroll-speed="0.2">This moves at medium speed</h1>
  <p data-scroll data-scroll-speed="0.25">This moves a little bit faster</p>
  <div data-scroll>This moves at normal speed</div>
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

## Configuration

Pass additional Lenis settings as an object to the `settings` prop of `ScrollWrapper`. For more options, refer to the [LocomotiveScroll documentation](https://scroll.locomotive.ca/docs/#/options).