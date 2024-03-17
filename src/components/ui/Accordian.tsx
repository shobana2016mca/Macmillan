import { FaChevronRight } from "react-icons/fa6";

interface Props {
  toggleAccordion: () => void;
  title: string;
  isOpen: boolean;
  data: string;
  className?: string;
}

export default function Accordion(props: Props) {
  return (
    <div className={`mb-1 ${props.className}`}>
      <button
        className="w-full p-4 text-left transition duration-300  font-semibold text-lg"
        onClick={props.toggleAccordion}>
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-90" : "rotate-0"
          } transition-transform duration-300`}>
          <FaChevronRight />
        </span>
      </button>
      {props.isOpen && (
        <div className="px-4 pb-4 ml-4 text-sm">{props.data}</div>
      )}
    </div>
  );
}
