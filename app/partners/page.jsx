import Image from "next/image";

export default function Partners() {
  return (
    <div>
      <section id="partners" className="w-10/12 mx-auto mt-16">
        <h1 className="pb-12 text-4xl font-bold text-center text-beige">
          شركاء ركايا
        </h1>
        <div className="px-8 pb-8 bg-primary/10 backdrop-blur-md rounded-2xl ">
          <div className="grid grid-cols-6 mx-auto justify-items-center place-items-center md:space-y-12">
            <Image
              width={"10"}
              height={"10"}
              src="https://rakaya.co/images/partners/etqan.png"
              alt=""
              className="w-24 col-span-6 py-8 duration-200 md:py-0 md:w-40 hover:scale-105 md:col-span-2 md:col-start-2"
            />
            <Image
              width={"10"}
              height={"10"}
              src="https://rakaya.co/images/partners/speed-rent.png"
              alt=""
              className="w-24 col-span-3 py-8 duration-200 md:py-0 md:w-40 hover:scale-105 md:col-span-2 "
            />
            <Image
              width={"10"}
              height={"10"}
              src="https://rakaya.co/images/partners/ektimal.png"
              alt=""
              className="w-24 col-span-3 py-8 duration-200 md:py-0 md:w-40 hover:scale-105 md:col-span-2"
            />
            <Image
              width={"10"}
              height={"10"}
              src="https://rakaya.co/images/partners/taqniyah.png"
              alt=""
              className="w-24 col-span-3 py-8 duration-200 md:py-0 md:w-40 hover:scale-105 md:col-span-2"
            />
            <Image
              width={"10"}
              height={"10"}
              src="https://rakaya.co/images/partners/jawdah.png"
              alt=""
              className="w-24 col-span-3 py-8 duration-200 md:py-0 md:w-40 hover:scale-105 md:col-span-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
