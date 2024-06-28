/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  userId: number;
}

export const useStore = create(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (photo: Photo) =>
        set((state: any) => ({ favorites: [...state.favorites, photo] })),
      removeFavorite: (id: number) =>
        set((state: any) => ({
          favorites: state.favorites.filter((photo: Photo) => photo.id !== id),
        })),
    }),
    { name: "favorite-storage" }
  )
);
