import { useState, useEffect } from "react";
import { X } from "lucide-react";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const ZoomableImage = (props: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <img
        {...props}
        onDoubleClick={(e) => {
          props.onDoubleClick?.(e);
          setOpen(true);
        }}
        className={`${props.className ?? ""} cursor-zoom-in`}
        title={props.title ?? "Doppio click per ingrandire"}
      />
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Chiudi"
            className="absolute top-4 right-4 p-2 rounded-full bg-card border border-border text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={props.src}
            alt={props.alt}
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl cursor-zoom-out animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default ZoomableImage;