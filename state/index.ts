import {create}  from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {createJSONStorage, persist} from 'zustand/middleware'
import { AuthEntity } from "@/model/entity/auth.entity";
import { UserEntity } from "@/model/entity/user.entity";

export const useAuthStore = create<AuthEntity>()(
  persist(
    set => ({
      loggedIn: false,
      user: {id: '', name: '', email: ''},
      token: '',
      setUser: (user: UserEntity, token: string) => set({user: user, loggedIn: true, token: token}),
      logout: () => set({loggedIn: false, token: '', user: {id: '', name: '', email: ''}})
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)