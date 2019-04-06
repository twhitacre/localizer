import autodux from 'autodux';

const store = autodux({
  slice: 'store',
  initial: {
    name: 'Localizer',
    version: '0.0.1',
    language: 'en',
    data: {},
  },
});

export const { actions } = store;
export default store;
