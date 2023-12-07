import Image from "next/image";
import React from "react";
import imgMap from "../../public/images/map-gold.png";

const About = () => {
  return (
    <div className="w-10/12 mx-auto md:mt-32 md:w-8/12 ">
      <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
        <div className="">
          <Image
            src={imgMap}
            width=""
            height=""
            alt="mapImage"
            className=" w-40 md:w-[46rem]"
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold text-secondary md:text-4xl">
            <span className="ml-1 text-gold">ركايا</span>
            للاستشارات الإدارية
          </h1>
          <div className="mx-5">
            <div className='class="text-main mt-6 text-xl h-8 overflow-hidden text-center"'>
              <p className="text1">آفاق واسعة</p>
              <p class="text2">إمكانيات عالية</p>
            </div>{" "}
            <p>
              شركة سعودية متخصصة في تقديم الخدمات الإستشارية، لتمكين القدرات في
              المنظمات والمجتمعات على السعي نحو مواكبة العالم في التطور لجميع
              المجالات، ولذلك نعمل مع عملاؤنا على تطوير منظماتهم ووضع لهم حلول
              ابتكارية للتعامل مع التحديات والمصاعب.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
