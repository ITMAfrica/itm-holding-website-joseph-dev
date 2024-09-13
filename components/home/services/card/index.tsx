import ButtonOulined from '@/components/global/buttons/btn_outlined';

export default function HomeServiceCard() {
  return (
    <div className="shadow-md hover:shadow-2xl rounded-lg px-10 py-20 w-[32%]">
      <div>Icon</div>
      <h1 className="mb-5 text-center text-3xl text-blue_itm_good font-bold">
        Recrutement
      </h1>
      <p className="mb-10 text-center">
        Nous ne proposons pas seulement des candidats, mais des collaborateurs
        qui feront la différence
      </p>
      <div className="flex justify-center">
        <ButtonOulined
          text="EN SAVOIR PLUS"
          link="/fr"
          arrow={true}
          title="Title"
        />
      </div>
    </div>
  );
}
