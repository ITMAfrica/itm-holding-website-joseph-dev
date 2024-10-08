import { PiChatsLight } from 'react-icons/pi';
import { IoCallOutline } from 'react-icons/io5';
import { BsGeoAlt } from 'react-icons/bs';

export default function ContactPageContactSection({ params }: { params: any }) {
  return (
    <section className="h-fit bg-white pt-5 md:pb-16 pb-8">
      <div className="flex flex-wrap justify-between lg:w-10/12 w-11/12 mx-auto">
        <ContactCard>
          <span className="flex justify-center">
            <IoCallOutline className="w-20 h-20 text-blue_itm_aqua_marine text-center" />
          </span>
          <h5 className="text-2xl font-bold text-center">Call us directly</h5>
          <p className="text-2xl font-bold text-center mt-4">
            +243 897 548 526
          </p>
        </ContactCard>
        <ContactCard>
          <span className="flex justify-center">
            <PiChatsLight className="w-20 h-20 text-blue_itm_aqua_marine text-center" />
          </span>
          <h5 className="text-2xl font-bold text-center">
            Chat whit our sales team
          </h5>
          <p className="text-2xl font-bold text-center mt-4">
            +243 897 548 526
          </p>
        </ContactCard>
        <ContactCard>
          <span className="flex justify-center">
            <BsGeoAlt className="w-20 h-20 text-blue_itm_aqua_marine text-center" />
          </span>
          <h5 className="text-2xl font-bold text-center">Visit our office</h5>
          <p className="text-2xl font-bold text-center mt-4">
            +243 897 548 526
          </p>
        </ContactCard>
      </div>
    </section>
  );
}

export function ContactCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center lg:w-[31%] md:w-[48%] w-full mb-6 lg:mb-0 border bg-blue_itm_primary/5 h-[300px]">
      <div className="w-full h-fit p-8">{children}</div>
    </div>
  );
}
