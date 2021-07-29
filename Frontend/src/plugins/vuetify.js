import Vue from 'vue';

import Vuetify, {
  VDataTable,
  VTreeview,
  VSelect,
  VList,
  VListGroup,
  VMenu,
  VDatePicker,
  VToolbar,
  VListTile,
  VListTileAvatar,
  VListTileContent
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VDataTable,
    VTreeview,
    VSelect,
    VToolbar,
    VList,
    VListGroup,
    VMenu,
    VDatePicker,
    VListTile,
    VListTileAvatar,
    VListTileContent
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  customProperties: true,
  iconfont: 'md'
});
