// --------------------------------------------------------------------------------------
// Enhancements
// --------------------------------------------------------------------------------------
// This script adds small UX tweaks for users with JavaScript enabled. In the spirit of
// progressive enhancement, sites will be fully functional without it.
//
// This script does the following:
// - Prevents layout shift when Modal, Drawer, and mobile Sidebar are opened
// - Makes Sidebar fill available vertical space when Header is scrolled in/out of view
// - Enables use of the `if-js-enabled` and `if-js-disabled` utility classes
// --------------------------------------------------------------------------------------

(async function () {
  /////////////////////////////
  //       Initialize        //
  /////////////////////////////

  // Ensure we're in a browser environment and exit early if not
  if (typeof window === "undefined" || typeof document === "undefined") {
    console.warn(
      "The Progressive Enhancements script was loaded in a non-browser environment. It's designed to run exclusively in the browser, so it won't do anything here.",
    );
    return;
  }

  // Wait for document to be done loading before we continue
  await new Promise<void>((resolve) => {
    if (document.readyState !== "complete") {
      window.addEventListener("load", () => resolve());
    } else {
      resolve();
    }
  });

  /////////////////////////////
  //     Globals & Utils     //
  /////////////////////////////

  const $root = document.querySelector("html");
  const $app = document.querySelector<HTMLElement>(".app");
  const $appBody = document.querySelector<HTMLElement>(".app-body");
  const $appContent = document.querySelector<HTMLElement>(".app-content");
  const $headerContent = document.querySelector<HTMLElement>(
    ".app-header-content",
  );
  const $sidebarContent = document.querySelector<HTMLElement>(
    ".app-sidebar-content",
  );
  const $sidebarToggle = document.querySelector<HTMLInputElement>(
    ".app-sidebar-toggle input[type='checkbox']",
  );

  const smallWidthMediaQuery = window.matchMedia("(width < 55rem)");

  const hasVerticalOverflow = () =>
    $root != null &&
    $appContent != null &&
    $appContent.getBoundingClientRect().bottom > $root.clientHeight;

  const isOverflowHidden = () =>
    $app != null && window.getComputedStyle($app).overflowY === "hidden";

  //////////////////////////////
  //   Define Enhancements    //
  //////////////////////////////

  const setScrollGutter = () => {
    const shouldReserveGutter = hasVerticalOverflow() && isOverflowHidden();

    if ($headerContent) {
      $headerContent.dataset.jrgScrollGutter = String(shouldReserveGutter);
    }
    if ($appContent) {
      $appContent.dataset.jrgScrollGutter = String(shouldReserveGutter);
    }
  };

  const setJsEnabled = () => {
    if ($app) {
      $app.dataset.jrgJsEnabled = "true";
    }
  };

  const setSidebarHeight = () => {
    // Ensure all necessary elements are present
    if (!$root || !$sidebarContent || !$appBody) {
      return;
    }

    // On narrow viewports (where sidebar is an overlay), remove the inline style for height
    if (smallWidthMediaQuery.matches) {
      $sidebarContent.style.height = "";
      return;
    }

    // On medium and wide viewports, resize the sidebar to fill available vertical space
    const start = Math.max(0, $appBody.getBoundingClientRect().top);
    const end = $root.clientHeight;
    const availableHeight = Math.floor(end - start);
    $sidebarContent.style.height = `${availableHeight}px`;
  };

  //////////////////////////////
  //  Set Up Listeners & Run  //
  //////////////////////////////

  // Resize listeners
  window.addEventListener("resize", setSidebarHeight);
  window.addEventListener("resize", setScrollGutter);

  // Scroll listener
  window.addEventListener("scroll", () => {
    // Only resize the sidebar if the body content overflows the page. This
    // prevents weird behavior when the browser has elastic scrolling.
    if (hasVerticalOverflow()) setSidebarHeight();
  });

  // Attach sidebar toggle listener if toggle is present
  $sidebarToggle?.addEventListener("change", setScrollGutter);

  // Add Modal/Drawer toggle listener
  document
    .querySelectorAll<HTMLDialogElement>("dialog.modal, dialog.drawer")
    .forEach((dialog) => {
      dialog.addEventListener("toggle", setScrollGutter);
    });

  // Automatically add listeners to any new Modals/Drawers
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (
          node instanceof HTMLDialogElement &&
          (node.classList.contains("modal") ||
            node.classList.contains("drawer"))
        ) {
          node.addEventListener("toggle", setScrollGutter);
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Run all enhancements on initial load
  setSidebarHeight();
  setScrollGutter();
  setJsEnabled();
})().catch(console.error);
