import { ContactForm } from "@/app/components/contact/contact-form";

const ContactPage = () => {
  return (
    <main className="container lg:px-0 px-5">
      <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-14 lg:py-44 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl">
              <b>Get in</b> touch
            </h2>
            <p className="text-sm">
              Frigate mackerel snake mackerel upside-down catfish finback cat
              shark. Reedfish bonefish trahira bristlenose catfish, longnose.
            </p>
          </div>

          <div className="flex justify-between items-center flex-wrap lg:gap-0 gap-6">
            <div>
              <h2>Dhaka, Bangladesh</h2>
              <p className="text-sm">
                100/A Bashiruddin Road, Kalabagan, Dhaka-1205
              </p>
            </div>
            <div>
              <h2>Phones</h2>
              <p className="text-sm">+8801775748710</p>
            </div>
          </div>
          <div>
            <h2>Email</h2>
            <p className="text-sm">abdullahbang1971@gmail.com</p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
