import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { generatePagination } from "../../utils";

interface Props {
  totalPages: number;
  actualPage: number;
}

const Pagination = ({ totalPages, actualPage }: Props) => {
  if (actualPage < 1 || actualPage) {
    // redirect( )
  }

  const allPages = generatePagination(actualPage, totalPages);

  return (
    <div className="flex text-center justify-center my-6">
      <nav>
        <ul className="flex list-style-none flex-row items-center">
          <li>
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="/">
              <IoChevronBackOutline size={30} />
            </a>
          </li>

          {allPages.map((page, index) => {
            return (
              <li key={index}>
                <a
                  className={`relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${
                    page === actualPage
                      ? "bg-slate-900 shadow-sm  hover:text-white hover:bg-blue-700 border border-slate-900"
                      : ""
                  }`}
                  href="/">
                  {page}
                </a>
              </li>
            );
          })}

          <li>
            <a
              className="relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="/">
              <IoChevronForwardOutline size={30} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
