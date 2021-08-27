// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cradentials = [{ email: "admin@blogeditor.com", password: "admin@123" }];
console.log();
export default function handler(req, res) {
  const { email, password } = req.body;
  console.log(
    cradentials.some(
      (cred) => cred.email === email && cred.password === password
    )
  );
  if (
    cradentials.some(
      (cred) => cred.email === email && cred.password === password
    )
  ) {
    res.status(200).json({ message: "Authorized" });
  }
  res.status(200).json({
    message: "UnAuthorized",
  });
}
