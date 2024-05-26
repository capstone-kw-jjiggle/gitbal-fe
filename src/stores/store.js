import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// export const useBearStore = create((set) => ({
// 	bears: 0,
// 	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// 	removeAllBears: () => set({ bears: 0 }),
// }));

export const useUserInfoStore = create(
	persist(
		(set) => ({
			univName: '',
			region: '',
			settingUnivName: (univName) => set({ univName: univName }),
			settingRegion: (region) => set({ region: region }),
		}),
		{
			name: 'user-join-info',
			storage: createJSONStorage(() => sessionStorage), // (optional)이기 때문에 해당 줄을 적지 않으면 'localStorage'가 기본 저장소로 사용된다.
		},
	),
);
