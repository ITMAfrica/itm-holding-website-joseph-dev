export default function ContactPageBanner({ params }: { params: any }) {
  return (
    <section className="w-full h-[60vh] py-10">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-center bg-[url('../public/assets/bg/banner_contact.png')] h-full rounded-xl">
        <section className="w-1/2 ml-20">
          <h1 className="text-5xl font-bold mb-4">Vous avez des questions?</h1>
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
