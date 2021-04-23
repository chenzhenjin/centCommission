import Vue from 'vue'
import './element'
import './support'
import '@/styles/vab.scss'
import '@/remixIcon'
import '@/config/permission'
import '@/utils/errorLog'
import VabPermissions from 'zx-layouts/Permissions'
import Vab from '@/utils/vab'

Vue.use(Vab)
Vue.use(VabPermissions)
