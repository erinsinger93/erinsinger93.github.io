import Component from '@ember/component';

const TIMELINE_MARKER_WIDTH = 266;
let prevIdxVisible = 0;

function resetMarker() {
  const marker = document.querySelector('.timeline__marker');
  marker.style.left = '0';
  return true;
}

// Reset the marker on window resize, then debounce until window has finished resizing
let isMarkerReset;
let resizeTimeout;
function resizeListener() {
  if (!isMarkerReset) {
    isMarkerReset = resetMarker();
  } else {
    // clear the timeout
    clearTimeout(resizeTimeout);

    // start timing for event "completion", then reset our boolean
    resizeTimeout = setTimeout(function () {
      isMarkerReset = false;
    }, 250);
  }
}

function updateDescription(target, descriptionElems) {
  const stepId = target.getAttribute('data-step-id');
  const descriptionEl = descriptionElems[parseInt(stepId, 10)];
  descriptionElems[prevIdxVisible].classList.add('hidden');
  setTimeout(function () {
    descriptionEl.classList.remove('hidden');
  }, 500);
  prevIdxVisible = stepId;
}

export default Component.extend({
  timelineItems: [
    {
      age: '3',
      description: 'I got my first sketchbook',
      hidden: false,
    },
    {
      age: '13',
      description: 'I learned basic HTML to make MySpace layouts',
      hidden: true,
    },
    {
      age: '19',
      description:
        'I stumbled into my first computer science class and accidentally loved it',
      hidden: true,
    },
    {
      age: '22',
      description:
        'I graduated from Stanford with a BS in Computer Science concentrating in Human Computer Interaction',
      hidden: true,
    },
    {
      age: '25',
      description: 'I made this fancy timeline',
      hidden: true,
    },
  ],

  didInsertElement() {
    this._super(...arguments);
    this.descriptionElems = document.querySelectorAll(
      '.timeline__step-description'
    );
    window.addEventListener('resize', resizeListener);
  },

  willDestroyElement() {
    this._super(...arguments);
    window.removeEventListener('resize', resizeListener);
  },

  actions: {
    moveMarker(e) {
      const target = e.target;
      if (!target.classList.contains('timeline__indicator')) {
        return;
      }

      const timelineXOffset = document
        .querySelector('.timeline')
        .getBoundingClientRect().left;
      const indicatorBoundaries = target.getBoundingClientRect();
      const indicatorCenter =
        indicatorBoundaries.left -
        timelineXOffset +
        indicatorBoundaries.width / 2;
      const marker = document.querySelector('.timeline__marker');
      const markerXOffset = indicatorCenter - TIMELINE_MARKER_WIDTH / 2;
      const currLeft = parseInt(marker.style.left.slice(0, -2));
      if (currLeft > markerXOffset) {
        marker.classList.add('flipped');
      } else {
        marker.classList.remove('flipped');
      }
      marker.style.left = markerXOffset + 'px';
      updateDescription(target, this.descriptionElems);
    },
  },
});
