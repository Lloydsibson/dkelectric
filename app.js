// PHOTOSWIPE GALLERY
// 1. Import the Lightbox logic
import PhotoSwipeLightbox from "./vendor/photoswipe/photoswipe-lightbox.esm.js";

// 2. Initialize the gallery
const lightbox = new PhotoSwipeLightbox({
  gallery: "#photoswipe-gallery", // The container ID
  children: "a", // The clickable elements
  // Dynamically import the UI module when a user clicks an image
  pswpModule: () => import("./vendor/photoswipe/photoswipe.esm.js"),
});

lightbox.init();
// END PHOTOSWIPE GALLERY
