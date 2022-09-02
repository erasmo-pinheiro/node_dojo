import { IRespositorio } from "../core/repositories/iRepositorio";

export class RepositorioMySql implements IRespositorio {
  update(): string {
    return "update MySql";
  }
  delete(): string {
    return "delete MySql";
  }
  salvar(): string {
    return "salvar MySql";
  }
}
