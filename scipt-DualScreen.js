// New JavaScript

const screenSegments = window.getWindowSegments();

if (screenSegments.length > 1) {
    // now we know the device is a foldable device
    // and we can update CSS classes in our layout

    document.body.classList.add('is-foldable');
    // other changes as required for layout
}

