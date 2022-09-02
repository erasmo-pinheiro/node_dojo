import { Controlador } from "../controllers/Controlador";

const getData = (app: any) => {
  app.get("/", function (req: any, res: any) {
    console.log(req)
    const controlador = new Controlador();
    const texto = controlador.handle(req.query);
    res.send(texto);
    
  });
};

export { getData };
