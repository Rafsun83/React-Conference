import FileUpload from "@/components/PdfUploader";
import ResizableTextBox from "@/components/TextBoxResize";
import { Resizable } from "re-resizable";
import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { useDrag } from "react-use-gesture";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import PDFViewer from "@/components/PDFViewer";
import { BigButton } from "@/components/TextButton";
// import SamplePdf from '../../../public/pdfs/sample.pdf'

const Testdrag = () => {
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

  const [pdfFile, setPdfFile] = useState<any>(null);
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];

  const handleChnage = (e: any) => {
    const selectFile = e.target.files[0];
    if (selectFile) {
      if (selectFile && fileType.includes(selectFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectFile);
        reader.onload = (e: any) => {
          setPdfFile(e.target.result);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("select pdf");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const newplugin = defaultLayoutPlugin();
  // console.log("viewPdf---", viewPdf);
  const [zoom, setZoom] = useState<any>(1.0);
  const [testDrag, setTestDrag] = useState({ x: 49, y: 785 });
  const [state, setState] = useState({ width: 183, height: 35 });
  const [startResize, setStartResize] = useState<boolean>();
  const [pageOriginalWidth, setPageOriginalWidth] = useState<number>();
  const [pageOriginalHeight, setPageOriginalHeight] = useState<number>();
  const [textInputVisible, setTextInputVisible] = useState(false);

  // const scaleCoordinates = (
  //   width: any,
  //   height: any,
  //   x: any,
  //   y: any,
  //   scale: any
  // ) => {
  //   const centerX = width / 2;
  //   const centerY = height / 2;
  //   const relX = x - centerX;
  //   const relY = y - centerY;
  //   const scaledX = relX * scale;
  //   const scaledY = relY * scale;
  //   return { x: scaledX + centerX, y: scaledY + centerY };
  // };

  // useEffect(() => {
  //   const scales = scaleCoordinates(
  //     pageOriginalWidth,
  //     pageOriginalHeight,
  //     testDrag.x,
  //     testDrag.y,
  //     zoom
  //   );

  // }, [zoom]);

  // useEffect(() => {
  //   const updatedX = testDrag.x * zoom;
  //   const updatedY = testDrag.y * zoom;
  //   setTestDrag({ x: updatedX, y: updatedY });
  // }, [testDrag.x, testDrag.y, zoom]);

  const testUseDrag = useDrag((params) => {
    if (!startResize) {
      setTestDrag({
        x: params.offset[0],
        y: params.offset[1],
      });
    }
  });
  console.log("test drag", testDrag);
  // console.log("state---", state);
  // console.log("startResize---", startResize);
  const [inputValueX, setInputValueX] = useState<any>();
  const [inputValueY, setInputValueY] = useState<any>();

  // useEffect(() => {
  //   setTestDrag({
  //     x: Number(inputValueX),
  //     y: Number(inputValueY),
  //   });
  // }, [inputValueX, inputValueY]);

  // console.log("input value---", inputValueY);

  const [copiedText, setCopiedText] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleTextClick = (event: any) => {
    const textToCopy = event.target.textContent;
    // const textToCopy = event.target.outerHTML;
    setCopiedText(textToCopy);
  };

  const handleMouseMove = (event: any) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const pdf =
    "data:application/pdf;base64,JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==";

  return (
    <div className="flex gap-3">
      <div className="w-[220px] bg-red-400 p-2">
        <h1>SideNav</h1>
        {/* <FileUpload /> */}
        {/* <div className="flex gap-1">
          <button className="border p-3">Signiture</button>
          <button className="border p-3">Text</button>
        </div> */}
        <div onMouseMove={handleMouseMove}>
          <p
            // style={{
            //   cursor: "pointer",
            // }}
            onClick={handleTextClick}
          >
            {
              viewPdf ?  <BigButton
              marginRight={8}
              title={"Add Text"}
              onClick={() => setTextInputVisible(true)}
            /> : null
           }
          </p>
          {/* <div>
            <input
              type="text"
              style={{
                marginBottom: "5px",
              }}
              value={inputValueX}
              onChange={(e) => setInputValueX(e.target.value)}
            />
            <input
              type="number"
              value={inputValueY}
              onChange={(e) => setInputValueY(e.target.value)}
            />
          </div> */}
          {copiedText && (
            <div
              {...testUseDrag()}
              style={{
                position: "absolute",
                left: `${testDrag.x + 10}px`,
                top: `${testDrag.y + 10}px`,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                padding: "5px",
                borderRadius: "5px",
                zIndex: "111",
              }}
            >
              {/* <Resizable
                {...testUseDrag()}
                style={{
                  position: "absolute",
                  marginTop: testDrag.y,
                  marginLeft: testDrag.x,
                }}
                size={{ width: state.width, height: state.height }}
                onResizeStop={(e, direction, ref, d) => {
                  setState({
                    width: state.width + d.width,
                    height: state.height + d.height,
                  });
                  setStartResize(false);
                }}
                onResizeStart={() => setStartResize(true)}
                enable={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true,
                  topRight: true,
                  bottomRight: true,
                  bottomLeft: true,
                  topLeft: true,
                }}
              >
                <input
                  type="text"
                  value="Resizable Text"
                  style={{ width: "100%", height: "100%", background:'gray' }}
                ></input>
              </Resizable> */}
            </div>
          )}
        </div>
      </div>
      <div>
        {
          viewPdf ?  <PDFViewer
          pdfUrl={viewPdf}
          setPageOriginalHeight={setPageOriginalHeight}
          setPageOriginalWidth={setPageOriginalWidth}
          width={200}
        /> : null
       }
      </div>

      <div
        style={{
          margin: "auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleChnage} />
          <button type="submit">View Pdf</button>
        </form>
        <div>
          <div>
            {
              viewPdf ? <PDFViewer
              pdfUrl={viewPdf}
              setPageOriginalHeight={setPageOriginalHeight}
              setPageOriginalWidth={setPageOriginalWidth}
              setZoom={setZoom}
              zoom={zoom}
              setTestDrag={setTestDrag}
              testDrag={testDrag}
              textInputVisible={textInputVisible}
              setTextInputVisible={setTextInputVisible}
              draging={
                <>
                  <Resizable
                    {...testUseDrag()}
                    style={{
                      position: "absolute",
                      zIndex: "11",
                      marginTop: testDrag.y,
                      marginLeft: testDrag.x,
                    }}
                    size={{ width: state.width, height: state.height }}
                    onResizeStop={(e, direction, ref, d) => {
                      setState({
                        width: state.width + d.width,
                        height: state.height + d.height,
                      });
                      setStartResize(false);
                    }}
                    onResizeStart={() => setStartResize(true)}
                    enable={{
                      top: true,
                      right: true,
                      bottom: true,
                      left: true,
                      topRight: true,
                      bottomRight: true,
                      bottomLeft: true,
                      topLeft: true,
                    }}
                  >
                    <input
                      type="text"
                      value="Resizable Text"
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "gray",
                      }}
                    ></input>
                  </Resizable>
                </>
              }
            /> : <p>No PDF</p>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testdrag;
