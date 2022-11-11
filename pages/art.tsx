import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PdfViewer from "../components/art/pdfViewer";
import useWindowSize from "../components/art/useWS";

// workerSrc 정의 하지 않으면 pdf 보여지지 않습니다.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Art = () => {
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

<div>
    <PdfViewer linked="/assets/doc/test.pdf" />
</div>
      <Link as={`/art/${"/assets/doc/test.pdf"}`} href="/art/[id]"
      >
        <a>Props TEST이동</a>
      </Link>


      <Link
          href={{
            pathname: '/art/[id]',
            query: { slug: '/assets/doc/test.pdf' },
          }}
        >
          Blog Post
        </Link>
    </div>
  );
};

export default Art;

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
