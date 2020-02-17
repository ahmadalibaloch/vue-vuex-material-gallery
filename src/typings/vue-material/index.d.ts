/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'vue-material/dist/components' {

	import _Vue from "vue"; // <-- notice the changed import

	// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
	export function MdButton(Vue: typeof _Vue, options?: any): void
	export function MdContent(Vue: typeof _Vue, options?: any): void
	export function MdTabs(Vue: typeof _Vue, options?: any): void
	export function MdMenu(Vue: typeof _Vue, options?: any): void
	export function MdList(Vue: typeof _Vue, options?: any): void
	export function MdDialog(Vue: typeof _Vue, options?: any): void
	export function MdCard(Vue: typeof _Vue, options?: any): void
}
