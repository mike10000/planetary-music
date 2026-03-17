"use client";

import { useEffect } from "react";

type VideoModalProps = {
  artistName: string;
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function VideoModal({
  artistName,
  videoUrl,
  isOpen,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white" id="video-modal-title">
            {artistName} — Sample Performance
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
          <iframe
            src={videoUrl}
            title={`${artistName} performance`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
