// import "./Pagination.css";
import { Pagination as Pagi } from "@mui/material";

const Pagination = ({ page, pages, changePage }) => {
  // [...Array(pages).keys()];
  // let middlePagination;

  // if (pages <= 5) {
  //   middlePagination = [...Array(pages).keys()].map((idx) => (
  //     <>
  //       <button
  //         key={idx + 1}
  //         onClick={() => changePage(idx + 1)}
  //         disabled={page === idx + 1}
  //       >
  //         {idx + 1}
  //       </button>
  //     </>
  //   ));
  // } else {
  //   const startValue = Math.floor((page - 1) / 5) * 5;
  //   middlePagination = (
  //     <>
  //       {[...Array(5).keys()].map((idx) => (
  //         <button
  //           key={startValue + idx + 1}
  //           disabled={page === startValue + idx + 1}
  //           onClick={() => changePage(startValue + idx + 1)}
  //         >
  //           {startValue + idx + 1}
  //         </button>
  //       ))}

  //       <button>...</button>
  //       <button disabled={page === pages} onClick={() => changePage(pages)}>
  //         {pages}
  //       </button>
  //     </>
  //   );

  //   if (page > 5) {
  //     if (pages - page >= 5) {
  //       middlePagination = (
  //         <>
  //           <button disabled={page === 1} onClick={() => changePage(1)}>
  //             1
  //           </button>
  //           <button>...</button>
  //           <button onClick={() => changePage(startValue)}>{startValue}</button>

  //           {[...Array(5).keys()].map((idx) => (
  //             <button
  //               key={startValue + idx + 1}
  //               disabled={page === startValue + idx + 1}
  //               onClick={() => changePage(startValue + idx + 1)}
  //             >
  //               {startValue + idx + 1}
  //             </button>
  //           ))}

  //           <button>...</button>
  //           <button disabled={page === pages} onClick={() => changePage(pages)}>
  //             {pages}
  //           </button>
  //         </>
  //       );
  //     } else {
  //       let amountLeft = pages - page + 5;
  //       middlePagination = (
  //         <>
  //           <button disabled={page === 1} onClick={() => changePage(1)}>
  //             1
  //           </button>
  //           <button>...</button>
  //           <button onClick={() => changePage(startValue)}>{startValue}</button>

  //           {[...Array(amountLeft).keys()].map((idx) => (
  //             <button
  //               key={startValue + idx + 1}
  //               style={
  //                 pages < startValue + idx + 1 ? { display: "none" } : null
  //               }
  //               disabled={page === startValue + idx + 1}
  //               onClick={() => changePage(startValue + idx + 1)}
  //             >
  //               {startValue + idx + 1}
  //             </button>
  //           ))}
  //         </>
  //       );
  //     }

  //     // middlePagination = (
  //     //   <>
  //     //     {[...Array(5).keys()].map((idx) => (
  //     //       <button
  //     //         key={startValue + idx + 1}
  //     //         disabled={page === startValue + idx + 1}
  //     //         onClick={() => changePage(startValue + idx + 1)}
  //     //       >
  //     //         {startValue + idx + 1}
  //     //       </button>
  //     //     ))}
  //     //     {page !== pages && (
  //     //       <>
  //     //         <button>...</button>
  //     //         <button
  //     //           disabled={page === pages}
  //     //           onClick={() => changePage(pages)}
  //     //         >
  //     //           {pages}
  //     //         </button>
  //     //       </>
  //     //     )}
  //     //   </>
  //     // );
  //   }
  // }

  return (
    pages > 1 && (
      <Pagi
        count={pages}
        defaultPage={1}
        color="primary"
        style={{ margin: "50px 0" }}
      />

      // <div className="pagination">
      //   <button
      //     className="pagination__prev"
      //     onClick={() => changePage((page) => page - 1)}
      //     disabled={page === 1}
      //   >
      //     &#171;
      //   </button>
      //   {middlePagination}
      //   <button
      //     className="pagination__next"
      //     onClick={() => changePage((page) => page + 1)}
      //     disabled={page === pages}
      //   >
      //     &#187;
      //   </button>
      // </div>
    )
  );
};

export default Pagination;
