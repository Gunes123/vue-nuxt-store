export const state = () => ({
  properties: {
    color: null
  }
})
  
export const mutations = {
  SET_PROP(state, color) {
    state.properties.color = color;
  },
}
  
export const actions = {
  setColor({commit}, color) {
    commit('SET_PROP', color);
  },
}