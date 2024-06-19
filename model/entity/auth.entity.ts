import { UserEntity } from "./user.entity"

export interface AuthEntity {
  loggedIn: boolean
  user: UserEntity
  token: string
  setUser: (user: UserEntity, token: string) => void
  logout: () => void
}