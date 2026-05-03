const toArray = <T>(item: T | T[] | null | undefined): T[] => {
  if (item == null) return [];
  return Array.isArray(item) ? item : [item];
};

const toElement = (item: string | Element): Element => {
  if (typeof item === "string") {
    const p = document.createElement("p");
    p.className = "paragraph";
    p.textContent = item;
    return p;
  }

  return item;
};

export type PopupOptions = {
  /**
   * The title of the popup.
   *
   * Displayed at the top of the modal and used as its name for screen readers.
   *
   * If omitted or set to an empty string, the dialog will use the default title of "Alert".
   *
   * @default "Alert"
   */
  title?: string;

  /**
   * The content to display within the popup.
   *
   * @default "" // No content
   */
  message?: string | Element | (string | Element)[];

  /**
   * The size of Modal component to display.
   *
   * This controls the width of the Modal.
   *
   * @default "auto"
   */
  size?: "auto" | "small" | "medium" | "large";

  /**
   * Whether the primary action (represented by the 'OK' button) is destructive.
   *
   * Examples of destructive actions include deleting data or making an irreversible change.
   * In this case, we're likely using the popup to get the user's confirmation before
   * proceeding with a destructive action.
   *
   * If true, the OK button will be displayed in red.
   *
   * @default false
   */
  isDestructive?: boolean;

  /**
   * The label for the primary action button.
   *
   * If omitted or set to an empty string, the primary button will use the default label of "OK".
   *
   * @default "OK"
   */
  primaryLabel?: string;

  /**
   * The label for the secondary action button.
   *
   * If omitted or set to an empty string, no secondary action button will be displayed.
   *
   * @default "" // No secondary button
   */
  secondaryLabel?: string;
};

/**
 * Display a Modal and handle user interaction with Promises.
 *
 * Similar to the native `window.alert()` and `window.confirm()` but async, configurable, and
 * consistent across browsers.
 *
 * @returns a Promise that resolves once the modal is dismissed. The resolved value is:
 * - `true` if the user clicked the primary button
 * - `false` if the user clicked the secondary button
 * - `null` if the user dismissed the modal by other means (e.g., pressing the Escape key)
 */
export const showPopup = ({
  title = "Alert",
  message = "",
  size = "auto",
  isDestructive = false,
  primaryLabel = "OK",
  secondaryLabel = "",
}: PopupOptions) => {
  return new Promise<boolean | null>((resolve) => {
    const id = Math.random().toString(36).slice(-8);
    const modalId = `modal-${id}`;
    const titleId = `modal-${id}-title`;

    // Modal Root
    const dialog = document.createElement("dialog");
    dialog.id = modalId;
    dialog.className = "modal";
    dialog.setAttribute("aria-labelledby", titleId);
    if (size !== "auto") {
      dialog.classList.add(size);
    }

    // Modal Header
    const header = document.createElement("header");
    header.className = "modal-header";
    const h1 = document.createElement("h1");
    h1.id = titleId;
    h1.textContent = title || "Alert"; // Fallback if title is empty
    header.appendChild(h1);
    dialog.appendChild(header);

    // Modal Body
    const body = document.createElement("div");
    body.className = "modal-body";
    const content = toArray(message);
    for (const item of content) {
      if (!item) continue;
      const element = toElement(item);
      body.appendChild(element);
    }
    dialog.appendChild(body);

    // Modal Footer
    const footer = document.createElement("div");
    footer.className = "modal-footer";

    // OK Button
    const primaryButton = document.createElement("button");
    primaryButton.className = "button primary";
    if (isDestructive) {
      primaryButton.classList.add("red");
    }
    primaryButton.textContent = primaryLabel || "OK"; // Fallback if primaryLabel is empty
    primaryButton.addEventListener("click", () => {
      dialog.requestClose("primary");
    });
    footer.appendChild(primaryButton);

    // Cancel Button
    if (secondaryLabel) {
      const secondaryButton = document.createElement("button");
      secondaryButton.className = "button";
      secondaryButton.textContent = secondaryLabel;
      secondaryButton.addEventListener("click", () => {
        dialog.requestClose("secondary");
      });
      footer.appendChild(secondaryButton);
    }

    dialog.appendChild(footer);

    // Handle close event
    dialog.addEventListener("close", () => {
      // Remove from DOM after close animation finishes
      setTimeout(() => {
        dialog.remove();
      }, 1000);

      switch (dialog.returnValue) {
        case "primary":
          resolve(true);
          break;
        case "secondary":
          resolve(false);
          break;
        default:
          resolve(null);
      }
    });

    // Display the popup
    document.body.appendChild(dialog);
    dialog.showModal();
  });
};
