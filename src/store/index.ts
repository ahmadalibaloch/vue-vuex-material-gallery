import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axiosConfig';

import {
	SET_SECTION, SET_SORT, SET_WINDOW, SET_PAGE, SET_IMGURS,
	SET_ERROR,
	SET_LOADING_RESULTS,
} from './actions';

Vue.use(Vuex);

const SORT_OPTIONS = ['viral', 'top', 'time', 'rising'];
const USER_SECTION = 'user';
const SECTIONS_OPTIONS = ['hot', 'top', USER_SECTION];
const WINDOW_OPTIONS = ['day', 'week', 'month', 'year', 'all'];
// eslint-disable-next-line
const PAGE_OPTIONS = Array.from({ length: 10 }).map((_, i) => (++i));


export default new Vuex.Store(
	{
		state: {
			imgurs: [],
			loadingResults: false,
			sectionOptions: SECTIONS_OPTIONS,
			section: 'hot',
			sortOptions: SORT_OPTIONS,
			sort: 'viral',
			windowOptions: WINDOW_OPTIONS,
			window: 'day',
			pageOptions: PAGE_OPTIONS,
			page: '1',
			error: '',
		},
		mutations: {
			[SET_IMGURS](state, imgurs) {
				state.imgurs = imgurs;
			},
			[SET_SECTION](state, section) {
				state.section = section;
			},
			[SET_SORT](state, sort) {
				state.sort = sort;
			},
			[SET_WINDOW](state, window) {
				state.window = window;
			},
			[SET_PAGE](state, page) {
				state.page = page;
			},
			[SET_LOADING_RESULTS](state, loadingResults) {
				state.loadingResults = loadingResults;
			},
			[SET_ERROR](state, error) {
				state.error = error;
			},
		},
		actions: {
			list({ commit, state }, {
				section = state.section, sort = state.sort, page = state.page, window = state.window,
			}): void {
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
			[SET_SORT]({ commit }, sort): void {
				commit(SET_SORT, sort);
			},
			[SET_SECTION]({ commit }, section): void {
				commit(SET_SECTION, section);
			},
			[SET_WINDOW]({ commit }, window): void {
				commit(SET_WINDOW, window);
			},
			[SET_PAGE]({ commit }, page): void {
				commit(SET_PAGE, page);
			},
		},
		getters: {
			loadingResults: state => state.loadingResults && state.error.length < 1,
			noResults: state => !state.loadingResults && state.error.length < 1,
			errorLoadingResults: state => state.error,
			showSortOption: state => state.section === USER_SECTION,
		},
	});
