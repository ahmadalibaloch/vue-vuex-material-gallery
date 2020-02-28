import Vue from 'vue';
import Vuex from 'vuex';
import { AppState } from './AppState';
import mutations from './mutations';
import actions from './actions';

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
			page: 1,
			error: '',
		} as AppState,
		mutations,
		actions,
		getters: {
			loadingResults: state => state.loadingResults && state.error.length < 1,
			noResults: state => !state.loadingResults && state.error.length < 1,
			errorLoadingResults: state => state.error,
			showSortOption: state => state.section === USER_SECTION,
		},
	});
