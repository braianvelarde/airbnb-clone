import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMM yy", {
    locale: es,
  });
  const rangeDate = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${formatedStartDate} hasta ${formatedEndDate} para ${numberOfGuests} personas`}
      ></Header>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            12 lugares para {numberOfGuests} personas para la fecha {rangeDate}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">{location}</h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3
          text-gray-800 whitespace-nowrap"
          >
            <p className="button">Flexibilidad para cancelar</p>
            <p className="button">Tipo de lugar</p>
          </div>

          {searchResults.map(
            ({ description, title, img, location, star, price, total }) => (
              <InfoCard
                key={img}
                title={title}
                img={img}
                location={location}
                star={star}
                description={description}
                price={price}
                total={total}
              />
            )
          )}
        </section>
      </main>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  console.log(searchResults);

  if (!searchResults) {
    return {
      notFound: true,
    };
  }

  return {
    props: { searchResults },
  };
}
