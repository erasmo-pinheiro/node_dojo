import { IRespositorio } from "../repositories/iRepositorio";
import { input, output } from "./caso.dto";

export class CasoDeUso {
  constructor(private repo: IRespositorio) {}

  executar(input: input): output {
    const textoData = this.repo.salvar();

    return { texto: textoData + " " + input.id };
  }
}
