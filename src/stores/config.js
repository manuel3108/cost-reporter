import { readable, writable } from 'svelte/store';

export const fileName = readable("config.json");
export const fileId = writable(undefined);