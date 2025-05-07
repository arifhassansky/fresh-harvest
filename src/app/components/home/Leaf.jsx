import Image from "next/image";

const Leaf = () => {
  return (
    <section className="mb-48">
      <div className="relative px-6">
        <Image
          src="/images/leaf1.png"
          alt="Leaf1"
          width={54}
          height={63}
          className="absolute left-[67px] md:left-[167px] top-[98px] -rotate-[50deg]"
        />
        <Image
          src="/images/leaf1.png"
          alt="Leaf1"
          width={66}
          height={50}
          className="absolute right-[59px] md:right-[159px] top-[41px] rotate-[266deg]"
        />
      </div>
    </section>
  );
};

export default Leaf;
