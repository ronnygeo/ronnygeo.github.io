function App() {
  React.useEffect(() => {
    // Initialize Foundation
    if (typeof $ !== 'undefined' && typeof $.fn.foundation !== 'undefined') {
      $(document).foundation();
    } else {
      console.error("jQuery or Foundation is not loaded - App.js");
    }

    // Initialize SmoothScroll
    if (typeof $ !== 'undefined' && typeof $.fn.smoothScroll !== 'undefined') {
      $('a').smoothScroll();
    } else {
      console.error("jQuery or SmoothScroll is not loaded - App.js");
    }

    // Initialize ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
      window.sr = ScrollReveal({ reset: true });
      // Note: Specific sr.reveal() calls will be handled in individual components or a dedicated effect.
    } else {
      console.error("ScrollReveal is not loaded - App.js");
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      {/* Placeholder for other main page content like modals, if any, can go here or be part of specific components */}
    </div>
  );
}
