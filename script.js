


function showContent(tabIndex, event) {
  event.preventDefault();

  // Hide all content elements
  var contentElements = document.getElementsByClassName("content");
  for (var i = 0; i < contentElements.length; i++) {
    contentElements[i].classList.remove("active");
  }

  // Show the selected content element
  var selectedContent = document.getElementById("content-" + tabIndex);
  selectedContent.classList.add("active");

  // Remove "active" class from all images
  var images = document.getElementsByClassName("reveal");
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  // Add a delay before adding "active" class to the images
  setTimeout(function () {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.add("active");
    }
  }, 100); // Adjust the delay time as needed
}

var lastScrollTop = 0;

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  var windowheight = window.innerHeight;
  var revealpoint = 50;

  for (var i = 0; i < reveals.length; i++) {
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealbottom = reveals[i].getBoundingClientRect().bottom;

    // Check if the top or bottom of the element is within the visible window area
    if ((revealtop < windowheight - revealpoint && revealtop > 0) || (revealbottom < windowheight && revealbottom > 0)) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// window.addEventListener('scroll', reveal);
window.addEventListener('scroll', function() {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  // Check the scroll direction
  if (st > lastScrollTop) {
    // Scrolling down
    reveal();
  } else {
    // Scrolling up
    reveal();
  }

  lastScrollTop = st <= 0 ? 0 : st;
});


// Function to change the background color when scrolling
function changeBackgroundColorOnScroll() {
  const body = document.body;
  const scrollHeight = body.scrollHeight;
  const windowHeight = window.innerHeight;
 

  // Calculate the percentage scrolled
  const scrollPercentage = (window.scrollY / (scrollHeight - windowHeight)) * 100;

  // Change background color based on the scroll percentage
  if (scrollPercentage < 50) {
    body.style.backgroundColor = "#f0f0f0"; // Initial color
  } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
    body.style.backgroundColor = "#ffcc66"; // New color when scrolled more than 50% but less than 75%
  } else {
    body.style.backgroundColor = "#010101"; // New color when scrolled more than 75%
    
  }
}

// Attach the event listener to the scroll event
window.addEventListener("scroll", changeBackgroundColorOnScroll);


