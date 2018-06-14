// namespace 'namespace' is an alias and it is loaded from app.json from value namespace
import namespace from "namespace";

const Cfg = {

  NAMESPACE : namespace.namespace,
  CSS: namespace.cssPrefix + "-",

  SPA_CCR_KEY : "spaCCRkey",
  SPA_AUTHENTICATED_CCR_KEY : "spaAuthenticatedCCRkey"
};

export default Cfg;
