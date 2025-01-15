/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/


window.addEventListener('DOMContentLoaded', () => {
  const photo = 'img/participant.png';
  const participantsData = [{
    name: "Хозе-Рауль Капабланка",
    subtitle: "Чемпион мира по шахматам",
    img: photo
  }, {
    name: "Эммануил Ласкер",
    subtitle: "Чемпион мира по шахматам",
    img: photo
  }, {
    name: "Александр Алехин",
    subtitle: "Чемпион мира по шахматам",
    img: photo
  }, {
    name: "Арон Нимцович",
    subtitle: "Чемпион мира по шахматам",
    img: photo
  }, {
    name: "Рихард Рети",
    subtitle: "Чемпион мира по шахматам",
    img: photo
  }, {
    name: "Остап Бендер",
    subtitle: "Гроссмейстер",
    img: photo
  }];

  // slider with participants

  const carouselInner = document.querySelector('.carousel__inner'),
    nextSlide = document.querySelector('.carousel__next'),
    prevSlide = document.querySelector('.carousel__prev');
  let participantsToShow = getParticipantsToShow();
  let currentIndex = 0;
  function getParticipantsToShow() {
    const width = window.innerWidth;
    if (width <= 768) {
      return 1;
    } else if (width <= 992) {
      return 2;
    } else {
      return 3;
    }
  }
  function populateParticipants() {
    carouselInner.innerHTML = '';
    for (let i = 0; i < participantsToShow; i++) {
      if (currentIndex + i < participantsData.length) {
        const participantDiv = document.createElement('div');
        participantDiv.classList.add('participant', 'show', 'fade');
        participantDiv.innerHTML = `
                    <div class="participant__circle">
                        <img loading="lazy" src="${participantsData[currentIndex + i].img}" alt="participant">
                    </div>
                    <div class="participant__name">${participantsData[currentIndex + i].name}</div>
                    <div class="participant__subtitle">${participantsData[currentIndex + i].subtitle}</div>
                    <div class="participant__btn">Подробнее</div>
                `;
        carouselInner.appendChild(participantDiv);
      }
    }
    updateCurrentIndexDisplay();
  }
  function updateCurrentIndexDisplay() {
    const currentText = document.querySelector('.carousel__current');
    currentText.textContent = `${Math.min(currentIndex + participantsToShow, participantsData.length)} / ${participantsData.length}`;
  }
  window.addEventListener('resize', () => {
    const newParticipantsToShow = getParticipantsToShow();
    if (newParticipantsToShow !== participantsToShow) {
      participantsToShow = newParticipantsToShow;
      currentIndex = 0;
      populateParticipants();
    }
  });
  let autoScrollInterval;
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      currentIndex += participantsToShow;
      if (currentIndex >= participantsData.length) {
        currentIndex = 0;
      }
      updateButtonsState();
      populateParticipants();
    }, 4000);
  }
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  function nextParticipants() {
    currentIndex += participantsToShow;
    if (currentIndex >= participantsData.length) {
      currentIndex = participantsData.length - participantsToShow;
    }
    populateParticipants();
    updateButtonsState();
  }
  function prevParticipants() {
    currentIndex -= participantsToShow;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    populateParticipants();
    updateButtonsState();
  }
  function updateButtonsState() {
    if (currentIndex <= 0) {
      prevSlide.classList.add('disabled');
      prevSlide.disabled = true;
    } else {
      prevSlide.classList.remove('disabled');
      prevSlide.disabled = false;
    }
    if (currentIndex + participantsToShow >= participantsData.length) {
      nextSlide.classList.add('disabled');
      nextSlide.disabled = true;
    } else {
      nextSlide.classList.remove('disabled');
      nextSlide.disabled = false;
    }
  }
  prevSlide.classList.add('disabled');
  prevSlide.disabled = true;
  nextSlide.addEventListener('click', () => {
    if (!nextSlide.disabled) {
      stopAutoScroll();
      nextParticipants();
    }
  });
  prevSlide.addEventListener('click', () => {
    if (!prevSlide.disabled) {
      stopAutoScroll();
      prevParticipants();
    }
  });
  populateParticipants();
  updateButtonsState();
  startAutoScroll();

  // slider with stages

  const nextStage = document.querySelector('.stages__next'),
    prevStage = document.querySelector('.stages__prev'),
    cardStage = document.querySelector('.stages__list'),
    currentStage = document.querySelectorAll('.stages__current span');
  let offset = 0;
  let currentSpan = 0;
  function updateCurrentStage() {
    currentStage.forEach((span, index) => {
      span.classList.remove('active');
      if (index === currentSpan) {
        span.classList.add('active');
      }
    });
  }
  function nextStageCard() {
    if (offset >= 1396) {
      offset = 0;
      currentSpan = 0;
    } else {
      offset += 349;
      currentSpan++;
    }
    cardStage.style.transform = `translateX(-${offset}px)`;
    updateCurrentStage();
  }
  function prevStageCard() {
    if (offset == 0) {
      offset = 1396;
      currentSpan = currentStage.length - 1;
    } else {
      offset -= 349;
      currentSpan--;
      if (currentIndex < 0) {
        currentIndex = 0;
      }
    }
    cardStage.style.transform = `translateX(-${offset}px)`;
    updateCurrentStage();
  }
  updateCurrentStage();
  nextStage.addEventListener('click', nextStageCard);
  prevStage.addEventListener('click', prevStageCard);
});
/******/ })()
;
//# sourceMappingURL=script.js.map