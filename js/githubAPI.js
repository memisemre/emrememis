import { GITHUB_REPOS , GITHUB_STARS , GITHUB_FOLLOWERS } from "./selectors.js";
let stars = 0;
export function githubAPI(){
      fetch("https://api.github.com/users/memisemre")
      .then(res=>res.json())
      .then((res)=>{
            GITHUB_REPOS.innerHTML = `${res.public_repos}`;
            GITHUB_FOLLOWERS.innerHTML = `${res.followers}`;
      })
      fetch("https://api.github.com/users/memisemre/repos")
      .then(res=>res.json())
      .then((res)=>{
            res.forEach((repo)=>{
                  stars = stars + repo.stargazers_count;
                  GITHUB_STARS.innerHTML = `${stars}`;
            })
      })
}