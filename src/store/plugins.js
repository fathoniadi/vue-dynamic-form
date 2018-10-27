import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
  store.subscribe((_, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

// export default process.env.NODE_ENV !== 'production'
//   ? [createLogger(), localStoragePlugin]
//   : [localStoragePlugin]