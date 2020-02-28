import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Gallery from '@/components/Gallery.vue';
import store from '../../src/store/index';

describe('Gallery.vue', () => {
	it('renders No results by default', () => {
		const msg = 'No Results';
		const wrapper = shallowMount(Gallery, { store });
		expect(wrapper.text()).to.include(msg);
	});


	it('renders Loading Results on mount', () => {
		const msg = 'Loading Results';
		const wrapper = mount(Gallery, { store });
		expect(wrapper.text()).to.include(msg);
	});
});
