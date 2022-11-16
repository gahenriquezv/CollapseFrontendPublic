import WaterfallChart from "./WaterfallChart";

export default function MainPage() {
  return (
    <>
      <h1 className="display-5">Sistema de predicción de colapsos</h1>
      <hr />
      <p className="lead mb-3" style={{ textAlign: "justify" }}>
        El presente sistema corresponde a un prototipo de dashboard para mostrar
        probabilidades de colapso en cada pilar de extracción para una mina de
        block caving.
      </p>
      <p className="lead mb-3" style={{ textAlign: "justify" }}>
        <strong>Importante: </strong> Debido a la confidencialidad de los datos
        originales, todos los datos visibles en este dashboard fueron generados
        al azar y no son representativos de ninguna situación real.
      </p>

      <h2 className="display-6">Como utilizar esta herramienta</h2>
      <hr />
      <ol className="lead">
        <li>En la barra de navegación (zona superior, en móvil es plegable) clickear en el sector de interés.</li>
        <li>Se observará un mapa de la macrozona, cada color representa una probabilidad de colapso.</li>
        <li>Para obtener detalle de un pilar en específico, clickear en el pilar del mapa y se mostrará un
          gráfico con los factores que más influyen en la probabilidad de colapso.
        </li>
      </ol>
    </>
  );
}
