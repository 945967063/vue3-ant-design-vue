import useLoginStore from './modules/login';
import useRoutersStore from './modules/routers';
import useConfiguration from './modules/configuration';
export default function useStore() {
  return {
    login: useLoginStore(),
    routers: useRoutersStore(),
    configuration: useConfiguration(),
  };
}
