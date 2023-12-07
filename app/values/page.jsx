import client from "../../public/images/client.png";
import empowerment from "../../public/images/empowerment.png";
import excellence from "../../public/images/excellence.png";
import imgHAnd from "../../public/images/integrity.png";

import Image from "next/image";

export default function Values() {
  return (
    <div className="m-auto mt-4 ">
      <div className="w-10/12 mx-auto mt-4 md:mt-16 animation">
        <h1 className="my-3 text-2xl font-bold text-center md:text-4xl md:my-10 text-primary">
          قيم ركايا
        </h1>
        <div className="bg-secondary/10 backdrop-blur-md rounded-2xl h-[124]">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="min-w-full px-4 py-2 border-b-2 border-l-2 md:py-12 md:px-8 border-b-secondary/10 border-l-secondary/10 bg-secondary/10 rounded-t-2xl md:rounded-tr-2xl md:rounded-tl-none">
              <div className="flex items-center gap-1 duration-200 md:gap-5 hover:scale-105">
                <Image
                  src={imgHAnd}
                  width=""
                  height={""}
                  alt="hand"
                  className="w-[6rem]"
                />
                <div className="mx-2">
                  <h2 className="text-sm font-bold text-primary md:text-xl">
                    النزاهة
                  </h2>
                  <p className="pt-1 text-xs text-beige md:text-lg md:pt-3">
                    نسعى دوما لنجاح عملاؤنا ونقدم النتائج لهم ونسعى جاهدين
                    لتجاوز توقعاتهم
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-full px-4 py-2 border-b-2 md:py-12 md:px-8 border-b-secondary/10 bg-secondary/30 md:rounded-tl-2xl">
              <div className="flex items-center gap-1 duration-200 md:gap-5 hover:scale-105">
                <Image
                  src={empowerment}
                  width=""
                  height={""}
                  alt="hand"
                  className="w-[6rem]"
                />
                <div className="mx-2">
                  <h2 className="text-sm font-bold text-primary md:text-xl">
                    التمكين
                  </h2>
                  <p className="pt-1 text-xs text-beige md:text-lg md:pt-3">
                    نعمل مع عملائنا جنبا لجنب لتطوير الحلول سويا لضمان استدامة
                    نجاح الحلول لديهم
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-full px-4 py-6 border-b-2 md:py-12 md:px-8 border-b-secondary/10 bg-secondary/30 md:rounded-br-2xl">
              <div className="flex items-center gap-1 duration-200 md:gap-5 hover:scale-105">
                <Image
                  src={client}
                  width=""
                  height={""}
                  alt="hand"
                  className="w-[6rem]"
                />
                <div className="mx-2">
                  <h2 className="text-sm font-bold text-primary md:text-xl">
                    التركيز على العميل
                  </h2>
                  <p className="pt-1 text-xs text-beige md:text-lg md:pt-3">
                    نعمل جاهدين على الوفاء بوعودنا ونتبنى دور الشريك الثقة
                    لتمكين عملاؤنا والعمل من المصلحة
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-full px-4 py-2 border-b-2 border-l-2 md:py-12 md:px-8 border-b-secondary/10 border-l-secondary/10 bg-secondary/10 rounded-t-2xl md:rounded-bl-2xl md:rounded-tr-none ">
              <div className="flex items-center gap-1 duration-200 md:gap-5 hover:scale-105">
                <Image
                  src={excellence}
                  width=""
                  height={""}
                  alt="hand"
                  className="w-[6rem]"
                />
                <div className="mx-2">
                  <h2 className="text-sm font-bold text-primary md:text-xl">
                    التميز
                  </h2>
                  <p className="pt-1 text-xs text-beige md:text-lg md:pt-3">
                    نسعى دوما للتحسين المستمر من خلال البحث والتطوير وتقديم أفضل
                    الحلول المناسبة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

