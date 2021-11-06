import {isValid} from './utils';
import './style.css'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')
const log = document.getElementById('log')

function submitFormHandler(event) {

  event.preventDefault()
  if (isValid(input.value)){

    const question = {
      text:input.value.trim(),
      date: new Date().toJSON(),
    }
    submitBtn.disabled = true

    //Async request to server to save question
    log.textContent = `Question: ${question.text}, ${question.date}`
    input.value=''

    input.className=''
    submitBtn.disabled = false
  }
}

input.addEventListener('input', ()=>{
  submitBtn.disabled = !isValid(input.value)
})

form.addEventListener('submit', submitFormHandler) //press button event
