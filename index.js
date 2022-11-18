import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')

// function iterates over object and pulls emotion tags only if they are not already shown
function getEmotionsArray() {
    const emotionsArray = []
    for (let emotions of catsData){
        for (let catEmotion of emotions.emotionTags){
            if (!emotionsArray.includes(catEmotion)){
                emotionsArray.push(catEmotion)
            }
        }
    }
    return emotionsArray
}



// render the emotions out on to the page
function renderEmotionsArray() {
    let emotions = getEmotionsArray()
    for (let emotion of emotions){
    emotionRadios.innerHTML += `
    <div class="radio">
        <label for="${emotion}" class="emotion-radio">${emotion}</label>
        <input type="radio" id="${emotions} class="radio-button">
    </div>
    `
    }
}

renderEmotionsArray()
