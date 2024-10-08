export default function ContactPageBanner({ params }: { params: any }) {
  return (
    <section className="w-full md:h-[60vh] h-[45vh] sm:py-10 py-5">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-center bg-[url('../public/assets/bg/banner_contact.png')] h-full rounded-xl">
        <section className="sm:w-1/2 sm:ml-20 ml-5">
          <h1 className="md:text-5xl text-4xl font-bold mb-4">
            Vous avez des questions?
          </h1>
          <p className="">
            Nous sommes heureux de vous répondre contactez nous et nous vous
            aiderons à trouver dès aujourd'hui l'emploi de vos rêves ou l'équipe
            de vos rêves.
          </p>
        </section>
      </div>
    </section>
  );
}
