import { output } from "../core/useCase/caso.dto";
import { CasoDeUso } from "../core/useCase/casoUso";
import { RepositorioMySql } from "../infra/RepositorioMysql";

export class Controlador {
    handle(body:any):output {
      const myRepo = new RepositorioMySql();
      const casoUso = new CasoDeUso(myRepo);
      return casoUso.executar({id: body.id});
    }
  }
  