import * as SELECTORS from "./selectors.js";
import { select } from "./utils.js";
let counter = 0;
let fontSizeCounter = 16;
export function loginAnimation(){
      const loginAnimationInterval = setInterval(()=>{
            counter++;
            fontSizeCounter++;
            select(SELECTORS.LOGIN_ANIMATION_TEXT).style.fontSize = `${fontSizeCounter}px`;
            select(SELECTORS.LOGIN_ANIMATION_TEXT).innerHTML = `${counter} %`;
            if(counter === 101){
                  clearInterval(loginAnimationInterval);
                  select(SELECTORS.LOGIN_ANIMATION_TEXT).style.display = "none";
                  setTimeout(()=>{
                        select(SELECTORS.PERSONAL_INFOS_CONTAINER).style.opacity = "1";
                        select(SELECTORS.ABOUT_CONTAINER).style.opacity = "1";
                        select(SELECTORS.SOCIAL_MEDIA_CONTAINER).style.opacity = "1";
                  },200)
            }
      },25)
}