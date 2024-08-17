<script>
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { initLocomotiveScroll, locomotiveScroll } from './locomotiveScroll.js';
	import './locomotive-scroll.css';

	let scrollInstance = $state(null);

	const { children, settings } = $props();

	async function initializeScroll() {
			if (scrollInstance) {
					scrollInstance.destroy();
			}
			console.log('Initializing new scroll instance');
			scrollInstance = await initLocomotiveScroll(settings);
	}

	afterNavigate(async () => {
			if (browser) {
					await initializeScroll();
					scrollInstance.scrollTo(0, { duration: 1, disableLerp: true });
			}
	});
</script>

<div data-scroll-container>
	{@render children()}
</div>