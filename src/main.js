import App from './App.svelte';

function removeInfowarning() {
	// will be replaced
}

const app = new App({
	target: document.body,
	props: {removeInfowarning}
});

export default app;