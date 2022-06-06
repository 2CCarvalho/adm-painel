import Icon from "../../components/atoms/Icons";
import CardSocial from "../../components/molecules/CardSocial";
import CardStats from "../../components/molecules/CardStats";
import Layout from "../../components/templates/Layout";

export default function Dashboard() {
  return (
    <Layout title="Visão Geral">
      <div className="flex flex-row flex-wrap justify-between gap-x-8">
        <CardStats
          title="Visualização"
          value={"253.455"}
          porcent={5.78}
          icon="users"
          period="No último bimestre"
          color="bg-pink-600"
          classDiv="lg:mt-10 flex-grow"
        />
        <CardStats
          title="Vendas"
          value={"58.254"}
          porcent={7.98}
          icon="cart"
          period="No último mês"
          color="bg-sky-600"
          classDiv="lg:mt-10 flex-grow"
        />
        <CardStats
          title="Avaliação"
          value={"8.7 de 10"}
          porcent={-1.2}
          icon="star"
          period="Na última semana"
          color="bg-orange-600"
          classDiv="lg:mt-10 flex-grow"
        />
        <CardStats
          title="Faturamento"
          value={"R$ 3.849.747"}
          porcent={14.2}
          icon="money"
          period="No último 15 dias"
          color="bg-green-600"
          classDiv="lg:mt-10 flex-grow"
        />
      </div>
      <CardSocial />
    </Layout>
  );
}
