import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";

import ErrorBoundary from "../Components/ErrorBoundary";
import Http from "../Utils/Http";

const App = ({ children }) => {
  /**
   * effect
   *
   * https://stackoverflow.com/a/37721906/12860308
   * Passive event listeners are an emerging web standard, new feature shipped
   * ...in Chrome 51 that provide a major potential boost to scroll performance.
   * {@link https://blog.chromium.org/2016/05/new-apis-to-help-developers-improve.html Chrome Release Notes.}.
   *
   * It enables developers to opt-in to better scroll performance by eliminating the need for scrolling to block
   * .. on touch and wheel event listeners.
   */
  useEffect(() => {
    const events = ["touchstart", "scroll"];

    events.forEach((event) =>
      document.addEventListener(event, () => {}, {
        passive: true,
      }),
    );

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, () => {}, {
          passive: false,
        }),
      );
    };
  }, []);

  return (
    <ErrorBoundary>
      <SWRConfig
        value={{
          fetcher: (url) => Http.get(url).then((data) => data),
          dedupingInterval: 1000 * 15,
          shouldRetryOnError: false,
          revalidateOnFocus: false,
          errorRetryInterval: 0,
          errorRetryCount: 2,
        }}
      >
        {children}
      </SWRConfig>
      <ToastContainer
        pauseOnFocusLoss={false}
        closeOnClick={false}
        position="top-right"
        autoClose={4000}
        hideProgressBar
        pauseOnHover
        newestOnTop
        rtl={false}
        draggable
      />
    </ErrorBoundary>
  );
};

export default App;
