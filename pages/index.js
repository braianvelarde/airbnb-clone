import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main>
        <section className="pt-6 max-w-7xl mx-auto px-8 sm:px-10">
          <h2 className="text-3xl font-semibold pb-5">
            Explorá lugares cercanos
          </h2>

          {/* API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6 max-w-7xl mx-auto sm:px-2 mb-20">
          <h2 className="text-3xl font-semibold px-8 pb-5">
            Viví donde quieras
          </h2>
          <div className="flex space-x-3 overflow-y-visible overflow-scroll scrollbar-hide">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} title={title} img={img} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Animate a hospedar."
          subTitle="Compartí tu espacio para ganar dinero extra y disfrutar de nuevas oportunidades."
          buttonText="Más información"
        />
        <hr></hr>
        <Footer></Footer>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: { exploreData, cardData },
  };
}
