import axios from "axios";
export default async function handler(req, res) {
  // Token irá expirar 08/06/2022
  const token = "5581254339:AAET-fKAoMSQIkoRpMNxDlA7svnPoh4IfMQ";
  const chatId = -1001624358287;

  await axios
    .post(
      `https://api.telegram.org/bot${token}/SendMessage?chat_id=${chatId}&text=${req.body.text}`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
}
