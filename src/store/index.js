import autodux from 'autodux';

export default autodux({
  slice: 'store',
  initial: {
    name: 'Localizer',
    version: '0.0.1',
    language: 'en',
    data: {},
  },
});