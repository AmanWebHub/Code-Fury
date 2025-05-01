$(document).ready(function () {
  // Duplicate the gallery items
  function duplicateGalleryItems() {
      const gallery = $("#image-gallery");
      const items = gallery.children().clone(); // Clone all the gallery items
      gallery.append(items); // Append the cloned items to the gallery
  }

  // Call the duplication function
  duplicateGalleryItems();

  // Scroll function with looping
  $(document).on("wheel", function (event) {
      const gallery = $("#image-gallery");

      const speedMultiplier = 1.5; // Adjust this value to change the speed (1.5 is faster, 0.5 is slower)
      const scrollAmount = (event.originalEvent.deltaY > 0 ? -100 : 100) * speedMultiplier;

      gallery.scrollLeft(gallery.scrollLeft() + scrollAmount);

      if (gallery.scrollLeft() + gallery.outerWidth() >= gallery[0].scrollWidth) {
          gallery.scrollLeft(0); // Loop to the beginning
      } else if (gallery.scrollLeft() <= 0) {
          gallery.scrollLeft(gallery[0].scrollWidth - gallery.outerWidth()); // Loop to the end
      }
  });
});


$(document).ready(function() {
  $('.questionsCard').on('click', function() {
      var icon = $(this).find('.questionsCard-icon');
      icon.toggleClass('rotate');
  });
});
