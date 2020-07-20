import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		application:  {
			displayName: 'Cost Reporter',
			name: 'cost-reporter',
			url: 'https://cost-reporter.serret.dev'
		}
	}
});

export default app;