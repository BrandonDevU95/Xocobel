import queryString from 'query-string';
import { useRouter } from 'next/router';
import { Pagination as PaginationSU } from 'semantic-ui-react';

export default function Pagination({ totalProducts, page, limitPerPage }) {
   const router = useRouter();
   const urlParse = queryString.parseUrl(router.asPath);
   const totalPages = Math.ceil(totalProducts / limitPerPage);

   const goToPage = (newPage) => {
      urlParse.query.page = newPage;
      const url = queryString.stringifyUrl(urlParse);
      router.push(url);
   };

   return (
      <div className="pagination">
         <PaginationSU
            defaultActivePage={page}
            totalPages={totalPages}
            firstItem={null}
            lastItem={null}
            onPageChange={(_, data) => goToPage(data.activePage)}
            boundaryRange={0}
            siblingRange={1}
            ellipsisItem={null}
         />
      </div>
   );
}
