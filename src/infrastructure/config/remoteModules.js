

export const REMOTE_MODULES = {
  AUTH: {
    name: 'auth',
    url: 'http://localhost:5001/remoteEntry.js',
    scope: 'auth',
    modules: {
      APP: './App',
      LOGIN: './Login',
    },
  },
};

export const getRemoteModuleConfig = (moduleName) => {
  return REMOTE_MODULES[moduleName];
};

export const getAllRemoteModules = () => {
  return Object.values(REMOTE_MODULES);
};
