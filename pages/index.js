import Image from "next/image";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  // const { data } = useSWR("/api/random-character", fetcher);

  const {
    data: character,
    error,
    isLoading,
    isValidating,
  } = useSWR("/api/random-character", fetcher);

  console.log(character);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Personal Details</h1>
      <Image
        src={character.avatar}
        alt={`${character.firstName} ${character.lastName}`}
        width={50}
        height={50}
      />
      <table>
        <tbody>
          <tr>
            <td>Gender:</td>
            <td>{character.gender}</td>
          </tr>
          <tr>
            <td>Prefix:</td>
            <td>{character.prefix}</td>
          </tr>
          <tr>
            <td>First name:</td>
            <td>{character.firstName}</td>
          </tr>
          <tr>
            <td>Last name:</td>
            <td>{character.lastName}</td>
          </tr>
          <tr>
            <td>Birthday:</td>
            <td>{character.birthday}</td>
          </tr>
          <tr>
            <td>Street:</td>
            <td>{character.street}</td>
          </tr>
          <tr>
            <td>ZIP:</td>
            <td>{character.zip}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{character.city}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{character.state}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{character.country}</td>
          </tr>
          <tr>
            <td>Local:</td>
            <td>{character.local}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{character.phone}</td>
          </tr>
          <tr>
            <td>E-Mail (Private):</td>
            <td>{character.emailPrivate}</td>
          </tr>
          <tr>
            <td>E-Mail (Company):</td>
            <td>{character.emailCompany}</td>
          </tr>
          <tr>
            <td>Company:</td>
            <td>{character.company}</td>
          </tr>
          <tr>
            <td>Profession:</td>
            <td>{character.profession}</td>
          </tr>
          <tr>
            <td>Twitter:</td>
            <td>{character.twitter}</td>
          </tr>
          <tr>
            <td>Facebook:</td>
            <td>{character.facebook}</td>
          </tr>
          <tr>
            <td>Geohash:</td>
            <td>{character.geohash}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
