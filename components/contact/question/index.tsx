import Image from 'next/image';
import image1 from '@/public/pages/contact/image1.png';
import image2 from '@/public/pages/contact/image2.png';
import image3 from '@/public/pages/contact/image3.png';
import image4 from '@/public/pages/contact/image4.png';

export default function ContactPageQuestionsSection({
  params,
}: {
  params: any;
}) {
  return (
    <section className="bg-white pb-10">
      <div className="h-[350px] overflow-hidden bg-no-repeat bg-[url('../public/pages/contact/image_bg.png')]"></div>
      <section className="w-10/12 mx-auto">
        <div className="w-1/2">
          <h2>Got Questions?</h2>
          <h4>We are happy to help</h4>
          <p>
            Contact us and let's help you get started to find your dream job or
            your dream team
          </p>
          <div className="w-fit hidden semi-lg:flex mx-auto justify-center">
            <div>
              <div className="flex justify-end items-end">
                <div className="relative md:w-[205px] w-[120px] h-fit shadow-xl rounded-md mr-3">
                  <Image
                    src={image1}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="md:w-[205px] w-[120px] h-[120px] md:h-[205px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative md:w-[155px] w-[80px] md:h-[155px] h-[80px] shadow-md rounded-lg mt-3 mr-3">
                  <Image
                    src={image3}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="md:w-[155px] w-[80px] md:h-[155px] h-[80px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-1/2 md:w-1/2">
                <div className="relative md:w-[300px] w-[225px] md:h-[300px] h-[225px] rounded-lg">
                  <Image
                    src={image2}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="md:w-[300px] w-[225px] md:h-[300px] h-[225px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>

              <div className="w-1/2 md:w-1/2">
                <div className="md:w-[225px] relative w-[200px] md:h-[150px] h-[150px] rounded-lg mt-3">
                  <Image
                    src={image4}
                    alt="Design"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'cover' }}
                    className="w-[225px] md:h-[150px] h-[150px] rounded-lg"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </section>
  );
}
