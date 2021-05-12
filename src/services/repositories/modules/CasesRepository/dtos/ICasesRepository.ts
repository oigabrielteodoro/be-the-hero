import CaseDTO from '~/dtos/CaseDTO';

interface ICasesRepository {
  getCases: (limit?: number, page?: number) => Promise<CaseDTO[]>;
}

export default ICasesRepository;
