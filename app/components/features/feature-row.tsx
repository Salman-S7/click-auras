type FeatureRowProps = {
  title: string;
  description: string;
  iconType: "square" | "circle" | "triangle";
  reverse?: boolean;
};

export default function FeatureRow({
  title,
  description,
  iconType,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center min-h-[600px] gap-6`}
    >
      {/* Text */}
      <div className="flex-1 h-full text-center md:text-left">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-1 text-lg text-gray-500 max-w-sm mx-auto md:mx-0">
          {description}
        </p>
      </div>

      {/* Icon Placeholder */}
      <div className="flex-1 flex rounded-2xl min-h-[600px] w-[100%] bg-gray-100 items-center justify-center">
        <div className="w-40 h-40 rounded-xl flex items-center justify-center">
          {iconType === "square" && <div className="w-8 h-8 bg-white" />}
          {iconType === "circle" && (
            <div className="w-8 h-8 bg-white rounded-full" />
          )}
          {iconType === "triangle" && (
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-[16px] border-transparent border-b-white" />
          )}
        </div>
      </div>
    </div>
  );
}
