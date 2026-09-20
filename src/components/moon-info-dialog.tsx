import { X } from "lucide-react";

type MoonInfoDialogProps = {
  type: "privacy" | "about";
  onClose: () => void;
};

export function MoonInfoDialog({
  type,
  onClose,
}: MoonInfoDialogProps) {
  const isPrivacy = type === "privacy";

  return (
    <div
      className="moon-info-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="moon-info-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="moon-info-dialog">
        <button
          type="button"
          className="moon-info-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {isPrivacy ? (
          <>
            <div className="moon-info-icon">🔒</div>

            <h2 id="moon-info-title" className="moon-info-title">
              Privacy Policy
            </h2>

            <p className="moon-info-updated">
              Last updated: September 20, 2026
            </p>

            <div className="moon-info-content">
              <section>
                <h3>Overview</h3>
                <p>
                  Moon is a quiet journaling space designed to help you
                  pause, reflect, and remember how your days felt.
                </p>
              </section>

              <section>
                <h3>Journal Entries & Local Storage</h3>
                <p>
                  In the current version of Moon, your journal entries are
                  stored locally in your browser using local storage.
                  Your entries are not synced between devices.
                </p>
              </section>

              <section>
                <h3>Accounts</h3>
                <p>
                  Moon does not currently require an account, login, or
                  signup to use the journal.
                </p>
              </section>

              <section>
                <h3>Analytics & Advertising</h3>
                <p>
                  The current Moon client does not use advertising or
                  analytics services.
                </p>
              </section>

              <section>
                <h3>Your Data</h3>
                <p>
                  Because journal entries are stored locally, you control
                  the entries saved by Moon on your device. Clearing
                  Moon's site data or browser storage can permanently
                  remove locally stored journal entries.
                </p>
              </section>

              <section>
                <h3>Deleting Journal Entries</h3>
                <p>
                  You can remove an individual day's entry using the
                  clear option available in Moon. To remove all locally
                  stored Moon data, clear the site's local storage from
                  your browser settings.
                </p>
              </section>

              <section>
                <h3>Third-Party Services</h3>
                <p>
                  Moon does not currently require third-party services
                  to store your journal entries.
                </p>
              </section>

              <section>
                <h3>Changes to This Policy</h3>
                <p>
                  If Moon's data practices change in a future version,
                  this policy may be updated to reflect those changes.
                </p>
              </section>

              <section>
                <h3>Privacy Questions</h3>
                <p>
                  If you have a question about Moon's privacy practices,
                  please use the contact information provided with the
                  version of the app you are using.
                </p>
              </section>
            </div>
          </>
        ) : (
          <>
            <div className="moon-info-icon">🌙</div>

            <h2 id="moon-info-title" className="moon-info-title">
              About Moon
            </h2>

            <p className="moon-about-tagline">
              A quiet place for how the day felt.
            </p>

            <div className="moon-info-content moon-about-content">
              <p>
                Moon is a private journaling space designed to help you
                pause, reflect, and remember how your days felt.
              </p>

              <p>
                Choose a mood, write what is on your mind, and let your
                days become a small collection of moments worth keeping.
              </p>

              <div className="moon-about-credit">
                <span>Version 1.0.0</span>
                <span>Created by Asmit</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}