import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
	persist(
		(set, get) => ({
			user: {
				isLoggedIn: false,
				username: "",
			},
			setUser: (data) => set({ user: data }),
		}),
		{
			name: "filmStudyStorage",
		}
	)
);
