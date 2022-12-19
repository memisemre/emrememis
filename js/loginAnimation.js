import { LOGIN_ANIMATION_TEXT, PERSONAL_INFOS_CONTAINER, ABOUT_CONTAINER,SOCIAL_MEDIA_CONTAINER } from "./selectors.js";
let counter = 0;
let fontSizeCounter = 16;
export function loginAnimation(){
      const loginAnimationInterval = setInterval(()=>{
            counter++;
            fontSizeCounter++;
            LOGIN_ANIMATION_TEXT.style.fontSize = `${fontSizeCounter}px`;
            LOGIN_ANIMATION_TEXT.innerHTML = `${counter} %`;
            if(counter === 101){
                  clearInterval(loginAnimationInterval);
                  LOGIN_ANIMATION_TEXT.style.display = "none";
                  setTimeout(()=>{
                        PERSONAL_INFOS_CONTAINER.style.opacity = "1";
                        ABOUT_CONTAINER.style.opacity = "1";
                        SOCIAL_MEDIA_CONTAINER.style.opacity = "1";
                  },200)
            }
      },25)
}