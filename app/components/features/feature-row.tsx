type FeatureRowProps = {
  title: string;
  description: string;
  imgUrl: string;
  reverse?: boolean;
};

export default function FeatureRow({
  title,
  description,
  imgUrl,
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
      <div className="rounded-2xl w-full md:w-[50%] border border-gray-800 overflow-hidden h-[600px] w-[50%] bg-gray-100">
        {/* <div className="w-40 h-40 rounded-xl flex items-center justify-center"> */}
        <img
          src={imgUrl}
          alt="icon"
          className="h-full w-full object-cover object-center"
          width={100}
          height={100}
        />
        {/* </div> */}
      </div>
    </div>
  );
}
