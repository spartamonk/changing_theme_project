export const reducer =(state, action)=> {
 if (action.type === 'DARK_MODE') {
  return {
   ...state,
   theme : 'dark-theme'
  }
 }
 if (action.type === 'LIGHT_MODE') {
  return {
    ...state,
    theme: 'light-theme',
  }
 }
 
 
 throw new Error('No matching type action')
}