import Hero from "./components/Hero";
import Section from "./components/Section";
import image1 from "./assets/img/illustration-grow-together.svg";
import image2 from "./assets/img/illustration-flowing-conversation.svg";
import image3 from "./assets/img/illustration-your-users.svg";
import Footer from "./components/Footer";
import Button from "./components/Button";
const App = () => {
  return (
    <div>
      <Hero />
      <main className="py-16 px-6 lg:px-20">
        <Section
          heading="Grow Together"
          text="Generate meaningful discussions with your audience and build a strong, loyal community. 
                  Think of the insightful conversations you miss out on with a feedback form."
          image={image1}
        />

        <Section
          heading="Flowing Conversations"
          text="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
          have just-in-time loading for a more natural flow."
          image={image2}
          reverse
        />

        <Section
          heading="Your Users"
          text="It takes no time at all to integrate Huddle with your app's authentication solution. 
          This means, once signed in to your app, your users can start chatting immediately."
          image={image3}
        />

        <section className="grid place-items-center">
          <div className="text-center border-2 rounded-xl shadow-lg py-10 px-6 lg:px-16 mt-28 md:mt-14 -mb-36 relative z-10 bg-white max-w-[500px]">
            <h3 className="mb-6"> Ready To Build Your Community?</h3>
            <Button />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
