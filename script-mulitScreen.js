const screenSegments = window.visualViewport.segments;


if (screenSegments) {
    if (screenSegments.length > 1) {
        // now we know there are multiple segments
        // and we can update CSS classes in our layout
        document.body.classList.add('is-foldable');
    
        // Add other changes as required for layout
    }
}