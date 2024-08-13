<script>
	import { browser } from '$app/environment';
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

	$effect(() => {
		if (browser && scrollInstance && $page) {
			// Update scroll on route change
			scrollInstance.update();
			// Optionally scroll to top
			scrollInstance.scrollTo(0, { duration: 0, disableLerp: true });
		}
	});
</script>

<div data-scroll-container>
	{@render children()}
</div>