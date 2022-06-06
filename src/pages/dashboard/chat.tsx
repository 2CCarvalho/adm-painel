import Layout from "../../components/templates/Layout";
import Chating from "../../components/organisms/Chating";

export default function Chat() {
  return (
    <Layout title="Bot Telegram">
      <Chating textButton="Enviar mensagem" />
    </Layout>
  );
}
