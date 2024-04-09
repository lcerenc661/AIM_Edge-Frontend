import { useNavigation } from "react-router-dom";

interface Props {
  text: string;
}

const SubmitBtn = ({ text }: Props) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block bg-slate-900 hover:bg-gray-600 text-white"
      disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">sending...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};
export default SubmitBtn;
