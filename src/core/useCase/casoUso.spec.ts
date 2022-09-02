
import { RepositorioMemory } from '../../infra/RepositorioMemory';

describe("Caso de uso",() =>{

    it("vai passar", () =>{

        const repo = new RepositorioMemory();
        const salvarData = repo.salvar();
        expect(salvarData).toBe('salvar Memory')

    })
})