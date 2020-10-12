import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'


Vue.use(Vuex)

import waiters from "./waiters/index"
import customers from "./customers/index"
import product from "./product/index"
import form from './form/index'
import columns from "./columns/index"
import comment from "./comment"

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    waiters,
    product,
    form,
    customers,
    columns,
    comment
  },
  getters
})

export default store
