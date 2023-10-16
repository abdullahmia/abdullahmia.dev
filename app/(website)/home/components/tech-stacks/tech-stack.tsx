import Image from "next/image";

const TechStack = ({ image, title }: { image: any; title: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={image} className="w-5 h-5 rounded" alt="" />
      <p className="text-[#51595f] dark:text-[#d4d4d4]">{title}</p>
    </div>
  );
};

export default TechStack;
