export default function checkStatus() {
  return process.env.NODE_ENV === "development"
    ? "https://devapp.inventooly.com/"
    : "https://app.inventooly.com/";
}
