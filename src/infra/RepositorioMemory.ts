import { IRespositorio } from "../core/repositories/iRepositorio";

export class RepositorioMemory implements IRespositorio {
  update(): string {
    return "update Memory";
  }
  delete(): string {
    return "delete Memory";
  }
  salvar(): string {
    return "salvar Memory";
  }
}
