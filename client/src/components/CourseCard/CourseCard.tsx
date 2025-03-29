
const CourseCard: React.FC<{
  title: string;
  image: string;
  description: string;
  fullPrice: number;
  discountPrice: number;
  tag?: string;
}> = ({ title, image, description, fullPrice, discountPrice, tag }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <img src={image} alt={title} className="h-32 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-sans text-lg font-extrabold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2">
          <span className="font-sans font-extrabold text-red-500">${discountPrice}</span>
          <span className="ml-2 text-gray-500 line-through">${fullPrice}</span>
        </div>
        {tag && (
          <span className="mt-2 inline-block rounded bg-yellow-500 px-2 py-1 text-xs text-white">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
