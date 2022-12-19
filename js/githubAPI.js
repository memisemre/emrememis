import * as SELECTORS from "./selectors.js";
import { select } from "./utils.js";
let stars = 0;
export function githubAPI(){
      fetch("https://api.github.com/users/memisemre")
      .then(res=>res.json())
      .then((res)=>{
            select(SELECTORS.GITHUB_REPOS).innerHTML = `${res.public_repos}`;
            select(SELECTORS.GITHUB_FOLLOWERS).innerHTML = `${res.followers}`;
      })
      fetch("https://api.github.com/users/memisemre/repos")
      .then(res=>res.json())
      .then((res)=>{
            res.forEach((repo)=>{
                  stars = stars + repo.stargazers_count;
                  select(SELECTORS.GITHUB_STARS).innerHTML = `${stars}`;
            })
      })
}