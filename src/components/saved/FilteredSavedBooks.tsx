import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleBookProps } from "../../types/book";

export const FilteredSavedBooks = () => {
  const seeSaved = useSelector(
    (state: { saved: SingleBookProps[] }) => state.saved
  );
  const params = useParams();
  const category = seeSaved.map((el) => el.obj?.volumeInfo?.categories);
  console.log("categoria", category);
  console.log("SONO P", params);
  return (
    <div>
      {category.map((el) =>
        el?.includes("Psychoanalysis and literature") ? (
          <p>
            {seeSaved.map((el) => {
              return <p>{el.title}</p>;
            })}
          </p>
        ) : el?.includes("Fiction") ? (
          <p>
            {seeSaved.map((el) => {
              return <p>{el.title}</p>;
            })}
          </p>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
