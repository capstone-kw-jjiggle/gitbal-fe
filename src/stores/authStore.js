import { create } from 'zustand';

import isTokenPresent from '@/utils/isTokenPresent';

const useAuthStore = create((set) => ({
	isLoggedIn: isTokenPresent(),
	logout: () => set({ isLoggedIn: false }),
	login: () => set({ isLoggedIn: true }),
}));

export default useAuthStore;
