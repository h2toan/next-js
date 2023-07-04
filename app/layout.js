export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <meta content="root layout" />
      <body>
        {/*Total height of 2 components above {children} greater than my max height of screen, so it will not display when I navigate to this page */}
        <div style={{ height: "1000px", backgroundColor: "red" }}></div>
        <div style={{ height: "1000px", backgroundColor: "orange" }}></div>
        {children}
      </body>
    </html>
  );
}
