/**
 * Announces the result count to assistive tech, and shows a short line when nothing matches (no
 * empty state is designed, so it is kept to one plain sentence).
 */
function ListingStatus({ count, noun }) {
  return (
    <>
      <p className="visually-hidden" role="status">
        {count === 1 ? `1 ${noun} found.` : `${count} ${noun}s found.`}
      </p>
      {count === 0 && <p>No {noun}s found.</p>}
    </>
  );
}

export default ListingStatus;
