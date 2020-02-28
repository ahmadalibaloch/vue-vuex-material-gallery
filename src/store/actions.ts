import { Commit } from 'vuex';

import axios from '../axiosConfig';
import { AppState } from './AppState';
import {
	LIST_IMGRS, SET_IMGURS, SET_ERROR,
	SET_LOADING_RESULTS, SET_SORT, SET_SECTION, SET_WINDOW, SET_PAGE,
} from './actionTypes';


type ActionParam = { commit: Commit };
const actions = {
	[LIST_IMGRS](
		{ commit, state }: { commit: Commit; state: AppState },
	): void {
		const {
			section = state.section, sort = state.sort, page = state.page, window = state.window,
		} = state;
		commit(SET_IMGURS, []);
		commit(SET_ERROR, '');
		commit(SET_LOADING_RESULTS, true);
		axios.get(`gallery/${section}/${sort}/${window}/${page}`).then(r => r.data.data).then(imgurs => {
			commit(SET_IMGURS, imgurs);
		}, error => {
			commit(SET_ERROR, error);
		}).finally(() => {
			commit(SET_LOADING_RESULTS, false);
		});
	},
	[SET_SORT]({ commit }: ActionParam, sort: string): void {
		commit(SET_SORT, sort);
	},
	[SET_SECTION]({ commit }: ActionParam, section: string): void {
		commit(SET_SECTION, section);
	},
	[SET_WINDOW]({ commit }: ActionParam, window: string): void {
		commit(SET_WINDOW, window);
	},
	[SET_PAGE]({ commit }: ActionParam, page: number): void {
		commit(SET_PAGE, page);
	},
};

export default actions;
