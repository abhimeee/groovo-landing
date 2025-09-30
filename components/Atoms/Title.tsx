"use client";

interface TitleProps {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <div className="relative center w-fit mx-auto mb-16">
      <span className="absolute mw-[150%] h-[6px] bg-primary rounded top-4 -left-2 -right-2 z-10" />
      <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold uppercase relative z-20">{label}</h2>
    </div>
  );
};
export default Title;
