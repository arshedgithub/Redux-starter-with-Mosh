import store from "./customStore";
import * as actions from "./actions";

store.dispatch(actions.bugAdded("bug 1"));
console.log("hi");
