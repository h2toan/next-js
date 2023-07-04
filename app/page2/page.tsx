import Link from "next/link";

function App() {
  return (
    <>
      {/*When I click at the Link in bottom, it only scrolls to the top component of this page*/}
      <div style={{ height: "2000px", backgroundColor: "gray" }}></div>
      <div style={{ height: "20px", backgroundColor: "green" }}>
        You are at page 2 <Link href="/">To Page 1</Link>
      </div>
    </>
  );
}

export default App;
