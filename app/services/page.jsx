import TabsServices from "@/components/Services/TabsServices";

export default function Services() {
  return (
    <div className='m-auto mt-4 tabsCustom'>
      <h1 className='text-4xl font-bold text-center md:my-10 text-primary'>خدمات ركايا</h1>
      <div className='w-10/12 overflow-hidden mx-auto md:mt-12 mt-4 md:pt-8 rounded-2xl bg-[#5a4d361a]  backdrop-blur-md h-[30rem] md:h-fit'>
        <div className=''>
          <TabsServices />
        </div>
      </div>
    </div>
  )
}

