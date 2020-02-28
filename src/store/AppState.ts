import { Image } from '../ImageType';

export type AppState = {
	imgurs: Image[];
	loadingResults: boolean;
	sectionOptions: string[];
	section: string;
	sortOptions: string[];
	sort: string;
	windowOptions: string[];
	window: string;
	pageOptions: number[];
	page: number;
	error: string;
};
