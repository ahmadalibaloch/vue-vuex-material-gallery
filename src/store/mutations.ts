import { AppState } from './AppState';
import {
	SET_IMGURS, SET_SECTION, SET_SORT,
	SET_WINDOW, SET_PAGE, SET_LOADING_RESULTS, SET_ERROR,
} from './actionTypes';

const mutations = {
	[SET_IMGURS](state: AppState, imgurs: []) {
		state.imgurs = imgurs;
	},
	[SET_SECTION](state: AppState, section: string) {
		state.section = section;
	},
	[SET_SORT](state: AppState, sort: string) {
		state.sort = sort;
	},
	[SET_WINDOW](state: AppState, window: string) {
		state.window = window;
	},
	[SET_PAGE](state: AppState, page: number) {
		state.page = page;
	},
	[SET_LOADING_RESULTS](state: AppState, loadingResults: boolean) {
		state.loadingResults = loadingResults;
	},
	[SET_ERROR](state: AppState, error: string) {
		state.error = error;
	},
};
export default mutations;
