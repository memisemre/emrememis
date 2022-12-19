import { githubAPI } from "./js/githubAPI.js";
import { loginAnimation } from "./js/loginAnimation.js";
function startApp(){
      githubAPI();
      loginAnimation();
};
startApp();