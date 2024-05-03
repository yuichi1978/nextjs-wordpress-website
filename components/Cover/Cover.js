import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen bg-slate-800 text-white relative min-h-[400px] flex justify-center items-center" style={{ position: "relative" }}>
      <div style={{ width: "100%" }}>
        <Image
          src={background}
          fill
          className="object-cover mix-blend-soft-light hoverZoomLink"
          alt="Cover"
        />

        <div className="max-w-5xl z-10">{children}</div>
      </div>
    </div>
  );
};
