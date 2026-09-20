import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PwaRegister } from "@/components/pwa-register";

import appCss from "../styles.css?url";

const APP_NAME = "Moon";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover",
      },

      {
        title: APP_NAME,
      },

      {
        name: "description",
        content:
          "A quiet daily journal. Pick how the day felt, write a few lines, and watch the year fill with color.",
      },

      {
        name: "theme-color",
        content: "#F2EDE6",
      },

      {
        name: "mobile-web-app-capable",
        content: "yes",
      },

      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },

      {
        name: "apple-mobile-web-app-title",
        content: "Moon",
      },

      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },

      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },

      {
        rel: "apple-touch-icon",
        href: "/moon.png",
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html
      lang="en"
      className="antialiased"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>

      <body className="bg-bg text-fg font-sans">
        <PreviewHostBridge />

        <PwaRegister />

        <AuthProvider>
          <Outlet />
        </AuthProvider>

        <Scripts />
      </body>
    </html>
  );
}