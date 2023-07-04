import Link from "next/link";

function App() {
  return (
    <>
      {/*When I click at the Link in bottom, it only scrolls to the top component of this page*/}
      <div style={{ height: "2000px", backgroundColor: "gray" }}></div>
      <div style={{ height: "20px", backgroundColor: "green" }}>
        <Link href="/">To Page 2</Link>
      </div>
    </>
  );
}

export default App;
