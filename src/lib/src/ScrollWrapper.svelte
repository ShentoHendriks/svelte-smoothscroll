<script>
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { initLocomotiveScroll, locomotiveScroll } from './locomotiveScroll.js';
	import './locomotive-scroll.css';

	let scrollInstance = $state(null);

	const { children, settings } = $props();

	$effect(async () => {
		if (browser) {
			scrollInstance = await initLocomotiveScroll(settings);
			return () => {
				scrollInstance?.destroy();
			};
		}
	});

	afterNavigate(() => {
    if (browser && scrollInstance && $page) {
      console.log('Navigated, updating scroll');
      scrollInstance.update();
      scrollInstance.scrollTo(0, { duration: 0, disableLerp: true });
    }
  });
</script>

<div data-scroll-container>
	{@render children()}
</div>