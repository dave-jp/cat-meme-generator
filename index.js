import { catsData } from "./data.js"

// assigning document elements
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-images-btn')
const closeImages = document.getElementById('close-images')

// events
emotionRadios.addEventListener('change', highlightSelectedOption)
getImageBtn.addEventListener('click', openImageContainer)
closeImages.addEventListener('click', closeImageContainer)


// highlight the selected emotion
function highlightSelectedOption(e) {
    let radio = document.getElementsByClassName('radio')
    for (let radios of radio) {
        radios.classList.remove('highlight')
    }
document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

// iterate over data.js and pulls emotion only if they are not already shown
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
        <label for="${emotion}" class="emotion-label">${emotion}</label>
        <input type="radio" class="emotion-selector" id="${emotion}" value="${emotion}" name="emotion-radios">
    </div>
    `
    }
    emotionRadios.innerHTML += emotionArray
}

// open the image container with a fade in transition
function openImageContainer(){
    document.getElementById('image-reel-container').classList.add('visible')
    document.getElementById('image-reel-container').classList.remove('invisible')
}

// return images based on what has been selected
function returnImageArray() {
    
}

// close the image container with a fade out transition
function closeImageContainer() {
    document.getElementById('image-reel-container').classList.add('invisible')
    document.getElementById('image-reel-container').classList.remove('visible')

}
renderEmotionsArray()