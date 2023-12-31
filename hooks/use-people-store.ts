import { User } from '@prisma/client';
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type ModalType = 'createStore' | 'deleteStore' | 'createBillboard' | 'updateBillboard' | 'updateCategory' | 'createCategory' | 'createSize' | 'updateSize' | 'createColor' | 'updateColor' | 'createProduct-1' | 'createProduct-2' | 'updateProduct'


interface PeopleStoreProps {
    users?: User[],
    you?: User | undefined,
    onStoreUser: ({ user }: { user: User }) => void;
    onStoreYou: ({ user }: { user: User }) => void;
}

export const usePeopleStore = create<PeopleStoreProps, [["zustand/persist", PeopleStoreProps]]>(
    persist((set) => ({
        users: [],
        you: undefined,
        onStoreUser: ({ user }: { user: User }) => set((state: any) => ({ users: [...state.users, user] })),
        onStoreYou: ({ user }: { user: User }) => set({ you: user })
    }),
        {
            name: 'qwe',
        }
    ))

