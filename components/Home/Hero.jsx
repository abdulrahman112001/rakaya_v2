import Image from "next/image";
import React from "react";
import imgFile from '../../public/images/file.svg'

function Hero() {
  return (
    <div className="text-center m-auto mt-[8rem] md:mt-[12rem]">
      <h1 className="text-4xl font-extrabold text-secondary md:text-7xl">
        <span className="ml-6 text-gold">ركايا</span>
        للاستشارات الإدارية
      </h1>

      <div className='class="text-main mt-6 text-xl h-8 overflow-hidden text-center"'>
        <p className="font-bold text-primary text1">آفاق واسعة</p>
        <p class="text2">إمكانيات عالية</p>
      </div>
      <div className="flex justify-center mt-5">
        <button className="flex items-center justify-center gap-2 p-3 ite rounded-3xl bg-primary">
          <Image src={imgFile} width={30} height={30} alt="file" />
          <p className="text-white"> الملف التعريفي</p>
        </button>
      </div>
    </div>
  );
}

export default Hero;
