import { useSelector } from "react-redux";
import { SingleBookProps } from "../../types/book";

export const SavedBooks = () => {
  const seeSaved = useSelector(
    (state: { saved: SingleBookProps[] }) => state.saved
  );
  console.log("LIBRI SALVATI", seeSaved);
  return (
    <div>
      <div></div>
    </div>
  );
};
