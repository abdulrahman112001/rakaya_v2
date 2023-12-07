"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Mousewheel, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TabsServices = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        mousewheel={true}
        direction={"horizontal"}
        modules={[FreeMode, Navigation, Mousewheel, Thumbs]}
        className="mySwiper2"
        dir="rtl"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <p class="md:border-l border-secondary text-secondary font-black p-4 md:p-10 text-3xl md:text-6xl text-center">
              1
            </p>
            <div className="px-6 md:px-8">
              <h1 className="pb-5 text-xl font-bold text-center cursor-pointer md:text-2xl text-primary md:text-start">
                التخطيط الاستراتيجي
              </h1>

              <div className="text-base md:text-lg text-primary grid grid-cols-1 md:grid-cols-3 gap-3 md:space-x-20 text-start  h-[15rem] md:h-fit ">
                <p className="">بناء استراتيجيات العمل</p>
                <p className="">بناء خطط تنفيذ الاستراتيجيات</p>
                <p className="">تصميم وتحليل الميزة التنافسية</p>
                <p className="">بناء نموذج العمل</p>
                <p className="">تصميم الرؤية والرسالة والقيم </p>
                <p className="">تحديد الأهداف الاستراتيجية </p>
                <p className="">تصميم المؤشرات الاستراتيجية </p>
                <p className="">تصميم المبادرات الاستراتيجية </p>
                <p className="">بناء الخطط التشغيلية </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <p class="md:border-l border-secondary text-secondary font-black p-4 md:p-10 text-3xl md:text-6xl text-center">
              2
            </p>
            <div className="px-6 md:px-8">
              <h1 className="pb-5 text-xl font-bold text-center cursor-pointer md:text-2xl text-primary md:text-start">
                بناء قدرات الموارد البشرية{" "}
              </h1>

              <div className="text-base md:text-lg text-primary grid grid-cols-1 md:grid-cols-3 gap-3 md:space-x-20 text-start h-[15rem] md:h-fit ">
                <p className="">تصميم الهياكل التنظيمية</p>
                <p className="">تصميم مؤشرات أداء الموظفين</p>
                <p className=""> تصميم وإدارة برامج التطوير القيادي</p>
                <p className="">تصميم اللوائح الداخلية</p>
                <p className="">بناء قدرات فريق العمل</p>
                <p className="">تصميم وتشغيل عمليات الموارد البشرية</p>
                <p className="">تصميم الأجور والبدلات والحوافز</p>
                <p className="">تحليل الاحتياجات التدريبية</p>
                <p className="">بناء الأوصاف الوظيفية</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <p class="md:border-l border-secondary text-secondary font-black p-4 md:p-10 text-3xl md:text-6xl text-center">
              3
            </p>
            <div className="px-6 md:px-8">
              <h1 className="pb-5 text-xl font-bold text-center cursor-pointer md:text-2xl text-primary md:text-start">
                التميز المؤسسي{" "}
              </h1>

              <div className="text-base md:text-lg text-primary grid grid-cols-1 md:grid-cols-3 gap-3 md:space-x-20 text-start h-[15rem] md:h-fit ">
                <p className="">تحسين إجراءات العمل </p>
                <p className=""> تطوير أدلة السياسات والإجراءات</p>
                <p className=""> تصميم مؤشرات قياس الأداء</p>
                <p className="">تطبيق وتفعيل أنظمة سلاسل الإمداد</p>
                <p className="">تطبيق برامج ترشيد الإنفاق</p>
                <p className="">تصميم مصفوفة الصلاحيات </p>
                <p className="">تطبيق مشاريع اللين Lean </p>
                <p className=""> أتمتة إجراءات العمل </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <p class="md:border-l border-secondary text-secondary font-black p-4 md:p-10 text-3xl md:text-6xl text-center">
              4
            </p>
            <div className="px-6 md:px-8">
              <h1 className="pb-5 text-xl font-bold text-center cursor-pointer md:text-2xl text-primary md:text-start">
                الإبداع وريادة الأعمال
              </h1>

              <div class="text-base md:text-lg text-primary grid grid-cols-1 md:grid-cols-3 gap-3 md:space-x-20 text-start h-[15rem] md:h-fit ">
                <p>تحويل براءات الاختراع إلى مشاريع تجارية</p>
                <p>تصميم خطط إطلاق المشاريع الصغيرة</p>
                <p>تصميم خطط نمو المشاريع الصغيرة ومساعدة المشاريع المتعثرة</p>
                <p>تصميم اللوائح الداخلية</p>
                <p>التطوير القيادي</p>
                <p>التخطيط الاستراتيجي</p>
                <p>تصميم المؤشرات الاستراتيجي</p>
                <p>تحديد الأهداف الاستراتيجية</p>
                <p>تصميم وتحليل الميزة التنافسية</p>
                <p></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <p class="md:border-l border-secondary text-secondary font-black p-4 md:p-10 text-3xl md:text-6xl text-center">
              5
            </p>
            <div className="px-6 md:px-8">
              <h1 className="pb-5 text-xl font-bold text-center cursor-pointer md:text-2xl text-primary md:text-start">
                الخدمات الرقمية والتواصل الاجتماعي{" "}
              </h1>

              <div class="text-base md:text-lg text-primary grid grid-cols-1 md:grid-cols-3 gap-3 md:space-x-20 text-start h-[15rem] md:h-fit ">
                <p>تأسيس الهوية البصرية</p>
                <p>إدارة حسابات التواصل الاجتماعي</p>
                <p>تجيهز محتوى للتواصل الاجتماعي</p>
                <p>بناء دليل شامل للهوية البصرية</p>
                <p>إدارة الحملات الإعلانية</p>
                <p>تصميم موشن وايت بورد</p>
                <p>تقديم الإستشارات للتسويق الرقمي</p>
                <p>إنشاء خطط تسويقي</p>
                <p>تحسين محركات البحث</p>
                <p></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <p class="md:border-l border-secondary text-secondary font-black p-4 md:p-10 text-3xl md:text-6xl text-center">
              6
            </p>
            <div className="px-6 md:px-8">
              <h1 className="pb-5 text-xl font-bold text-center cursor-pointer md:text-2xl text-primary md:text-start">
                خدمة الامتياز التجاري (فرنشايز){" "}
              </h1>

              <div class="text-base md:text-lg text-primary grid grid-cols-1 md:grid-cols-3 gap-3 md:space-x-20 text-start  md:h-fit ">
                <p>تقديم الملخص القانوني للإمتياز التجاري</p>
                <p>تصميم المواصفات الإنشائية للمطاعم</p>
                <p>تصميم دليل التشغيل</p>
                <p>الخطة الاستراتيجية </p>
                <p>تقديم ملف تدريبي </p>
                <p>الخطة المالية التقديرية</p>
                <p>الهوية البصرية</p>
                <p>خطط تسويقية</p>
                <p>الاستشارات الادارية</p>
                <p></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        // spaceBetween={}
        // slidesPerView={4}
        // freeMode={true}
        // watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Mousewheel, Thumbs]}
        className="!hidden   my-10 md:!block mySwiper"
        mousewheel={true}
        direction={"horizontal"}
        centeredSlides={true}
        dir="rtl"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView:5,
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide>
          <p className="!border-0  text-xs font-medium md:text-lg md:font-semibold 2xl:text-xl 2xl:font-bold self-center cursor-pointer">
            التخطيط الاستراتيجي
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="!border-0  text-xs font-medium md:text-lg md:font-semibold 2xl:text-xl 2xl:font-bold self-center cursor-pointer">
            بناء قدرات الموارد البشرية
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="!border-0  text-xs font-medium md:text-lg md:font-semibold 2xl:text-xl 2xl:font-bold self-center cursor-pointer">
            {" "}
            التميز المؤسسي
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="!border-0  text-xs font-medium md:text-lg md:font-semibold 2xl:text-xl 2xl:font-bold self-center cursor-pointer">
            {" "}
            الإبداع وريادة الأعمال
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="!border-0  text-xs font-medium md:text-lg md:font-semibold 2xl:text-xl 2xl:font-bold self-center cursor-pointer">
            {" "}
            الخدمات الرقمية والتواصل الاجتماعي
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="!border-0  text-xs font-medium md:text-lg md:font-semibold 2xl:text-xl 2xl:font-bold self-center cursor-pointer">
            {" "}
            خدمة الامتياز التجاري (فرنشايز)
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TabsServices;
