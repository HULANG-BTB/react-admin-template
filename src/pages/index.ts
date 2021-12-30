import Home from './home'
import Test from './test'

export const components = { Home, Test }
export type ComponentName = keyof typeof components
