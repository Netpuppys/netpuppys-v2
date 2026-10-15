"use client";

import { useEffect, useRef } from "react";

/** Web3Forms' shared hCaptcha site key (free plan — no hCaptcha account needed). */
const SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const SCRIPT_SRC = "https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off";

interface HCaptchaApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
}
declare global {
  interface Window {
    hcaptcha?: HCaptchaApi;
  }
}

let loader: Promise<HCaptchaApi> | null = null;
const loadHCaptcha = () =>
  (loader ??= new Promise<HCaptchaApi>((resolve, reject) => {
    if (window.hcaptcha) return resolve(window.hcaptcha);
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => (window.hcaptcha ? resolve(window.hcaptcha) : reject(new Error("hCaptcha missing")));
    s.onerror = () => {
      loader = null;
      reject(new Error("hCaptcha failed to load"));
    };
    document.head.appendChild(s);
  }));

/**
 * "I am human" checkbox. hCaptcha adds a hidden `h-captcha-response` field to
 * the surrounding <form>, which Web3Forms verifies on submit.
 */
export const HCaptcha: React.FC<{ onVerify: (token: string) => void; resetSignal?: number }> = ({ onVerify, resetSignal = 0 }) => {
  const box = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const cb = useRef(onVerify);

  useEffect(() => {
    cb.current = onVerify;
  }, [onVerify]);

  useEffect(() => {
    let cancelled = false;
    loadHCaptcha()
      .then((h) => {
        if (cancelled || !box.current || widget.current !== null) return;
        widget.current = h.render(box.current, {
          sitekey: SITE_KEY,
          callback: (t: string) => cb.current(t),
          "expired-callback": () => cb.current(""),
          "error-callback": () => cb.current(""),
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (resetSignal && widget.current !== null) window.hcaptcha?.reset(widget.current);
  }, [resetSignal]);

  return <div ref={box} className="min-h-[78px]" />;
};
