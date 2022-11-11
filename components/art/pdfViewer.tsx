import { useRouter } from "next/router";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowSize from "./useWS";

// workerSrc 정의 하지 않으면 pdf 보여지지 않습니다.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ Linked }: any ) => {
  const router = useRouter();
  const { links } = router.query

  console.log('=====', Linked, links);
  const windowSize = useWindowSize();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div
      onContextMenu={() => {
        return false;
      }}
    >
      <h1>links</h1>
      {true ? (
        <Document
          file={Linked} // "/assets/doc/test.pdf" // 여기는 가지고 계신 pdf 주소
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {/* height, width는 number 타입으로 vh, %는 먹지 않습니다. */}
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              width={windowSize.width}
              height={windowSize.height}
              key={index}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      ) : (
        <>
          <h2>없당껭</h2>
        </>
      )}
      Page {pageNumber} of {numPages}
      {pageNumber > 1 && (
        <button onClick={() => setPageNumber(prev => prev + -1)}>
          이전페이지
        </button>
      )}
      {pageNumber < numPages && (
        <button onClick={() => setPageNumber(prev => prev + +1)}>
          다음페이지
        </button>
      )}
    </div>
  );
};

export default PdfViewer;

type Params = {
  params: {
    links: string;
  };
};
/* 
export async function getStaticProps({ params }: Params) {
    return {
        props: {
            link: params
        }
    };
} */
