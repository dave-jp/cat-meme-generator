import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')

emotionRadios.addEventListener('change', highlightSelectedOption)

// create a function that changes the colour of the radio parent that has been selected
function highlightSelectedOption(e) {
    console.log(e.target.id)
}

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

// render the emotions out on to the page from getEmotionsArray
function renderEmotionsArray() {
    let emotionArray = ''
    let emotions = getEmotionsArray()
    for (let emotion of emotions){
    emotionArray += `
    <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input type="radio" id="${emotion}" value="${emotion}" name="emotion-radios">
    </div>
    `
    }
    emotionRadios.innerHTML += emotionArray
}


renderEmotionsArray()