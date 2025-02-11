import { create } from "zustand";

export const useTeacherRender = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
