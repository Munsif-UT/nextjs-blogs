export default function checkStatus() {
  return process.env.NODE_ENV === "development"
    ? "https://devapp.inventooly.com/"
    : "https://devapp.inventooly.com/";
}
