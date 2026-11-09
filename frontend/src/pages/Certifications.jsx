const certifications = [];

export default function Certifications() {
  return (
    <>
      <h1>Certifications</h1>

      {certifications.length === 0 ? (
        <p>No certifications are listed yet.</p>
      ) : (
        <ul>
          {certifications.map(({ id, name, issuer }) => (
            <li key={id}>
              <h2>{name}</h2>
              <p>Issued by {issuer}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}