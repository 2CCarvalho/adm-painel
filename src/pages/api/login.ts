// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const simulationDB = {
    username: "maurilio",
    password: "admin",
  };
  const { username, password } = req.body;

  await new Promise((resolve) =>
    // Checar credenciais DB
    setTimeout((resolve) => {
      const simulationJWT =
        "NA.WjMp2CgdItpMUfvHm2T78ycbFOn6ByGpXGVZrRou9AZ3Faf-JJdHbfxxBFYj";
      if (
        simulationDB.username === username &&
        simulationDB.password === password
      ) {
        return res.status(200).json({ token: simulationJWT });
      } else {
        return res.status(400).json({ eror: "errorInvalidCredentials" });
      }
    }, 1000)
  );
}
