import React, { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useIntersectionObserver } from "@wojtekmaj/react-hooks";
import DraggableText from "./DragableText";
import { PDFDocument, rgb } from "pdf-lib";
import { blobToURL } from "@/utils/Utils";

// Set the worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const observerConfig = {
  // How much of the page needs to be visible to consider page visible
  threshold: 0,
};
function PageWithObserver({
  pageNumber,
  setPageVisibility,
  width,
  setPageDetails,
  zoom,
  ...otherProps
}: any) {
  const [page, setPage] = useState<any>();

  const onIntersectionChange: any = useCallback(
    ([entry]: any) => {
      setPageVisibility(pageNumber, entry.isIntersecting);
    },
    [pageNumber, setPageVisibility]
  );

  useIntersectionObserver(page, observerConfig, onIntersectionChange);

  return (
    <Page
      canvasRef={setPage}
      width={width}
      key={pageNumber}
      pageNumber={pageNumber}
      renderAnnotationLayer={false}
      renderTextLayer={false}
      className="react-pdf__Page__textContent react-pdf__Page "
      renderMode="canvas"
      {...otherProps}
      onLoadSuccess={(data) => {
        setPageDetails(data);
      }}
      // scale={zoom}
    />
  );
}

function PDFViewer({
  pdfUrl,
  setPageOriginalWidth,
  setPageOriginalHeight,
  draging,
  width,
  setZoom,
  zoom,
  testUseDrag,
  setTestDrag,
  testDrag,
  textInputVisible,
  setTextInputVisible,
}: any) {
  const styles = {
    container: {
      maxWidth: 900,
      margin: "0 auto",
    },
    sigBlock: {
      display: "inline-block",
      border: "1px solid #000",
    },
    documentBlock: {
      maxWidth: 800,
      margin: "20px auto",
      marginTop: 8,
      border: "1px solid #999",
    },
    controls: {
      maxWidth: 800,
      margin: "0 auto",
      marginTop: 8,
    },
  };

  const [numPages, setNumPages] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [visiblePages, setVisiblePages] = useState({});
  // const fs = require('fs');
  const documentRef = useRef<any>(null);
  const [position, setPosition] = useState<any>(null);
  const [pageDetails, setPageDetails] = useState<any>(null);
  const [pdf, setPdf] = useState<any>(null);
  const [AxisCoordinate, setAxisCoordinate] = useState<any>();

  console.log("position---", position);

  useEffect(() => {
    setPdf(pdfUrl);
  }, [pdfUrl]);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    //   console.log("numPages--", )
  }

  const onPageLoadSucess = (e: any) => {
    // console.log("e-----", e)
    setPageOriginalWidth(e.originalWidth);
    setPageOriginalHeight(e.originalHeight);
  };

  const pageRef: any = useRef();
  // console.log("pageRef", pageRef);

  const handleZomIn = () => {
    setZoom(zoom + 0.5);
    // setTestDrag({
    //   x: testDrag.x + 179,
    //   y: testDrag.y + 46,
    // });
  };
  const handleZomOut = () => {
    setZoom(zoom - 0.5);
    // setTestDrag({
    //   x: testDrag.x - 180,
    //   y: testDrag.y - 45,
    // });
  };

  // Create an array of Page components for all pages
  const setPageVisibility = useCallback(
    (pageNumber: any, isIntersecting: any) => {
      setVisiblePages((prevVisiblePages) => ({
        ...prevVisiblePages,
        [pageNumber]: isIntersecting,
      }));
    },
    []
  );

  // zooming

  return (
    <div>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber <= 1}
          >
            Previous
          </button>
          <button
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber >= numPages}
          >
            Next
          </button>

          <div className="flex gap-3">
            <button onClick={handleZomIn} className="border p-2">
              ZoomIn {zoom}{" "}
            </button>
            <button onClick={handleZomOut} className="border p-2">
              ZoomOut {zoom}
            </button>
          </div>
        </div>
      </div>
      <div>
        Visible pages:{" "}
        {Object.entries(visiblePages)
          .filter(([key, value]) => value)
          .map(([key]) => key)
          .join(", ") || "(none)"}
      </div>
      {pdf ? (
        <div
          // className="relative"
          ref={documentRef}
          // style={styles.documentBlock}
          // style={{
          //   height: "100vh",
          //   overflow: "auto",
          //   position: "relative",
          //   padding: "20px",
          // }}
        >
          {/* <div> */}
          <Document
            file={pdfUrl}
            // options={{ workerSrc: "/pdfUrl.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
            className="all-page-container relative"
          >
            {draging}
            {/* {textInputVisible ? (
              <DraggableText
                // initialText={
                //   textInputVisible === "date" ? dayjs().format("M/d/YYYY") : null
                // }
                initialText={textInputVisible === "date" ? "Date" : null}
                onCancel={() => setTextInputVisible(false)}
                onEnd={setPosition}
                onSet={async (text: any) => {
                  const { originalHeight, originalWidth }: any = pageDetails;
                  const scale = originalWidth / documentRef.current.clientWidth;

                  const y =
                    documentRef.current.clientHeight -
                    (position.y +
                      12 * scale -
                      position.offsetY -
                      documentRef.current.offsetTop);
                  const x =
                    position.x -
                    166 -
                    position.offsetX -
                    documentRef.current.offsetLeft;

                  // new XY in relation to actual document size
                  const newY =
                    (y * originalHeight) / documentRef.current.clientHeight;
                  const newX =
                    (x * originalWidth) / documentRef.current.clientWidth;

                  const pdfDoc = await PDFDocument.load(pdf);

                  const pages = pdfDoc.getPages();
                  const firstPage = pages[numPages];

                  firstPage?.drawText(text, {
                    x: newX,
                    y: newY,
                    size: 20 * scale,
                  });

                  const pdfBytes = await pdfDoc.save();
                  const blob = new Blob([new Uint8Array(pdfBytes)]);

                  const URL = await blobToURL(blob);
                  setPdf(URL);
                  setPosition(null);
                  setTextInputVisible(false);
                }}
              />
            ) : null} */}
            {Array.from(new Array(numPages), (el, index) => (
              <PageWithObserver
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                setPageVisibility={setPageVisibility}
                width={width}
                setPageDetails={setPageDetails}
                zoom={zoom}
              />
            ))}
          </Document>
          {/* </div> */}
        </div>
      ) : null}
    </div>
  );
}

export default PDFViewer;

{
  /* <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onItemClick={handleScroll}
        >
          {draging}
          {[...Array(numPages)].map((_, index) => (
            <div onClick={() => handlePageDetect(index + 1)}>
              <Page
                key={`page_${index + 1}`}
                pageIndex={index + 1}
                pageNumber={index + 1}
                width={width}
                renderTextLayer={false}
                scale={zoom}
                onLoadSuccess={onPageLoadSucess}
                renderMode="canvas"
                renderAnnotationLayer={false}
                className={`mb-3 cursor-pointer shadow-2xl ${
                  decetPage === index + 1
                    ? "border-2 border-[green] rounded"
                    : ""
                }`}
                // canvasBackground={`${decetPage === index + 1 ? "red" : ""}`}
                onGetAnnotationsSuccess={handleGetAnnotation}
                // renderForms={true}
                canvasRef={pageRef}
              />
            </div>
          ))}
        </Document> */
}
